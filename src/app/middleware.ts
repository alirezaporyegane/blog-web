import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request);
}
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
