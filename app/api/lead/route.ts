import {NextResponse} from 'next/server';
import {getSupabaseClient} from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const supabase = getSupabaseClient();

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

    return NextResponse.json({ok: true});
  } catch (e) {
    if (e instanceof Error) {
      console.error('[lead]', e.message);
      return NextResponse.json({ok: false, error: e.message}, {status: 400});
    }
    return NextResponse.json({ok: false, error: 'unknown error'}, {status: 400});
  }
}