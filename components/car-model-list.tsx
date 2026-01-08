import { getCarModels } from '@/actions/car-models';
import { CarModel } from '@/types/car-model';
import Image from 'next/image';

const CarModelList = async () => {
  const data = await getCarModels();

  const parsePrice = (_price: number) => {
    return new Intl.NumberFormat('de-DE').format(_price);
  };

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[38px] px-[54px] my-[60px]">
        {data.map((model: CarModel) => (
          <li key={model.id} className="flex flex-col items-center gap-[6px]">
            <h2 className="text-[28px] font-semibold tracking-[-0.65px] leading-[30px]">
              {model.name}
            </h2>
            <div className="flex items-center gap-[12px]">
              <p>{model.year}</p>
              {' | '}
              <p>$ {parsePrice(model.price)}</p>
            </div>
            <Image
              className="w-[233px] h-[112px] object-cover"
              src={model.photo}
              alt={model.name}
              width={233}
              height={112}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CarModelList };
