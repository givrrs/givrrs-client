import { Button } from "@/components/ui/button";
import Logo from "../components/Logo";
import { NavMenu } from "./Navmenu";
import { NavigationSheet } from "./Navsheet";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 z-20 inset-x-4 h-16 bg-background border backdrop-blur-sm max-w-screen-xl mx-auto rounded-full transform transition duration-300 hover:scale-105">
      <div className="h-full flex items-center justify-between mx-auto px-6">
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
