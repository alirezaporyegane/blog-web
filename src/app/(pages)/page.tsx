import { i18nTranslate } from '../../service/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: i18nTranslate('newsWebsite'),
};

export default function HomePage() {
  return <>home</>;
}
