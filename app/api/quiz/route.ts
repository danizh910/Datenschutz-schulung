import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { quizAnswers } from '@/lib/schema';

export async function POST(req: NextRequest) {
  try {
    const { userId, moduleId, questionIndex, isCorrect } = await req.json();

    if (!userId || moduleId === undefined || questionIndex === undefined || isCorrect === undefined) {
      return NextResponse.json({ error: 'Fehlende Parameter.' }, { status: 400 });
    }

    const db = getDb();
    await db.insert(quizAnswers).values({
      userId,
      moduleId,
      questionIndex,
      isCorrect,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/quiz]', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
