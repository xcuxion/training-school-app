// export { auth as middleware } from "@/lib/auth"

import { NextRequest, NextResponse } from "next/server";

const user = {
  id: "",
};

export function middleware(request: NextRequest) {
  // if(user.id === null | user.id === undefined) {

  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/school/:path*", "/administrator-office/:path*"],
};


// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//   // Getting cookies from the request using the `RequestCookies` API
//   let cookie = request.cookies.get('nextjs')
//   console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
//   const allCookies = request.cookies.getAll()
//   console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
//   request.cookies.has('nextjs') // => true
//   request.cookies.delete('nextjs')
//   request.cookies.has('nextjs') // => false
 
//   // Setting cookies on the response using the `ResponseCookies` API
//   const response = NextResponse.next()
//   response.cookies.set('vercel', 'fast')
//   response.cookies.set({
//     name: 'vercel',
//     value: 'fast',
//     path: '/',
//   })
//   cookie = response.cookies.get('vercel')
//   console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
//   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
 
//   return response
// }