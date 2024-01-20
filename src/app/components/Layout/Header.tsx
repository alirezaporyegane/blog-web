import NavLink from './NavLink';

export default function Header() {
  return (
    <header className='bg-slate-200'>
      <nav className=' flex justify-center items-center py-6'>
        <NavLink title='Home' link='/' />

        <NavLink title='Blog' link='/blog' />

        <NavLink title='About us' link='/about-us' />
      </nav>
    </header>
  );
}
