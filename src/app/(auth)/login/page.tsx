import { i18nTranslate } from '@/service/i18n';
import { Metadata } from 'next';
import FormCmp from './components/FormCmp';
import Image from 'next/image';
import LoginIcon from 'public/image/shared/login-logo.png';

export const metadata: Metadata = {
  title: i18nTranslate('login'),
};

export default function LoginPage() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid justify-center items-center w-full xl:grid-cols-3 min-h-screen'>
        <div className='card w-full col-start-2 col-span-1 shadow-xl overflow-hidden'>
          <div className='flex flex-col items-center justify-center px-9 py-11'>
            <div className='card-title flex justify-center items-center mb-10 flex-col'>
              <Image
                src={LoginIcon}
                alt={i18nTranslate('login')}
                width='100'
                className='object-contain'
              />

              <h1 className='font-bold text-4xl text-dark'>
                {i18nTranslate('login')}
              </h1>
            </div>

            <FormCmp />
          </div>
        </div>
      </div>
    </div>
  );
}
