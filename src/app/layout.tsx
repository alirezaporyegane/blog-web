import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import './globals.css';
import { Status } from '@/service/api';
import { i18nTranslate } from '@/service/i18n';

const font = localFont({ src: '../../public/fonts/Vazirmatn[wght].ttf' });

export const metadata: Metadata = {
  title: {
    default: i18nTranslate('newsWebsite'),
    template: `%s - ${i18nTranslate('newsWebsite')}`,
  },
  themeColor: 'light',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 0;

export default async function RootLayout({ children }: Props) {
  try {
    await Status.checkStatusHandler(true);

    return (
      <html
        lang={process.env.NEXT_LOCALE}
        dir={process.env.NEXT_LOCALE === 'en' ? 'ltr' : 'rtl'}
        data-theme='light'>
        <body className={`${font.className} flex flex-col min-h-screen`}>
          <Header />

          <main className='h-full'>{children}</main>

          <Footer />
        </body>
      </html>
    );
  } catch (err) {}
}
