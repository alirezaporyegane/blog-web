import Image from 'next/image';
import NavLink from './NavLink';
import { i18nTranslate } from '@/service/i18n';
import Logo from 'public/image/shared/Logo.svg';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function Header() {
  return (
    <header className='mb-4 flex justify-between container mx-auto px-4 items-center'>
      <Image src={Logo} alt={i18nTranslate('newsWebsite')} />
      <nav className=' flex justify-center items-center py-5'>
        <NavLink title={i18nTranslate('home')} link='/' />

        <NavLink title={i18nTranslate('blog')} link='/blog' />

        <NavLink title={i18nTranslate('aboutUs')} link='/about-us' />
      </nav>

      <label className='cursor-pointer grid place-items-center'>
        <input
          type='checkbox'
          value='dark'
          className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
        />

        <MdLightMode className='col-start-1 row-start-1 stroke-base-100 fill-base-100' />

        <MdDarkMode className='col-start-2 row-start-1 stroke-base-100 fill-base-100' />
      </label>
    </header>
  );
}
