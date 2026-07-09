'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, PiggyBank, Heart, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Camera className="w-6 h-6 text-brand-yellow" />,
      titleEn: 'Instagrammable Spot',
      titleBn: 'দারুণ সেলফি স্পট',
      descEn: 'From our custom DSLR girl painting to the cool cat mural, our interior is ready for your selfies and Reels.',
      descBn: 'ডিএসএলআর গার্ল পেইন্টিং থেকে শুরু করে চশমা পরা বিড়াল - প্রতিটি কোণ ছবি তোলার জন্য একদম পারফেক্ট।'
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-brand-yellow" />,
      titleEn: 'Student & Pocket Friendly',
      titleBn: 'স্টুডেন্ট ফ্রেন্ডলি দাম',
      descEn: 'Premium taste that fits your budget. Special tea starts at ₹40 and combo meals are just ₹199!',
      descBn: 'বাজেট ফ্রেন্ডলি দামে প্রিমিয়াম স্বাদ। চা শুরু মাত্র ৪০ টাকা থেকে আর পেটভরা কম্বো মিল জাস্ট ১৯৯ টাকায়!'
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-yellow" />,
      titleEn: 'Cozy Cozy Seating',
      titleBn: 'আরামদায়ক বসার জায়গা',
      descEn: 'Enjoy our signature tire seats, quiet couple corners, and spacious tables for family get-togethers.',
      descBn: 'টায়ার স্টুল, নিরিবিলি কাপল কর্নার এবং ফ্যামিলি গেট-টুগেদারের জন্য বড় টেবিল।'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-yellow" />,
      titleEn: 'Always Freshly Cooked',
      titleBn: '১০০% ফ্রেশ খাবার',
      descEn: 'We maintain strict FSSAI hygiene standards. No pre-cooked meats or artificial colors, only fresh spices.',
      descBn: 'কড়া হাইজিন মেনে তৈরি খাবার। কোনো আগে থেকে রান্না করা মাংস বা কৃত্রিম রং ব্যবহার করা হয় না।'
    }
  ];

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden" id="why-us">
      {/* Background radial blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Our Key Values • আমাদের বৈশিষ্ট্য
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Why Dine at Haveli?
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            We offer the perfect blend of delicious fusion recipes, unique art decor, and warm Bengali hospitality.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-burgundy/5 shadow-sm hover:shadow-lg hover-lift transition-all flex flex-col justify-between items-start space-y-6"
            >
              <div className="bg-brand-burgundy p-3.5 rounded-2xl flex items-center justify-center shadow-md">
                {reason.icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-brand-burgundy">
                  {reason.titleEn}
                </h3>
                <h4 className="font-sans font-bold text-xs text-brand-dark/60 leading-none">
                  {reason.titleBn}
                </h4>
                <p className="font-sans text-xs text-brand-dark/70 leading-relaxed font-semibold">
                  {reason.descEn}
                </p>
                <p className="font-sans text-[11px] text-brand-dark/60 leading-relaxed font-medium">
                  {reason.descBn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
