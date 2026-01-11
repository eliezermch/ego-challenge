import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const NavigationMenu = ({ onClose, isOpen }: NavigationMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <div
      className={`fixed top-[70px] right-0 bottom-0 left-0 z-40 flex justify-end transition-all duration-300 ${
        isOpen
          ? 'pointer-events-auto visible'
          : 'pointer-events-none invisible delay-300'
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#191919] transition-opacity duration-300 ${
          isOpen ? 'opacity-90' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full lg:w-[400px] h-full bg-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-[20px] lg:pt-[31px] lg:pr-[42px]">
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

        <div className="flex-1 flex flex-col items-end justify-center pr-[36px] lg:pr-[64px] pb-[40px] gap-[35px]">
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
