'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameEn: 'Menu', nameBn: 'মেনু', href: '#menu' },
    { nameEn: 'Our Story', nameBn: 'আমাদের গল্প', href: '#story' },
    { nameEn: 'Why Us', nameBn: 'কেন আমরা', href: '#why-us' },
    { nameEn: 'Memories', nameBn: 'স্মৃতি', href: '#memories' },
    { nameEn: 'Reviews', nameBn: 'রিভিউ', href: '#reviews' },
    { nameEn: 'Contact', nameBn: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-md mx-0 md:mx-4 md:top-3 md:rounded-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <span className="w-10 h-10 rounded-full bg-brand-burgundy flex items-center justify-center text-brand-yellow font-bold text-xl shadow-md transform group-hover:scale-105 transition-transform">
                H
              </span>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-brand-burgundy leading-none">
                  Haveli
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-dark/70 font-semibold leading-none mt-0.5">
                  Cafe & Bistro
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm font-medium text-brand-dark/80 hover:text-brand-burgundy transition-colors flex flex-col items-center group"
                >
                  <span>{link.nameEn}</span>
                  <span className="text-[11px] text-brand-burgundy/60 opacity-0 group-hover:opacity-100 transition-opacity font-normal">
                    {link.nameBn}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+918248481654"
                className="p-2.5 rounded-full bg-brand-yellow/10 text-brand-burgundy hover:bg-brand-yellow/20 transition-colors"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#reserve"
                className="px-5 py-2.5 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black font-semibold text-sm hover-lift shadow-md hover:shadow-lg transition-all"
              >
                Reserve Table
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="tel:+918248481654"
                className="p-2 rounded-full bg-brand-yellow/20 text-brand-burgundy"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black hover:bg-brand-burgundy/90 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden glass-nav border-t border-brand-burgundy/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-brand-dark/90 hover:bg-brand-burgundy/5 hover:text-brand-burgundy transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span>{link.nameEn}</span>
                      <span className="text-xs text-brand-burgundy/60 font-normal">
                        {link.nameBn}
                      </span>
                    </div>
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-3">
                  <a
                    href="#reserve"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black font-bold text-center shadow-md text-sm"
                  >
                    Reserve Table (টেবিল বুকিং)
                  </a>
                  <a
                    href="https://wa.me/918248481654"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-green-600 text-white font-bold text-center shadow-md text-sm flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
