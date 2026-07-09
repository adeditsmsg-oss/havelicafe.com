'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Flame, Leaf } from 'lucide-react';
import { menuCategories } from '@/data/menuData';

export default function DigitalMenu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0]?.name || 'Coffee');
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (tabBarRef.current) {
      const activeButton = tabBarRef.current.querySelector(
        '[data-active="true"]'
      ) as HTMLElement | null;
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeTab]);

  const activeCategory = menuCategories.find((cat) => cat.name === activeTab);
  const filteredItems = activeCategory ? activeCategory.items : [];

  return (
    <section
      className="py-16 md:py-24 px-4 bg-[#FFFBF0] overflow-hidden"
      id="menu"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            Our Complete Menu
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-4" />
          <p className="font-sans text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            From crispy starters to chilled mocktails — sob ache! 🍽️
          </p>
        </div>

        {/* Horizontal Scrollable Tab Bar */}
        <div
          ref={tabBarRef}
          className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 md:justify-center"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              data-active={activeTab === cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.name
                  ? 'bg-brand-amber text-stone-900 shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-brand-amber'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 divide-y md:divide-y-0 divide-stone-100">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.name + index}
                      className="flex justify-between items-start py-3 border-b border-stone-100 last:border-b-0"
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold text-stone-900 text-sm md:text-base">
                            {item.name}
                          </span>
                          {item.isVeg && (
                            <span title="Vegetarian">
                              <Leaf className="w-3.5 h-3.5 text-emerald-600 fill-emerald-50 shrink-0" />
                            </span>
                          )}
                          {item.isPopular && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full shrink-0">
                              <Flame className="w-3.5 h-3.5 shrink-0" />
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end shrink-0 ml-auto">
                        <span className="font-bold text-amber-600 text-sm md:text-base">
                          ₹{item.price}
                        </span>
                        {item.priceDouble && (
                          <span className="text-[10px] text-stone-500 font-medium">
                            Double: ₹{item.priceDouble}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-stone-400 text-sm">
                  No items in this category yet — check back soon!
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a
            href="https://adeditsmsg-oss.github.io/haveli-cafe-menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg cursor-pointer"
          >
            View Full Menu
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
