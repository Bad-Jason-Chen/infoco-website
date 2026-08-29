export const DIRECTIONS = {
  north: 1,
  east: 2,
  south: 4,
  west: 8,
};

const SIZE = 5;
const LEVEL_SPECS = [
  {
    title: 'BOOT SEQUENCE',
    subtitle: '启动主链路',
    timeLimit: 40,
    path: [0, 1, 2, 7, 12, 13, 18, 23, 24],
  },
  {
    title: 'CROSS CAMPUS',
    subtitle: '穿越干扰区',
    timeLimit: 35,
    path: [4, 3, 8, 13, 12, 11, 16, 21, 20],
  },
  {
    title: 'FINAL UPLINK',
    subtitle: '恢复核心上行链路',
    timeLimit: 30,
    path: [0, 5, 10, 11, 6, 7, 8, 13, 18, 17, 22, 23, 24],
  },
];

const DECOY_MASKS = [3, 5, 6, 9, 10, 12, 1, 2, 4, 8];
const STEPS = [
  { delta: -SIZE, outgoing: DIRECTIONS.north, incoming: DIRECTIONS.south },
  { delta: 1, outgoing: DIRECTIONS.east, incoming: DIRECTIONS.west },
  { delta: SIZE, outgoing: DIRECTIONS.south, incoming: DIRECTIONS.north },
  { delta: -1, outgoing: DIRECTIONS.west, incoming: DIRECTIONS.east },
];

export function rotateMask(mask) {
  return ((mask << 1) & 15) | ((mask & DIRECTIONS.west) >> 3);
}

function getSpec(levelIndex) {
  const spec = LEVEL_SPECS[levelIndex];
  if (!spec) throw new RangeError(`Unknown signal-route level: ${levelIndex}`);
  return spec;
}

function connectionFor(from, to) {
  const step = STEPS.find(({ delta }) => from + delta === to && (
    Math.abs(delta) === SIZE || Math.floor(from / SIZE) === Math.floor(to / SIZE)
  ));
  if (!step) throw new Error(`Level path contains non-adjacent cells: ${from} -> ${to}`);
  return step;
}

export function buildSolvedLevel(levelIndex) {
  const spec = getSpec(levelIndex);
  const board = Array.from({ length: SIZE * SIZE }, (_, index) => ({
    mask: DECOY_MASKS[index % DECOY_MASKS.length],
    kind: 'wire',
    locked: false,
  }));

  for (const index of spec.path) board[index].mask = 0;
  for (let index = 0; index < spec.path.length - 1; index += 1) {
    const from = spec.path[index];
    const to = spec.path[index + 1];
    const { outgoing, incoming } = connectionFor(from, to);
    board[from].mask |= outgoing;
    board[to].mask |= incoming;
  }

  const startIndex = spec.path[0];
  const targetIndex = spec.path.at(-1);
  board[startIndex] = { ...board[startIndex], kind: 'source', locked: true };
  board[targetIndex] = { ...board[targetIndex], kind: 'server', locked: true };

  return {
    id: levelIndex + 1,
    title: spec.title,
    subtitle: spec.subtitle,
    timeLimit: spec.timeLimit,
    size: SIZE,
    startIndex,
    targetIndex,
    board,
  };
}

export function rotateCell(board, index) {
  const tile = board[index];
  if (!tile || tile.locked) return board;
  return board.map((item, itemIndex) => itemIndex === index ? { ...item, mask: rotateMask(item.mask) } : item);
}

export function traceSignal(board, size, startIndex) {
  if (!board[startIndex]) return new Set();
  const visited = new Set([startIndex]);
  const queue = [startIndex];
  const directions = [
    { bit: DIRECTIONS.north, opposite: DIRECTIONS.south, row: -1, column: 0 },
    { bit: DIRECTIONS.east, opposite: DIRECTIONS.west, row: 0, column: 1 },
    { bit: DIRECTIONS.south, opposite: DIRECTIONS.north, row: 1, column: 0 },
    { bit: DIRECTIONS.west, opposite: DIRECTIONS.east, row: 0, column: -1 },
  ];

  while (queue.length) {
    const current = queue.shift();
    const row = Math.floor(current / size);
    const column = current % size;

    for (const direction of directions) {
      if (!(board[current].mask & direction.bit)) continue;
      const nextRow = row + direction.row;
      const nextColumn = column + direction.column;
      if (nextRow < 0 || nextRow >= size || nextColumn < 0 || nextColumn >= size) continue;
      const next = nextRow * size + nextColumn;
      if (!(board[next].mask & direction.opposite) || visited.has(next)) continue;
      visited.add(next);
      queue.push(next);
    }
  }

  return visited;
}

export function hasSignal(board, size, startIndex, targetIndex) {
  return traceSignal(board, size, startIndex).has(targetIndex);
}

export function createLevel(levelIndex, random = Math.random) {
  const level = buildSolvedLevel(levelIndex);
  const board = level.board.map((tile) => {
    if (tile.locked) return tile;
    const turns = 1 + Math.floor(random() * 3);
    let mask = tile.mask;
    for (let turn = 0; turn < turns; turn += 1) mask = rotateMask(mask);
    return { ...tile, mask };
  });

  return { ...level, board };
}
