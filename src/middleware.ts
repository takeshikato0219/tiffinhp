import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // /wp/?p=XX のようなWordPressクエリパラメータ付きURLをリダイレクト
  if (pathname === '/wp/' || pathname === '/wp') {
    if (searchParams.has('p')) {
      return NextResponse.redirect(new URL('/', request.url), 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/wp/:path*'],
}
