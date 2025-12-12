import { NextResponse } from "next/server";
import { userAgent } from "next/server";

export default function middleware(request) {
  const headers = new Headers(request.headers);

  const { device } = userAgent({ headers: headers });
  console.log(device);
  headers.set(
    "x-current-path",
    request.nextUrl.pathname.split("/").reverse()[0]
  );
  headers.set("x-isMobile", device.type === "mobile" ? 1 : 0);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
