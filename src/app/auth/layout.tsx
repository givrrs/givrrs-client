import Image from 'next/image';
import GvsPeopleInCircleImage from '@/app/assets/auth/people-in-circles.png';
import Logo from '@/layout/components/Logo';

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative flex h-lvh w-full flex-col justify-start overflow-clip md:flex-row">
      <div className="lmd:eft-6 absolute top-3 left-3 md:top-6">
        <Logo />
      </div>
      <figure className="flex w-full items-center justify-center bg-green-100 md:w-[60%]">
        <Image
          src={GvsPeopleInCircleImage}
          alt="illustration of people in circle"
          className="scale-[.8] object-center"
          sizes="100vw"
        />
      </figure>
      <div className="flex w-full flex-col items-center justify-start gap-8 overflow-scroll px-6 py-6 md:w-[40%] md:py-28">
        {children}
      </div>
    </section>
  );
}
