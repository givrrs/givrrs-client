import Navbar from '@/layout/navbar/Navbar';
import Footer from '@/layout/components/Footer';

export default function LandingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
