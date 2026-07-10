'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle, AlertTriangle, X } from 'lucide-react';

const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJy59wIAxbHToREI5jtFqa6s8';
const OWNER_WHATSAPP_NUMBER = '918248481654';

const ratingLabels: Record<number, string> = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Great!',
  5: 'Excellent!',
};

export default function ReputationManager() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [step, setStep] = useState<'rate' | 'positive' | 'negative' | 'done'>(
    'rate'
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    suggestion: '',
  });

  const handleRatingClick = useCallback((selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating >= 4) {
      setStep('positive');
    } else {
      setStep('negative');
    }
  }, []);

  // Auto-redirect to Google Reviews for positive ratings after 2s
  useEffect(() => {
    if (step !== 'positive') return;
    const timer = setTimeout(() => {
      window.open(GOOGLE_REVIEW_URL, '_blank');
    }, 2000);
    return () => clearTimeout(timer);
  }, [step]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `🔔 Customer Feedback - Haveli Cafe

Name: ${formData.name}
Phone: ${formData.phone}
Rating: ${rating}/5
Issue: ${formData.issue}
Suggestion: ${formData.suggestion || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setStep('done');
  };

  const resetAll = () => {
    setRating(0);
    setHoverRating(0);
    setStep('rate');
    setFormData({ name: '', phone: '', issue: '', suggestion: '' });
  };

  return (
    <section
      style={{ backgroundColor: '#F59E0B' }}
      className="py-24 relative overflow-hidden"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Card/Form on Left, Exploding Pizza Graphic on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (col-span-7): Heading and Rating Card */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Section Header */}
            <div className="text-center lg:text-left space-y-4">
              <div className="w-full flex justify-center lg:justify-start">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-stone-900 bg-white/20 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  Your Voice Matters • আপনার মতামত
                </span>
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Share Your Experience
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/90 font-semibold max-w-xl">
                আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ
              </p>
            </div>

            {/* Rating Card Container */}
            <div className="w-full">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-stone-100">
                <AnimatePresence mode="wait">
                  {/* Step 1: Star Rating */}
                  {step === 'rate' && (
                    <motion.div
                      key="step-rate"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-6"
                    >
                      <h3 className="font-serif font-bold text-xl md:text-2xl text-stone-900">
                        How was your visit?
                      </h3>
                      <p className="font-sans text-sm text-stone-600 font-semibold">
                        Tap the stars to rate your experience
                      </p>

                      {/* Stars */}
                      <div className="flex justify-center gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRatingClick(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transform hover:scale-110 transition-all duration-150 focus:outline-none cursor-pointer"
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            <Star
                              className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
                                star <= (hoverRating || rating)
                                  ? 'fill-[#F59E0B] text-[#F59E0B]'
                                  : 'text-stone-200 dark:text-stone-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      {/* Rating Label */}
                      <p className="font-sans text-sm font-extrabold text-stone-900 h-5">
                        {(hoverRating || rating) > 0
                          ? ratingLabels[hoverRating || rating]
                          : ''}
                      </p>
                    </motion.div>
                  )}

                  {/* Step 2A: Positive Rating (4-5 stars) */}
                  {step === 'positive' && (
                    <motion.div
                      key="step-positive"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-6 relative"
                    >
                      {/* Confetti-like amber dots */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: Math.random() * 200 - 100,
                              y: 0,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              y: [0, -(Math.random() * 150 + 50)],
                              x: Math.random() * 300 - 150,
                            }}
                            transition={{
                              duration: 2,
                              delay: Math.random() * 0.6,
                              ease: 'easeOut',
                            }}
                            className="absolute left-1/2 bottom-1/2 w-2 h-2 rounded-full bg-[#F59E0B]"
                          />
                        ))}
                      </div>

                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle className="w-9 h-9" />
                      </div>
                      <h3 className="font-serif font-bold text-xl md:text-2xl text-stone-900">
                        We&apos;re so happy you loved it! 🎉
                      </h3>
                      <p className="font-sans text-sm text-stone-700 font-semibold">
                        Amader Google page e review dile onek khushi hobo!
                      </p>
                      <p className="font-sans text-xs text-stone-500 italic">
                        Redirecting to Google Reviews in a moment...
                      </p>
                      <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 text-white font-extrabold text-sm hover-lift shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                        <span>Leave Google Review</span>
                      </a>
                      <div>
                        <button
                          onClick={resetAll}
                          className="text-xs text-stone-500 hover:text-stone-700 font-bold transition-colors mt-2 cursor-pointer"
                        >
                          ← Start over
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2B: Negative Rating (1-3 stars) — Feedback Form */}
                  {step === 'negative' && (
                    <motion.div
                      key="step-negative"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-lg md:text-xl text-stone-900">
                          We&apos;re sorry to hear that
                        </h3>
                        <button
                          onClick={resetAll}
                          className="p-1.5 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-start gap-2.5 bg-[#F59E0B]/10 p-4 rounded-xl border border-[#F59E0B]/20">
                        <AlertTriangle className="w-4 h-4 text-stone-750 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-stone-700 font-semibold leading-normal">
                          Please share the details so we can make things right. Your
                          feedback is sent directly to the cafe owner via WhatsApp.
                        </p>
                      </div>

                      <form
                        onSubmit={handleFeedbackSubmit}
                        className="space-y-4 font-sans"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleFormChange}
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-400 text-sm font-semibold dark:bg-stone-900 dark:border-stone-700"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleFormChange}
                              placeholder="Phone number"
                              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-400 text-sm font-semibold dark:bg-stone-900 dark:border-stone-700"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            What went wrong? *
                          </label>
                          <textarea
                            name="issue"
                            required
                            rows={3}
                            value={formData.issue}
                            onChange={handleFormChange}
                            placeholder="Tell us about the issue you faced..."
                            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-400 text-sm font-semibold dark:bg-stone-900 dark:border-stone-700"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            Suggestions (optional)
                          </label>
                          <textarea
                            name="suggestion"
                            rows={2}
                            value={formData.suggestion}
                            onChange={handleFormChange}
                            placeholder="How can we improve?"
                            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-400 text-sm font-semibold dark:bg-stone-900 dark:border-stone-700"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-stone-900 text-white font-extrabold text-sm hover:bg-stone-850 transition-all flex items-center justify-center gap-2 shadow-md hover-lift cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Send Feedback via WhatsApp</span>
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* Done State */}
                  {step === 'done' && (
                    <motion.div
                      key="step-done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-5"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle className="w-9 h-9" />
                      </div>
                      <h3 className="font-serif font-bold text-xl md:text-2xl text-stone-900">
                        Thank You!
                      </h3>
                      <p className="font-sans text-sm text-stone-700 font-semibold max-w-sm mx-auto">
                        Your feedback has been sent to the cafe owner. We&apos;ll
                        work on improving your experience.
                      </p>
                      <button
                        onClick={resetAll}
                        className="px-6 py-2.5 rounded-full border border-stone-200 text-stone-900 text-xs font-bold hover:bg-stone-50 transition-all cursor-pointer"
                      >
                        Rate Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column (col-span-5): Exploding/Floating Pizza Image scaled by 120% */}
          <div className="lg:col-span-5 flex justify-center items-center min-h-[300px] md:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] max-w-[520px] pointer-events-none select-none lg:scale-120"
            >
              <Image
                src="/images/transparent_pizza.png"
                alt="Delicious Exploding Gourmet Pizza"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
