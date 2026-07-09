import React from 'react';
import { Star, ShieldCheck, Flame, HeartHandshake } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />,
      titleEn: '4.6 Stars on Google',
      titleBn: '৪.৬ স্টার গুগল রেটিং',
      descEn: 'Based on 500+ customer reviews',
      descBn: '৫০০+ কাস্টমার রিভিউ'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
      titleEn: '100% Fresh & Hygienic',
      titleBn: '১০০% তাজা ও স্বাস্থ্যকর',
      descEn: 'FSSAI standards maintained',
      descBn: 'খাবারের সেরা মান'
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-600" />,
      titleEn: 'Youth & Family Hub',
      titleBn: 'স্টুডেন্ট ও ফ্যামিলি জোন',
      descEn: 'Cozy couple & student seating',
      descBn: 'আড্ডা মারার সেরা জায়গা'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-burgundy" />,
      titleEn: 'Super Pocket-Friendly',
      titleBn: 'পকেট ফ্রেন্ডলি দাম',
      descEn: 'Value meals starting at ₹40',
      descBn: 'দারুণ স্বাদ বাজেটের মধ্যে'
    }
  ];

  return (
    <section className="bg-brand-burgundy text-brand-cream py-6 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-brand-cream/10">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3.5 px-2 md:px-6 py-2 md:py-0 justify-start md:justify-center"
            >
              <div className="bg-brand-cream/10 p-2.5 rounded-xl flex items-center justify-center shadow-inner mt-1">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm md:text-base tracking-wide text-brand-yellow">
                  {item.titleEn}
                </span>
                <span className="font-sans font-semibold text-xs md:text-sm text-brand-cream/90">
                  {item.titleBn}
                </span>
                <span className="font-sans text-[10px] md:text-xs text-brand-cream/60 mt-0.5">
                  {item.descEn} • {item.descBn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
