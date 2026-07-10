'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

interface FavouriteItem {
  name: string;
  badge: 'Most Ordered' | 'Best Seller' | 'Highest Rated' | 'Fan Favourite';
  price: number;
  image: string;
  rating: number;
  orderCount: string;
}

const favourites: FavouriteItem[] = [
  {
    name: 'Chicken Shawarma',
    badge: 'Most Ordered',
    price: 45,
    image: '/images/food_rolls.jpeg',
    rating: 5,
    orderCount: '450+ orders this month',
  },
  {
    name: 'Cold Coffee',
    badge: 'Best Seller',
    price: 70,
    image: '/images/beverage_coffee.jpeg',
    rating: 5,
    orderCount: '380+ orders this month',
  },
  {
    name: 'Crispy Wings',
    badge: 'Highest Rated',
    price: 120,
    image: '/images/food_crispy_chicken.jpeg',
    rating: 5,
    orderCount: '290+ orders this month',
  },
  {
    name: 'Haveli Fizz',
    badge: 'Fan Favourite',
    price: 80,
    image: '/images/beverage_mocktail.jpeg',
    rating: 5,
    orderCount: '240+ orders this month',
  },
];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
};

export default function CustomerFavourites() {
  return (
    <section 
      style={{
        background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
      }}
      className="py-16 md:py-24 px-4 overflow-hidden" 
      id="favourites"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span>
            <span className="text-xs font-bold text-stone-900 bg-white/20 border border-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Guest Choice Awards
            </span>
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Customer Favourites
          </h2>
          <div className="w-16 h-1 bg-white/60 rounded-full mx-auto mb-4" />
          <p className="font-sans text-white/90 text-sm md:text-base max-w-lg mx-auto font-semibold">
            Based on 500+ reviews — these are the dishes our guests love and recommend the most!
          </p>
        </div>

        {/* 2-Column Grid Layout: Image on Left (col-span-5), Cards on Right (col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (col-span-5): Beautiful Eating Shawarma Graphic scaled down to 70% */}
          <div className="lg:col-span-5 flex justify-center items-center min-h-[220px] md:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              whileInView={{ opacity: 1, scale: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] max-w-[420px] pointer-events-none select-none lg:scale-70 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/images/transparent_eating_shawarma.jpg"
                alt="Delicious Gourmet Chicken Shawarma"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column (col-span-7): Cards Grid (Horizontal scroll on mobile, 2x2 grid on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-4 lg:pb-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-x-visible"
          >
            {favourites.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="w-[145px] sm:w-[180px] lg:w-auto flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover-lift transition-all duration-300 border border-stone-100 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Badge overlay */}
                  <div className="relative aspect-[4/3] w-full bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute top-2 right-2 bg-brand-amber/95 text-stone-900 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 md:p-5">
                    <h3 className="font-semibold text-stone-900 text-xs md:text-lg mb-0.5 md:mb-1 leading-snug">
                      {item.name}
                    </h3>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-0.5 mb-1 md:mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>

                    <p className="text-[9px] md:text-xs text-stone-600 font-semibold">
                      {item.orderCount}
                    </p>
                  </div>
                </div>

                {/* Price row */}
                <div className="px-3 pb-3 pt-2 md:px-5 md:pb-5 md:pt-3 border-t border-stone-100 dark:border-stone-700 flex items-center justify-between">
                  <span className="text-sm md:text-lg font-extrabold text-brand-amber">
                    ₹{item.price}
                  </span>
                  <span className="text-[9px] md:text-xs text-stone-500 font-bold dark:text-stone-400">
                    Delicious Choice
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
