'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Send, CheckCircle, AlertTriangle } from 'lucide-react';

// Configurable owner details
const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJ-S9hK5i42joRoQv595Dk74Y'; // Replace with real maps ID
const OWNER_WHATSAPP_NUMBER = '918248481654'; // Country code (91) + phone number

export default function ReputationManager() {
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
    <section className="py-24 bg-white relative overflow-hidden" id="reviews">
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Review & Feedback • আপনার মতামত
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Share Your Experience
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            How was your visit to Haveli Cafe? Tap the stars below to rate our food, drinks, and environment.
          </p>
        </div>

        {/* reputation card wrapper */}
        <div className="bg-brand-cream rounded-3xl p-8 md:p-12 border border-brand-burgundy/5 shadow-md">
          {!submitted ? (
            <div className="text-center space-y-6">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-brand-burgundy">
                Rate us on a scale of 1 to 5 Stars
              </h3>
              
              {/* Interactive Stars Row */}
              <div className="flex justify-center space-x-2.5 md:space-x-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transform hover:scale-110 transition-all duration-150 focus:outline-none"
                  >
                    <Star
                      className={`w-10 h-10 md:w-14 md:h-14 transition-colors ${
                        star <= (hoverRating || rating)
                          ? 'fill-brand-yellow text-brand-yellow'
                          : 'text-brand-dark/25'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="text-sm font-semibold text-brand-dark/50">
                {rating === 0 ? 'Click to rate' : `You selected: ${rating} Star${rating > 1 ? 's' : ''}`}
              </div>

              {/* Low Rating Form Triggered (< 4 stars) */}
              <AnimatePresence>
                {rating > 0 && rating < 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-6 border-t border-brand-burgundy/10 text-left"
                  >
                    <div className="flex items-start space-x-3 bg-brand-yellow/10 p-4 rounded-2xl mb-6 border border-brand-yellow/30">
                      <AlertTriangle className="w-5 h-5 text-brand-burgundy flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-brand-burgundy font-semibold">
                        <p>We are sorry we didn't meet your expectations. Please share your details below so we can contact you directly and improve our services.</p>
                        <p className="text-[11px] text-brand-burgundy/70 mt-1">আমরা দুঃখিত। অনুগ্রহ করে নীচের ফর্মটি পূরণ করুন যাতে আমরা আপনার সমস্যা সমাধান করতে পারি।</p>
                      </div>
                    </div>

                    {/* Feedback Form */}
                    <form onSubmit={handleFeedbackSubmit} className="space-y-4 font-sans">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Your Name (আপনার নাম)</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Enter full name"
                            className="w-full px-4 py-3 rounded-xl border border-brand-burgundy/10 bg-white dark:bg-brand-cream text-brand-dark focus:outline-none focus:border-brand-burgundy/50 text-sm font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Phone Number (ফোন নম্বর)</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            placeholder="Enter 10-digit mobile number"
                            className="w-full px-4 py-3 rounded-xl border border-brand-burgundy/10 bg-white dark:bg-brand-cream text-brand-dark focus:outline-none focus:border-brand-burgundy/50 text-sm font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Primary Issue Area (সমস্যার ক্ষেত্র)</label>
                        <select
                          name="issue"
                          value={formData.issue}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl border border-brand-burgundy/10 bg-white dark:bg-brand-cream text-brand-dark focus:outline-none focus:border-brand-burgundy/50 text-sm font-semibold"
                        >
                          <option value="Food Quality">Food Quality & Taste (খাবারের স্বাদ)</option>
                          <option value="Service Speed">Service Speed (পরিবেশনের গতি)</option>
                          <option value="Staff Behavior">Staff Behavior (স্টাফদের ব্যবহার)</option>
                          <option value="Cleanliness">Cleanliness & Hygiene (পরিচ্ছন্নতা)</option>
                          <option value="Ambiance/Seating">Ambiance or Seating (আসন/পরিবেশ)</option>
                          <option value="Other">Other Issues (অন্যান্য)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Suggestions to improve (উন্নতির জন্য পরামর্শ)</label>
                        <textarea
                          name="suggestion"
                          rows={3}
                          required
                          value={formData.suggestion}
                          onChange={handleFormChange}
                          placeholder="Tell us what went wrong and how we can make it right..."
                          className="w-full px-4 py-3 rounded-xl border border-brand-burgundy/10 bg-white dark:bg-brand-cream text-brand-dark focus:outline-none focus:border-brand-burgundy/50 text-sm font-semibold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black font-bold text-sm hover:bg-brand-burgundy/90 transition-colors flex items-center justify-center space-x-2 shadow-md hover-lift"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Feedback via WhatsApp (মতামত পাঠান)</span>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-20 h-20 bg-brand-burgundy/10 text-brand-burgundy rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-black text-2xl text-brand-burgundy">
                  Thank You for Your Response!
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-md mx-auto">
                  {redirecting 
                    ? "Redirecting you to Google Reviews page so you can share your feedback publicly..."
                    : "Your constructive feedback has been compiled. WhatsApp is launching to share details directly with the owner."
                  }
                </p>
                <p className="font-sans text-xs text-brand-dark/50 italic pt-1">
                  (ধন্যবাদ! আপনার মূল্যবান মতামত আমাদের সাথে শেয়ার করার জন্য।)
                </p>
              </div>

              {redirecting && (
                <div className="flex justify-center space-x-1.5 pt-4">
                  <div className="w-2.5 h-2.5 bg-brand-burgundy rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-2.5 h-2.5 bg-brand-burgundy rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <div className="w-2.5 h-2.5 bg-brand-burgundy rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              )}

              <button
                onClick={() => {
                  setRating(0);
                  setSubmitted(false);
                  setRedirecting(false);
                }}
                className="px-6 py-2.5 rounded-full border border-brand-burgundy/20 text-brand-burgundy text-xs font-bold hover:bg-brand-burgundy/5 transition-all"
              >
                Go Back (আবার রেট করুন)
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
