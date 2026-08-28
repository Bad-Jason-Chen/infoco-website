import assert from 'node:assert/strict';
import test from 'node:test';

import {
  RECRUITMENT_END,
  RECRUITMENT_START,
  getMillisecondsUntilClose,
  getRecruitmentPhase,
} from '../app/lib/recruitment-window.mjs';

test('recruitment window uses the confirmed Shanghai-time boundaries', () => {
  assert.equal(RECRUITMENT_START, '2026-09-02T09:00:00+08:00');
  assert.equal(RECRUITMENT_END, '2026-09-02T20:00:00+08:00');
});

test('open-window duration is derived from the same server-time boundary', () => {
  assert.equal(getMillisecondsUntilClose(new Date('2026-09-02T09:00:00+08:00')), 39_600_000);
  assert.equal(getMillisecondsUntilClose(new Date('2026-09-02T20:00:00+08:00')), 0);
});

test('game is locked before 09:00, open at 09:00, and closed at 20:00', () => {
  assert.equal(getRecruitmentPhase(new Date('2026-09-02T08:59:59+08:00')), 'before');
  assert.equal(getRecruitmentPhase(new Date('2026-09-02T09:00:00+08:00')), 'open');
  assert.equal(getRecruitmentPhase(new Date('2026-09-02T19:59:59+08:00')), 'open');
  assert.equal(getRecruitmentPhase(new Date('2026-09-02T20:00:00+08:00')), 'after');
});
