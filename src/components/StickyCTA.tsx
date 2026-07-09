'use client';

import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, MapPin, CalendarDays } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling 300px down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-burgundy/10 py-3 px-4 shadow-2xl flex md:hidden items-center justify-between gap-3 animate-fade-in">
      {/* Directions Link (Small Icon Button) */}
      <a
        href="https://maps.app.goo.gl/ChIJ-S9hK5i42joRoQv595Dk74Y"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-cream p-3 rounded-xl text-brand-burgundy hover:bg-brand-yellow/20 flex items-center justify-center border border-brand-burgundy/5"
        title="Get Directions"
      >
        <MapPin className="w-5 h-5" />
      </a>

      {/* Call Now (Medium Size Button) */}
      <a
        href="tel:+918248481654"
        className="bg-brand-burgundy text-brand-yellow font-bold py-3 px-4 rounded-xl flex-1 flex items-center justify-center gap-2 text-sm shadow-md"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp (Medium Size Button) */}
      <a
        href="https://wa.me/918248481654"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white font-bold py-3 px-4 rounded-xl flex-1 flex items-center justify-center gap-2 text-sm shadow-md"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      {/* Reserve Table Link (Small Icon Button) */}
      <a
        href="#reserve"
        className="bg-brand-cream p-3 rounded-xl text-brand-burgundy hover:bg-brand-yellow/20 flex items-center justify-center border border-brand-burgundy/5"
        title="Reserve a Table"
      >
        <CalendarDays className="w-5 h-5" />
      </a>
    </div>
  );
}
