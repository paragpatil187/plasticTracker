interface FeatureCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }
  
  export function FeatureCard({
    title,
    description,
    imageUrl,
    imageAlt,
  }: FeatureCardProps) {
    return (
      <article className="p-8 text-center bg-green-100 rounded-2xl">
        <img
          alt={imageAlt}
          src={imageUrl}
          className="object-cover overflow-hidden mx-auto mt-0 mb-5 w-full aspect-square"
        />
        <h3 className="mb-4 text-2xl text-green-700">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </article>
    );
  }
  