import { getCarModels } from '@/actions/car-models';
import { CarModel } from '@/types/car-model-list';
import Image from 'next/image';
import Link from 'next/link';

interface CarModelListProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const CarModelList = async ({ searchParams }: CarModelListProps) => {
  const data = await getCarModels();

  let filteredModels = [...data];

  // Filter by Segment
  const segment = searchParams.segment as string;
  if (segment && segment !== 'Todos') {
    filteredModels = filteredModels.filter((model: CarModel) => {
      // Map menu options to API segments
      if (segment === 'Autos') {
        return model.segment === 'Sedan' || model.segment === 'Hatchback';
      }
      if (segment === 'SUVs y Crossovers') {
        return model.segment === 'SUVs';
      }
      if (segment === 'Pickups y Comerciales') {
        return model.segment === 'Pickups y Comerciales';
      }
      return model.segment === segment;
    });
  }

  // Sort Logic
  const sort = searchParams.sort as string;
  if (sort && sort !== 'Nada') {
    filteredModels.sort((a: CarModel, b: CarModel) => {
      switch (sort) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'year_desc':
          return b.year - a.year;
        case 'year_asc':
          return a.year - b.year;
        default:
          return 0;
      }
    });
  }

  const parsePrice = (_price: number) => {
    return new Intl.NumberFormat('de-DE').format(_price);
  };

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[38px] px-[54px] my-[60px] lg:px-[148px] lg:grid-cols-[repeat(auto-fill,minmax(269px,1fr))] lg:gap-[20px] lg:gap-y-[60px]">
        {filteredModels.map((model: CarModel) => (
          <li key={model.id}>
            <Link
              href={`/models/${model.id}`}
              className="flex flex-col items-center gap-[6px] group"
            >
              <h2 className="text-[28px] font-semibold tracking-[-0.65px] leading-[30px] group-hover:text-[#D0021B] transition-colors duration-200">
                {model.name}
              </h2>
              <div className="flex items-center gap-[12px] text-[14px] font-regular tracking-[-0.28px]">
                <p>{model.year}</p>
                {' | '}
                <p>$ {parsePrice(model.price)}</p>
              </div>
              <Image
                className="w-[233px] h-[112px] object-cover lg:hidden"
                src={model.photo}
                alt={model.name}
                width={233}
                height={112}
              />
              <Image
                className="w-[269px] h-[132px] object-cover hidden lg:block"
                src={model.photo}
                alt={model.name}
                width={269}
                height={132}
              />
              <button className="bg-[#191919] text-white rounded-[30px] px-[28px] py-[10px] text-[14px] leading-[16px] font-regular tracking-[0.2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Ver Modelo
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CarModelList };
