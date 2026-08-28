import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const APPROVED_QUESTION_BANK_SHA256 = '749e853cdf7ee97191f201669acd6e271a3e8d220badac7c30141ad6b94f02c3';

test('approved question text, options, answers, and difficulty labels remain unchanged', async () => {
  const html = await readFile(new URL('../app/games/quick-quiz/quick-quiz.html', import.meta.url), 'utf8');
  const block = html.match(/var QUESTION_BANK = \[(?:.|\r?\n)*?\r?\n\];/)?.[0];

  assert.ok(block, 'QUESTION_BANK block must exist');
  const canonicalBlock = block.replaceAll('\r\n', '\n');
  assert.equal(createHash('sha256').update(canonicalBlock).digest('hex'), APPROVED_QUESTION_BANK_SHA256);
});
