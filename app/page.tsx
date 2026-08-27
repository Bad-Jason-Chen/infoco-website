import { projects } from './content';
import { Shell } from './components/SiteChrome';

const tracks = [
  ['01', '编程学习', '从第一行代码，到能独立理解并解决问题。', '</>'],
  ['02', '创意开发', '把游戏、网站与工具从想法变成真正可用的作品。', 'MAKE'],
  ['03', '协作实践', '在 Hackathon 与项目组里学习沟通、分工和发布。', '48H'],
  ['04', '校园科技', '让技术走出屏幕，成为校园文化的一部分。', 'LIVE'],
];

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
          <a className="signal-card" href="/join"><span className="signal-label">NOW / 当前信号</span><span className="signal-title">新学期招新状态</span><span className="signal-desc">尚未开放 · 关注公开渠道获取通知</span><span className="signal-arrow">→</span></a>
        </section>

        <div className="ticker" aria-label="InfoCo 关键词"><div>LEARN_01&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE_02&nbsp;&nbsp;✦&nbsp;&nbsp;SHIP_03&nbsp;&nbsp;✦&nbsp;&nbsp;SHARE_04&nbsp;&nbsp;✦&nbsp;&nbsp;CODE THE CULTURE&nbsp;&nbsp;✦&nbsp;&nbsp;LEARN_01&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE_02&nbsp;&nbsp;✦&nbsp;&nbsp;SHIP_03&nbsp;&nbsp;✦&nbsp;&nbsp;SHARE_04</div></div>

        <section className="home-statement section-pad">
          <div className="section-index">01 / ABOUT THE CLUB</div>
          <div className="statement-grid"><h2>不是“学完再做”，<br />而是<em>边做边学。</em></h2><div><p>InfoCo 把编程学习、创意开发、协作实践和校园科技文化放在同一个空间里。你可以来听一场分享，也可以留下来和大家一起把作品发布出去。</p><a className="text-link" href="/about">进一步认识我们 →</a></div></div>
          <div className="stats-grid"><div><strong>04</strong><span>CORE TRACKS<br />核心方向</span></div><div><strong>05</strong><span>DIVISIONS<br />协作部门</span></div><div><strong>01</strong><span>GAME ONLINE<br />在线游戏</span></div><div><strong>∞</strong><span>IDEAS WELCOME<br />创意容量</span></div></div>
        </section>

        <section className="home-event section-pad">
          <div className="section-index light">02 / CURRENT SIGNAL</div>
          <div className="event-feature-copy"><span className="status-pill">● 招新尚未开放</span><h2>新成员开放日</h2><p>下一次招新开放后，我们会在这里公布时间、地点、加入方向和报名入口。在此之前，先来看看我们正在做什么。</p><div className="feature-meta"><div><span>DATE</span><strong>待公布</strong></div><div><span>LOCATION</span><strong>校内 · 待公布</strong></div><div><span>ENTRY</span><strong>免费参与</strong></div></div><a className="btn btn-dark" href="/events">打开活动雷达 <span>→</span></a></div>
          <div className="event-feature-art" aria-hidden="true"><div className="radar"><i /><i /><i /><span>INFOCO<br />OPEN<br />HOUSE</span></div><b>HELLO<br />WORLD!</b></div>
        </section>

        <section className="section-pad project-showcase">
          <div className="section-heading"><div><span className="section-index">03 / SELECTED OUTPUT</span><h2>项目不是作业。<br />它们会被<em>真正发布。</em></h2></div><a className="text-link" href="/projects">查看全部项目 ↗</a></div>
          <div className="project-grid home-project-grid">{projects.map((project, index) => <a className={`project-card ${project.tone}`} href={project.href || '/projects'} key={project.slug}><div className="project-card-top"><span>0{index + 1}</span><span className={`status-tag status-${project.status}`}>{project.status}</span></div><div className="project-icon" aria-hidden="true">{project.slug === 'infoco-exe' ? '⚡' : project.slug === 'infoco-club' ? 'www' : 'G//P'}</div><span className="card-kicker">{project.kind}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-link">OPEN CASE ↗</div></a>)}</div>
        </section>

        <section className="track-section section-pad">
          <div className="section-heading"><div><span className="section-index light">04 / WHAT WE DO</span><h2>从好奇，到上线。</h2></div><p>四条方向不是四条孤立的路线，<br />它们会在每一次共创里交叉。</p></div>
          <div className="track-grid">{tracks.map(([index, name, copy, icon]) => <div className="track-card" key={index}><span>{index}</span><b>{icon}</b><h3>{name}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="visual-log section-pad">
          <div className="section-heading"><div><span className="section-index">05 / ACTIVITY LOG</span><h2>现场，才是最好的<br /><em>更新日志。</em></h2></div><p>为保护社员隐私，真实活动照片将在取得公开授权后更新；当前版先保留影像位与活动语境。</p></div>
          <div className="log-grid"><div className="log-frame log-a"><span>WORKSHOP / 01</span><b>&lt;CODE<br />TOGETHER&gt;</b><i /></div><div className="log-frame log-b"><span>HACK NIGHT / 02</span><b>BUILD<br />AFTER<br />DARK</b><i /></div><div className="log-frame log-c"><span>SHOW & TELL / 03</span><b>SHIP IT!</b><i /></div></div>
        </section>
        <section className="closing-cta"><span className="section-index">06 / NEXT MOVE</span><h2>你的第一个项目，<br />不必一个人开始。</h2><div><a className="btn btn-primary" href="/join">查看加入方式 <span>→</span></a><a className="btn btn-ghost" href="/games/infoco-exe">先玩一局 <span>↗</span></a></div></section>
      </main>
    </Shell>
  );
}
