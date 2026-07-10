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
    <section 
      style={{ backgroundColor: '#F59E0B' }}
      className="py-16 md:py-24 px-4 overflow-hidden" 
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Gallery on Left (col-span-8), Food Image on Right (col-span-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (col-span-8): Header and 2-Column Grid */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            
            {/* Section Header */}
            <div className="text-center lg:text-left space-y-4">
              <div className="w-full flex justify-center lg:justify-start">
                <span className="text-xs font-bold text-stone-900 bg-white/20 border border-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                  Virtual Tour
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                Step Inside Haveli
              </h2>
              <div className="w-16 h-1 bg-white/60 rounded-full mx-auto lg:mx-0 mb-4" />
              <p className="font-sans text-white/90 text-sm md:text-base max-w-lg mx-auto lg:mx-0 font-semibold">
                Take a visual tour of our rustic-modern interiors, hand-painted murals, and beautiful corners.
              </p>
            </div>

            {/* Grid (2 columns for neat split layout) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 gap-4"
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

          {/* Right Column (col-span-4): Delicious Gourmet Food Handi (Butter Chicken) */}
          <div className="lg:col-span-4 flex justify-center items-center min-h-[300px] md:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1.15, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-[400px] pointer-events-none select-none lg:scale-110"
            >
              <Image
                src="/images/transparent_handi.png"
                alt="Delicious Indian Gourmet Curry Handi"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
