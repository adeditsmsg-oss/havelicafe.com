'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Flame, Award, Heart } from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function FeaturedDishes() {
  // Highlighted food items extracted based on Google Reviews
  const featuredIds = ['rolls-1', 'starter-1', 'coffee-1', 'combo-1'];
  const featuredFoods = menuItems.filter((item) => featuredIds.includes(item.id));

  const getBadge = (id: string) => {
    switch (id) {
      case 'rolls-1':
        return { text: 'Bestseller', icon: <Flame className="w-3 h-3" />, color: 'bg-orange-600 text-white' };
      case 'starter-1':
        return { text: 'Highest Rated', icon: <Star className="w-3 h-3 fill-current" />, color: 'bg-brand-yellow text-black' };
      case 'coffee-1':
        return { text: 'Customer Favourite', icon: <Heart className="w-3 h-3 fill-current" />, color: 'bg-pink-600 text-white' };
      case 'combo-1':
        return { text: 'Most Ordered', icon: <Award className="w-3 h-3" />, color: 'bg-black text-brand-yellow' };
      default:
        return { text: 'Special', icon: <Star className="w-3 h-3" />, color: 'bg-black text-white' };
    }
  };

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden" id="featured">
      {/* Subtle organic background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full inline-block">
            Special Selection • বিশেষ আয়োজন
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Top Rated Delicacies
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            These dishes are loved and frequently mentioned by our customers in their Google Reviews. Taste the absolute best of Haveli!
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredFoods.map((food, index) => {
            const badge = getBadge(food.id);

            return (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-brand-burgundy/5 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Full Card Image Background */}
                <Image
                  src={food.image}
                  alt={food.nameEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Shadow Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                {/* Floating Category/Highlight Badge (Top Left) */}
                <div className={`absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-md z-20 ${badge.color}`}>
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>

                {/* Text Content Overlay (Bottom Left) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white flex flex-col justify-end space-y-1">
                  
                  {/* Veg / Non-Veg Indicator Dot */}
                  <div className="flex items-center space-x-1.5 mb-0.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${food.isVeg ? 'bg-green-500' : 'bg-red-500'} inline-block`} />
                    <span className="text-[10px] font-extrabold tracking-wider uppercase opacity-90">
                      {food.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Title En */}
                  <h3 className="font-sans font-black text-base md:text-lg text-white leading-tight">
                    {food.nameEn}
                  </h3>

                  {/* Title Bn */}
                  <h4 className="font-sans text-[11px] text-white/80 font-bold leading-none">
                    {food.nameBn}
                  </h4>

                  {/* Price */}
                  <div className="font-sans font-extrabold text-sm md:text-base text-brand-yellow pt-1">
                    ₹{food.price}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
