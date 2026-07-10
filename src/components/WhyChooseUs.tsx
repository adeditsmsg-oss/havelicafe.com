'use client';

import React from 'react';
import Image from 'next/image';
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
    descBn: 'হাতে আঁকা মিউরাল আর পাথরের দেওয়াল — ছবি তোলার জন্য পারфেক্ট!',
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
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as any },
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
        
        {/* Main Grid: Info + Cards on Left, Pizza Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (col-span-7): Heading and Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-4 max-w-3xl"
            >
              {/* Badge */}
              <div className="w-full flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/10 text-stone-900 text-xs md:text-sm font-bold backdrop-blur-sm">
                  Our Specialty • আমাদের বিশেষত্ব
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Why Choose{' '}
                <span className="underline decoration-white/60 decoration-4 underline-offset-4">
                  Haveli?
                </span>
              </h2>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-white/90 font-semibold max-w-xl">
                More than just food — it&apos;s an experience. আমাদের কাছে এটা শুধু খাবার নয়, এটা একটা অভিজ্ঞতা।
              </p>
            </motion.div>

            {/* Feature Cards Grid (2x2 on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleEn}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={index}
                  className="bg-white rounded-3xl p-6 text-center lg:text-left shadow-md hover:shadow-xl hover-lift transition-all border border-stone-100 flex flex-col lg:flex-row items-center lg:items-start gap-4"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brand-amber fill-brand-amber" />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-lg text-stone-900">
                      {feature.titleEn}
                    </h3>
                    <h4 className="font-sans font-bold text-xs text-stone-900/60 leading-none">
                      {feature.titleBn}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-semibold pt-1">
                      {feature.descEn}
                    </p>
                    <p className="font-sans text-[11px] text-stone-500 leading-relaxed font-medium">
                      {feature.descBn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (col-span-5): Exploding/Floating Pizza Image scaled by 120% */}
          <div className="lg:col-span-5 flex justify-center items-center min-h-[300px] md:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] max-w-[520px] pointer-events-none select-none lg:scale-120"
            >
              <Image
                src="/images/transparent_pizza.png"
                alt="Delicious Exploding Gourmet Pizza"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
