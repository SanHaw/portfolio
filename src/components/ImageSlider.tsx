"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const images = Array.from({ length: 10 }, (_, i) =>
  `/work/eds/eds00${i + 1}.jpg`
);

export default function ImageSlider({ className = "" }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}
