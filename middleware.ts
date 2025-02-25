import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/school/learning-spaace", "/school/admission-portal", "/administrator-office", "/Dashboard"]
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

  if (isPublicRoute && session?.userId ) {
    return NextResponse.redirect(new URL("/school/admission-portal", req.nextUrl))
  }

  return NextResponse.next()
}
// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./lib/session";

// type UserRole = "admin" | "applicant" | "student" | "facilitator";

// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   const protectedRoutes = [
//     "/school/learning-space",
//     "/school/admission-portal",
//     "/administrator-office",
//     "/dashboard",
//     "/school/facilitator"
//   ];

//   const sessionToken = req.cookies.get("session")?.value;
//   const session = await decrypt(sessionToken);

//   if (!session?.userId) {
//     if (protectedRoutes.includes(path)) {
//       return NextResponse.redirect(new URL("/", req.nextUrl));
//     }
//     return NextResponse.next();
//   }

//   const userRedirects: Record<UserRole, string> = {
//     admin: "/administrator-office",
//     applicant: "/school/admission-portal",
//     student: "/school/learning-space",
//     facilitator: "/school/facilitator",
//   };

//   const targetPath = userRedirects[session.role as UserRole];

//   if (targetPath && path !== targetPath) {
//     return NextResponse.redirect(new URL(targetPath, req.nextUrl));
//   }

//   return NextResponse.next();
// }
