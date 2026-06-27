import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { users } from '@/lib/schema';

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json({ error: 'Name muss zwischen 2 und 80 Zeichen lang sein.' }, { status: 400 });
    }

    const db = getDb();
    const [user] = await db.insert(users).values({ name: name.trim() }).returning();

    return NextResponse.json({ userId: user.id, name: user.name });
  } catch (err) {
    console.error('[POST /api/user]', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
