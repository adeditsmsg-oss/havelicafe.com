'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function DigitalMenu() {
  return (
    <section className="py-24 bg-brand-cream dark:bg-black relative overflow-hidden transition-colors duration-300" id="menu">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-dashed border-brand-yellow" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-dashed border-brand-yellow" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy dark:text-brand-yellow bg-brand-burgundy/5 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Our Digital Menu • সম্পূর্ণ মেনু তালিকা
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy dark:text-brand-yellow leading-tight">
            Explore Our Flavours
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 dark:text-brand-dark/60 font-semibold max-w-xl mx-auto leading-relaxed">
            From our signature slow-roasted Chicken Shawarma to spicy Chinese Hakka noodles, crispy starters, and layered mocktails, explore our complete interactive menu catalog.
          </p>
        </div>

        {/* Big Conversion Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-4"
        >
          <a
            href="https://adeditsmsg-oss.github.io/haveli-cafe-menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 md:px-12 py-5 rounded-2xl bg-brand-burgundy text-brand-yellow dark:text-black dark:border dark:border-brand-yellow/20 font-black text-lg md:text-xl shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 hover:scale-105 hover-lift"
          >
            <BookOpen className="w-5 h-5 fill-current" />
            <span>View Full Menu (সম্পূর্ণ মেনু দেখুন)</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </motion.div>

        {/* Categories quick info badges */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-xs text-brand-dark/65 dark:text-brand-dark/50 font-bold uppercase tracking-wider">
          <div className="bg-white dark:bg-brand-cream/5 py-3.5 px-4 rounded-xl border border-brand-burgundy/5 dark:border-brand-yellow/5">
            🍔 Burgers & Pizzas
          </div>
          <div className="bg-white dark:bg-brand-cream/5 py-3.5 px-4 rounded-xl border border-brand-burgundy/5 dark:border-brand-yellow/5">
            🍹 Layered Mocktails
          </div>
          <div className="bg-white dark:bg-brand-cream/5 py-3.5 px-4 rounded-xl border border-brand-burgundy/5 dark:border-brand-yellow/5 col-span-2 sm:col-span-1">
            🥢 Fusion Starters
          </div>
        </div>

      </div>
    </section>
  );
}
