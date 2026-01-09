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
  imageWidthMobile,
  imageHeightMobile,
  index = 0,
}: {
  photo: string;
  name?: string;
  title: string;
  description: string;
  type: 'hero' | 'details' | 'features';
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageWidthMobile?: number;
  imageHeightMobile?: number;
  index?: number;
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

  const getDesktopLayout = () => {
    if (type === 'hero')
      return 'lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:mt-[80px] lg:gap-[80px]';
    if (type === 'details') {
      return index % 2 === 0
        ? 'lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:gap-[120px]'
        : 'lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:gap-[120px]';
    }
    return '';
  };

  return (
    <div
      className={`flex flex-col items-center gap-[6px] px-[15px] mt-[40px] ${getDesktopLayout()} ${className} ${
        type === 'hero' || type === 'details'
          ? 'last:mb-[10px] pb-[60px]'
          : 'mb-[20px]'
      }`}
    >
      <div
        className={`${type === 'hero' || type === 'details' ? 'lg:w-1/2' : ''}`}
      >
        <Image
          className={`w-full object-contain rounded-[6px] lg:hidden ${
            type === 'hero' || type === 'details'
              ? 'mb-[20px] lg:mb-0'
              : 'mb-[4px]'
          }`}
          src={photo}
          alt={title}
          width={imageWidthMobile}
          height={imageHeightMobile}
        />
        <Image
          className={`w-full object-contain rounded-[6px] hidden lg:block ${
            type === 'hero' || type === 'details'
              ? 'mb-[20px] lg:mb-0'
              : 'mb-[4px]'
          }`}
          src={photo}
          alt={title}
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <div
        className={`flex flex-col items-start gap-[20px] ${
          type === 'hero' || type === 'details' ? 'lg:w-1/2' : ''
        } ${type === 'details' && index % 2 === 0 ? 'pl-[40px]' : 'pr-[40px]'}`}
      >
        {type === 'hero' && (
          <span className="text-secondary text-[20px] font-semibold tracking-[0px] leading-[27px]">
            {name}
          </span>
        )}
        <h1
          className={`text-foreground font-semibold tracking-[-0.7px] ${
            type === 'hero'
              ? 'text-[35px] leading-[44px] lg:text-[50px] lg:leading-[57px] lg:text-secondary'
              : 'text-[20px]'
          } ${type === 'details' ? 'lg:text-[20px]' : ''}`}
        >
          {title}
        </h1>
        <p
          className={`text-secondary text-[16px] font-normal tracking-[-0.1px] leading-[27px]`}
        >
          {type !== 'features' ? fixedStr(description) : description}
        </p>
      </div>
    </div>
  );
};

export { CarDetails };
