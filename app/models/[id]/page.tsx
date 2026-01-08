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
  console.log(model);
  return (
    <main>
      <CarDetails
        photo={model.photo}
        name={model.name}
        title={model.title}
        description={model.description}
        type="hero"
        imageWidth={345}
        imageHeight={200}
      />
      <FeaturesCarousel items={model.model_features} />
      {model.model_highlights.map((feature: ModelHighlight, index: number) => (
        <CarDetails
          key={index}
          photo={feature.image}
          title={feature.title}
          description={feature.content}
          type="details"
          imageWidth={345}
          imageHeight={200}
        />
      ))}
    </main>
  );
}
