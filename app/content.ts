export type EventRecord = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  year: string;
  place: string;
  type: '课程' | '比赛' | '招新' | '分享';
  status: 'upcoming' | 'past';
  summary: string;
  tone: 'acid' | 'blue' | 'orange' | 'violet';
};

export const events: EventRecord[] = [
  {
    slug: 'new-member-open-house',
    title: '新成员开放日',
    eyebrow: 'OPEN HOUSE',
    date: '9 月 2 日 · 09:00–20:00',
    year: '2026',
    place: '西交利物浦大学南校区 · 学术类社团区 8 号展位',
    type: '招新',
    status: 'upcoming',
    summary: '认识 InfoCo 的四条核心方向，与项目成员面对面聊聊你想做的东西，并参加现场限时问答挑战。',
    tone: 'orange',
  },
  {
    slug: 'java-warp-drive',
    title: 'Java Warp Drive',
    eyebrow: 'LEARNING TRACK',
    date: '新学期计划',
    year: '2026',
    place: '校内 · 教室待公布',
    type: '课程',
    status: 'upcoming',
    summary: '从语法地基到面向对象与设计模式，一条面向初学者的完整学习航线。',
    tone: 'acid',
  },
  {
    slug: 'dual-core-initiative',
    title: 'Dual-core Initiative',
    eyebrow: 'C × PYTHON',
    date: '新学期计划',
    year: '2026',
    place: '线上 + 校内',
    type: '课程',
    status: 'upcoming',
    summary: '用 C 语言理解计算机底层逻辑，用 Python 把想法快速做成原型。',
    tone: 'blue',
  },
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
    summary: '校园系统紧急维修：在倒计时内修复异常节点，让所有系统重新上线。',
    tags: ['Web Game', 'Interaction', 'Vanilla Logic'],
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
