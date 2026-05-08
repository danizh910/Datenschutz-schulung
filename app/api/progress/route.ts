import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { progress } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'userId fehlt.' }, { status: 400 });
    }

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

    if (!userId || moduleId === undefined || score === undefined) {
      return NextResponse.json({ error: 'Fehlende Parameter.' }, { status: 400 });
    }

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
