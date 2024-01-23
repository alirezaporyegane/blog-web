import { i18nTranslate } from '@/service/i18n';
import { Metadata } from 'next';
import FormCmp from './components/FormCmp';
import loginImage from 'public/image/shared/login.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: i18nTranslate('login'),
};

export default function LoginPage() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid justify-center items-center w-full mt-28'>
        <div className='card w-full col-start-2 col-span-2 shadow-xl overflow-hidden grid grid-cols-2'>
          <div className='flex flex-col items-center justify-center px-20 py-24'>
            <div className='card-title flex justify-center items-center mb-10'>
              <h1 className='font-bold text-4xl text-dark'>
                {i18nTranslate('login')}
              </h1>
            </div>

            <FormCmp />
          </div>

          <div className='relative'>
            <Image
              src={loginImage}
              alt={i18nTranslate('login')}
              fill
              priority
              sizes='80'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
