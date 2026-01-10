'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavigationMenu } from './navigation-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-[70px] border-b-[1px] border-[#CCCCCC]/40 flex items-center justify-between p-[15px] lg:px-[32px] bg-background relative z-50">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[80px]">
            <Link href="/" className="flex items-center hover:cursor-pointer">
              <Image
                src="/assets/logo/Logo.svg"
                alt="Logo"
                width={38}
                height={40}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-[70px]">
              <Link
                href="/"
                className={`h-full flex items-center px-[32px] text-[14px] font-semibold tracking-[0.08px] transition-all duration-200 border-b-4 ${
                  pathname === '/'
                    ? 'text-[#D0021B] border-[#D0021B]'
                    : 'text-[#191919] border-transparent hover:text-[#D0021B]'
                }`}
              >
                Modelos
              </Link>
              <Link
                href="#"
                className={`h-full flex items-center px-[20px] text-[14px] font-semibold tracking-[0.08px] transition-all duration-200 border-b-4 ${
                  pathname.startsWith('/models/')
                    ? 'text-[#D0021B] border-[#D0021B]'
                    : 'text-[#191919] border-transparent cursor-default'
                }`}
                aria-disabled={!pathname.startsWith('/models/')}
              >
                Ficha de modelo
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="flex items-center gap-[12px] focus:outline-none lg:hidden"
          >
            <span className="hidden md:block text-[14px] font-regular text-foreground">
              Menú
            </span>
            <Image
              src="/assets/icons/Gray.svg"
              alt="Menu"
              width={28}
              height={20}
            />
          </button>

          <button
            onClick={toggleMenu}
            className="hidden lg:flex items-center gap-[12px] focus:outline-none"
          >
            <span className="text-[14px] font-regular text-foreground">
              Menú
            </span>
            <Image
              src="/assets/icons/Gray.svg"
              alt="Menu"
              width={28}
              height={20}
            />
          </button>
        </div>
      </nav>
      {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export { Navbar };
