'use client';
import { i18nTranslate } from '@/service/i18n';
import { LoginIn, LoginOut } from '@/types/account';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Account } from '@/service/api';
import { setCookie } from '@/utils/cookie';
import { Cookie } from '@/types/cookies';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function FormCmp() {
  const setAccount = useAuthStore((state) => state.setAccount);
  const router = useRouter();
  const [keepInStorage, setKeepInStorage] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<LoginIn>({
    mode: 'onChange',
  });

  async function onSubmit(data: LoginIn) {
    try {
      data.uniqueId = uuidv4();
      const res = await Account.loginHandler(data, true);
      setAccount(res);
      router.push('/');
      console.log(keepInStorage);
      if (keepInStorage) setCookie<LoginOut>(Cookie.ACCOUNT_KEY, res, res.ttl);
    } catch (err) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-10'>
        <label htmlFor='phoneNumber' className='pb-4'>
          {i18nTranslate('phoneNumber')}
        </label>

        <input
          id='phoneNumber'
          type='text'
          className='input input-bordered w-full mb-6 mt-2'
          {...register('phoneNumber')}
        />

        <label htmlFor='password' className='pb-4'>
          {i18nTranslate('password')}
        </label>

        <input
          id='password'
          type='text'
          className='input input-bordered w-full mt-2'
          {...register('password')}
        />
      </div>

      <div className='flex justify-between items-center mb-10'>
        <Link href='/forget-password' className='link-hover link-primary'>
          {i18nTranslate('forgetPassword')} ؟
        </Link>

        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>{i18nTranslate('rememberMe')}</span>

            <input
              type='checkbox'
              checked={keepInStorage}
              className='checkbox checkbox-primary ms-3'
              onChange={(e) => setKeepInStorage(e.target.checked)}
            />
          </label>
        </div>
      </div>

      <button className='btn btn-primary btn-block rounded-full' type='submit'>
        {i18nTranslate('send')}
      </button>
    </form>
  );
}
