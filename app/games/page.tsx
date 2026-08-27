import type { Metadata } from 'next';
import { PageIntro, Shell } from '../components/SiteChrome';

export const metadata: Metadata = { title: '游戏中心', description: '体验 InfoCo 的校园互动游戏与社员小游戏。' };
export default function GamesPage() {
  return <Shell><main id="top"><PageIntro index="04" label="GAMES / 游戏中心" title="进入游戏。也进入我们创造的世界。" copy="文化节互动、招新彩蛋和社员小游戏都从这里启动。每款游戏会清楚标注模式、预计用时、设备建议和奖品状态。" /><section className="mode-protocol section-pad"><div><span>01</span><h3>普通模式</h3><p>长期开放，可以体验和分享结果，不发放奖品。</p></div><div><span>02</span><h3>活动模式</h3><p>只在指定时间开放，兑奖规则与活动通知同步。</p></div><div><span>03</span><h3>已结束</h3><p>仍可继续体验，但不再生成或接受兑奖码。</p></div></section><section className="featured-game section-pad"><div className="game-poster"><div className="poster-top"><span>INFOCO ORIGINAL</span><span>GAME_001</span></div><div className="poster-bolt">⚡</div><h2>InfoCo.exe</h2><p>校园系统紧急维修</p><div className="poster-code">01001 / SYSTEM FAILURE / 11010</div></div><div className="game-copy"><span className="status-pill">● NORMAL MODE · 普通模式</span><h2>全校系统离线。<br />你有 30 秒。</h2><p>点击异常节点、恢复校园系统，在倒计时结束前完成一次紧急维修。无需联网、支持手机操作，随时可以重新挑战。</p><dl><div><dt>预计用时</dt><dd>1–2 分钟</dd></div><div><dt>设备建议</dt><dd>手机 / 电脑</dd></div><div><dt>需要联网</dt><dd>加载后不需要</dd></div><div><dt>奖品状态</dt><dd>普通模式不发奖</dd></div></dl><a className="btn btn-primary" href="/games/infoco-exe">启动游戏 <span>→</span></a></div></section></main></Shell>;
}
