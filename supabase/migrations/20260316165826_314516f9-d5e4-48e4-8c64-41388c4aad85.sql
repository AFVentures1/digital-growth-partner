
-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_new_inquiry_notify ON public.business_inquiries;
DROP FUNCTION IF EXISTS public.notify_new_inquiry();

-- Ensure pg_net extension is enabled
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Recreate function using net.http_post (pg_net)
CREATE OR REPLACE FUNCTION public.notify_new_inquiry()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  payload jsonb;
  supabase_url text := 'https://fadcerdhzchthviuxzqm.supabase.co';
BEGIN
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
      'Content-Type', 'application/json'
    )
  );

  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER on_new_inquiry_notify
  AFTER INSERT ON public.business_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_inquiry();
