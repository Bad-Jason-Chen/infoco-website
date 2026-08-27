import type { Metadata } from 'next';
import { EventExplorer } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';
import { events } from '../content';

export const metadata: Metadata = { title: '活动', description: '查看 InfoCo 即将举行的活动与往期记录。' };
export default function EventsPage() {
  return <Shell><main id="top"><PageIntro index="02" label="EVENTS / 活动" title="每一次见面，都是一次新的编译。" copy="从入门工作坊到 48 小时 Hackathon：查看下一场活动，也可以回到往期记录，看看我们怎样把一个想法变成现场。" accent="orange" /><section className="events-section section-pad"><EventExplorer events={events} /></section><section className="events-note"><div><span>EXTERNAL REGISTRATION</span><h2>报名与签到，连接成熟工具。</h2></div><p>第一版不收集个人报名信息。活动开放后，本页会清晰标注飞书表单或学校系统入口；活动结束后，同一链接会转为回顾页。</p></section></main></Shell>;
}
