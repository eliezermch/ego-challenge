import { CarModelList } from '@/components/car-model-list';
import { ModelsMenu } from '@/components/models-menu';

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <main className="max-w-[1920px] mx-auto w-full min-h-screen">
      <h1 className="text-foreground text-[35px] leading-[44px] tracking-[-0.7px] font-bold p-[15px] mt-[35px] mb-[24px] lg:text-[50px] lg:leading-[57px] lg:tracking-[-1px] lg:px-[0px] lg:ml-[148px] lg:text-secondary">
        Descubrí todos los modelos
      </h1>

      <ModelsMenu />
      <CarModelList searchParams={searchParams} />
    </main>
  );
}
