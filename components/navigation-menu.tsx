import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationMenuProps {
  onClose: () => void;
}

export const NavigationMenu = ({ onClose }: NavigationMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const mainSections = [
    {
      links: [
        'Modelos',
        'Servicios y Accesorios',
        'Financiación',
        'Reviews y Comunidad',
      ],
    },
    {
      links: [
        'Toyota Mobility Service',
        'Toyota Gazoo Racing',
        'Toyota Híbridos',
      ],
    },
    {
      links: ['Concesionarios', 'Test Drive', 'Contacto'],
    },
  ];

  const footerLinks = [
    'Actividades',
    'Servicios al Cliente',
    'Ventas Especiales',
    'Innovación',
    'Prensa',
    'Acerca de...',
  ];

  return (
    <div className="fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] z-40 flex">
      <div
        className="flex-1 bg-[#191919] opacity-[0.9] cursor-pointer"
        onClick={onClose}
      />

      <div className="w-full lg:w-[400px] h-full bg-white flex flex-col overflow-y-auto">
        <div className="flex justify-end p-[20px] lg:pt-[31px] lg:pr-[36px]">
          <button
            onClick={onClose}
            className="flex items-center gap-[10px] text-foreground group focus:outline-none"
          >
            <span className="text-[14px] font-regular tracking-[0.08px]">
              Cerrar
            </span>
            <Image
              src="/assets/icons/close.svg"
              alt="Cerrar"
              width={16}
              height={16}
              className="group-hover:opacity-70 transition-opacity"
            />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-end justify-center pr-[36px] pb-[40px] gap-[35px]">
          {mainSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 items-end w-full ${
                index !== mainSections.length - 1
                  ? 'border-b border-[#E9E9E9] pb-[35px]'
                  : ''
              }`}
            >
              <ul className="flex flex-col gap-[10px] items-end">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-right">
                    <Link
                      href="#"
                      className="text-[#191919] text-[20px] font-regular tracking-[0.2px] hover:text-[#D0021B] transition-colors block leading-[30px]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#EFEEEF] py-[40px] pr-[36px] flex flex-col items-end">
          <ul className="flex flex-col gap-[8px] items-end">
            {footerLinks.map((link, index) => (
              <li key={index} className="text-right">
                <Link
                  href="#"
                  className="text-[#191919] text-[20px] font-normal tracking-[0.08px] hover:text-[#D0021B] transition-colors block leading-[28px]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
