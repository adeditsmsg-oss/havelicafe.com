'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, UtensilsCrossed } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as any },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.3 + i * 0.12, ease: 'easeOut' as any },
  }),
};

const stats = [
  { icon: Clock, value: '3+', label: 'Years' },
  { icon: Users, value: '500+', label: 'Regulars' },
  { icon: UtensilsCrossed, value: '50+', label: 'Menu Items' },
];

const galleryImages = [
  {
    src: '/images/interior_tables.jpeg',
    alt: 'Haveli Cafe stone walls with rustic tire seating and green grass panels',
    className: 'col-span-1 row-span-2',
    aspectClass: 'aspect-[3/4]',
  },
  {
    src: '/images/interior_mural.jpeg',
    alt: 'Hand-painted DSLR girl mural with warm wooden seating',
    className: 'col-span-1 row-span-1',
    aspectClass: 'aspect-square',
  },
  {
    src: '/images/interior_seating.jpeg',
    alt: 'Coffee wall art lounge with comfortable black sofa seating',
    className: 'col-span-1 row-span-1',
    aspectClass: 'aspect-square',
  },
  {
    src: '/images/cafe_counter.jpeg',
    alt: 'Haveli Cafe bar counter with geometric patterns and hanging lights',
    className: 'col-span-2 row-span-1',
    aspectClass: 'aspect-[2/1]',
  },
];

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="about">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-amber/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-amber/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column — Story Text */}
          <div className="flex flex-col space-y-6">
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full inline-block w-fit"
            >
              Our Story • আমাদের গল্প
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={1}
              className="font-serif font-black text-3xl md:text-4xl lg:text-5xl text-brand-burgundy leading-tight"
            >
              Where Every Cup{' '}
              <span className="underline decoration-brand-amber/60 decoration-4 underline-offset-4">
                Tells a Story
              </span>
            </motion.h2>

            <div className="space-y-5">
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={2}
                className="font-sans text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium"
              >
                What started as a small dream in the heart of Midnapore has grown into something truly special.
                Haveli Cafe isn&apos;t just a restaurant — it&apos;s a place where friends meet for adda over coffee,
                where families celebrate milestones, and where every bite carries a piece of our passion.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={3}
                className="font-sans text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium"
              >
                আমাদের প্রতিটি dish এ আছে ভালোবাসা আর dedication. From our signature Chicken Shawarma to
                the perfectly brewed Filter Coffee — we put our heart into everything we serve.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={4}
                className="font-sans text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium"
              >
                Our rustic-modern interiors, hand-painted murals, and cozy seating — everything is designed to
                make you feel at home. Come for the food, stay for the vibe. ✨
              </motion.p>
            </div>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={5}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center sm:items-start space-y-1.5">
                  <div className="flex items-center space-x-2 text-brand-burgundy">
                    <div className="bg-brand-amber p-2 rounded-xl">
                      <stat.icon className="w-4 h-4 text-black" />
                    </div>
                    <span className="font-serif font-black text-2xl sm:text-3xl">{stat.value}</span>
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — 2x2 Asymmetric Image Grid */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i}
                className={`relative rounded-3xl overflow-hidden shadow-md ${img.className}`}
              >
                <div className={`relative w-full h-full ${img.aspectClass}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
