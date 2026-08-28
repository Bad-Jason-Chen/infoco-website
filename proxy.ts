import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = 'infoco.club';

export function proxy(request: NextRequest) {
  const requestHost = request.headers.get('host')?.split(':', 1)[0].toLowerCase();

  if (requestHost === `www.${CANONICAL_HOST}`) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = CANONICAL_HOST;
    canonicalUrl.port = '';

    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
