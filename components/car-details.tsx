'use client';

import Image from 'next/image';

const CarDetails = ({
  photo,
  name,
  title,
  description,
  type,
  className,
  imageWidth,
  imageHeight,
}: {
  photo: string;
  name?: string;
  title: string;
  description: string;
  type: 'hero' | 'details' | 'features';
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
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
    <div
      className={`flex flex-col items-center gap-[6px] px-[15px] ${className} ${
        type === 'hero' || type === 'details'
          ? 'last:mb-[10px] pb-[60px]'
          : 'mb-[20px]'
      }`}
    >
      <Image
        className={`w-full object-contain rounded-[6px]  ${
          type === 'hero' || type === 'details' ? 'mb-[20px]' : 'mb-[4px]'
        }`}
        src={photo}
        alt={title}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="flex flex-col items-start gap-[20px]">
        {type === 'hero' && (
          <span className="text-secondary text-[20px] font-semibold tracking-[0px] leading-[27px]">
            {name}
          </span>
        )}
        <h1
          className={`text-foreground font-semibold tracking-[-0.7px]  ${
            type === 'hero' ? 'text-[35px] leading-[44px]' : 'text-[20px]'
          }`}
        >
          {title}
        </h1>
        <p className="text-secondary text-[16px] font-normal tracking-[-0.1px] leading-[27px]">
          {type !== 'features' ? fixedStr(description) : description}
        </p>
      </div>
    </div>
  );
};

export { CarDetails };
