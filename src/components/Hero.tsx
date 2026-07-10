'use client';

import React from 'react';
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
        background: "url('/images/burger_hero_bg.png') no-repeat right center / contain, linear-gradient(to right, #e65c00, #ea580c, #f5af19)",
      }}
      className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center pt-24 pb-16" 
      id="home"
    >
      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[70vh] md:min-h-[80vh]">
        
        {/* Text Area (Aligned to the left empty space of the background image) */}
        <div className="my-auto max-w-lg md:max-w-xl text-left bg-gradient-to-r from-[#e65c00]/90 to-transparent p-4 rounded-3xl md:bg-none">
          <motion.div 
            className="flex flex-col items-start space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900/10 border border-stone-900/20 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm"
            >
              <span>🔥</span> Midnapore-র সবচেয়ে Instagrammable Cafe
            </motion.div>

            {/* Cursive Calligraphy Heading (mapped to Dancing Script) */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-wide leading-tight"
            >
              Haveli Cafe
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-stone-900/85 font-sans text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-sm"
            >
              Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, and mocktails in a rustic, artistic, and cozy setting right near Midnapore Railway Station.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-12 py-4.5 rounded-full bg-stone-900 text-white font-extrabold text-base hover:bg-stone-850 transition-all shadow-lg hover:shadow-stone-950/20 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Pagination Dot Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 pt-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900/20 transition-all" />
              <span className="w-6 h-2.5 rounded-full bg-stone-900 transition-all" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900/20 transition-all" />
            </motion.div>
          </motion.div>
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
