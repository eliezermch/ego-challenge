import { Metadata } from 'next';
import { getCarModelById } from '@/actions/car';
import { getCarModels } from '@/actions/car-models';
import { CarDetails } from '@/components/car-details';
import { FeaturesCarousel } from '@/components/features-carousel';
import { CarModel, ModelHighlight } from '@/types/car-model';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const models: CarModel[] = await getCarModels();
  return models.map((model) => ({
    id: model.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const model: CarModel = await getCarModelById(id);

  return {
    title: model.name,
    description: model.title + ' - ' + model.description.substring(0, 150),
    openGraph: {
      title: `${model.name} | Ego Challenge`,
      description: model.title,
      images: [
        {
          url: model.photo,
          width: 800,
          height: 600,
          alt: model.name,
        },
      ],
    },
  };
}

export default async function ModelPage({ params }: Props) {
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
