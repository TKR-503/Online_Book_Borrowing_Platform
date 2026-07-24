import { NextResponse } from "next/server";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isProfileRoute = pathname.startsWith("/profile");
  const isBookDetailRoute = pathname.startsWith("/books/") && pathname !== "/books";

  if (isProfileRoute || isBookDetailRoute) {
 
    const sessionToken =
      request.cookies.get("better-auth.session_token")?.value ||
      request.cookies.get("__Secure-better-auth.session_token")?.value;

    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export default proxy;
