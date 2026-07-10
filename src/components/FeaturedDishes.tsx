'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const WHATSAPP_NUMBER = '918248481654';

interface FeaturedItem {
  name: string;
  price: number;
  image: string;
  description: string;
  badge: 'Bestseller' | 'Popular';
}

const featuredItems: FeaturedItem[] = [
  {
    name: 'Chicken Shawarma',
    price: 45,
    image: '/images/food_rolls.jpeg',
    description: 'Our legendary shawarma, perfectly wrapped with crunchy fries',
    badge: 'Bestseller',
  },
  {
    name: 'Crispy Wings',
    price: 120,
    image: '/images/food_crispy_chicken.jpeg',
    description: 'Golden crispy, spicy inside — ekbar khele bar bar khabe!',
    badge: 'Bestseller',
  },
  {
    name: 'Cold Coffee',
    price: 70,
    image: '/images/beverage_coffee.jpeg',
    description: 'Thick, creamy, chilled to perfection',
    badge: 'Popular',
  },
  {
    name: 'Schezwan Noodles',
    price: 120,
    image: '/images/food_chowmein.jpeg',
    description: 'Spicy Schezwan magic, chicken loaded',
    badge: 'Bestseller',
  },
  {
    name: 'Haveli Fizz',
    price: 80,
    image: '/images/beverage_mocktail.jpeg',
    description: 'Our signature mocktail — refreshing and colorful',
    badge: 'Popular',
  },
  {
    name: 'Cheese Fries',
    price: 40,
    image: '/images/food_sandwich.jpeg',
    description: 'Crispy fries drowned in melted cheese sauce',
    badge: 'Popular',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut' as any,
    },
  }),
};

export default function FeaturedDishes() {
  const getWhatsAppLink = (itemName: string) => {
    const message = encodeURIComponent(
      `Hi! I'd like to order ${itemName} from Haveli Cafe 🍽️`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section
      className="py-16 md:py-24 px-4 bg-[#FFFBF0] overflow-hidden"
      id="featured"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            Our Bestsellers
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Amader most popular dishes — customers keep coming back for these! 🔥
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-[#1C1917]">
                  {item.name}
                </h3>
                <p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-[#1C1917]">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            View Full Menu
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
