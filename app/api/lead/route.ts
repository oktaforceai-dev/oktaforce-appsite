import {NextResponse} from 'next/server';
import {getSupabaseClient} from '@/lib/supabaseClient';
import {sendLeadNotificationEmail} from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const supabase = getSupabaseClient();
    const leadPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      condominium: body.condominium,
      units: body.units,
      message: body.message,
      locale: body.locale
    };

    if (supabase) {
      const {data, error} = await supabase.from('leads').insert([body]).select();
      if (error) {
        console.error('[lead]', error);
        return NextResponse.json({ok: false, error: error.message}, {status: 500});
      }
      console.log('[lead]', data);
    } else {
      console.log('[lead] SUPABASE not configured, logging to console', body);
    }

    await sendLeadNotificationEmail(leadPayload);

    return NextResponse.json({ok: true});
  } catch (e) {
    if (e instanceof Error) {
      console.error('[lead]', e.message);
      return NextResponse.json({ok: false, error: e.message}, {status: 400});
    }
    return NextResponse.json({ok: false, error: 'unknown error'}, {status: 400});
  }
}
