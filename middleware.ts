import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  const COOKIE_NAME = 'ab-test'
  let bucket = req.cookies.get(COOKIE_NAME)
  if (!bucket) {
    bucket = Math.random() < 0.5 ? 'new' : 'old'
  }
  const path = bucket === 'new' ? '/renewal' : '/'
  const res = NextResponse.rewrite(new URL(path, req.url))

  if (!req.cookies.get(COOKIE_NAME)) {
    res.cookies.set(COOKIE_NAME, bucket)
  }

  return res
}
