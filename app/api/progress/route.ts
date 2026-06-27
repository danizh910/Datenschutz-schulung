import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { progress } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const VALID_MODULE_IDS = new Set([1, 2, 3, 4, 5, 6, 7]);

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');

    if (!userId || !UUID_RE.test(userId)) {
      return NextResponse.json({ error: 'userId fehlt oder ungültig.' }, { status: 400 });
    }

    const db = getDb();
    const rows = await db
      .select()
      .from(progress)
      .where(eq(progress.userId, userId));

    return NextResponse.json({ progress: rows });
  } catch (err) {
    console.error('[GET /api/progress]', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, moduleId, score } = await req.json();

    if (!userId || !UUID_RE.test(userId)) {
      return NextResponse.json({ error: 'userId fehlt oder ungültig.' }, { status: 400 });
    }
    if (!VALID_MODULE_IDS.has(Number(moduleId))) {
      return NextResponse.json({ error: 'moduleId ungültig.' }, { status: 400 });
    }
    if (typeof score !== 'number' || score < 0 || score > 100 || !Number.isInteger(score)) {
      return NextResponse.json({ error: 'score muss eine ganze Zahl zwischen 0 und 100 sein.' }, { status: 400 });
    }

    const db = getDb();
    const existing = await db
      .select()
      .from(progress)
      .where(and(eq(progress.userId, userId), eq(progress.moduleId, moduleId)));

    if (existing.length > 0) {
      await db
        .update(progress)
        .set({ completed: true, score, completedAt: new Date() })
        .where(and(eq(progress.userId, userId), eq(progress.moduleId, moduleId)));
    } else {
      await db.insert(progress).values({
        userId,
        moduleId,
        completed: true,
        score,
        completedAt: new Date(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/progress]', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
