export const DEFAULT_QUIZ_CONFIG = Object.freeze({
  easy: 10,
  medium: 6,
  hard: 4,
  durationSeconds: 100,
});

export const POOL_LIMITS = Object.freeze({
  easy: 20,
  medium: 23,
  hard: 18,
});

const DIFFICULTIES = ['easy', 'medium', 'hard'];

function clampInteger(value, maximum) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.min(maximum, Math.max(0, Math.floor(number)));
}

export function normalizeQuizConfig(input = {}) {
  const normalized = {
    easy: clampInteger(input.easy, POOL_LIMITS.easy),
    medium: clampInteger(input.medium, POOL_LIMITS.medium),
    hard: clampInteger(input.hard, POOL_LIMITS.hard),
    durationSeconds: DEFAULT_QUIZ_CONFIG.durationSeconds,
  };

  if (normalized.easy + normalized.medium + normalized.hard === 0) {
    return { ...DEFAULT_QUIZ_CONFIG };
  }

  return normalized;
}

export function shuffleCopy(items, random = Math.random) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function selectQuestions(bank, inputConfig, random = Math.random) {
  const config = normalizeQuizConfig(inputConfig);
  const selected = Object.fromEntries(
    DIFFICULTIES.map((difficulty) => [
      difficulty,
      shuffleCopy(
        bank.filter((question) => question.difficulty === difficulty),
        random,
      ).slice(0, config[difficulty]),
    ]),
  );

  return shuffleCopy([...selected.easy, ...selected.medium], random).concat(selected.hard);
}

export function getQuestionCount(config) {
  const normalized = normalizeQuizConfig(config);
  return normalized.easy + normalized.medium + normalized.hard;
}

export function getMaxScore(config) {
  return getQuestionCount(config) * 10;
}

globalThis.InfoCoQuizConfig = {
  DEFAULT_QUIZ_CONFIG,
  POOL_LIMITS,
  getMaxScore,
  getQuestionCount,
  normalizeQuizConfig,
  selectQuestions,
};
