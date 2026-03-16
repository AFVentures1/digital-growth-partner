
CREATE OR REPLACE TRIGGER on_new_inquiry_notify
AFTER INSERT ON public.business_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.notify_new_inquiry();
