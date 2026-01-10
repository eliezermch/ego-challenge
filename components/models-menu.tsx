'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const ModelsMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  // Get initial sort from URL or default
  const currentSort = searchParams.get('sort') || 'Nada';
  const [selectedSort, setSelectedSort] = useState(currentSort);

  // Sync state with URL changes
  useEffect(() => {
    setSelectedSort(searchParams.get('sort') || 'Nada');
  }, [searchParams]);

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'Todos' || value === 'Nada') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setActiveFilter(false);
    updateQueryParams('segment', option);
  };

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setActiveSort(false);
    updateQueryParams('sort', option);
  };

  const filterOptions = [
    'Todos',
    'Autos',
    'Pickups y Comerciales',
    'SUVs y Crossovers',
  ];

  const sortOptions = [
    { value: 'Nada', label: 'Nada' },
    {
      value: 'price_asc',
      label: (
        <>
          De <strong>menor</strong> a <strong>mayor</strong> precio
        </>
      ),
    },
    {
      value: 'price_desc',
      label: (
        <>
          De <strong>mayor</strong> a <strong>menor</strong> precio
        </>
      ),
    },
    {
      value: 'year_desc',
      label: (
        <>
          Más <strong>nuevos</strong> primero
        </>
      ),
    },
    {
      value: 'year_asc',
      label: (
        <>
          Más <strong>viejos</strong> primero
        </>
      ),
    },
  ];

  return (
    <div className="w-auto flex justify-between items-start sm:items-center mx-[15px] pb-[15px] border-b-[1px] border-[#D8D8D8] relative lg:mx-[148px]">
      {/* Filter Menu */}
      {/* Filter Menu - Mobile */}
      <div className="relative lg:hidden">
        <button
          onClick={() => setActiveFilter(!activeFilter)}
          className="flex items-center justify-center gap-[8px] py-2 focus:outline-none"
        >
          <span
            className={`text-[14px] leading-[14px] font-semibold tracking-[0.08px] ${
              activeFilter ? 'text-[#373737]' : 'text-foreground'
            }`}
          >
            Filtrar por
          </span>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Dropdown"
            width={6}
            height={7}
            className={`transition-transform duration-200 ${
              activeFilter ? 'rotate-180' : ''
            }`}
          />
        </button>

        {activeFilter && (
          <div className="absolute top-full left-0 mt-[10px] w-[158px] h-[145px] bg-white shadow-[2px_8px_20px_0px_rgba(0,0,0,0.14)] rounded-[6px] z-50 flex flex-col justify-between">
            {filterOptions.map((option, index) => (
              <button
                key={index}
                className={`text-left pl-[8px] py-[10px] border-b-[1px] border-[#D8D8D8] last:border-b-0 text-foreground hover:bg-[#F7F7F7] hover:font-bold ${
                  selectedFilter === option ? 'bg-[#D1D6D634]' : ''
                }`}
                onClick={() => handleFilterSelect(option)}
              >
                <p className="text-[10px] font-regular tracking-[-0.1px]">
                  {option}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Menu - Desktop */}
      <div className="hidden lg:flex items-center gap-[20px]">
        <span className="text-[14px] font-semibold text-[#373737] tracking-[0.08px] mr-[20px]">
          Filtrar por
        </span>
        <div className="flex items-center gap-[24px]">
          {filterOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleFilterSelect(option)}
              className={`px-[16px] py-[6px] rounded-[18px] text-[14px] transition-all duration-200 hover:bg-[#F7F7F7] ${
                selectedFilter === option
                  ? 'bg-[#F7F7F7] text-[#373737] font-medium'
                  : 'text-foreground hover:text-[#373737]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Menu */}
      <div className="relative">
        <button
          onClick={() => setActiveSort(!activeSort)}
          className="flex items-center gap-[8px] py-2 focus:outline-none"
        >
          <span
            className={`text-[14px] leading-[14px] font-semibold tracking-[0.08px] ${
              activeSort ? 'text-[#373737]' : 'text-foreground'
            }`}
          >
            Ordenar por
          </span>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Dropdown"
            width={6}
            height={7}
            className={`transition-transform duration-200 ${
              activeSort ? 'rotate-180' : ''
            }`}
          />
        </button>

        {activeSort && (
          <div className="absolute top-full right-0 mt-[10px] w-[158px] h-[182px] bg-white shadow-[2px_8px_20px_0px_rgba(0,0,0,0.14)] rounded-[6px] z-50 flex flex-col justify-between">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                className={`text-left pl-[8px] py-[10px] border-b-[1px] border-[#D8D8D8] last:border-b-0 text-[14px] text-foreground hover:bg-[#F7F7F7] hover:font-bold ${
                  selectedSort === option.value ? 'bg-[#D1D6D634]' : ''
                }`}
                onClick={() => handleSortSelect(option.value)}
              >
                <p className="text-[10px] font-regular tracking-[-0.1px]">
                  {option.label}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { ModelsMenu };
