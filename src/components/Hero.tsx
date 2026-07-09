'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-24 bg-white dark:bg-black transition-colors duration-300" id="home">
      {/* Strict 16:9 aspect ratio container matching the image dimensions to prevent zoom or crop */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/images/hero_banner.jpg"
          alt="Haveli Cafe Banner"
          fill
          priority
          className="object-fill"
        />
      </div>
    </section>
  );
}
