type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className="max-h-screen">{children}</main>;
}
