import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { ThemeChanger } from "./theme-changer";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router-dom";
import { LanguageChanger } from "./language-changer";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Main Nav */}
      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-black dark:text-white hover:opacity-90 transition" onClick={closeMenu}>
                YourLogo
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/"
                  className="py-2 text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-neutral-300 transition"
                >
                  Home
                </Link>
                <Separator orientation="vertical" className="h-6" />
                <ThemeChanger />
                <LanguageChanger />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-50 relative">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-white hover:text-black dark:hover:text-neutral-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay + Menu */}
      <div className={`fixed inset-0 z-40 ${isOpen ? "block" : "hidden"} z-50`}>
        {/* Backdrop */}
        <div className=" absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300" onClick={closeMenu} />

        {/* Drawer */}
        <div
          className={` absolute top-0 right-0 h-full w-64 bg-white dark:bg-black border-l border-gray-200 dark:border-neutral-800 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl font-bold text-black dark:text-white hover:opacity-90 transition">
                  YourLogo
                </Link>
              </div>
              <X className="h-6 w-6 cursor-pointer" onClick={closeMenu} />
            </div>

            <Link
              to="/"
              onClick={closeMenu}
              className="text-base font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-neutral-300 transition"
            >
              Home
            </Link>
            <Separator />
            <ThemeChanger />
            <LanguageChanger />
          </div>
        </div>
      </div>
    </>
  );
};
