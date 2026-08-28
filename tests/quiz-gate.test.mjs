import assert from 'node:assert/strict';
import test from 'node:test';

import { createQuizGateResponse } from '../app/lib/quiz-gate.mjs';

const openHtml = '<!doctype html><title>QUIZ_OPEN</title>';

test('server response is locked before the confirmed opening time', () => {
  const response = createQuizGateResponse(new Date('2026-09-02T08:59:59+08:00'), openHtml);
  assert.equal(response.phase, 'before');
  assert.match(response.body, /挑战尚未开放/);
  assert.doesNotMatch(response.body, /QUIZ_OPEN/);
  assert.equal(response.headers['Cache-Control'], 'private, no-store, max-age=0');
});

test('server returns the game only during the event window', () => {
  const response = createQuizGateResponse(new Date('2026-09-02T09:00:00+08:00'), openHtml);
  assert.equal(response.phase, 'open');
  assert.match(response.body, /name="infoco-quiz-window-ms" content="39600000"/);
  assert.match(response.body, /QUIZ_OPEN/);
  assert.equal(response.headers['X-InfoCo-Quiz-Phase'], 'open');
});

test('server response is closed from 20:00 onward', () => {
  const response = createQuizGateResponse(new Date('2026-09-02T20:00:00+08:00'), openHtml);
  assert.equal(response.phase, 'after');
  assert.match(response.body, /本次挑战已结束/);
  assert.doesNotMatch(response.body, /QUIZ_OPEN/);
});
