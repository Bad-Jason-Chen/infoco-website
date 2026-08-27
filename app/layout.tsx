import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://infoco.club'),
  title: { default: 'InfoCo — Code the Culture', template: '%s — InfoCo' },
  description: 'InfoCo 计算机社团官网：一起学习、创造、发布与分享。',
  applicationName: 'InfoCo',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'InfoCo',
    title: 'InfoCo — Code the Culture',
    description: '我们把代码写进校园，也把创意做成真实可玩的东西。',
    url: 'https://infoco.club',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'InfoCo — Code the Culture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoCo — Code the Culture',
    description: '我们把代码写进校园，也把创意做成真实可玩的东西。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
