import { Button } from '@/components/ui/button';
import Logo from '../components/Logo';
import { NavMenu } from './Navmenu';
import { NavigationSheet } from './Navsheet';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-background fixed inset-x-4 top-6 z-20 mx-auto h-16 max-w-screen-xl transform rounded-full border backdrop-blur-sm transition duration-300 hover:scale-105">
      <div className="mx-auto flex h-full items-center justify-between px-6">
        <Logo />
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <Button>
            Join waitlist
            <ArrowUpRight className="size-4" />
          </Button>

          <div className="hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
