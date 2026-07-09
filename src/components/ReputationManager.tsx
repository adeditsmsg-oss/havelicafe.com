'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle, AlertTriangle, ArrowRight, X } from 'lucide-react';

// Configurable owner details
const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJ-S9hK5i42joRoQv595Dk74Y'; // Replace with real maps ID
const OWNER_WHATSAPP_NUMBER = '918248481654'; // Country code (91) + phone number

export default function ReputationManager() {
  const [showRatingSelector, setShowRatingSelector] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [redirecting, setRedirecting] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: 'Food Quality',
    suggestion: ''
  });

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating >= 4) {
      setRedirecting(true);
      setSubmitted(true);
      // Wait 1.8 seconds then redirect to Google reviews page
      setTimeout(() => {
        window.open(GOOGLE_REVIEW_URL, '_blank');
        setRedirecting(false);
      }, 1800);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the feedback message for WhatsApp
    const message = `*Haveli Cafe Customer Feedback*
----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Rating Given:* ${rating} / 5 Stars ⭐
*Issue Category:* ${formData.issue}
*Suggestion:* ${formData.suggestion}
----------------------------------
Thank you for helping us improve!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${OWNER_WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300" id="reviews">
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container with exact design from screenshot */}
        <div className="relative bg-brand-yellow rounded-[2rem] p-8 md:p-14 border border-brand-yellow/10 shadow-xl overflow-hidden min-h-[300px] flex items-center">
          
          {/* Layered transparent circular graphics + floating star on the right */}
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 z-0 pointer-events-none hidden sm:block">
            {/* Outermost circle */}
            <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 animate-pulse" />
            {/* Middle circle */}
            <div className="absolute inset-6 rounded-full bg-white/10 border border-white/10" />
            {/* Innermost circle */}
            <div className="absolute inset-12 rounded-full bg-white/15" />
            {/* Floating 3D Star */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl animate-bounce" style={{ animationDuration: '4s' }}>
              ⭐
            </div>
          </div>

          {/* Banner content */}
          <div className="relative z-10 w-full max-w-xl text-left space-y-6">
            
            <AnimatePresence mode="wait">
              {!showRatingSelector && !submitted ? (
                // Initial State: Exact Duplicate of Banner in Screenshot
                <motion.div
                  key="banner-home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-5"
                >
                  {/* Support Us Badge */}
                  <div className="inline-flex items-center space-x-1 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    <span className="text-brand-yellow">★</span>
                    <span>Support Us</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-black text-3xl md:text-4xl text-white leading-tight">
                    Review Us on Google
                  </h3>

                  {/* Subtitle */}
                  <p className="font-sans text-sm md:text-base text-white/95 font-semibold">
                    It helps us to grow our café.
                  </p>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowRatingSelector(true)}
                      className="bg-black text-white hover:bg-black/95 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider hover-lift transition-all shadow-md flex items-center space-x-2"
                    >
                      <span>Write a Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ) : showRatingSelector && !submitted ? (
                // Interactive State: Rate 1 to 5 Stars
                <motion.div
                  key="rating-selector"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-sans font-black text-xl md:text-2xl text-white">
                      Rate Your Experience
                    </h3>
                    <button 
                      onClick={() => setShowRatingSelector(false)}
                      className="p-1.5 rounded-full bg-black/10 text-white hover:bg-black/20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Interactive Stars Row */}
                  <div className="flex justify-start space-x-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transform hover:scale-110 transition-all duration-150 focus:outline-none"
                      >
                        <Star
                          className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
                            star <= (hoverRating || rating)
                              ? 'fill-black text-black'
                              : 'text-white/40'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="text-xs font-bold text-white/80">
                    {rating === 0 ? 'Click to rate stars' : `You selected: ${rating} Star${rating > 1 ? 's' : ''}`}
                  </div>

                  {/* Low Rating Form Triggered (< 4 stars) inside the banner */}
                  {rating > 0 && rating < 4 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-4 space-y-4 text-left"
                    >
                      <div className="flex items-start space-x-2.5 bg-black/10 p-4 rounded-xl border border-black/10">
                        <AlertTriangle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-white font-bold leading-normal">
                          We are sorry! Share details below so we can fix it.
                        </p>
                      </div>

                      {/* Feedback Form */}
                      <div className="space-y-4 font-sans max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none text-xs font-semibold"
                          />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none text-xs font-semibold"
                          />
                        </div>
                        <select
                          name="issue"
                          value={formData.issue}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none text-xs font-semibold"
                        >
                          <option value="Food Quality">Food Quality & Taste (খাবারের স্বাদ)</option>
                          <option value="Service Speed">Service Speed (পরিবেশনের গতি)</option>
                          <option value="Staff Behavior">Staff Behavior (স্টাফদের ব্যবহার)</option>
                          <option value="Cleanliness">Cleanliness & Hygiene (পরিচ্ছন্নতা)</option>
                        </select>
                        <textarea
                          name="suggestion"
                          rows={2}
                          required
                          placeholder="Your suggestions..."
                          value={formData.suggestion}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none text-xs font-semibold"
                        />
                        <button
                          onClick={handleFeedbackSubmit}
                          className="w-full py-3 rounded-xl bg-black text-white font-bold text-xs hover:bg-black/90 transition-colors"
                        >
                          Send Feedback via WhatsApp
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                // Success State
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-left"
                >
                  <div className="w-14 h-14 bg-black/10 text-white rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xl md:text-2xl text-white">
                      Thank You!
                    </h3>
                    <p className="font-sans text-sm text-white/90 font-semibold max-w-sm">
                      {redirecting
                        ? 'Opening Google Reviews page. Please share your rating there!'
                        : 'Launching WhatsApp to contact the cafe owner directly.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setRating(0);
                      setSubmitted(false);
                      setShowRatingSelector(false);
                      setRedirecting(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-black/90 text-xs font-bold transition-all shadow-md"
                  >
                    Go Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
