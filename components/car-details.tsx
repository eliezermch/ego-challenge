import { CarModel } from '@/types/car-model';
import Image from 'next/image';

const CarDetails = async ({
  photo,
  name,
  title,
  description,
  type,
}: {
  photo: string;
  name?: string;
  title: string;
  description: string;
  type: 'hero' | 'details';
}) => {
  const fixedStr = (str: string | undefined) => {
    if (str?.length) {
      const s = str?.split('>');
      const newStr = s[1];
      const finalStr = newStr?.split('<');
      const fixedString = finalStr[0];
      return fixedString;
    }
  };

  return (
    <div className="flex flex-col items-center gap-[6px] px-[15px] mb-[40px]">
      <Image
        className="w-full h-[200px] object-contain"
        src={photo}
        alt={title}
        width={345}
        height={200}
      />
      <div className="flex flex-col items-start gap-[12px]">
        {type === 'hero' && (
          <span className="text-secondary text-[20px] font-semibold tracking-[0px] leading-[27px]">
            {name}
          </span>
        )}
        <h1
          className={`text-foreground  font-semibold tracking-[-0.7px] leading-[44px] ${
            type === 'hero' ? 'text-[35px]' : 'text-[20px]'
          }`}
        >
          {title}
        </h1>
        <p className="text-secondary text-[16px] font-normal tracking-[-0.1px] leading-[27px]">
          {fixedStr(description)}
        </p>
      </div>
    </div>
  );
};

export { CarDetails };
