import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { quizAnswers } from '@/lib/schema';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const VALID_MODULE_IDS = new Set([1, 2, 3, 4, 5, 6, 7]);

export async function POST(req: NextRequest) {
  try {
    const { userId, moduleId, questionIndex, isCorrect } = await req.json();

    if (!userId || !UUID_RE.test(userId)) {
      return NextResponse.json({ error: 'userId fehlt oder ungültig.' }, { status: 400 });
    }
    if (!VALID_MODULE_IDS.has(Number(moduleId))) {
      return NextResponse.json({ error: 'moduleId ungültig.' }, { status: 400 });
    }
    if (typeof questionIndex !== 'number' || questionIndex < 0 || !Number.isInteger(questionIndex)) {
      return NextResponse.json({ error: 'questionIndex ungültig.' }, { status: 400 });
    }
    if (typeof isCorrect !== 'boolean') {
      return NextResponse.json({ error: 'isCorrect muss ein boolean sein.' }, { status: 400 });
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
