import { GlobeLockIcon, RssIcon } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-10 md:px-10 lg:px-40 dark:border-gray-800 dark:bg-[#101922]">
      <div className="layout-content-container mx-auto flex max-w-[960px] flex-col gap-8 text-center">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <a
            className="hover:text-primary dark:hover:text-primary text-sm font-medium text-gray-600 transition-colors dark:text-gray-400"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="hover:text-primary dark:hover:text-primary text-sm font-medium text-gray-600 transition-colors dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="hover:text-primary dark:hover:text-primary text-sm font-medium text-gray-600 transition-colors dark:text-gray-400"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a className="hover:text-primary text-gray-400 transition-colors" href="#">
            <GlobeLockIcon />
          </a>
          <a className="hover:text-primary text-gray-400 transition-colors" href="#">
            <RssIcon />
          </a>
        </div>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} givrrs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
