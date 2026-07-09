'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Compass, Sparkles } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="story">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Offset Image Collage (inspired by reference design) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Storefront main image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[75%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-brand-cream z-10"
            >
              <Image
                src="/images/exterior.jpeg"
                alt="Haveli Cafe Storefront in Midnapore"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* DSLR mural overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 w-[50%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20"
            >
              <Image
                src="/images/interior_mural.jpeg"
                alt="Hand-painted DSLR Camera Mural at Haveli Cafe"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Narrative Text */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-brand-dark">
            <div className="space-y-4">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full inline-block">
                Our Story • আমাদের কথা
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
                Where Art Meets <br />
                <span className="text-brand-dark underline decoration-brand-yellow/60">Gastronomy</span>
              </h2>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-burgundy/90">
                এক টুকরো শিল্প আর দারুণ স্বাদ, এক ছাদের তলায়!
              </h3>
            </div>

            <div className="space-y-5 font-sans text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium">
              <p>
                Founded in Midnapore, <strong>Haveli Cafe & Restaurant</strong> was born out of a desire to blend creative expression with outstanding fusion culinary craft. We designed our space to be more than just an eatery—it is a visual and sensory experience.
              </p>
              <p>
                From our hand-painted wall art of the camera-wielding girl to the quirky, sunglass-wearing cat washbasin, every corner of Haveli is crafted to inspire conversations. Relax on our unique tire-stools or sink into cozy couple corners—designed for the perfect college adda or a warm family dinner.
              </p>
              <p>
                Our kitchen is driven by the same creative passion. Whether it is slow-roasted Chicken Shawarma wrapped in buttery parathas, hot sizzling Chinese plates, freshly brewed caps of cold coffee, or special kesar milk tea—we serve happiness in every bite.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-brand-cream">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-1.5 text-brand-burgundy">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-sm">Artistic Vibe</span>
                </div>
                <span className="text-xs text-brand-dark/60 font-semibold">Stunning hand-painted murals</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-1.5 text-brand-burgundy">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold text-sm">Cozy Comfort</span>
                </div>
                <span className="text-xs text-brand-dark/60 font-semibold">Couple and family friendly corners</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-1.5 text-brand-burgundy">
                  <Compass className="w-4 h-4" />
                  <span className="font-bold text-sm">Fusion Swad</span>
                </div>
                <span className="text-xs text-brand-dark/60 font-semibold">Top-rated recipe ingredients</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
