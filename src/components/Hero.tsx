'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Star, Users, MapPin, Clock } from 'lucide-react';
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
      className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0F19]" 
      id="home"
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#1e293b_0%,#0b0f19_70%)] opacity-40 z-0 pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[75vh] md:min-h-[80vh]">
        
        {/* Main Grid: Text on Left, Rotating Food on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-amber/15 border border-brand-amber/30 text-brand-amber text-xs md:text-sm font-bold backdrop-blur-sm"
            >
              <span>🔥</span> Midnapore-র সবচেয়ে Instagrammable Cafe
            </motion.div>

            {/* Cursive Calligraphy Heading (mapped to Dancing Script) */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide leading-tight"
            >
              Haveli Cafe
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-stone-300 font-sans text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-medium"
            >
              Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, and mocktails in a rustic, artistic, and cozy setting right near Midnapore Railway Station.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full bg-brand-amber text-stone-900 font-extrabold text-base hover:bg-brand-amber-dark transition-all shadow-lg hover:shadow-brand-amber/20 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-extrabold text-base transition-all backdrop-blur-sm hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-brand-amber" />
                <span>Book a Table</span>
              </a>
            </motion.div>

            {/* Interactive Dot Indicators (Screenshot style) */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 pt-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 transition-all" />
              <span className="w-6 h-2.5 rounded-full bg-brand-amber transition-all" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 transition-all" />
            </motion.div>
          </motion.div>

          {/* Right Column: Rotating Pizza Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] pointer-events-none select-none"
            >
              <Image
                src="/images/pizza_header.png"
                alt="Slowly Rotating Delicious Pizza"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* ── Floating Stats Bar (Aligned to bottom of Hero) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center mt-8 lg:mt-0"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Star className="w-5 h-5 fill-brand-amber" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-400">Google Rating</div>
              <div className="font-bold text-sm md:text-base">4.6 Stars (524+)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-400">Happy Guests</div>
              <div className="font-bold text-sm md:text-base">500+ Daily</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-400">Location</div>
              <div className="font-bold text-sm md:text-base">Dharma, Midnapore</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 last:border-0">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-stone-400">Opening Hours</div>
              <div className="font-bold text-sm md:text-base">11:00 AM - 11 PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
