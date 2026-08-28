import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_QUIZ_CONFIG,
  POOL_LIMITS,
  getMaxScore,
  normalizeQuizConfig,
  selectQuestions,
} from '../public/games/quiz-config.mjs';

const bank = [
  ...Array.from({ length: 20 }, (_, id) => ({ id: `e${id}`, difficulty: 'easy' })),
  ...Array.from({ length: 23 }, (_, id) => ({ id: `m${id}`, difficulty: 'medium' })),
  ...Array.from({ length: 18 }, (_, id) => ({ id: `h${id}`, difficulty: 'hard' })),
];

test('published defaults remain 10 easy, 6 medium, 4 hard, and 100 seconds', () => {
  assert.deepEqual(DEFAULT_QUIZ_CONFIG, {
    easy: 10,
    medium: 6,
    hard: 4,
    durationSeconds: 100,
  });
});

test('local configuration is integer-only and clamped to available pools', () => {
  assert.deepEqual(normalizeQuizConfig({ easy: -3, medium: 99, hard: 2.8 }), {
    easy: 0,
    medium: POOL_LIMITS.medium,
    hard: 2,
    durationSeconds: 100,
  });
});

test('an empty local configuration falls back to the published default', () => {
  assert.deepEqual(normalizeQuizConfig({ easy: 0, medium: 0, hard: 0 }), DEFAULT_QUIZ_CONFIG);
});

test('question selection honors each configured difficulty without mutating the bank', () => {
  const snapshot = structuredClone(bank);
  const selected = selectQuestions(bank, { easy: 2, medium: 3, hard: 1 }, () => 0.5);

  assert.equal(selected.length, 6);
  assert.equal(selected.filter((q) => q.difficulty === 'easy').length, 2);
  assert.equal(selected.filter((q) => q.difficulty === 'medium').length, 3);
  assert.equal(selected.filter((q) => q.difficulty === 'hard').length, 1);
  assert.deepEqual(bank, snapshot);
});

test('maximum score follows question count while prize thresholds stay independent', () => {
  assert.equal(getMaxScore({ easy: 3, medium: 4, hard: 3 }), 100);
  assert.equal(getMaxScore(DEFAULT_QUIZ_CONFIG), 200);
});
