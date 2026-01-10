import { getCarModelById } from '@/actions/car';
import { CarDetails } from '@/components/car-details';
import { FeaturesCarousel } from '@/components/features-carousel';
import { CarModel, ModelHighlight } from '@/types/car-model';

export default async function ModelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model: CarModel = await getCarModelById(id);
  return (
    <main className="">
      <CarDetails
        photo={model.photo}
        name={model.name}
        title={model.title}
        description={model.description}
        type="hero"
        imageWidth={559}
        imageHeight={320}
        imageWidthMobile={345}
        imageHeightMobile={200}
      />
      <FeaturesCarousel
        items={[
          ...model.model_features,
          ...model.model_features,
          ...model.model_features,
          ...model.model_features,
        ]}
      />
      {model.model_highlights.map((feature: ModelHighlight, index: number) => (
        <CarDetails
          key={index}
          index={index}
          photo={feature.image}
          title={feature.title}
          description={feature.content}
          type="details"
          imageWidthMobile={345}
          imageHeightMobile={200}
          imageWidth={559}
          imageHeight={320}
        />
      ))}
    </main>
  );
}
