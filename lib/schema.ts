import { pgTable, uuid, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const progress = pgTable('progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  moduleId: integer('module_id').notNull(),
  completed: boolean('completed').default(false),
  score: integer('score').default(0),
  completedAt: timestamp('completed_at'),
});

export const quizAnswers = pgTable('quiz_answers', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  moduleId: integer('module_id'),
  questionIndex: integer('question_index'),
  isCorrect: boolean('is_correct'),
  answeredAt: timestamp('answered_at').defaultNow(),
});
