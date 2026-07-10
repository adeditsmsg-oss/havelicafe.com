'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function DigitalMenu() {
  return (
    <section
      className="py-24 md:py-32 px-4 bg-brand-amber overflow-hidden text-center flex flex-col items-center justify-center"
      id="menu"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Friendly inviting text to encourage menu clicks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-4 mb-10"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/10 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            Discover Haveli Delights • সম্পূর্ণ মেনু
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Craving Your Next Meal?
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-stone-900/85 max-w-2xl mx-auto leading-relaxed font-semibold">
            From signature Chicken Shawarma and loaded Chinese platters to chilled mocktails, crispy wings, ar creamy cold coffee — amader kache sob ache! Explore our full digital menu below.
          </p>
        </motion.div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full flex items-center justify-center"
        >
          <a
            href="https://adeditsmsg-oss.github.io/haveli-cafe-menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 bg-white text-stone-900 rounded-full px-12 py-5 md:px-16 md:py-6 font-extrabold text-lg md:text-2xl hover:bg-stone-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent hover:border-white/10"
          >
            <span>View Full Menu</span>
            <ExternalLink className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
