'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface GalleryItem {
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: 'The Grand Entrance',
    image: '/images/exterior.jpeg',
  },
  {
    title: 'The Stone Lounge',
    image: '/images/interior_tables.jpeg',
  },
  {
    title: 'Coffee Corner',
    image: '/images/interior_seating.jpeg',
  },
  {
    title: 'The Art Wall',
    image: '/images/interior_mural.jpeg',
  },
  {
    title: 'Quirky Details',
    image: '/images/interior_washbasin.jpeg',
  },
  {
    title: 'Where Magic Happens',
    image: '/images/cafe_counter.jpeg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
};

export default function RestaurantGallery() {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-warm overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Camera className="w-4 h-4" />
            Virtual Tour
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            Step Inside Haveli
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Take a visual tour of our rustic-modern interiors, hand-painted murals, and beautiful corners.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-stone-100 hover:shadow-md cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 45vw, 30vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-serif text-white font-semibold text-sm md:text-base tracking-wide">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
