'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu } from './navigation-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-[70px] border-b-[1px] border-[#CCCCCC]/40 flex items-center justify-between p-[15px] bg-background relative z-50">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo/Logo.svg"
              alt="Logo"
              width={38}
              height={40}
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="flex items-center gap-[12px] focus:outline-none"
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
        </div>
      </nav>
      {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export { Navbar };
