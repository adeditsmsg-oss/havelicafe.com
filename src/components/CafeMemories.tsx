'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Image as ImageIcon, Camera } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: 'food' | 'vibe';
  titleEn: string;
  titleBn: string;
}

export default function CafeMemories() {
  const [filter, setFilter] = useState<'all' | 'food' | 'vibe'>('all');
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { src: '/images/exterior.jpeg', alt: 'Haveli Cafe Exterior', category: 'vibe', titleEn: 'Welcome to Haveli', titleBn: 'হাভেলিতে স্বাগতম' },
    { src: '/images/interior_tables.jpeg', alt: 'Textured walls and tire seats', category: 'vibe', titleEn: 'Rustic Hangout', titleBn: 'রাস্টিক আড্ডা জোন' },
    { src: '/images/interior_mural.jpeg', alt: 'DSLR Girl Wall Mural', category: 'vibe', titleEn: 'Artistic Wall Murals', titleBn: 'মনোরম দেওয়াল চিত্র' },
    { src: '/images/interior_washbasin.jpeg', alt: 'Quirky cat washbasin mural', category: 'vibe', titleEn: 'Creative Washbasin', titleBn: 'ক্রিয়েটিভ ওয়াশবেসিন' },
    { src: '/images/interior_seating.jpeg', alt: 'Cozy indoor chairs', category: 'vibe', titleEn: 'Cozy Date Spots', titleBn: 'নিরিবিলি বসার জায়গা' },
    { src: '/images/interior_wall_decor.jpeg', alt: 'Rifle and stone art decor', category: 'vibe', titleEn: 'Theme Wall Decor', titleBn: 'থিম ডেকরেশন' },
    { src: '/images/cafe_counter.jpeg', alt: 'Cashier checkout counter', category: 'vibe', titleEn: 'Bistro Service Counter', titleBn: 'সার্ভিস কাউন্টার' },
    
    { src: '/images/beverage_coffee.jpeg', alt: 'Cold coffee with vanilla scoop', category: 'food', titleEn: 'Creamy Cold Coffee', titleBn: 'ক্রিমি কোল্ড কফি' },
    { src: '/images/beverage_mocktail.jpeg', alt: 'Sunset layered cocktail with cucumber', category: 'food', titleEn: 'Layered Sunset Mocktail', titleBn: 'সানসেট লেয়ারড মকটেল' },
    { src: '/images/beverage_tea.jpeg', alt: 'Warm special boiled milk tea', category: 'food', titleEn: 'Special Kesar Tea', titleBn: 'স্পেশাল কেশর চা' },
    { src: '/images/food_wrap_drink.jpeg', alt: 'Shawarma wrap and drink combo', category: 'food', titleEn: 'Wrap & Drink Combo', titleBn: 'র‍্যাপ ও ড্রিংক কম্বো' },
    { src: '/images/food_chilli_chicken.jpeg', alt: 'Sizzling Chilli Chicken Plate', category: 'food', titleEn: 'Chilli Chicken Gravy', titleBn: 'স্পাইসি চিলি চিকেন' },
    { src: '/images/food_crispy_chicken.jpeg', alt: 'Crispy toothpick chicken starter', category: 'food', titleEn: 'Crispy Toothpick Bites', titleBn: 'ক্রিস্পি চিকেন বাইটস' },
    { src: '/images/food_pizza.jpeg', alt: 'Double cheese veg pizza slice', category: 'food', titleEn: 'Cheesy Veg Pizza', titleBn: 'চিজ লোডেড পিজ্জা' },
    { src: '/images/food_sandwich.jpeg', alt: 'Crispy fried chicken burger', category: 'food', titleEn: 'Double Cheese Burger', titleBn: 'ডাবল চিজ বার্গার' },
    { src: '/images/food_rolls.jpeg', alt: 'Golden double egg paratha roll', category: 'food', titleEn: 'Double Egg Paratha Roll', titleBn: 'ডাবল এগ পরোটা রোল' },
    { src: '/images/food_momos.jpeg', alt: 'Pan fried crispy momos', category: 'food', titleEn: 'Pan-Fried Chicken Momos', titleBn: 'প্যান-ফ্রাইড মোমো' },
    { src: '/images/food_chowmein.jpeg', alt: 'Egg chicken chowmein plate', category: 'food', titleEn: 'Egg Hakka Noodles', titleBn: 'এগ হাক্কা নুডলস' },
    { src: '/images/food_momo_wrap.jpeg', alt: 'Fresh paneer wrap rolls', category: 'food', titleEn: 'Paneer Tikka Wrap', titleBn: 'পনির টিক্কা র‍্যাপ' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="memories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Cafe Memories • সুন্দর মুহূর্তের গ্যালারি
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Capturing Haveli Vibe
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            Take a look at our authentic, hand-painted murals, cozy seating arrangements, and mouth-watering dishes uploaded by our beloved customers.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-3 mb-12">
          {[
            { id: 'all', labelEn: 'All Photos', labelBn: 'সব ছবি' },
            { id: 'food', labelEn: 'Delicious Food', labelBn: 'খাবারের ছবি' },
            { id: 'vibe', labelEn: 'Cafe Vibe & Decor', labelBn: 'ক্যাফে ডেকোরেশন' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all ${
                filter === btn.id
                  ? 'bg-brand-burgundy text-brand-yellow dark:text-black shadow-md'
                  : 'bg-white dark:bg-brand-cream text-brand-dark/80 border border-brand-border hover:bg-brand-yellow/10'
              }`}
            >
              <span className="flex flex-col items-center">
                <span>{btn.labelEn}</span>
                <span className="text-[9px] font-semibold opacity-70 leading-none mt-0.5">{btn.labelBn}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group bg-brand-dark"
                onClick={() => setSelectedImg(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                />
                
                {/* Hover overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="font-serif font-bold text-sm tracking-wide leading-none">{item.titleEn}</span>
                  <span className="font-sans font-bold text-[10px] text-brand-yellow leading-none mt-1">{item.titleBn}</span>
                  <span className="font-sans text-[9px] text-white/75 uppercase tracking-widest mt-2 flex items-center gap-1 leading-none">
                    {item.category === 'food' ? <ImageIcon className="w-2.5 h-2.5" /> : <Camera className="w-2.5 h-2.5" />}
                    {item.category === 'food' ? 'Food & Drink' : 'Interior Vibe'}
                  </span>
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-brand-cream/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-cream" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedImg(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  fill
                  className="object-cover"
                />
                
                {/* Details Footer in Lightbox */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                  <h3 className="font-serif font-black text-xl text-brand-yellow">
                    {selectedImg.titleEn}
                  </h3>
                  <h4 className="font-sans font-bold text-sm text-white/80 mt-1">
                    {selectedImg.titleBn}
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-1.5 italic">
                    {selectedImg.alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
