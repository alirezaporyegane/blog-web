import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main className="h-full">{children}</main>

      <Footer />
    </>
  );
}
