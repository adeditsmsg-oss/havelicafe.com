'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function DigitalMenu() {
  return (
    <section
      className="py-20 md:py-28 px-4 bg-brand-amber overflow-hidden"
      id="menu"
    >
      {/* ── Content Container (Grid Layout) ── */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Exploding/Floating Biryani Handi Image (Sized up to col-span-6 and scaled by 120%) */}
        <div className="lg:col-span-6 flex justify-center items-center min-h-[320px] md:min-h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] max-w-[580px] pointer-events-none select-none lg:scale-120"
          >
            <Image
              src="/images/transparent_biryani.png"
              alt="Delicious Exploding Handi Biryani"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column: Title, Description, and CTA Button (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/10 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              Discover Haveli Delights • সম্পূর্ণ মেনু
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight"
          >
            Craving Your Next Meal?
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-stone-900/85 max-w-xl leading-relaxed font-semibold"
          >
            From signature Chicken Shawarma and loaded Chinese platters to chilled mocktails, crispy wings, ar creamy cold coffee — amader kache sob ache! Explore our full digital menu below.
          </motion.p>

          {/* View Full Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-auto"
          >
            <a
              href="https://adeditsmsg-oss.github.io/haveli-cafe-menu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3.5 bg-white text-stone-900 rounded-full px-12 py-5 md:px-16 md:py-6 font-extrabold text-lg md:text-2xl hover:bg-stone-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent hover:border-white/10 w-full sm:w-auto"
            >
              <span>View Full Menu</span>
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
