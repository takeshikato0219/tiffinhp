import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // /wp/ または /wp で始まるURLは全てトップページにリダイレクト
  if (pathname === '/wp' || pathname === '/wp/' || pathname.startsWith('/wp/')) {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/wp', '/wp/', '/wp/:path*'],
}
