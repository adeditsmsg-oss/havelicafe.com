'use client';

import React from 'react';
import { ArrowRight, Star, Users, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      style={{
        background: "linear-gradient(135deg, #e65c00 0%, #ea580c 55%, #f5af19 100%)",
      }}
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden" 
      id="home"
    >
      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[70vh] md:min-h-[80vh]">
        
        {/* Centered Content Area */}
        <div className="my-auto max-w-3xl mx-auto text-center flex flex-col items-center space-y-6 md:space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900/10 border border-stone-900/20 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm"
          >
            <span>🔥</span> Midnapore-র সবচেয়ে Instagrammable Cafe
          </motion.div>

          {/* Cursive Calligraphy Heading (mapped to Dancing Script) */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-6xl sm:text-7xl md:text-9xl font-bold text-stone-900 tracking-wide leading-none"
          >
            Haveli Cafe
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-900/85 font-sans text-sm sm:text-base md:text-xl leading-relaxed font-semibold max-w-2xl mx-auto"
          >
            Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, and mocktails in a rustic, artistic, and cozy setting right near Midnapore Railway Station.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex items-center justify-center"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-full bg-stone-900 text-white font-extrabold text-base md:text-lg hover:bg-stone-850 transition-all shadow-lg hover:shadow-stone-950/20 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
