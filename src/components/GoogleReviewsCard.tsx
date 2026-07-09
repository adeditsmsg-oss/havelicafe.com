'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoogleReviewsCard() {
  return (
    <section className="py-12 bg-[#FFFBF0] overflow-hidden" id="google-reviews-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-serif text-xl font-bold text-stone-900">Google Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl md:text-5xl font-extrabold text-stone-900">4.6</span>
            <div className="flex flex-col items-start">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-stone-500 font-medium mt-0.5">Based on 524+ reviews</span>
            </div>
          </div>
          <p className="text-sm text-stone-600 mb-5 max-w-sm mx-auto">
            Amader Google page e reviews diye amader support koro!
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJy59wIAxbHToREI5jtFqa6s8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-amber text-stone-900 font-bold hover:bg-brand-amber-dark transition-colors shadow-sm cursor-pointer text-sm md:text-base hover-lift"
          >
            Write a Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
