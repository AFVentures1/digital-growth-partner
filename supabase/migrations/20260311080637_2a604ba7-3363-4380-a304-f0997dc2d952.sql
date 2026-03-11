-- Enable pg_net extension for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create function to call the notify-inquiry edge function
CREATE OR REPLACE FUNCTION public.notify_new_inquiry()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  payload jsonb;
  supabase_url text;
  service_role_key text;
BEGIN
  supabase_url := current_setting('app.settings.supabase_url', true);
  service_role_key := current_setting('app.settings.service_role_key', true);

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

  PERFORM extensions.http_post(
    url := supabase_url || '/functions/v1/notify-inquiry',
    body := payload::text,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    )::jsonb
  );

  RETURN NEW;
END;
$$;

-- Create trigger on business_inquiries table
DROP TRIGGER IF EXISTS on_new_inquiry_notify ON public.business_inquiries;
CREATE TRIGGER on_new_inquiry_notify
  AFTER INSERT ON public.business_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_inquiry();
