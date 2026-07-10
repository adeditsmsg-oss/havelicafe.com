'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Palette, IndianRupee, Heart } from 'lucide-react';

const features = [
  {
    icon: Flame,
    titleEn: 'Freshly Prepared',
    titleBn: 'সদ্য তৈরি',
    descEn: 'Every dish made to order with fresh ingredients, kono frozen food noy!',
    descBn: 'প্রতিটি পদ অর্ডারের পর তাজা উপকরণ দিয়ে রান্না করা হয়।',
  },
  {
    icon: Palette,
    titleEn: 'Insta-Worthy Decor',
    titleBn: 'দারুণ সেলফি স্পট',
    descEn: 'Hand-painted murals, stone walls, ar cozy corners — picture perfect!',
    descBn: 'হাতে আঁকা মিউরাল আর পাথরের দেওয়াল — ছবি তোলার জন্য পারফেক্ট!',
  },
  {
    icon: IndianRupee,
    titleEn: 'Pocket Friendly',
    titleBn: 'বাজেট ফ্রেন্ডলি',
    descEn: "Premium quality at prices that won't break the bank. Starting ₹30!",
    descBn: 'প্রিমিয়াম মানের খাবার, পকেটের ওপর চাপ নেই।',
  },
  {
    icon: Heart,
    titleEn: 'Made with Love',
    titleBn: 'ভালোবাসায় তৈরি',
    descEn: 'From our kitchen to your table — every plate served with care ar bhalobashar sathe.',
    descBn: 'রান্নাঘর থেকে আপনার টেবিল — প্রতিটি প্লেটে ভালোবাসা।',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' as any },
  }),
};

export default function WhyChooseUs() {
  return (
    <section 
      style={{ backgroundColor: '#F59E0B' }}
      className="py-16 md:py-24 relative overflow-hidden" 
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          {/* Badge */}
          <span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/10 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm">
              Our Specialty • আমাদের বিশেষত্ব
            </span>
          </span>

          {/* Heading */}
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Why Choose{' '}
            <span className="underline decoration-white/60 decoration-4 underline-offset-4">
              Haveli?
            </span>
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-white/90 font-semibold max-w-xl mx-auto">
            More than just food — it&apos;s an experience. আমাদের কাছে এটা শুধু খাবার নয়, এটা একটা অভিজ্ঞতা।
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              className="bg-white rounded-3xl p-7 text-center shadow-md hover:shadow-xl hover-lift transition-all border border-stone-100 flex flex-col items-center space-y-4"
            >
              {/* Icon Container (High Legibility Dark Stone Background) */}
              <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center shadow-md">
                <feature.icon className="w-6 h-6 text-brand-amber fill-brand-amber" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {feature.titleEn}
                </h3>
                <h4 className="font-sans font-bold text-xs text-stone-900/60 leading-none">
                  {feature.titleBn}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-semibold pt-1">
                  {feature.descEn}
                </p>
                <p className="font-sans text-[11px] text-stone-600 leading-relaxed font-medium">
                  {feature.descBn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
