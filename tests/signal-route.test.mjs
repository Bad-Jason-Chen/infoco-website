import assert from 'node:assert/strict';
import test from 'node:test';

let buildSolvedLevel;
let createLevel;
let hasSignal;
let rotateCell;
let rotateMask;

try {
  ({ buildSolvedLevel, createLevel, hasSignal, rotateCell, rotateMask } = await import('../app/lib/signal-route.mjs'));
} catch {
  // The red run records that the new game engine does not exist yet.
}

test('wire masks rotate clockwise and return after four turns', () => {
  assert.equal(rotateMask?.(1), 2);
  assert.equal(rotateMask?.(3), 6);
  assert.equal([0, 1, 2, 3].reduce((mask) => rotateMask?.(mask), 5), 5);
});

test('a signal crosses only reciprocal wire connections', () => {
  const connected = [
    { mask: 2, locked: true },
    { mask: 10, locked: false },
    { mask: 8, locked: true },
  ];
  const brokenAtTarget = [connected[0], connected[1], { mask: 1, locked: true }];

  assert.equal(hasSignal?.(connected, 3, 0, 2), true);
  assert.equal(hasSignal?.(brokenAtTarget, 3, 0, 2), false);
});

test('all three authored level solutions connect source to server', () => {
  for (const levelIndex of [0, 1, 2]) {
    const level = buildSolvedLevel?.(levelIndex);
    assert.equal(level?.board.length, 25);
    assert.equal(hasSignal?.(level.board, level.size, level.startIndex, level.targetIndex), true);
  }
});

test('a new level starts scrambled but remains a rotation of its solution', () => {
  const scrambled = createLevel?.(0, () => 0);
  const solved = buildSolvedLevel?.(0);

  assert.equal(hasSignal?.(scrambled.board, scrambled.size, scrambled.startIndex, scrambled.targetIndex), false);
  assert.deepEqual(
    scrambled.board.map((tile) => tile.kind),
    solved.board.map((tile) => tile.kind),
  );
});

test('rotating a cell is immutable and leaves locked endpoints unchanged', () => {
  const level = buildSolvedLevel?.(0);
  const wireIndex = level.board.findIndex((tile) => !tile.locked && tile.mask !== 0);
  const rotated = rotateCell?.(level.board, wireIndex);
  const unchangedSource = rotateCell?.(level.board, level.startIndex);

  assert.notEqual(rotated, level.board);
  assert.notEqual(rotated[wireIndex].mask, level.board[wireIndex].mask);
  assert.equal(level.board[wireIndex].mask, buildSolvedLevel(0).board[wireIndex].mask);
  assert.equal(unchangedSource, level.board);
});
