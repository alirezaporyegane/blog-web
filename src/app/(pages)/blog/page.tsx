import { Metadata } from 'next';
import { i18nTranslate } from '@/service/i18n';

export const metadata: Metadata = {
  title: i18nTranslate('blog'),
};

export default function Blog() {
  return (
    <>
      <button className='btn btn-primary'>test</button>
    </>
  );
}
