'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface PopularMenuItem {
  name: string;
  price: number;
  category: string;
  image: string;
}

const popularItems: PopularMenuItem[] = [
  {
    name: 'Chicken Shawarma',
    price: 45,
    category: 'Shawarma',
    image: '/images/food_rolls.jpeg',
  },
  {
    name: 'Crispy Wings',
    price: 120,
    category: 'Snacks & Starters',
    image: '/images/food_crispy_chicken.jpeg',
  },
  {
    name: 'Cold Coffee',
    price: 70,
    category: 'Coffee',
    image: '/images/beverage_coffee.jpeg',
  },
  {
    name: 'Schezwan Noodles Chicken',
    price: 120,
    category: 'Noodles',
    image: '/images/food_chowmein.jpeg',
  },
  {
    name: 'Haveli Fizz',
    price: 80,
    category: 'Mocktails',
    image: '/images/beverage_mocktail.jpeg',
  },
  {
    name: 'French Fry with Cheese',
    price: 40,
    category: 'Snacks & Starters',
    image: '/images/food_sandwich.jpeg',
  },
  {
    name: 'Brownie Coffee Shake',
    price: 130,
    category: 'Milkshake',
    image: '/images/beverage_coffee.jpeg',
  },
  {
    name: 'Chilli Garlic Ball',
    price: 45,
    category: 'Snacks & Starters',
    image: '/images/food_chilli_chicken.jpeg',
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
};

export default function PopularMenu() {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-warm" id="popular">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 mb-3">
            <Flame className="w-4 h-4 text-brand-amber fill-brand-amber animate-pulse" />
            Trending Right Now
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            Popular Menu
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Explore what everyone is ordering at Haveli Cafe. Midnapore-r favourite picks!
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {popularItems.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100 hover:shadow-md hover-lift transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 45vw, 22vw"
                  />
                </div>
                <div className="mt-3">
                  <span className="inline-block text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-stone-900 text-sm md:text-base leading-snug line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-50">
                <span className="font-bold text-stone-900 text-sm md:text-base">
                  ₹{item.price}
                </span>
                <span className="text-[10px] text-stone-400 font-medium">
                  Hot Pick 🔥
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
