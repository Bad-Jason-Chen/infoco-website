import {
  getMillisecondsUntilRecruitment,
  getMillisecondsUntilClose,
  getRecruitmentPhase,
} from './recruitment-window.mjs';

const responseHeaders = Object.freeze({
  'Cache-Control': 'private, no-store, max-age=0',
  'Content-Type': 'text/html; charset=utf-8',
});

function lockedQuizPage(phase, millisecondsUntilStart = 0) {
  const before = phase === 'before';
  const title = before ? '挑战尚未开放' : '本次挑战已结束';
  const description = before
    ? 'InfoCo 快问快答将于 9 月 2 日 09:00 开放。'
    : '9 月 2 日的现场挑战已于 20:00 结束，感谢参与。';
  const countdown = before
    ? `<p class="countdown" id="countdown" data-remaining="${millisecondsUntilStart}">正在同步开放时间…</p>
       <script>
         const node = document.getElementById('countdown');
         const initial = Number(node.dataset.remaining);
         const startedAt = performance.now();
         const render = () => {
           const remaining = Math.max(0, initial - (performance.now() - startedAt));
           if (remaining <= 0) { location.reload(); return; }
           const seconds = Math.ceil(remaining / 1000);
           const days = Math.floor(seconds / 86400);
           const hours = Math.floor((seconds % 86400) / 3600);
           const minutes = Math.floor((seconds % 3600) / 60);
           const secs = seconds % 60;
           node.textContent = [days ? days + ' 天' : '', hours + ' 小时', minutes + ' 分', secs + ' 秒'].filter(Boolean).join(' ');
           setTimeout(render, 250);
         };
         render();
       </script>`
    : '';

  return `<!doctype html>
  <html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} · InfoCo</title><style>
  :root{color-scheme:dark}*{box-sizing:border-box}body{min-height:100vh;margin:0;display:grid;place-items:center;padding:24px;color:#f4f1e8;background:#070806;font-family:Inter,"PingFang SC","Microsoft YaHei",sans-serif;background-image:linear-gradient(rgba(199,255,74,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(199,255,74,.05) 1px,transparent 1px);background-size:48px 48px}.panel{width:min(100%,720px);padding:clamp(28px,6vw,64px);border:1px solid #c7ff4a;background:#10120e;box-shadow:14px 14px 0 #87a9ff}.eyebrow{color:#c7ff4a;font:700 11px/1.3 ui-monospace,monospace;letter-spacing:.14em}.state{display:inline-block;margin-top:30px;padding:8px 10px;color:#070806;background:${before ? '#ff7657' : '#87a9ff'};font:800 10px/1 ui-monospace,monospace;letter-spacing:.1em}h1{margin:22px 0 16px;font-size:clamp(40px,8vw,78px);line-height:.95;letter-spacing:-.06em}p{color:#b9beb3;line-height:1.8}.countdown{margin:30px 0 0;color:#070806;background:#c7ff4a;padding:18px;font:800 clamp(20px,5vw,34px)/1.2 ui-monospace,monospace}a{display:inline-block;margin-top:26px;color:#f4f1e8;text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:4px}</style></head>
  <body><main class="panel"><div class="eyebrow">INFOCO://RECRUITMENT_QUIZ · 2026.09.02</div><span class="state">${before ? 'LOCKED / 等待开放' : 'CLOSED / 已结束'}</span><h1>${title}</h1><p>${description}<br>活动地点：西交利物浦大学南校区 · 学术类社团区 8 号展位</p>${countdown}<a href="/#recruitment">← 返回 InfoCo 首页</a></main></body></html>`;
}

export function createQuizGateResponse(now, openHtml) {
  const phase = getRecruitmentPhase(now);
  const windowMeta = `<meta name="infoco-quiz-window-ms" content="${getMillisecondsUntilClose(now)}">`;
  const openBody = openHtml.includes('</head>')
    ? openHtml.replace('</head>', `${windowMeta}</head>`)
    : `${windowMeta}${openHtml}`;
  const body = phase === 'open' ? openBody : lockedQuizPage(phase, getMillisecondsUntilRecruitment(now));
  const headers = { ...responseHeaders, 'X-InfoCo-Quiz-Phase': phase };

  return { body, headers, phase };
}
