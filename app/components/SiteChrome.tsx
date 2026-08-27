'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const navItems = [
  ['首页', 'Home', '/'],
  ['关于我们', 'About', '/about'],
  ['活动', 'Events', '/events'],
  ['项目与作品', 'Projects', '/projects'],
  ['游戏中心', 'Games', '/games'],
  ['加入我们', 'Join us', '/join'],
];

export function Logo() {
  return (
    <a className="brand" href="/" aria-label="InfoCo 首页">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
      <span>InfoCo</span>
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Logo />
      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map(([cn, en, href]) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return <a href={href} key={href} className={active ? 'active' : ''}><span>{cn}</span><small>{en}</small></a>;
        })}
      </nav>
      <a className="header-join" href="/join">JOIN <span aria-hidden="true">↗</span></a>
      <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? '关闭菜单' : '打开菜单'}>
        <span /><span />
      </button>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="移动端主导航">
        {navItems.map(([cn, en, href], index) => (
          <a href={href} key={href}><b>0{index + 1}</b><span>{cn}<small>{en}</small></span><i>↗</i></a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Logo /><p>把好奇心编译成作品。</p></div>
        <div className="footer-nav">
          {navItems.slice(1).map(([cn, , href]) => <a href={href} key={href}>{cn}</a>)}
        </div>
        <div className="footer-contact">
          <span>PUBLIC CHANNEL</span>
          <strong>infoco.club</strong>
          <p>公开邮箱与社交媒体待社团确认后更新</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 INFOCO COMPUTER SCIENCE SOCIETY</span>
        <span>本站内容由 InfoCo 社团维护 · 学校官方声明待授权后补充</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function PageIntro({ index, label, title, copy, accent = 'acid' }: { index: string; label: string; title: string; copy: string; accent?: 'acid' | 'blue' | 'orange' }) {
  return (
    <section className={`page-intro ${accent}`}>
      <div className="page-intro-meta"><span>{index}</span><span>{label}</span></div>
      <h1>{title}</h1>
      <p>{copy}</p>
      <div className="page-intro-cross" aria-hidden="true">+</div>
    </section>
  );
}
