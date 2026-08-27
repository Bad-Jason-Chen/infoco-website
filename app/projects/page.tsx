import type { Metadata } from 'next';
import { PageIntro, Shell } from '../components/SiteChrome';
import { projects } from '../content';

export const metadata: Metadata = { title: '项目与作品', description: '浏览 InfoCo 社员开发的游戏、网站、工具和创意项目。' };
const statuses = ['构思中', '开发中', '已发布', '已归档'];
export default function ProjectsPage() {
  return <Shell><main id="top"><PageIntro index="03" label="PROJECTS / 项目与作品" title="把灵感从草稿，推到真实世界。" copy="这里收录社员参与的游戏、网站、工具和研究项目。每个项目都有进度、有成员，也可以发出寻找下一位协作者的信号。" accent="blue" /><section className="project-legend section-pad"><span>STATUS PROTOCOL</span><div>{statuses.map((status, index) => <span key={status}><i>0{index + 1}</i>{status}</span>)}</div></section><section className="project-index section-pad">{projects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.slug}><div className="project-row-index">0{index + 1}</div><div className="project-row-visual"><span>{project.slug === 'infoco-exe' ? '⚡' : project.slug === 'infoco-club' ? 'www' : 'G//P'}</span><i /></div><div className="project-row-copy"><div><span className="card-kicker">{project.kind}</span><span className={`status-tag status-${project.status}`}>{project.status}</span></div><h2>{project.name}</h2><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-row-side"><span>{project.collaborators ? '● OPEN FOR COLLABORATORS' : '○ TEAM COMPLETE'}</span>{project.href ? <a href={project.href}>打开项目 ↗</a> : <span className="muted-link">详情整理中</span>}</div></article>)}</section><section className="submission-note"><span>PROJECT INTAKE / V1</span><h2>第一版项目由管理员代为录入。</h2><p>暂不开放任意用户投稿，避免垃圾内容与隐私问题。社员账号和审核流程完善后，再逐步开放自主维护。</p></section></main></Shell>;
}
