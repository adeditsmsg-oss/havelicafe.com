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
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden" 
      id="home"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_banner.jpg"
          alt="Haveli Cafe Ambience"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
      </div>

      {/* ── Rotating Pizza Image (Top Right) ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute top-[8%] right-[-140px] sm:right-[-120px] md:right-[-80px] lg:right-[-20px] xl:right-[4%] w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px] pointer-events-none select-none z-10 opacity-90"
      >
        <Image
          src="/images/pizza_header.png"
          alt="Slowly Rotating Delicious Pizza"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col justify-between min-h-[70vh] md:min-h-[80vh]">
        <motion.div 
          className="max-w-3xl my-auto text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-amber/20 border border-brand-amber/30 text-brand-amber text-xs md:text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <span>🔥</span> Midnapore-র সবচেয়ে Instagrammable Cafe
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4"
          >
            Flavours That Feel <br className="hidden sm:inline" />
            Like <span className="text-brand-amber">Home</span>
          </motion.h1>

          {/* Bengali Subheading */}
          <motion.p 
            variants={itemVariants}
            className="font-serif text-xl sm:text-2xl text-brand-amber-light font-medium tracking-wide mb-6"
          >
            স্বাদে ভরা, ভালোবাসায় সাজানো
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-stone-300 text-base md:text-lg max-w-xl leading-relaxed mb-8"
          >
            Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, and mocktails in a rustic, artistic, and cozy setting right near Midnapore Railway Station.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:items-center"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-amber text-stone-900 font-bold hover:bg-brand-amber-dark transition-colors shadow-lg hover:shadow-brand-amber/20 group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#reserve"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold transition-all backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 text-brand-amber" />
              <span>Book a Table</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Floating Stats Bar ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center mt-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Star className="w-5 h-5 fill-brand-amber" />
            </div>
            <div className="text-left">
              <div className="text-sm text-stone-300">Google Rating</div>
              <div className="font-bold text-lg">4.6 Stars (524+)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm text-stone-300">Happy Guests</div>
              <div className="font-bold text-lg">500+ Daily</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-r border-white/10 last:border-0 pr-2">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm text-stone-300">Location</div>
              <div className="font-bold text-lg">Dharma, Midnapore</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 last:border-0">
            <div className="p-2.5 rounded-xl bg-brand-amber/20 text-brand-amber">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm text-stone-300">Opening Hours</div>
              <div className="font-bold text-lg">11:00 AM - 11 PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
