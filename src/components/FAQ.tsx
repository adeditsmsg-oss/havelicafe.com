'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { getFAQSchema } from '@/utils/seo';

interface FAQItem {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      questionEn: 'Where is Haveli Cafe located in Midnapore?',
      questionBn: 'হাভেলি ক্যাফে মেদিনীপুরের কোথায় অবস্থিত?',
      answerEn: 'We are located at Ashok Nagar, Midnapore Railway Station Road, Dharma, Midnapore, West Bengal 721101. It is extremely accessible from Midnapore station.',
      answerBn: 'আমাদের ক্যাফেটি মেদিনীপুর রেলওয়ে স্টেশন রোড সংলগ্ন অশোক নগর, ধর্মা, মেদিনীপুর, পশ্চিমবঙ্গ ৭২১১০১-এ অবস্থিত। স্টেশন থেকে আমাদের ক্যাফেতে আসা খুবই সহজ।'
    },
    {
      questionEn: 'What are your daily opening and closing hours?',
      questionBn: 'আপনাদের ক্যাফে প্রতিদিন কখন খোলা ও বন্ধ হয়?',
      answerEn: 'Haveli Cafe is open every single day from 11:00 AM to 11:00 PM. Hot meals, coffee, and mocktails are served throughout these hours.',
      answerBn: 'হাভেলি ক্যাফে সপ্তাহে সাত দিনই সকাল ১১:০০ টা থেকে রাত ১১:০০ টা পর্যন্ত খোলা থাকে। এই সময়ের মধ্যে যেকোনো সময় আপনি খাবার ও পানীয় অর্ডার করতে পারেন।'
    },
    {
      questionEn: 'Do you have private seating for couples and students?',
      questionBn: 'আপনাদের এখানে কি কাপল ও স্টুডেন্টদের জন্য বসার ভালো জায়গা আছে?',
      answerEn: 'Yes! We have dedicated cozy seating zones for couples looking for privacy, and spacious tables (with tire stools) for college students to enjoy their adda.',
      answerBn: 'হ্যাঁ! কাপলদের জন্য আমাদের এখানে সুন্দর নিরিবিলি বসার জায়গা আছে, আর কলেজ স্টুডেন্টদের জমিয়ে আড্ডা দেওয়ার জন্য বড় টেবিল ও আকর্ষণীয় টায়ার-সিটের ব্যবস্থা রয়েছে।'
    },
    {
      questionEn: 'Is parking space available at the restaurant?',
      questionBn: 'আপনাদের এখানে কি পার্কিংয়ের সুব্যবস্থা আছে?',
      answerEn: 'Yes, we have comfortable, free parking spaces for both two-wheelers and four-wheelers directly near the entrance road.',
      answerBn: 'হ্যাঁ, আমাদের ক্যাফের প্রবেশপথের ঠিক সামনেই মোটরসাইকেল এবং গাড়ি পার্কিং করার জন্য যথেষ্ট নিরাপদ ও বিনামূল্যে জায়গা রয়েছে।'
    },
    {
      questionEn: 'What are the must-try signature dishes at Haveli?',
      questionBn: 'হাভেলি ক্যাফের সিগনেচার খাবারগুলো কী কী?',
      answerEn: 'You must try our Signature Chicken Shawarma Wrap, Crispy Chicken Manchurian (toothpick), Layered Sunset Mocktail, and Premium Cold Coffee with Ice Cream. They are highly reviewed by our customers!',
      answerBn: 'আমাদের সিগনেচার চিকেন শর্মা র‍্যাপ, ক্রিস্পি টুথপিক চিকেন, সানসেট লেয়ারড মকটেল এবং আইসক্রিম দেওয়া কোল্ড কফি অবশ্যই ট্রাই করবেন। এগুলো আমাদের কাস্টমারদের সবচেয়ে পছন্দের।'
    },
    {
      questionEn: 'Do you arrange tables for birthday celebrations or office meetings?',
      questionBn: 'আপনারা কি জন্মদিন উদযাপন বা অফিস মিটিংয়ের জন্য টেবিল বুকিং নেন?',
      answerEn: 'Absolutely! We specialize in birthday parties, anniversaries, and small office gatherings. We can also organize custom decorations. Please call us at +91 8248481654 to book.',
      answerBn: 'হ্যাঁ, নিশ্চয়ই! আমরা জন্মদিন, অ্যানিভার্সারি এবং ছোটখাটো অফিস গেট-টুগেদারের জন্য স্পেশাল বুকিং নিয়ে থাকি। প্রয়োজনে বেলুন ও লাইটের স্পেশাল ডেকোরেশনও করা হয়। বুকিংয়ের জন্য কল করুন: +91 ৮২৪৮৪৮১৬৫৪।'
    }
  ];

  // Generate FAQ Schema for Local SEO
  const schemaFaqs = faqs.map(f => ({
    question: f.questionEn,
    answer: f.answerEn
  }));
  const faqSchema = getFAQSchema(schemaFaqs);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Common Questions • সাধারণ জিজ্ঞাসা
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            Got questions? We have compiled responses regarding booking, parking, hours, and dishes to help you out.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 font-sans">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-brand-cream/40 rounded-2xl border border-brand-burgundy/5 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-burgundy/70 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif font-bold text-base md:text-lg text-brand-burgundy leading-snug">
                        {faq.questionEn}
                      </h3>
                      <h4 className="font-sans font-bold text-xs text-brand-dark/60 leading-none mt-1">
                        {faq.questionBn}
                      </h4>
                    </div>
                  </div>
                  <div className="bg-brand-cream p-1.5 rounded-lg text-brand-burgundy flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-brand-burgundy/5"
                    >
                      <div className="px-6 py-5 space-y-3.5 bg-white text-xs sm:text-sm text-brand-dark/80 font-medium">
                        <p className="leading-relaxed">{faq.answerEn}</p>
                        <p className="leading-relaxed text-[13px] text-brand-dark/60 border-l-2 border-brand-yellow pl-3 italic">
                          {faq.answerBn}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
