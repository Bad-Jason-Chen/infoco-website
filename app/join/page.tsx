import type { Metadata } from 'next';
import { JoinFAQ } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';
import { events } from '../content';

export const metadata: Metadata = { title: '加入我们', description: '了解 InfoCo 招新方向、流程与 9 月 2 日百团大战现场信息。' };
const roles = [['</>', '我想学会编程', '从基础课程开始，在真实项目里把知识连起来。'], ['MAKE', '我想做出作品', '把游戏、网站、工具或研究想法推进到可以分享。'], ['PIXEL', '我会设计或表达', '视觉、交互、文案和叙事都是科技项目的重要部分。'], ['TEAM', '我喜欢组织与协作', '活动策划、资源协调和对外连接同样不可或缺。']];
const openHouse = events.find((event) => event.slug === 'new-member-open-house')!;

export default function JoinPage() {
  return <Shell><main id="top"><PageIntro index="05" label="JOIN US / 加入我们" title="不需要准备好，才可以开始。" copy="无论你是第一次接触编程，还是已经有想做的项目，InfoCo 都希望给你一个清楚、友好、真正能开始行动的入口。" accent="orange" />
    <section className="join-status section-pad"><div><span className="status-pill">● 9.2 百团大战 / SCHEDULED</span><h2>来现场，认识并加入 InfoCo。</h2><p>{openHouse.date}，我们会在{openHouse.place}。你可以现场了解社团方向、活动计划和加入方式。</p></div><a className="btn btn-dark" href={openHouse.href}>查看活动详情与地图 →</a></section>
    <section className="fit-section section-pad"><div className="section-heading"><div><span className="section-index">WHO FITS HERE</span><h2>找到你的起点</h2></div><p>不设“标准社员”模板。<br />从你真正感兴趣的事情开始。</p></div><div className="role-grid">{roles.map(([icon, title, copy]) => <article key={title}><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="join-flow section-pad"><div className="section-heading"><div><span className="section-index light">RECRUITMENT FLOW</span><h2>加入流程</h2></div><p>9 月 2 日可先到百团大战现场了解；其他入口确认后会在官网更新。</p></div><div className="flow-grid">{[['01', '查看活动信息', '先确认百团大战的时间、地点与现场安排。'], ['02', '到 8 号展位', '与社团成员交流，了解活动方向和适合自己的参与方式。'], ['03', '确认加入意向', '具体入口与后续安排以社团现场和官网更新为准。'], ['04', '开始共创', '进入学习路径、活动团队或项目小组，完成第一次协作。']].map(([index, title, copy]) => <div key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
    <section className="join-faq section-pad"><div className="section-heading"><div><span className="section-index">FAQ / 常见问题</span><h2>没有基础，也完全没问题。</h2></div></div><JoinFAQ /></section>
    <section className="public-channel" id="public-channel"><span>MEET US / 现场见</span><h2>9 月 2 日，来 8 号展位。</h2><p>目前没有已确认可公开使用的社交媒体、招新群或邮箱。百团大战活动页会提供已确认的现场信息，其他公开入口将在社团确认后更新。</p><div className="public-channel-actions"><a className="btn btn-primary" href={openHouse.href}>了解百团大战 →</a><a className="btn btn-ghost" href="/events">查看所有活动 ↗</a></div></section>
  </main></Shell>;
}
