'use client';

import { useEffect, useMemo, useState } from 'react';
import type { EventRecord } from '../content';

export function EventExplorer({ events }: { events: EventRecord[] }) {
  const [status, setStatus] = useState<'upcoming' | 'past'>('upcoming');
  const [type, setType] = useState('全部');
  const filtered = useMemo(() => events.filter((event) => event.status === status && (type === '全部' || event.type === type)), [events, status, type]);
  return (
    <div className="event-explorer">
      <div className="event-controls">
        <div className="segmented" aria-label="活动状态">
          <button className={status === 'upcoming' ? 'active' : ''} onClick={() => setStatus('upcoming')}>即将举行 <span>UPCOMING</span></button>
          <button className={status === 'past' ? 'active' : ''} onClick={() => setStatus('past')}>往期活动 <span>ARCHIVE</span></button>
        </div>
        <div className="filter-row"><span>FILTER:</span>{['全部', '课程', '比赛', '招新', '分享'].map((item) => <button key={item} onClick={() => setType(item)} className={type === item ? 'active' : ''}>{item}</button>)}</div>
      </div>
      <div className="event-grid">
        {filtered.length ? filtered.map((event) => (
          <a href={event.slug === 'apex-arena' ? '/events/apex-arena' : `/events#${event.slug}`} className={`event-card ${event.tone}`} id={event.slug} key={event.slug}>
            <div className="event-visual"><span>{event.eyebrow}</span><b>{event.type === '课程' ? '&lt;/&gt;' : event.type === '比赛' ? '48H' : event.type === '招新' ? 'HELLO' : 'LIVE'}</b><i /></div>
            <div className="event-card-body"><span className="card-kicker">{event.status === 'upcoming' ? 'UPCOMING' : 'ARCHIVE'} · {event.type}</span><h2>{event.title}</h2><p>{event.summary}</p><dl><div><dt>DATE</dt><dd>{event.date}</dd></div><div><dt>PLACE</dt><dd>{event.place}</dd></div></dl><span className="text-link">查看活动详情 →</span></div>
          </a>
        )) : <div className="empty-state"><span>NO SIGNAL</span><h2>这个筛选下暂时没有活动</h2><p>换一个类别，或者关注后续公开通知。</p></div>}
      </div>
    </div>
  );
}

export function FAQ({ items }: { items: Array<[string, string]> }) {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{items.map(([q, a], index) => <div className={`faq-item ${active === index ? 'open' : ''}`} key={q}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>0{index + 1}</span><strong>{q}</strong><i>{active === index ? '−' : '+'}</i></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>;
}

export function ShareButton({ label = '复制页面链接' }: { label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button className="share-button" onClick={copy}>{copied ? '已复制 ✓' : `${label} ↗`}</button>;
}

const faqJoin: Array<[string, string]> = [
  ['我完全没有编程基础，可以加入吗？', '可以。InfoCo 既欢迎已经在做项目的人，也欢迎还没写过第一行代码的人。学习路径会从基础开始，真正重要的是好奇心和愿意动手。'],
  ['只能做编程相关的事情吗？', '不是。游戏与科技项目同样需要设计、写作、视觉、运营与组织能力。你可以先从感兴趣的角色进入，再逐步拓展。'],
  ['加入后需要投入多少时间？', '不同项目节奏不同。常规活动可以按兴趣参与；如果加入项目组，建议提前和团队约定稳定、可持续的投入。'],
  ['目前没有开放招新怎么办？', '页面会长期保留。你可以关注 InfoCo 的公开渠道；下一次招新开放后，这里会第一时间更新流程和入口。'],
];

export function JoinFAQ() { return <FAQ items={faqJoin} />; }

type NodeState = 'broken' | 'fixed';

export function RepairGame() {
  const [started, setStarted] = useState(false);
  const [nodes, setNodes] = useState<NodeState[]>(Array(9).fill('broken'));
  const [time, setTime] = useState(30);
  const won = nodes.every((node) => node === 'fixed');

  function start() { setNodes(Array(9).fill('broken')); setTime(30); setStarted(true); }

  useEffect(() => {
    if (!started || won || time === 0) return;
    const timer = window.setInterval(() => setTime((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [started, time, won]);

  function fix(index: number) {
    if (!started || time === 0 || won) return;
    setNodes((current) => current.map((node, i) => i === index ? 'fixed' : node));
  }

  const score = nodes.filter((node) => node === 'fixed').length;
  return (
    <div className="game-machine">
      <div className="game-statusbar"><span>INFOCO.EXE / NORMAL MODE</span><span className={time <= 8 ? 'danger' : ''}>T− {String(time).padStart(2, '0')}s</span><span>SYSTEM {won ? '100' : Math.round(score / 9 * 100)}%</span></div>
      <div className="game-screen">
        {!started ? <div className="game-overlay"><span>普通体验模式 · 不发放奖品</span><h2>校园系统异常</h2><p>9 个服务节点已经离线。请在 30 秒内依次点击异常节点，让校园系统恢复运行。</p><button onClick={start}>启动维修 →</button></div> : null}
        {started && won ? <div className="game-overlay success"><span>REPAIR COMPLETE</span><h2>全部系统已恢复</h2><p>用时 {30 - time} 秒。你修好了今天的校园网络——至少在这个宇宙里。</p><button onClick={start}>再玩一次 ↻</button></div> : null}
        {started && time === 0 && !won ? <div className="game-overlay fail"><span>SESSION TIMEOUT</span><h2>维修未完成</h2><p>已修复 {score} / 9 个节点。系统已为你保留重试权限。</p><button onClick={start}>重新启动 ↻</button></div> : null}
        <div className="node-grid" aria-label="系统维修节点">{nodes.map((node, index) => <button key={index} className={node} onClick={() => fix(index)} aria-label={`节点 ${index + 1}，${node === 'fixed' ? '已修复' : '待修复'}`}><span>0{index + 1}</span><b>{node === 'fixed' ? 'OK' : 'ERR'}</b><i /></button>)}</div>
      </div>
      <div className="game-footer"><span>INPUT: POINTER / TOUCH</span><span>NETWORK: NOT REQUIRED</span><span>PRIZE CODE: DISABLED</span></div>
    </div>
  );
}
