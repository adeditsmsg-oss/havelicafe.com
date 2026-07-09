'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function DigitalMenu() {
  return (
    <section
      className="py-16 md:py-24 px-4 bg-brand-amber overflow-hidden text-center flex flex-col items-center justify-center"
      id="menu"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
