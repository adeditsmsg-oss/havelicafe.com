import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { seoConfig } from '@/utils/seo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-16 pb-24 md:pb-12 border-t border-brand-burgundy/10 relative z-30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Brand description (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <a href="#" className="flex items-center group" aria-label="Haveli Cafe Home">
              <div className="relative h-12 w-28">
                <Image
                  src="/images/logo.png"
                  alt="Haveli Cafe Logo"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
            <p className="text-xs sm:text-sm text-brand-cream/65 leading-relaxed font-semibold">
              Midnapore's premium fusion diner and theme cafe. Enjoy signature shawarma, delicious Chinese platters, and hot tandoori tea in an artistic setting featuring custom wall murals.
            </p>
            <div className="flex items-center space-x-3 text-xs text-brand-yellow font-bold">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.6/5 (Google Rating)</span>
              </span>
              <span className="text-brand-cream/30">|</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FSSAI Certified</span>
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-brand-yellow border-b border-brand-cream/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-brand-cream/70">
              <li>
                <a href="#menu" className="hover:text-brand-yellow transition-colors">Digital Menu (খাবার তালিকা)</a>
              </li>
              <li>
                <a href="#story" className="hover:text-brand-yellow transition-colors">Our Story (আমাদের ইতিহাস)</a>
              </li>
              <li>
                <a href="#memories" className="hover:text-brand-yellow transition-colors">Cafe Memories (গ্যালারি)</a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-brand-yellow transition-colors">Table Reservation (টেবিল বুকিং)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-yellow transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Local SEO & Nearby landmarks (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif font-bold text-base text-brand-yellow border-b border-brand-cream/10 pb-2">
              Local SEO & Landmarks
            </h4>
            <div className="space-y-3 text-xs text-brand-cream/65 font-medium leading-relaxed">
              <p>
                Proudly serving customers searching for <strong className="text-brand-yellow">"Bengali Restaurant Near Me"</strong> or <strong className="text-brand-yellow">"Best Cafe in Midnapore"</strong>. Conveniently located near major landmarks including Midnapore Railway Station, Dharma area, Ashok Nagar, Midnapore College, and Vidyasagar University road.
              </p>
              <p>
                We are a couple-friendly, student-friendly, and family-oriented dining destination. Drop by for authentic tastes and great memories.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Haveli Cafe & Restaurant, Midnapore. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-semibold">
            Made with <Heart className="w-3.5 h-3.5 text-brand-burgundy fill-brand-burgundy" /> in Midnapore, West Bengal
          </p>
        </div>
      </div>
    </footer>
  );
}
