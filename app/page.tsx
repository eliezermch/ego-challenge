import { ModelsMenu } from '@/components/models-menu';

export default function Home() {
  return (
    <main className="w-full h-full">
      <h1 className="text-foreground text-[35px] leading-[44px] tracking-[-0.7px] font-bold p-[15px] mt-[35px] mb-[24px]">
        Descubrí todos los modelos
      </h1>

      <ModelsMenu />
    </main>
  );
}
