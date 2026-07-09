'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-24 bg-white dark:bg-black transition-colors duration-300" id="home">
      {/* Full-width responsive banner wrapper */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] xl:aspect-[21/9] overflow-hidden shadow-sm">
        <Image
          src="/images/hero_banner.jpg"
          alt="Haveli Cafe Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle overlay gradient at the bottom to blend with section background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
