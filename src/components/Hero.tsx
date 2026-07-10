'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0F19]" 
      id="home"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,#0b0f19_75%)] opacity-55 z-0 pointer-events-none" />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-10">
        
        {/* Restaurant Title in Cursive Script */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-6xl sm:text-7xl md:text-9xl font-bold text-brand-burgundy tracking-wide"
        >
          Haveli Cafe
        </motion.h1>

        {/* View Full Menu Button (Only CTA element left in Hero) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex items-center justify-center"
        >
          <a
            href="https://adeditsmsg-oss.github.io/haveli-cafe-menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-brand-amber text-stone-900 rounded-full px-12 py-5 md:px-18 md:py-6.5 font-extrabold text-xl md:text-3xl hover:bg-brand-amber-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-brand-amber/20 cursor-pointer border-2 border-transparent"
          >
            <span>View Full Menu</span>
            <ExternalLink className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
