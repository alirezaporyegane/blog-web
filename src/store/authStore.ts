import { create } from 'zustand';
import { LoginOut } from '@/types/account';
import { Cookie } from '@/types/cookies';
import { getCookie, removeCookie } from '@/utils/cookie';

type AuthStore = {
  account: LoginOut | null;
  setAccount: (value: LoginOut) => void;
  clearAccount: () => void;
};

// getCookie(Cookie.ACCOUNT_KEY)
//     ? JSON.parse(getCookie(Cookie.ACCOUNT_KEY) || '')
//     : null,

export const useAuthStore = create<AuthStore>((set) => ({
  account: null,
  setAccount: (value) => {
    set({ account: value });
  },
  clearAccount: () => {
    set({ account: null });
    removeCookie(Cookie.ACCOUNT_KEY);
  },
}));
