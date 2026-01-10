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
      return 'max-w-[1920px] mx-auto lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:mt-[60px] lg:gap-[80px]';
    if (type === 'details') {
      return index % 2 === 0
        ? 'max-w-[1920px] mx-auto lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:gap-[120px]'
        : 'max-w-[1920px] mx-auto lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:px-[148px] lg:gap-[120px]';
    }
    return '';
  };

  return (
    <div
      className={`flex flex-col ${getDesktopLayout()} ${className} ${
        type === 'hero' || type === 'details'
          ? 'px-[15px] mt-[40px] last:mt-[0px] last:mb-[10px] lg:last:mb-[60px] pb-[60px] gap-[6px]'
          : 'px-[15px] lg:px-[0px] lg:mt-[0px] mb-[20px] gap-[16px]'
      }`}
    >
      <div
        className={`${type === 'hero' || type === 'details' ? 'lg:w-1/2' : ''}`}
      >
        <Image
          className={`w-full object-contain rounded-[6px] lg:hidden ${
            type === 'hero' || type === 'details'
              ? 'mb-[20px] lg:mb-0'
              : 'mb-[4px] w-full h-full'
          }`}
          src={photo}
          alt={title}
          width={imageWidthMobile}
          height={imageHeightMobile}
        />
        <Image
          className={`w-full object-cover rounded-[6px] hidden lg:block ${
            type === 'hero' || type === 'details'
              ? 'mb-[20px] lg:mb-0'
              : 'mb-[4px] w-[268px] h-[146px]'
          }`}
          src={photo}
          alt={title}
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <div
        className={`flex flex-col items-start  ${
          type === 'hero' || type === 'details'
            ? 'lg:w-1/2 gap-[20px]'
            : 'gap-[16px]'
        } ${type === 'details' && index % 2 === 0 ? 'lg:pl-[40px]' : ''}`}
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
