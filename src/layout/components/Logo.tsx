import Image from 'next/image';
import GivrrsIcon from '@/app/assets/logo-icon.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="#hero">
      <div className="flex items-center gap-2 font-mono text-lg font-black">
        <figure className="relative h-6 w-6">
          <Image src={GivrrsIcon} alt="givrrs logo" sizes="100" />
        </figure>
        <p>givrrs</p>
      </div>
    </Link>
  );
};

export default Logo;
