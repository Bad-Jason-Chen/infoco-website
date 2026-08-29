import { upcomingEvents } from './lib/event-data.mjs';

export type EventRecord = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  year: string;
  place: string;
  type: '课程' | '比赛' | '招新' | '分享' | '会议' | '文化节';
  status: 'upcoming' | 'past';
  summary: string;
  tone: 'acid' | 'blue' | 'orange' | 'violet';
  href?: string;
};

export const events: EventRecord[] = [
  ...(upcomingEvents as EventRecord[]),
  {
    slug: 'apex-arena',
    title: 'Apex Arena',
    eyebrow: '48H HACKATHON',
    date: '往期企划',
    year: '往期',
    place: '校内',
    type: '比赛',
    status: 'past',
    summary: '在有限时间里组队、定义问题、做出原型并完成一次真正的发布。',
    tone: 'violet',
  },
];

export type ProjectRecord = {
  slug: string;
  name: string;
  kind: string;
  status: '构思中' | '开发中' | '已发布' | '已归档';
  summary: string;
  tags: string[];
  collaborators: boolean;
  tone: 'acid' | 'blue' | 'orange';
  href?: string;
};

export const projects: ProjectRecord[] = [
  {
    slug: 'infoco-exe',
    name: 'InfoCo.exe',
    kind: '校园互动游戏',
    status: '已发布',
    summary: 'Signal Route：旋转线路模块，在倒计时内完成三段逐步升级的校园信号链路。',
    tags: ['Web Game', 'Puzzle', 'Touch Ready'],
    collaborators: false,
    tone: 'acid',
    href: '/games/infoco-exe',
  },
  {
    slug: 'infoco-club',
    name: 'infoco.club',
    kind: '社团数字门户',
    status: '开发中',
    summary: '把活动、项目、游戏和招新信息组织成一个持续生长的公开入口。',
    tags: ['Next.js', 'Design System', 'Cloud'],
    collaborators: true,
    tone: 'blue',
    href: '/',
  },
  {
    slug: 'genesis-protocol',
    name: 'Genesis Protocol',
    kind: '跨社团游戏共创',
    status: '构思中',
    summary: '让程序、叙事和视觉在同一支团队里发生，做一款真正属于校园的独立游戏。',
    tags: ['Game Dev', 'Art × Code', 'Prototype'],
    collaborators: true,
    tone: 'orange',
  },
];
