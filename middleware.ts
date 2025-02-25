import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/school/learning-spaace", "/school/admission-portal", "/administrator-office", "/dashboard"]
const publicRoutes = ["/", "/school/apply", "/guild", "/school", "/center"]

export default async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = cookies().get('session')?.value;
  const session = await decrypt();

  if(isProtectedRoute && !session?.userId){
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  if (isPublicRoute && session?.userId && session?.role === null) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
  }

  if (isPublicRoute && session?.userId && session?.role === "applicant") {
    return NextResponse.redirect(new URL("/school/admission-portal", req.nextUrl))
  }

  if (isPublicRoute && session?.userId && session?.role === "admin") {
    return NextResponse.redirect(new URL("/school/admin", req.nextUrl))
  }

  if (isPublicRoute && session?.userId && session?.role === "student") {
    return NextResponse.redirect(new URL("/school/learning-space", req.nextUrl))
  }

  return NextResponse.next()
}



// import { NextRequest, NextResponse } from "next/server";
// import { decrypt, SessionPayload } from "./lib/session";

// export function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   const protectedRoutes = [
//     "/school/learning-space",
//     "/school/admission-portal",
//     "/school/facilitator",
//     "/administrator-office",
//   ];

//   const publicRoutes = ["/", "/school/apply", "/guild", "/school", "/center"];

//   return handleAuthentication(req, path, protectedRoutes);
// }

// async function handleAuthentication(
//   req: NextRequest,
//   path: string,
//   protectedRoutes: string[]
// ) {
//   const session = (await decrypt()) as SessionPayload | null; // ✅ Ensure type safety
//   console.log("🔍 Session data:", session);

//   if (!session?.userId) {
//     if (protectedRoutes.includes(path)) {
//       console.log("🔒 User not authenticated. Redirecting to home.");
//       return NextResponse.redirect(new URL("/", req.nextUrl));
//     }
//     return NextResponse.next();
//   }

//   const userRole = session.role; // ✅ Extract user role

//   switch (userRole) {
//     case "admin":
//       return NextResponse.redirect(new URL("/administrator-office", req.nextUrl));
//     case "applicant":
//       return NextResponse.redirect(new URL("/school/admission-portal", req.nextUrl));
//     case "student":
//       return NextResponse.redirect(new URL("/school/learning-space", req.nextUrl));
//     case "facilitator":
//       return NextResponse.redirect(new URL("/school/facilitator", req.nextUrl));
//     default:
//       return NextResponse.next();
//   }
// }
