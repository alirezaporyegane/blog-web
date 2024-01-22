import Link from 'next/link';

type Props = {
  title: string;
  link: string;
};

export default function NavLink({ link, title }: Props) {
  return (
    <Link className='text-dark px-5 font-semibold' href={link}>
      {title}
    </Link>
  );
}
