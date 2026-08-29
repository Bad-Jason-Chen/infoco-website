import Image from 'next/image';
import { Shell } from './components/SiteChrome';
import { events } from './content';

const tracks = [
  ['01', '编程学习', '从第一行代码，到能独立理解并解决问题。', '</>'],
  ['02', '创意开发', '把游戏、网站与工具从想法变成真正可用的作品。', 'MAKE'],
  ['03', '协作实践', '在 Hackathon 与项目组里学习沟通、分工和发布。', '48H'],
  ['04', '校园科技', '让技术走出屏幕，成为校园文化的一部分。', 'LIVE'],
];

const conceptProjects = [
  {
    name: 'CAMPUS INTELLIGENCE MESH',
    status: '概念中',
    summary: '校园智能协作网络，将活动、学习资源和项目需求组织成可组合的智能服务。',
    tags: ['AI Orchestration', 'Campus Service', 'Concept'],
    tone: 'acid',
    icon: 'C//M',
  },
  {
    name: 'SIGNAL FOUNDRY',
    status: '规划中',
    summary: '面向社团项目的自动化构建与发布工具链，让创意更快变成可分享的产品。',
    tags: ['Automation', 'Toolchain', 'Planning'],
    tone: 'blue',
    icon: 'S//F',
  },
  {
    name: 'NEON COMMONS',
    status: '探索中',
    summary: '结合计算机视觉、实时渲染和互动媒体的校园数字体验实验。',
    tags: ['Computer Vision', 'Realtime', 'Exploration'],
    tone: 'orange',
    icon: 'N//C',
  },
];

const openHouse = events.find((event) => event.slug === 'new-member-open-house')!;

export default function Home() {
  return (
    <Shell>
      <main id="top">
        <section className="hero-shell">
          <div className="grid-wash" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> COMPUTER SCIENCE SOCIETY · 2026</div>
            <h1 className="hero-title"><span>CODE</span><span>THE <em>CULTURE.</em></span></h1>
            <p className="hero-lead">我们把代码写进校园，也把创意做成真实可玩的东西。</p>
            <p className="hero-body">InfoCo 是由学习者、创作者和行动派共同组成的计算机社团。在这里，从第一行代码到第一个上线项目，都有人和你一起完成。</p>
            <div className="hero-actions"><a className="btn btn-primary" href="/join">加入我们 <span>→</span></a><a className="btn btn-ghost" href="/projects">探索项目 <span>↗</span></a></div>
          </div>
          <div className="hero-console" aria-label="InfoCo 系统状态">
            <div className="console-top"><span>INFOCO://MISSION_CONTROL</span><span className="console-status">● ONLINE</span></div>
            <div className="console-body">
              <div className="pixel-face" aria-hidden="true"><span className="ear left" /><span className="ear right" /><span className="eye left" /><span className="eye right" /><span className="mouth" /></div>
              <div className="console-copy"><span className="command">$ infoco init</span><strong>BUILD TOGETHER.</strong><p>LEARN · MAKE · SHIP · SHARE</p></div>
              <div className="console-meter"><span>CREATIVE ENERGY</span><div><i /></div><b>94%</b></div>
            </div>
            <div className="console-foot"><span>04 CORE TRACKS</span><span>05 DIVISIONS</span><span>01 GAME ONLINE</span></div>
          </div>
          <a className="signal-card" href="#recruitment"><span className="signal-label">NEXT / 下一信号</span><span className="signal-title">9 月 2 日百团大战</span><span className="signal-desc">09:00–20:00 · 学术类社团区 8 号展位</span><span className="signal-arrow">↓</span></a>
        </section>

        <div className="ticker" aria-label="InfoCo 关键词"><div>LEARN_01&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE_02&nbsp;&nbsp;✦&nbsp;&nbsp;SHIP_03&nbsp;&nbsp;✦&nbsp;&nbsp;SHARE_04&nbsp;&nbsp;✦&nbsp;&nbsp;CODE THE CULTURE&nbsp;&nbsp;✦&nbsp;&nbsp;LEARN_01&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE_02&nbsp;&nbsp;✦&nbsp;&nbsp;SHIP_03&nbsp;&nbsp;✦&nbsp;&nbsp;SHARE_04</div></div>

        <section className="home-statement section-pad">
          <div className="section-index">01 / ABOUT THE CLUB</div>
          <div className="statement-grid"><h2>不是“学完再做”，<br />而是<em>边做边学。</em></h2><div><p>InfoCo 把编程学习、创意开发、协作实践和校园科技文化放在同一个空间里。你可以来听一场分享，也可以留下来和大家一起把作品发布出去。</p><a className="text-link" href="/about">进一步认识我们 →</a></div></div>
          <div className="stats-grid"><div><strong>04</strong><span>CORE TRACKS<br />核心方向</span></div><div><strong>05</strong><span>DIVISIONS<br />协作部门</span></div><div><strong>01</strong><span>GAME ONLINE<br />在线游戏</span></div><div><strong>∞</strong><span>IDEAS WELCOME<br />创意容量</span></div></div>
        </section>

        <section className="home-event section-pad" id="recruitment">
          <div className="section-index light">02 / CURRENT SIGNAL</div>
          <div className="event-feature-copy"><span className="status-pill">● 9.2 百团大战 / SCHEDULED</span><h2>{openHouse.title}</h2><p>来 8 号展位认识 InfoCo、聊聊你想做的项目，也可以现场挑战“快问快答”。游戏仅在活动当天 09:00–20:00 开放，兑奖由现场社员协助完成。</p><div className="feature-meta"><div><span>DATE / TIME</span><strong>2026.09.02 · 09:00–20:00</strong></div><div><span>LOCATION</span><strong>西交利物浦大学南校区<br />学术类社团区 8 号展位</strong></div><div><span>ENTRY</span><strong>现场免费参与</strong></div></div><div className="event-actions"><a className="btn btn-dark" href={openHouse.href}>查看活动详情 <span>→</span></a><a className="map-link" href="/games/quick-quiz">进入限时挑战 ↗</a><a className="map-link" href="/recruitment/academic-clubs-map.png" target="_blank" rel="noreferrer">查看完整地图 ↗</a></div></div>
          <figure className="event-map"><a href="/recruitment/academic-clubs-map.png" target="_blank" rel="noreferrer" aria-label="打开学术类社团完整地图"><Image src="/recruitment/academic-clubs-map.png" width={2560} height={1499} sizes="(max-width: 1080px) 100vw, 55vw" alt="学校学术类社团地图，InfoCo 计算机科学类编程社团位于 8 号展位" /></a><figcaption><span>ACADEMIC CLUBS MAP</span><strong>INFOCO · BOOTH 08</strong><small>点击查看学校宣传地图原图</small></figcaption></figure>
        </section>

        <section className="section-pad project-showcase">
          <div className="section-heading"><div><span className="section-index">03 / FUTURE CONCEPTS</span><h2>先留下一些信号。<br />作品完成后再<em>正式上线。</em></h2></div><p>以下是方向性概念，不代表已经完成或发布；后续会替换为社团真实项目与游戏。</p></div>
          <div className="project-grid home-project-grid">{conceptProjects.map((project, index) => <article className={`project-card concept-card ${project.tone}`} key={project.name}><div className="project-card-top"><span>0{index + 1}</span><span className={`status-tag status-${project.status}`}>{project.status}</span></div><div className="project-icon" aria-hidden="true">{project.icon}</div><span className="card-kicker">FUTURE CONCEPT / 方向占位</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-link">CONCEPT ONLY / 尚未发布</div></article>)}</div>
        </section>

        <section className="track-section section-pad">
          <div className="section-heading"><div><span className="section-index light">04 / WHAT WE DO</span><h2>从好奇，到上线。</h2></div><p>四条方向不是四条孤立的路线，<br />它们会在每一次共创里交叉。</p></div>
          <div className="track-grid">{tracks.map(([index, name, copy, icon]) => <div className="track-card" key={index}><span>{index}</span><b>{icon}</b><h3>{name}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="visual-log section-pad">
          <div className="section-heading"><div><span className="section-index">05 / ACTIVITY LOG</span><h2>现场，才是最好的<br /><em>更新日志。</em></h2></div><p>为保护社员隐私，真实活动照片将在取得公开授权后更新；当前版先保留影像位与活动语境。</p></div>
          <div className="log-grid"><div className="log-frame log-a"><span>WORKSHOP / 01</span><b>&lt;CODE<br />TOGETHER&gt;</b><i /></div><div className="log-frame log-b"><span>HACK NIGHT / 02</span><b>BUILD<br />AFTER<br />DARK</b><i /></div><div className="log-frame log-c"><span>SHOW & TELL / 03</span><b>SHIP IT!</b><i /></div></div>
        </section>
        <section className="closing-cta"><span className="section-index">06 / NEXT MOVE</span><h2>你的第一个项目，<br />不必一个人开始。</h2><div><a className="btn btn-primary" href={openHouse.href}>了解百团大战 <span>→</span></a><a className="btn btn-ghost" href="/join">查看加入方式 <span>↗</span></a></div></section>
      </main>
    </Shell>
  );
}
