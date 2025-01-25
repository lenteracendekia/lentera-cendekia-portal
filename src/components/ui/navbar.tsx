"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { HTMLAttributes, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BRAND_TITLE } from "@/constants/brand";
import { DEFAULT_ROUTE } from "@/constants/routes";
import { NAVIGATIONS } from "@/constants/navigations";

export const Navbar: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  const params = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const navigations = useMemo(() => {
    // if (params === "/") {
    return (
      <div className="hidden lg:flex lg:gap-6">
        {NAVIGATIONS.map((nav, index) => {
          if (params === "/") {
            return (
              <div key={index} className="cursor-pointer" onClick={nav.action}>
                <span className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                  {nav.title}
                </span>
              </div>
            );
          } else {
            return (
              <Link href={DEFAULT_ROUTE} key={index}>
                <span className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                  {nav.title}
                </span>
              </Link>
            );
          }
        })}
      </div>
    );
  }, [params]);

  return (
    <nav className="fixed top-0 z-50 w-[100dvw] px-8 py-4 bg-white drop-shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <Link href={DEFAULT_ROUTE}>
          <Brand title={BRAND_TITLE} />
        </Link>

        {/* Desktop Nav's */}
        {navigations}

        {/* Mobile Sheet's */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Navigasi</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="hidden" />
            <div className="grid py-4">
              {navigations}
              <Button className="mt-4">Daftar Sekarang</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
