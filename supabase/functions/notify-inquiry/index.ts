import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-notify-secret',
};

const esc = (s: unknown): string =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

let cachedSecret: string | null = null;
async function getNotifySecret(): Promise<string | null> {
  if (cachedSecret) return cachedSecret;
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );
    const { data, error } = await supabase
      .schema('vault' as any)
      .from('decrypted_secrets')
      .select('decrypted_secret')
      .eq('name', 'notify_inquiry_secret')
      .maybeSingle();
    if (error) {
      console.error('Failed to read vault secret:', error.message);
      return null;
    }
    cachedSecret = (data as any)?.decrypted_secret ?? null;
    return cachedSecret;
  } catch (e) {
    console.error('Vault read error:', e);
    return null;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate shared secret from DB trigger
  const provided = req.headers.get('x-notify-secret');
  const expected = await getNotifySecret();
  if (!expected || !provided || provided !== expected) {
    console.warn('Unauthorized notify-inquiry call');
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const payload = await req.json();
    const record = payload.record;

    if (!record) {
      return new Response(JSON.stringify({ error: 'No record in payload' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { name, email, business_type, message, created_at } = record;

    const safeName = esc(name);
    const safeEmail = esc(email);
    const safeBusiness = esc(business_type || 'Not specified');
    const safeMessage = esc(message).replace(/\n/g, '<br/>');
    const safeCreated = esc(
      new Date(created_at).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })
    );

    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700;">🔔 New Business Inquiry</h1>
          <p style="margin: 8px 0 0; opacity: 0.85; font-size: 14px;">A new inquiry has been submitted on AF Ventures</p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Business Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${safeBusiness}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Submitted</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${safeCreated}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${safeMessage}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; margin-top: 24px; font-size: 12px; color: #9ca3af;">AF Ventures — Automated Notification</p>
      </div>
    `;

    const recipients = ['avidharani110@gmail.com'];

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AF Ventures <onboarding@resend.dev>',
        to: recipients,
        subject: `New Inquiry from ${String(name ?? '').slice(0, 100).replace(/[\r\n]/g, ' ')}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', JSON.stringify(data));
      return new Response(JSON.stringify({ error: 'Failed to send email', details: data }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Notification email sent successfully');
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in notify-inquiry:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
