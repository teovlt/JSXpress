import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeChanger } from "./theme-changer";
import { LanguageChanger } from "./language-changer";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={close} className="text-xl font-bold hover:opacity-80 transition-colors">
          YourLogo
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("navbar.home")}
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <ThemeChanger />
          <LanguageChanger />
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="h-8 w-8 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 p-4">
              <SheetTitle />
              <div className="flex items-center justify-between">
                <Link to="/" onClick={close} className="text-xl font-bold hover:opacity-80 transition-colors">
                  YourLogo
                </Link>
              </div>

              <Separator />

              <Link to="/" onClick={close} className="text-base font-medium hover:text-muted-foreground transition-colors">
                {t("navbar.home")}
              </Link>

              <Separator />

              <ThemeChanger />
              <LanguageChanger />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
