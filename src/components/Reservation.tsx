'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Check, Coffee } from 'lucide-react';

export default function Reservation() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: '2',
    note: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API reservation request
    setTimeout(() => {
      setBookingSuccess(true);
    }, 600);
  };

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden" id="reserve">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between text-brand-dark py-2">
            <div className="space-y-6">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full inline-block">
                Table Booking • আসন সংরক্ষণ
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
                Reserve Your Table
              </h2>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-burgundy/90">
                ছুটির দিনে বা স্পেশাল ডেট-এ আপনার পছন্দের টেবিলটি বুক করুন!
              </h3>
              <p className="font-sans text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium">
                Planning a birthday celebration, a family dinner, or a cozy evening date? Reserve your table beforehand to avoid waiting in queues during rush hours.
              </p>
            </div>

            <div className="space-y-4 pt-8 lg:pt-0">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-brand-burgundy/5 shadow-sm">
                <div className="bg-brand-burgundy/5 p-3 rounded-xl text-brand-burgundy">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-brand-burgundy">Opening Hours</h4>
                  <p className="font-sans text-xs text-brand-dark/60 font-semibold">Monday - Sunday: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-brand-burgundy/5 shadow-sm">
                <div className="bg-brand-burgundy/5 p-3 rounded-xl text-brand-burgundy">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-brand-burgundy">Bulk / Celebration Bookings</h4>
                  <p className="font-sans text-xs text-brand-dark/60 font-semibold">Call +91 8248481654 for birthdays and group parties.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-burgundy/5 shadow-lg h-full flex flex-col justify-center">
              {!bookingSuccess ? (
                <form onSubmit={handleBookingSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">Full Name (আপনার নাম)</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sayantan Mukherjee"
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">Phone Number (ফোন নম্বর)</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">Select Date (তারিখ)</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">Select Time (সময়)</label>
                      <div className="relative">
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                        >
                          <option value="11:30">11:30 AM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:30">9:30 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">No. of Guests (অতিথি সংখ্যা)</label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People (Couple Seating)</option>
                          <option value="4">4 People (Family Table)</option>
                          <option value="6">6 People (Adda Table)</option>
                          <option value="8">8 People</option>
                          <option value="10">10+ People</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark/80 uppercase tracking-wider mb-1.5">Special Requests / Occasion (বিশেষ অনুরোধ)</label>
                    <textarea
                      name="note"
                      rows={3}
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="E.g., Birthday celebration setting, window table, extra mild spicy food..."
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-burgundy/10 bg-brand-cream/20 dark:bg-brand-cream/5 text-brand-dark focus:outline-none focus:border-brand-burgundy/40 text-sm font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black font-bold text-sm hover:bg-brand-burgundy/90 transition-all flex items-center justify-center space-x-2 shadow-md hover-lift"
                  >
                    <span>Request Booking (টেবিল বুকিং করুন)</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-black text-2xl text-brand-burgundy">
                      Table Booking Requested!
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-sm mx-auto">
                      Thank you, *{formData.name}*! We have noted your request for *{formData.guests} people* on *{formData.date || 'today'}* at *{formData.time}*.
                    </p>
                    <p className="font-sans text-xs text-brand-dark/50 italic pt-1">
                      Our host will call you shortly on *{formData.phone}* to confirm your booking.
                    </p>
                  </div>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="px-6 py-2.5 rounded-full border border-brand-burgundy/20 text-brand-burgundy text-xs font-bold hover:bg-brand-burgundy/5 transition-all"
                  >
                    Modify Booking (বুকিং পরিবর্তন করুন)
                  </button>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
