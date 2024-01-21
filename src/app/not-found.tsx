import { i18nTranslate } from '@/service/i18n';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: i18nTranslate('notFoundPage'),
};

export default function NotFoundPage() {
  return (
    <div className='flex justify-center items-center flex-col w-full mt-24'>
      <h1 className='font-bold text-3xl mb-5'>
        {i18nTranslate('notFoundPage')}
      </h1>

      <Link href='/' className='btn btn-primary' locale='en'>
        {i18nTranslate('backToHome')}
      </Link>
    </div>
  );
}
