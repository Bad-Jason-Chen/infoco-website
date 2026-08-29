import type { Metadata } from 'next';
import { ShareButton, SignalRouteGame } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = { title: 'InfoCo.exe：Signal Route', description: '旋转线路、恢复信号，完成三段逐步升级的数据链路挑战。', openGraph: { title: 'InfoCo.exe：Signal Route', description: '连接 TX 与 RX，完成三关信号链路抢修。普通体验模式，不发放奖品。', images: [] }, twitter: { card: 'summary', title: 'InfoCo.exe：Signal Route', description: '信号链路抢修 · 普通体验模式', images: [] } };
export default function GamePage() {
  return <Shell><main id="top" className="game-page"><section className="game-detail-head"><div><a href="/games">← 返回游戏中心</a><span className="status-pill">● NORMAL MODE</span></div><h1>Signal Route</h1><p>InfoCo.exe / 校园信号链路抢修</p></section><section className="game-stage section-pad"><SignalRouteGame /><div className="game-instructions"><div><span>HOW TO PLAY</span><h2>把 TX 连接到 RX</h2><ol><li>点击或按下线路模块，使它顺时针旋转。</li><li>让相邻线路接口正确相连，荧光绿色表示信号已经抵达。</li><li>在倒计时结束前完成三段逐步变难的链路。</li></ol></div><div><span>CREATED BY</span><h2>InfoCo Project Team</h2><p>游戏可在手机或电脑上操作，所有关卡均在本地运行，不收集游玩数据。</p><ShareButton label="分享挑战" /></div></div></section><section className="mode-warning"><span>PRIZE PROTOCOL</span><strong>当前为普通体验模式，不生成兑奖码。</strong><p>这是长期开放的网页小游戏，与百团大战当天开放的“快问快答”及其现场兑奖相互独立。</p></section></main></Shell>;
}
