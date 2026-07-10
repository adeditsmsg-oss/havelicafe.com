import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedDishes from '@/components/FeaturedDishes';
import OurStory from '@/components/OurStory';
import PopularMenu from '@/components/PopularMenu';
import DigitalMenu from '@/components/DigitalMenu';
import CustomerFavourites from '@/components/CustomerFavourites';
import CafeMemories from '@/components/CafeMemories';
import RestaurantGallery from '@/components/RestaurantGallery';
import Reservation from '@/components/Reservation';
import ReputationManager from '@/components/ReputationManager';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFFBF0]">
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

        {/* 7. Complete Digital Menu */}
        <DigitalMenu />

        {/* 4. About & Our Story */}
        <OurStory />

        {/* 13. Google Review Reputation Management */}
        <ReputationManager />

        {/* 6. Popular Menu Grid (NEW) */}
        <PopularMenu />

        {/* 8. Customer Favourites (NEW) */}
        <CustomerFavourites />

        {/* 9. Cafe Memories Gallery (using real images) */}
        <CafeMemories />

        {/* 10. Restaurant Gallery (NEW) */}
        <RestaurantGallery />

        {/* 11. Reservation Form */}
        <Reservation />

        {/* 15. Contact & Google Map */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
