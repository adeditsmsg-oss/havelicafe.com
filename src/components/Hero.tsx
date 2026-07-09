'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-yellow pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Scattered red flower/petal decoration elements inspired by reference design */}
      <div className="absolute top-24 left-[10%] text-brand-burgundy/20 animate-bounce duration-1000 hidden md:block">
        🌸
      </div>
      <div className="absolute bottom-20 left-[5%] text-brand-burgundy/25 text-xl rotate-12 hidden md:block">
        🌺
      </div>
      <div className="absolute top-40 right-[40%] text-brand-burgundy/15 text-lg hidden md:block">
        🌸
      </div>
      <div className="absolute bottom-16 right-[10%] text-brand-burgundy/30 text-2xl animate-pulse hidden md:block">
        🌺
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-brand-dark">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-burgundy/10 px-4 py-1.5 rounded-full text-brand-burgundy font-semibold text-xs tracking-wider uppercase max-w-fit"
            >
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Premium Art Cafe & Fusion Eatery</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-brand-burgundy leading-tight">
                Savour Premium <br />
                <span className="text-brand-dark underline decoration-brand-burgundy/30">Fusion Swad!</span>
              </h1>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-brand-burgundy/90 tracking-wide">
                স্বাদে ও আড্ডায় ভরা মেদিনীপুরের সেরা ক্যাফে
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-dark/80 max-w-xl leading-relaxed font-medium"
            >
              Step into Midnapore's most artistic hangout. Indulge in our signature Chicken Shawarma, crispy Chinese delights, loaded burgers, freshly-brewed coffee, and special tandoori chai.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#menu"
                className="px-8 py-4 rounded-full bg-brand-burgundy text-brand-yellow font-bold text-base hover-lift shadow-lg hover:shadow-brand-burgundy/20 transition-all flex items-center space-x-2"
              >
                <span>Explore Menu (মেনু দেখুন)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#reserve"
                className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-burgundy text-brand-burgundy font-bold text-base hover:bg-brand-burgundy/5 transition-all"
              >
                Book Table (টেবিল বুকিং)
              </a>
            </motion.div>

            {/* Social Trust / Google rating snippet in hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4 pt-4 border-t border-brand-burgundy/10 max-w-md"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-yellow overflow-hidden bg-brand-burgundy">
                    <img
                      src={`/images/${
                        i === 1
                          ? 'interior_mural.jpeg'
                          : i === 2
                          ? 'beverage_mocktail.jpeg'
                          : i === 3
                          ? 'food_chilli_chicken.jpeg'
                          : 'beverage_coffee.jpeg'
                      }`}
                      alt="Customer Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-brand-dark/95">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-brand-burgundy text-brand-burgundy" />
                  ))}
                  <span className="font-bold ml-1">4.6/5</span>
                </div>
                <p className="text-xs text-brand-dark/70">Loved by 1000+ guests in Dharma, Midnapore</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column (Angled/Offset styling inspired by reference design) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background circular sunburst */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-brand-burgundy/5 blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-brand-cream/90 hover:rotate-0 transition-transform duration-500 cursor-pointer"
            >
              <Image
                src="/images/food_wrap_drink.jpeg"
                alt="Signature Shawarma Wrap & Refreshing Mocktail"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Badge overlay on image */}
              <div className="absolute top-4 right-4 bg-brand-burgundy text-brand-yellow font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-md z-10 tracking-wider">
                Bestseller Wrap ⭐
              </div>
            </motion.div>

            {/* Tiny offset circular photo display floating next to the main */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-8 border-brand-yellow shadow-xl z-20 hidden sm:block"
            >
              <img
                src="/images/beverage_coffee.jpeg"
                alt="Creamy Cold Coffee"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
