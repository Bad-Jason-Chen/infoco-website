export const RECRUITMENT_START = '2026-09-02T09:00:00+08:00';
export const RECRUITMENT_END = '2026-09-02T20:00:00+08:00';

const startTime = Date.parse(RECRUITMENT_START);
const endTime = Date.parse(RECRUITMENT_END);

export function getRecruitmentPhase(now = new Date()) {
  const nowTime = now.getTime();

  if (nowTime < startTime) return 'before';
  if (nowTime >= endTime) return 'after';
  return 'open';
}

export function getMillisecondsUntilRecruitment(now = new Date()) {
  return Math.max(0, startTime - now.getTime());
}

export function getMillisecondsUntilClose(now = new Date()) {
  return Math.max(0, endTime - now.getTime());
}
