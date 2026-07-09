'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { reviews } from '@/data/reviewData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } },
};

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FFFBF0] overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <MessageSquare className="w-4 h-4" />
            Guest Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Real reviews from real food lovers. Ambience, taste, and hospitality verified.
          </p>
        </div>

        {/* Reputation Summary Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8 text-center max-w-xl mx-auto mb-12 shadow-sm"
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
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-amber text-stone-900 font-bold hover:bg-brand-amber-dark transition-colors shadow-sm cursor-pointer text-sm"
          >
            Write a Review
          </a>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name + index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col justify-between"
            >
              <div>
                {/* Quotation Marks */}
                <span className="font-serif text-4xl text-amber-300 leading-none block select-none mb-2">
                  ❝
                </span>
                <p className="text-stone-600 text-sm leading-relaxed italic mb-4">
                  {review.text}
                </p>
              </div>

              <div>
                <div className="w-full h-px bg-stone-100 my-4" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-stone-900 text-sm truncate">
                      {review.name}
                    </h3>
                    <div className="flex items-center text-amber-400 gap-0.5 mt-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium shrink-0">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
