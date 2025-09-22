import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabaseClient';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase credentials are missing. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const name = body?.name as string | undefined;
  const email = body?.email as string | undefined;
  const phone = body?.phone as string | undefined;
  const condominium = body?.condominium as string | undefined;
  const units = body?.units as string | undefined;
  const message = body?.message as string | undefined;
  const locale = body?.locale as string | undefined;

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await supabase.from('leads').insert({
    name,
    email,
    phone,
    condominium,
    condominium_size: units,
    message,
    locale
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
