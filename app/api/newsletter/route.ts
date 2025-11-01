import { NextResponse } from 'next/server';

const isStatic = process.env.NEXT_OUTPUT_EXPORT === 'true';

export async function POST(req: Request) {
  if (isStatic) {
    return NextResponse.json(
      { ok: false, message: 'API desativada no build estático. Use endpoint externo.' },
      { status: 501 }
    );
  }

  // TODO: implementar lógica real quando rodar em ambiente com Node
  return NextResponse.json({ ok: true });
}
