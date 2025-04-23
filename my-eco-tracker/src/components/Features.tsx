import { FeatureCard } from "./FeatureCard";

export function Features() {
  const features = [
    {
      title: "How It Works",
      description:
        "Log your eco-friendly product usage and earn points for each sustainable choice.",
      imageUrl:
        "https://images.pexels.com/photos/3735202/pexels-photo-3735202.jpeg",
      imageAlt: "How It Works Icon",
    },
    {
      title: "Earn Rewards",
      description:
        "Redeem your points for exclusive eco-friendly products and discounts.",
      imageUrl:
        "https://images.pexels.com/photos/6412253/pexels-photo-6412253.jpeg",
      imageAlt: "Rewards Icon",
    },
    {
      title: "Join Community",
      description:
        "Connect with other eco-warriors and share your sustainable journey.",
      imageUrl:
        "https://images.pexels.com/photos/31754853/pexels-photo-31754853.jpeg",
      imageAlt: "Community Icon",
    },
  ];

  return (
    <div className="grid gap-8 mb-10 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
