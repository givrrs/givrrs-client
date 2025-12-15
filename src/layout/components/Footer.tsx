import { GlobeLockIcon, RssIcon } from "lucide-react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101922] px-6 md:px-10 lg:px-40 py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] mx-auto text-center gap-8">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Privacy Policy</a>
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Terms of Service</a>
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Contact</a>
        </div>
        <div className="flex justify-center gap-6">
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <GlobeLockIcon />
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <RssIcon />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-600 text-sm font-normal">© {new Date().getFullYear()} givrrs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
