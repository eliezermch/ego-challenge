'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ModelFeature, ModelHighlight } from '@/types/car-model';
import { CarDetails } from './car-details';

interface FeaturesCarouselProps {
  items: ModelFeature[];
}

export const FeaturesCarousel = ({ items }: FeaturesCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="w-full bg-[#F7F7F7] pt-[50px] pb-[50px] mb-[60px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((feature, index) => (
            <div className="flex-[0_0_90%] min-w-0 last:pr-4" key={index}>
              <CarDetails
                photo={feature.image}
                title={feature.name}
                description={feature.description}
                type="features"
                className="mb-0"
                imageWidth={330}
                imageHeight={181}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === selectedIndex
                ? 'w-8 h-2 bg-[#707070] rounded-full'
                : 'w-2 h-2 bg-[#D8D8D8] rounded-full'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
