import type { Metadata } from 'next';
import { FAQ } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';

export const metadata: Metadata = { title: '关于我们', description: '了解 InfoCo 的使命、文化、活动方向和协作团队。' };
const values = [['01', '好奇先于答案', '不知道没关系，愿意追问、愿意尝试，就是创造的起点。'], ['02', '作品胜过口号', '把想法做出来，让它能被使用、被体验、被继续改进。'], ['03', '共享让人变强', '公开过程、复盘失败，也把自己学会的东西交给下一位成员。']];
const directions = [['</>', '编程学习与技术分享', '从入门社课、专题工作坊到社员闪电分享，用可实践的内容建立技术底座。'], ['PLAY', '游戏及创意项目开发', '程序、美术、叙事和声音一起工作，把校园里的灵感变成可玩的体验。'], ['48H', 'Hackathon 与协作实践', '在时间盒里组队、定义问题、快速原型，并学会把一次协作真正收尾。'], ['LIVE', '校园科技文化活动', '用展览、挑战赛和互动装置，让技术不只属于电脑屏幕。']];
const faqs: Array<[string, string]> = [['InfoCo 是培训机构吗？', '不是。InfoCo 是以共同学习与共同创造为核心的校园社团。活动会提供清晰的学习入口，但最终目标是让成员能把知识变成作品。'], ['社团更偏技术还是游戏？', '两者都不是唯一答案。技术是工具，游戏和创意项目是重要载体；我们也欢迎网站、工具、研究与校园科技文化项目。'], ['管理团队信息为什么没有姓名？', '当前材料没有提供获得公开授权的当届负责人信息。为保护隐私，姓名与公开联系方式会在社团确认后补充，不使用私人电话号码。']];

export default function AboutPage() {
  return <Shell><main id="top"><PageIntro index="01" label="ABOUT / 关于我们" title="我们在这里，练习创造未来。" copy="InfoCo 是一个以计算机科学为共同语言的校园创作社区。技术不是门槛，而是我们一起理解世界、表达想法和解决问题的方式。" />
    <section className="manifesto section-pad"><span className="vertical-label">OUR POSITION / 社团定位</span><div><h2>学习不是独自通关，<br />创作也不是少数人的特权。</h2><p>我们相信，最好的学习发生在真实问题、真实协作和真实发布之中。InfoCo 提供一个可以安全试错、找到队友、获得反馈的空间，让每个成员都能从“我不会”走到“这是我们做的”。</p></div></section>
    <section className="value-section section-pad"><div className="section-heading"><div><span className="section-index light">MISSION / VALUES</span><h2>让技术有温度，<br />让创意能落地。</h2></div><p>Build with curiosity.<br />Share with generosity.</p></div><div className="value-grid">{values.map(([index, title, copy]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="directions section-pad"><div className="section-heading"><div><span className="section-index">CORE DIRECTIONS</span><h2>四条核心方向</h2></div><p>你可以从任何一条开始，<br />也可以在项目里跨界。</p></div><div className="direction-list">{directions.map(([icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="timeline-section section-pad"><div className="section-heading"><div><span className="section-index light">TIMELINE</span><h2>一条持续更新的路线</h2></div><p>旧站未记录确切成立年份；<br />时间线从已确认的内容开始。</p></div><div className="timeline"><div><span>PAST</span><h3>课程与部门体系形成</h3><p>确立 Java、C / Python、游戏共创和 Hackathon 四类核心行动。</p></div><div><span>NOW · 2026</span><h3>数字门户重新上线</h3><p>活动、项目、游戏和招新信息第一次被组织进同一个长期入口。</p></div><div><span>NEXT</span><h3>让社员作品持续生长</h3><p>逐步开放项目协作者招募、活动回顾与经过授权的社员内容。</p></div></div></section>
    <section className="team-section section-pad"><div className="section-heading"><div><span className="section-index">CURRENT TEAM</span><h2>当届协作团队</h2></div><p>只展示公开岗位与授权信息，<br />不发布私人电话号码。</p></div><div className="team-grid">{['社团负责人 / PRESIDENT', '学术与项目 / ACADEMIC', '活动运营 / OPERATIONS', '品牌传播 / CREATIVE', '秘书外联 / PARTNERSHIPS'].map((role, index) => <div key={role}><span>DIV_0{index + 1}</span><h3>{role.split(' / ')[0]}</h3><p>{role.split(' / ')[1]}</p><b>公开信息待确认</b></div>)}</div></section>
    <section className="faq-section section-pad"><div className="section-heading"><div><span className="section-index">FAQ / 常见问题</span><h2>你可能还想知道</h2></div></div><FAQ items={faqs} /></section>
    <section className="closing-cta"><span className="section-index">MEET INFOCO / 9.2</span><h2>从百团大战现场，<br />认识一起做东西的人。</h2><div><a className="btn btn-primary" href="/events/new-member-open-house">了解百团大战 <span>→</span></a><a className="btn btn-ghost" href="/join">查看加入方式 <span>↗</span></a></div></section>
  </main></Shell>;
}
