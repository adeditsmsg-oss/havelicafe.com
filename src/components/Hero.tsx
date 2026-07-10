'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Users, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
  };

  return (
    <section 
      style={{
        background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
      }}
      className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden" 
      id="home"
    >
      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[75vh] md:min-h-[80vh]">
        
        {/* Main Grid: Text on Left (5 columns), Burger Platter on Right (7 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start text-left space-y-6 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Cursive Calligraphy Heading (mapped to Dancing Script) */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-wide leading-tight"
            >
              Haveli Cafe
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-white/90 font-sans text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-semibold"
            >
              Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, and mocktails in a rustic, artistic, and cozy setting right near Midnapore Railway Station.
            </motion.p>

            {/* CTA Button - Exploring Our Brand (Scrolling to #about story section) */}
            <motion.div 
              variants={itemVariants}
              className="w-full sm:w-auto"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-12 py-4.5 rounded-full bg-stone-900 text-white font-extrabold text-base hover:bg-stone-850 transition-all shadow-lg hover:shadow-stone-950/20 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Explore Our Brand</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Transparent Burger Platter (Sized up to col-span-7 and max-w-[880px]) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] max-w-[880px] pointer-events-none select-none lg:-mr-16 lg:scale-140"
            >
              <Image
                src="/images/transparent_burger.png"
                alt="Haveli Cafe Burger and Fries Platter"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* ── Floating Stats Bar (Aligned to bottom of Hero, styled in dark glass for orange theme) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full bg-stone-950/5 border border-stone-900/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-900 text-center mt-8 lg:mt-0"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-stone-900/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-stone-900/10 text-stone-900">
              <Star className="w-5 h-5 fill-stone-900 text-stone-900" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-700 font-semibold">Google Rating</div>
              <div className="font-bold text-sm md:text-base">4.6 Stars (524+)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:border-r border-stone-900/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-stone-900/10 text-stone-900">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-700 font-semibold">Happy Guests</div>
              <div className="font-bold text-sm md:text-base">500+ Daily</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-stone-900/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-stone-900/10 text-stone-900">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-700 font-semibold">Location</div>
              <div className="font-bold text-sm md:text-base">Dharma, Midnapore</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 last:border-0">
            <div className="p-2.5 rounded-xl bg-stone-900/10 text-stone-900">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-700 font-semibold">Opening Hours</div>
              <div className="font-bold text-sm md:text-base">11:00 AM - 11 PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
