import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { users, progress, quizAnswers } from '@/lib/schema';
import { eq } from 'drizzle-orm';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId || !UUID_RE.test(userId)) {
    return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
  }

  try {
    const db = getDb();
    // Delete child records first (FK constraints)
    await db.delete(quizAnswers).where(eq(quizAnswers.userId, userId));
    await db.delete(progress).where(eq(progress.userId, userId));
    await db.delete(users).where(eq(users.id, userId));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
