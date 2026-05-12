
-- 1. Drop overly-permissive SELECT policy on business_inquiries
DROP POLICY IF EXISTS "Authenticated users can view inquiries" ON public.business_inquiries;

-- 2. Create a vault secret for the notify-inquiry shared secret (idempotent)
DO $$
DECLARE
  v_exists boolean;
BEGIN
  SELECT EXISTS (SELECT 1 FROM vault.secrets WHERE name = 'notify_inquiry_secret') INTO v_exists;
  IF NOT v_exists THEN
    PERFORM vault.create_secret(encode(gen_random_bytes(32), 'hex'), 'notify_inquiry_secret');
  END IF;
END $$;

-- 3. Update trigger function to include the shared secret as a header
CREATE OR REPLACE FUNCTION public.notify_new_inquiry()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  payload jsonb;
  supabase_url text := 'https://fadcerdhzchthviuxzqm.supabase.co';
  v_secret text;
BEGIN
  SELECT decrypted_secret INTO v_secret
  FROM vault.decrypted_secrets
  WHERE name = 'notify_inquiry_secret'
  LIMIT 1;

  payload := jsonb_build_object(
    'record', jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'business_type', NEW.business_type,
      'message', NEW.message,
      'created_at', NEW.created_at
    )
  );

  PERFORM net.http_post(
    url := supabase_url || '/functions/v1/notify-inquiry',
    body := payload,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-notify-secret', COALESCE(v_secret, '')
    )
  );

  RETURN NEW;
END;
$function$;
