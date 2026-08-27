import type { Metadata } from 'next';
import { RepairGame, ShareButton } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = { title: 'InfoCo.exe：校园系统紧急维修', description: '在 30 秒内修复校园系统异常节点。当前为长期开放的普通体验模式。', openGraph: { title: 'InfoCo.exe：校园系统紧急维修', description: '在 30 秒内完成维修挑战。普通体验模式，不发放奖品。', images: [] }, twitter: { card: 'summary', title: 'InfoCo.exe', description: '校园系统紧急维修 · 普通体验模式', images: [] } };
export default function GamePage() {
  return <Shell><main id="top" className="game-page"><section className="game-detail-head"><div><a href="/games">← 返回游戏中心</a><span className="status-pill">● NORMAL MODE</span></div><h1>InfoCo.exe</h1><p>校园系统紧急维修 / Campus System Emergency Repair</p></section><section className="game-stage section-pad"><RepairGame /><div className="game-instructions"><div><span>HOW TO PLAY</span><h2>修复全部 9 个节点</h2><ol><li>点击任意红色异常节点。</li><li>节点变绿表示修复完成。</li><li>在 30 秒结束前完成全部维修。</li></ol></div><div><span>CREATED BY</span><h2>InfoCo Project Team</h2><p>当前公开材料没有提供具体制作成员名单，获得成员授权后补充。</p><ShareButton label="分享挑战" /></div></div></section><section className="mode-warning"><span>PRIZE PROTOCOL</span><strong>当前为普通体验模式，不生成兑奖码。</strong><p>活动模式只会在官网明确显示开放时间与奖品规则；活动结束后将自动恢复为普通模式。</p></section></main></Shell>;
}
