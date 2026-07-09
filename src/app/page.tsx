import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedDishes from '@/components/FeaturedDishes';
import OurStory from '@/components/OurStory';
import WhyChooseUs from '@/components/WhyChooseUs';
import DigitalMenu from '@/components/DigitalMenu';
import CafeMemories from '@/components/CafeMemories';
import ReputationManager from '@/components/ReputationManager';
import Reservation from '@/components/Reservation';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Floating navigation on top */}
      <Navigation />

      {/* Main content body */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Featured Dishes / Bestsellers */}
        <FeaturedDishes />

        {/* 4. About & Our Story */}
        <OurStory />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Complete Digital Menu */}
        <DigitalMenu />

        {/* 7. Cafe Memories Gallery (using real images) */}
        <CafeMemories />

        {/* 8. Google Review Reputation Management */}
        <ReputationManager />

        {/* 9. Reservation Form */}
        <Reservation />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Contact & Google Map */}
        <Contact />
      </main>

      {/* Sticky Mobile conversion bar */}
      <StickyCTA />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
