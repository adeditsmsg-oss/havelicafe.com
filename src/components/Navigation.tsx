'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reserve', href: '#reserve' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  /* ─── Scroll shadow ─── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── Active section detection via IntersectionObserver ─── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ─── Lock body scroll when drawer open ─── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* ═══ Top Nav Bar ═══ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* ── Logo ── */}
            <a href="#home" className="flex items-center gap-2.5 group" aria-label="Haveli Cafe Home">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Haveli Cafe Logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-serif text-lg font-bold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors hidden sm:inline">
                Haveli Cafe
              </span>
            </a>

            {/* ── Desktop Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === link.href
                      ? 'text-amber-600'
                      : 'text-stone-600 hover:text-amber-600'
                  }`}
                >
                  {link.label}
                  {/* Amber underline for active section */}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-amber-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918248481654"
                className="p-2.5 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
                title="Call us"
                aria-label="Call Haveli Cafe"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#reserve"
                className="px-6 py-2.5 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm hover:shadow-md"
              >
                Book a Table
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-stone-700 hover:bg-amber-50 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ Mobile Drawer (slide from right) ═══ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={closeDrawer}
              aria-hidden
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <Image
                      src="/images/logo.png"
                      alt="Haveli Cafe"
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <span className="font-serif font-bold text-stone-900">Haveli Cafe</span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-4 py-5 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeDrawer}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === link.href
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="border-t border-stone-100 px-4 py-5 space-y-3">
                {/* Phone */}
                <a
                  href="tel:+918248481654"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-stone-50 text-stone-700 font-medium transition-colors hover:bg-stone-100"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>+91 82484 81654</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918248481654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 text-green-700 font-medium transition-colors hover:bg-green-100"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Book CTA */}
                <a
                  href="#reserve"
                  onClick={closeDrawer}
                  className="block w-full py-3.5 rounded-full bg-amber-500 text-white font-bold text-center text-sm hover:bg-amber-600 transition-colors shadow-sm"
                >
                  Book a Table
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
