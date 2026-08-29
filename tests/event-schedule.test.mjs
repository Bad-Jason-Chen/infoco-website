import assert from 'node:assert/strict';
import test from 'node:test';

let upcomingEvents;

try {
  ({ upcomingEvents } = await import('../app/lib/event-data.mjs'));
} catch {
  // The red run records that the confirmed schedule has not been modelled yet.
}

test('upcoming schedule contains only the five confirmed activity directions', () => {
  assert.deepEqual(upcomingEvents?.map(({ slug }) => slug), [
    'new-member-open-house',
    'all-members-meeting',
    'python-programming-starter',
    'game-development-starter',
    'club-culture-festival',
  ]);
});

test('open house keeps the confirmed booth details and detail-page destination', () => {
  const event = upcomingEvents?.find(({ slug }) => slug === 'new-member-open-house');

  assert.equal(event?.title, '百团大战 · 新成员开放日');
  assert.equal(event?.date, '9 月 2 日 · 09:00–20:00');
  assert.equal(event?.place, '西交利物浦大学南校区 · 学术类社团区 8 号展位');
  assert.equal(event?.href, '/events/new-member-open-house');
});

test('all-members meeting publishes only its confirmed September 13 date', () => {
  const event = upcomingEvents?.find(({ slug }) => slug === 'all-members-meeting');

  assert.equal(event?.date, '9 月 13 日 · 时间待确认');
  assert.equal(event?.place, '地点待确认');
});

test('activities without confirmed schedules remain explicitly pending', () => {
  for (const slug of ['python-programming-starter', 'game-development-starter', 'club-culture-festival']) {
    const event = upcomingEvents?.find((item) => item.slug === slug);
    assert.equal(event?.date, '时间待确认');
    assert.equal(event?.place, '地点待确认');
  }
});
