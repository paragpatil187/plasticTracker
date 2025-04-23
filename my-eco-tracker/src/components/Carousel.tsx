"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    title: "Reduce Carbon Footprint",
    description: "Small changes lead to big impact",
    image: "https://images.pexels.com/photos/3735202/pexels-photo-3735202.jpeg",
  },
  {
    title: "Save Energy",
    description: "Efficient energy use for a better future",
    image: "https://images.pexels.com/photos/6412253/pexels-photo-6412253.jpeg",
  },
  {
    title: "Recycle More",
    description: "Give materials a second life",
    image:
      "https://images.pexels.com/photos/31754853/pexels-photo-31754853.jpeg",
  },
];

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="mx-auto my-12 max-w-[1200px]">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[400px]">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
