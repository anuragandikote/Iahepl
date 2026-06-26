'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type CarouselItem = {
  title: string;
  subtitle: string;
  image: string;
};

type HeroCarouselProps = {
  items: CarouselItem[];
};

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">

      {/* Slides */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <div className="w-16 h-1 bg-yellow-400 rounded mb-4" />

            <h2 className="text-3xl md:text-5xl font-bold italic mb-4">
              {item.title}
            </h2>

            <p className="text-xl md:text-2xl text-yellow-200">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}