import type { LoginIn, LoginOut } from '@/types/account';
import { axiosHandler } from './core';
import { RequestMethod } from './types';

const BASE_URL = 'shared/account';

async function loginHandler(body: LoginIn, tokenLess: boolean = true) {
  return await axiosHandler<LoginOut>(BASE_URL, {
    method: RequestMethod.POST,
    action: 'login',
    body,
    tokenLess,
  });
}

async function logoutHandler() {
  return await axiosHandler<string>(BASE_URL, {
    method: RequestMethod.POST,
    action: 'logout',
  });
}

export default { loginHandler, logoutHandler } as const;
