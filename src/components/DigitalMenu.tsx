'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame, Award } from 'lucide-react';
import { menuCategories, menuItems, MenuItem } from '../data/menuData';

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Our Digital Menu • সম্পূর্ণ মেনু তালিকা
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Explore Our Flavours
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            Choose from a wide variety of starters, rolls, mocktails, and combos. Hand-prepared fresh for every single order.
          </p>
        </div>

        {/* Category Tabs (Horizontal Scrollable on Mobile) */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar px-2 -mx-4 md:mx-0">
          <div className="flex space-x-3 md:space-x-4 bg-brand-cream/80 p-2 rounded-2xl md:rounded-full border border-brand-burgundy/5 whitespace-nowrap shadow-inner">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl md:rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-burgundy text-brand-yellow shadow-md transform scale-105'
                    : 'text-brand-dark/80 hover:text-brand-burgundy hover:bg-brand-burgundy/5'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{category.nameEn}</span>
                  <span className="text-[10px] font-semibold opacity-70 leading-none mt-0.5">
                    {category.nameBn}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-brand-cream/30 rounded-3xl p-4 border border-brand-burgundy/5 flex space-x-4 items-center group hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  {/* Food Image */}
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-brand-cream">
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge Overlay */}
                    {item.isPopular && (
                      <div className="absolute top-1 left-1 bg-orange-600 text-white rounded-md p-1 shadow-md">
                        <Flame className="w-3 h-3 fill-current" />
                      </div>
                    )}
                    {item.isChefSpecial && (
                      <div className="absolute top-1 left-1 bg-brand-burgundy text-brand-yellow rounded-md p-1 shadow-md">
                        <Award className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Food Text */}
                  <div className="flex-grow flex flex-col justify-between py-1 min-w-0">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start space-x-2">
                        <h3 className="font-serif font-bold text-base text-brand-burgundy leading-snug truncate group-hover:text-brand-burgundy/90 transition-colors">
                          {item.nameEn}
                        </h3>
                        <span className="font-sans font-bold text-sm text-brand-burgundy flex-shrink-0">
                          ₹{item.price}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-xs text-brand-dark/60 leading-none">
                        {item.nameBn}
                      </h4>
                      <p className="font-sans text-[11px] text-brand-dark/70 leading-relaxed font-semibold line-clamp-2 mt-1">
                        {item.descriptionEn}
                      </p>
                      <p className="font-sans text-[10px] text-brand-dark/50 leading-relaxed font-medium line-clamp-1">
                        {item.descriptionBn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state (safety fall-back) */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-brand-dark/50 font-medium">
              No items listed in this category yet. Please check back later!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
