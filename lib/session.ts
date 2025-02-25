// import "server-only";
// import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";

// // Ensure SESSION_SECRET is defined
// const secretKey = process.env.SESSION_SECRET;
// if (!secretKey) {
//   throw new Error("SESSION_SECRET is not defined in environment variables.");
// }

// const encodedKey = new TextEncoder().encode(secretKey);

// export async function createSession(userId: string, role: "admin" | "applicant" | "student" | "facilitator"|null ) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days expiry
//   const session = await encrypt({ userId, role, expiresAt: expiresAt.getTime() });

//   cookies().set("session", session, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     expires: expiresAt,
//     sameSite: "strict", // Ensure cookie is properly sent
//   });
// }

// export async function deleteSession() {
//   cookies().delete("session");
//   console.log("✅ Session deleted");
// }

// type SessionPayload = {
//   userId: string;
//   role: "admin" | "applicant" | "student" | "facilitator" | null; // Explicit roles
//   expiresAt: number;
// };


// export async function encrypt(payload: SessionPayload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime(Math.floor(payload.expiresAt / 1000)) // Ensure correct Unix timestamp
//     .sign(encodedKey);
// }

// // ✅ Modify `decrypt()` to accept sessionToken instead of reading cookies directly
// export async function decrypt(sessionToken?: string): Promise<SessionPayload | null> {
//   if (!sessionToken) {
//     console.log("❌ No session token provided.");
//     return null;
//   }

//   try {
//     console.log("🔑 Verifying session token:", sessionToken);
//     const { payload } = await jwtVerify<SessionPayload>(sessionToken, encodedKey, {
//       algorithms: ["HS256"],
//     });
//     console.log("✅ Session verified:", payload);
//     return payload;
//   } catch (error) {
//     console.error("❌ Failed to verify session:", error);
//     return null;
//   }
// }


import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// Ensure SESSION_SECRET is defined
const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
  throw new Error("SESSION_SECRET is not defined in environment variables.");
}

const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string, role: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days expiry
  const session = await encrypt({ userId, role, expiresAt: expiresAt.getTime() }); // ✅ Include role

  cookies().set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
  });
}


export async function deleteSession() {
  cookies().delete("session");
  console.log("✅ Session deleted");
}

type SessionPayload = {
  userId: string;
  role: string; // ✅ Added role
  expiresAt: number;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Math.floor(payload.expiresAt / 1000)) // Ensure correct Unix timestamp
    .sign(encodedKey);
}

export async function decrypt() {
  // Retrieve session cookie
  const sessionCookie = cookies().get("session")?.value;
  // console.log("🔍 Retrieved session from cookies:", sessionCookie);

  if (!sessionCookie) {
    // console.log("❌ No session token found in cookies.");
    return null;
  }

  try {
    console.log("🔑 Verifying session token:", sessionCookie);
    const { payload } = await jwtVerify(sessionCookie, encodedKey, {
      algorithms: ["HS256"],
    });
    // console.log("✅ Session verified successfully:", payload);
    return payload;
  } catch (error) {
    // console.log("❌ Failed to verify session:", error);
    return null;
  }
}
