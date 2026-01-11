import { Metadata } from 'next';
import { Suspense } from 'react';
import { CarModelList } from '@/components/car-model-list';
import { ModelsMenu } from '@/components/models-menu';

export const metadata: Metadata = {
  title: 'Ego Challenge | Modelos',
  description:
    'Descubrí todos los modelos que tenemos para vos. Encontrá tu próximo auto, pickup o SUV.',
};

import { getCarModels } from '@/actions/car-models';

export default async function Home() {
  const carModels = await getCarModels();

  return (
    <main className="max-w-[1920px] mx-auto w-full min-h-screen">
      <h1 className="text-foreground text-[35px] leading-[44px] tracking-[-0.7px] font-bold p-[15px] mt-[35px] mb-[24px] lg:text-[50px] lg:leading-[57px] lg:tracking-[-1px] lg:px-[0px] lg:ml-[148px] lg:text-secondary lg:mt-[60px] lg:mb-[50px]">
        Descubrí todos los modelos
      </h1>

      <Suspense fallback={<div className="h-[60px] w-full" />}>
        <ModelsMenu />
      </Suspense>
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <CarModelList initialModels={carModels} />
      </Suspense>
    </main>
  );
}
