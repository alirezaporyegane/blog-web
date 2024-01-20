import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cookies } from 'next/headers';

const font = localFont({ src: '../../public/fonts/Vazirmatn[wght].ttf' });
import Header from '@/app/components/Layout/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const cookieStore = cookies();
  console.log(cookieStore.get('test'));
  return (
    <html lang='en'>
      <body className={font.className}>
        <Header />

        <main className='flex min-h-screen flex-col items-center justify-between'>
          {children}
        </main>
      </body>
    </html>
  );
}