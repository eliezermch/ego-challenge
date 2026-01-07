import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="h-[70px] border-b-[1px] border-[#CCCCCC]/40 flex items-center justify-between p-[15px]">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/Logo.svg"
            alt="Logo"
            width={38}
            height={40}
          />
        </Link>

        <div className="flex items-center gap-[12px]">
          <span className="hidden md:block text-[14px] font-regular text-foreground">
            Menú
          </span>
          <Image
            src="/assets/icons/Gray.svg"
            alt="Logo"
            width={28}
            height={20}
          />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
