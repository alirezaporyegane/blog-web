import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useAuthStore } from '@/store/authStore';
import { Cookie } from '@/types/cookies';
import type { LoginOut } from '@/types/account';
const path = ['/dash'];

export function middleware(request: NextRequest) {
  const setAccount = useAuthStore.getState().setAccount;
  const accountAsString = request.cookies.get(Cookie.ACCOUNT_KEY);
  let account;
  if (accountAsString?.value) {
    account = JSON.parse(accountAsString?.value || '') as LoginOut;
  }

  const { pathname } = request.nextUrl;

  if (account && typeof account === 'object' && Object.keys(account).length) {
    setAccount(account);

    return NextResponse.next();
  } else {
    if (path.some((prefix) => pathname.startsWith(prefix)))
      return NextResponse.redirect(
        new URL(`/login?returnURL=${pathname}`, request.url)
      );

    return NextResponse.next();
  }
}
