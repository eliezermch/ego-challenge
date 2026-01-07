import Link from 'next/link';
import Image from 'next/image';

interface NavigationMenuProps {
  onClose: () => void;
}

export const NavigationMenu = ({ onClose }: NavigationMenuProps) => {
  const sections = [
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
    {
      links: [
        'Actividades',
        'Servicios al Cliente',
        'Ventas Especiales',
        'Innovación',
        'Prensa',
        'Acerca de...',
      ],
    },
  ];

  return (
    <div className="fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-background z-40 overflow-y-auto">
      <div className="container mx-auto mx-[15px] pt-[20px] flex flex-col items-end">
        <div className="w-full flex justify-end mr-[30px] mb-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-foreground group"
          >
            <span className="text-[14px]">Cerrar</span>
            <Image
              src="/assets/icons/close.svg"
              alt="Cerrar"
              width={15}
              height={15}
              className="group-hover:opacity-70"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-0 w-full text-right">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-end py-[24px] border-b-[1px] border-[#E9E9E9] last:border-none last:bg-[#EFEEEF] mx-[15px] last:mx-[0px] :nth-child(2):mx-[0px] nth-3:border-none"
            >
              <ul className="flex flex-col gap-2 items-end mr-[38px]">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-[#000000] transition-colors text-[20px] font-regular"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
