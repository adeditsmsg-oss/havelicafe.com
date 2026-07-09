'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Flame, Award, Heart } from 'lucide-react';
import { menuItems, MenuItem } from '../data/menuData';

export default function FeaturedDishes() {
  // Highlighted food items extracted based on Google Maps reviews analysis
  const featuredIds = ['rolls-1', 'starter-1', 'coffee-1', 'combo-1'];
  const featuredFoods = menuItems.filter((item) => featuredIds.includes(item.id));

  const getBadge = (id: string) => {
    switch (id) {
      case 'rolls-1':
        return { text: 'Bestseller', icon: <Flame className="w-3.5 h-3.5" />, color: 'bg-orange-600 text-white' };
      case 'starter-1':
        return { text: 'Highest Rated', icon: <Star className="w-3.5 h-3.5 fill-current" />, color: 'bg-yellow-500 text-brand-dark' };
      case 'coffee-1':
        return { text: 'Customer Favourite', icon: <Heart className="w-3.5 h-3.5 fill-current" />, color: 'bg-pink-600 text-white' };
      case 'combo-1':
        return { text: 'Most Ordered', icon: <Award className="w-3.5 h-3.5" />, color: 'bg-brand-burgundy text-brand-yellow' };
      default:
        return { text: 'Special', icon: <Star className="w-3.5 h-3.5" />, color: 'bg-brand-burgundy text-white' };
    }
  };

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden" id="featured">
      {/* Subtle organic background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-brand-burgundy/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
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
                className="bg-white rounded-3xl overflow-hidden border border-brand-burgundy/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-brand-cream">
                  <Image
                    src={food.image}
                    alt={food.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Highlight Badge */}
                  <div className={`absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md ${badge.color}`}>
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-brand-dark/90 backdrop-blur-sm text-brand-yellow font-bold px-3.5 py-1.5 rounded-xl text-sm shadow-md">
                    ₹{food.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg text-brand-burgundy leading-snug group-hover:text-brand-burgundy/90 transition-colors">
                      {food.nameEn}
                    </h3>
                    <h4 className="font-sans font-bold text-xs text-brand-dark/70 leading-none">
                      {food.nameBn}
                    </h4>
                    <p className="font-sans text-xs text-brand-dark/60 leading-relaxed font-medium line-clamp-2">
                      {food.descriptionEn}
                    </p>
                  </div>

                  {/* Rating / Review Tag */}
                  <div className="pt-3 border-t border-brand-cream flex items-center justify-between text-xs text-brand-dark/60 font-semibold">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                      <span className="font-bold text-brand-dark">4.8</span>
                      <span>(Review Choice)</span>
                    </div>
                    <a
                      href="#menu"
                      className="text-brand-burgundy hover:underline flex items-center space-x-0.5"
                    >
                      Order Now
                    </a>
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
