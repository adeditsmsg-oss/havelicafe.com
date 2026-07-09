'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';

interface MemoryItem {
  src: string;
  alt: string;
  captionEn: string;
  captionBn: string;
  width: number;
  height: number;
}

const memories: MemoryItem[] = [
  {
    src: '/images/interior_tables.jpeg',
    alt: 'Stone walls with tire stools and green grass panels at Haveli Cafe',
    captionEn: 'Our Cozy Corner',
    captionBn: 'আমাদের আরামের কোণ',
    width: 600,
    height: 750,
  },
  {
    src: '/images/interior_mural.jpeg',
    alt: 'DSLR camera girl mural with wooden chairs',
    captionEn: 'Art Meets Appetite',
    captionBn: 'শিল্প আর স্বাদ',
    width: 600,
    height: 450,
  },
  {
    src: '/images/interior_seating.jpeg',
    alt: 'Best Coffee Made for You wall art with cozy black sofas',
    captionEn: 'Coffee Lounge',
    captionBn: 'কফি লাউঞ্জ',
    width: 600,
    height: 500,
  },
  {
    src: '/images/food_wrap_drink.jpeg',
    alt: 'Shawarma wraps with rainbow layered mocktail',
    captionEn: 'Weekend Vibes',
    captionBn: 'উইকেন্ড মুড',
    width: 600,
    height: 600,
  },
  {
    src: '/images/beverage_coffee.jpeg',
    alt: 'Creamy cold coffee with vanilla ice cream scoop',
    captionEn: 'Morning Fuel',
    captionBn: 'সকালের এনার্জি',
    width: 600,
    height: 700,
  },
  {
    src: '/images/food_chilli_chicken.jpeg',
    alt: 'Sizzling spicy chilli chicken gravy plate',
    captionEn: 'Spicy Evenings',
    captionBn: 'ঝাল সন্ধ্যা',
    width: 600,
    height: 450,
  },
  {
    src: '/images/interior_wall_decor.jpeg',
    alt: 'Heritage wall shelf with horse statues and HAVELI text',
    captionEn: 'Heritage Decor',
    captionBn: 'ঐতিহ্যবাহী সাজসজ্জা',
    width: 600,
    height: 550,
  },
  {
    src: '/images/cafe_counter.jpeg',
    alt: 'Haveli Cafe bar counter with white geometric patterns',
    captionEn: 'Behind the Counter',
    captionBn: 'কাউন্টারের পেছনে',
    width: 600,
    height: 400,
  },
  {
    src: '/images/beverage_mocktail.jpeg',
    alt: 'Colorful layered sunset mocktail with cucumber garnish',
    captionEn: 'Color Me Happy',
    captionBn: 'রঙিন মুহূর্ত',
    width: 600,
    height: 700,
  },
];

export default function CafeMemories() {
  const [selectedImg, setSelectedImg] = useState<MemoryItem | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="memories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Gallery • ফটো গ্যালারি
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Cafe{' '}
            <span className="underline decoration-brand-amber/60 decoration-4 underline-offset-4">
              Memories
            </span>{' '}
            📸
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            Every visit creates a story. আমাদের ক্যাফের সেরা মুহূর্তগুলো এক নজরে দেখুন।
          </p>
        </motion.div>

        {/* Masonry Grid using CSS columns */}
        <div className="columns-2 md:columns-3 gap-4">
          {memories.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="mb-4 break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImg(item)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 30vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Camera className="w-3 h-3 text-brand-amber" />
                    <span className="font-sans text-[9px] uppercase tracking-widest text-white/60">
                      Haveli Cafe
                    </span>
                  </div>
                  <span className="font-serif font-bold text-sm text-white leading-tight">
                    {item.captionEn}
                  </span>
                  <span className="font-sans font-semibold text-[11px] text-brand-amber/90 mt-0.5">
                    {item.captionBn}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImg(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                width={selectedImg.width * 2}
                height={selectedImg.height * 2}
                className="w-full h-auto object-cover max-h-[80vh]"
              />

              {/* Info Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                <h3 className="font-serif font-black text-xl text-brand-amber">
                  {selectedImg.captionEn}
                </h3>
                <h4 className="font-sans font-bold text-sm text-white/80 mt-1">
                  {selectedImg.captionBn}
                </h4>
                <p className="font-sans text-xs text-white/60 mt-1.5 italic">
                  {selectedImg.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
