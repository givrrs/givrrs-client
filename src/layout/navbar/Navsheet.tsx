import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Logo from '../components/Logo';
import { NavMenu } from './Navmenu';

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border p-4">
        <Logo />
        <NavMenu orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
