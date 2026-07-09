'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

interface FavouriteItem {
  name: string;
  badge: 'Most Ordered' | 'Best Seller' | 'Highest Rated' | 'Fan Favourite';
  price: number;
  image: string;
  rating: number;
  orderCount: string;
}

const favourites: FavouriteItem[] = [
  {
    name: 'Chicken Shawarma',
    badge: 'Most Ordered',
    price: 45,
    image: '/images/food_rolls.jpeg',
    rating: 5,
    orderCount: '450+ orders this month',
  },
  {
    name: 'Cold Coffee',
    badge: 'Best Seller',
    price: 70,
    image: '/images/beverage_coffee.jpeg',
    rating: 5,
    orderCount: '380+ orders this month',
  },
  {
    name: 'Crispy Wings',
    badge: 'Highest Rated',
    price: 120,
    image: '/images/food_crispy_chicken.jpeg',
    rating: 5,
    orderCount: '290+ orders this month',
  },
  {
    name: 'Haveli Fizz',
    badge: 'Fan Favourite',
    price: 80,
    image: '/images/beverage_mocktail.jpeg',
    rating: 5,
    orderCount: '240+ orders this month',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
};

export default function CustomerFavourites() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FFFBF0] overflow-hidden" id="favourites">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 mb-3">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            Guest Choice Awards
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            Customer Favourites
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Based on 500+ reviews — these are the dishes our guests love and recommend the most!
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {favourites.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover-lift transition-all duration-300 border border-stone-100 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge overlay */}
                <div className="relative aspect-[4/3] w-full bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 right-3 bg-brand-amber/95 text-stone-900 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-stone-900 text-base md:text-lg mb-1 leading-snug">
                    {item.name}
                  </h3>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-400 font-medium">
                    {item.orderCount}
                  </p>
                </div>
              </div>

              {/* Price row */}
              <div className="px-5 pb-5 pt-3 border-t border-stone-50 flex items-center justify-between">
                <span className="text-lg font-extrabold text-amber-600">
                  ₹{item.price}
                </span>
                <span className="text-xs text-brand-amber font-semibold">
                  Delicious Choice
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
