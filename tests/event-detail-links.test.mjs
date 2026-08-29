import assert from 'node:assert/strict';
import test from 'node:test';

let getEventHref;

try {
  ({ getEventHref } = await import('../app/lib/event-links.mjs'));
} catch {
  // The first red run records the missing production behavior as an assertion failure.
}

test('new member open house links to its activity detail page', () => {
  assert.equal(getEventHref?.('new-member-open-house'), '/events/new-member-open-house');
});

test('existing detail pages and schedule placeholders keep their intended destinations', () => {
  assert.equal(getEventHref?.('apex-arena'), '/events/apex-arena');
  assert.equal(getEventHref?.('python-programming-starter'), '/events#python-programming-starter');
});
