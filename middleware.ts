import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/school/learning-spaace", "/school/admission-portal", "/administrator-office", "/dashboard"]
const publicRoutes = ["/", "/guild", "/school", "/center", ""]


export default async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = cookies().get('session')?.value;
  const session = await decrypt();

  if(isProtectedRoute && !session?.userId){
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  if (isPublicRoute && session?.userId ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
  }

  return NextResponse.next()
}


// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./lib/session";

// const protectedRoutes = ["/school/learning-spaace", "/school/admission-portal", "/administrator-office", "/dashboard"]
// const publicRoutes = ["/", "/school/apply", "/guild", "/school", "/center"]

// export default async function middleware(req: NextRequest){
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path)

//   const cookie = cookies().get('session')?.value;
//   const session = await decrypt();

//   if(isProtectedRoute && !session?.userId){
//     return NextResponse.redirect(new URL("/", req.nextUrl))
//   }

//   if (isPublicRoute && session?.userId ) {
//     return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
//   }

//   return NextResponse.next()
// }

