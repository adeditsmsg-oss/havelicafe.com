'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess(true);
    }, 600);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/5 px-4 py-1.5 rounded-full">
            Contact Us • আমাদের ঠিকানা ও যোগাযোগ
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy leading-tight">
            Find Us & Say Hello
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-semibold max-w-xl mx-auto">
            Drop by for a cup of special tea or a delicious wrap. Or send us an inquiry directly using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-brand-burgundy">
                Get In Touch
              </h3>
              
              <div className="space-y-4 font-sans text-sm text-brand-dark/80 font-semibold">
                {/* Phone */}
                <a
                  href="tel:+918248481654"
                  className="flex items-start space-x-4 bg-brand-cream p-4.5 rounded-2xl border border-brand-border shadow-sm hover-lift transition-all"
                >
                  <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-burgundy flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-burgundy mb-0.5">Call Us Now (কল করুন)</h4>
                    <p className="text-base text-brand-dark font-bold">+91 8248481654</p>
                    <p className="text-[10px] text-brand-dark/50 font-normal">Click to call directly from your device</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.app.goo.gl/ChIJ-S9hK5i42joRoQv595Dk74Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 bg-brand-cream p-4.5 rounded-2xl border border-brand-border shadow-sm hover-lift transition-all"
                >
                  <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-burgundy flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-burgundy mb-0.5">Address (আমাদের ঠিকানা)</h4>
                    <p className="text-sm text-brand-dark font-bold leading-snug">
                      Ashok Nagar, Midnapore Railway Station Road, Dharma, Midnapore, West Bengal 721101
                    </p>
                    <p className="text-[10px] text-brand-dark/50 font-normal mt-0.5">Click to open directions in Google Maps</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-brand-cream p-4.5 rounded-2xl border border-brand-border shadow-sm">
                  <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-burgundy flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-burgundy mb-0.5">Email Support</h4>
                    <p className="text-sm text-brand-dark font-bold">info@havelicafegroup.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 bg-brand-cream p-4.5 rounded-2xl border border-brand-border shadow-sm">
                  <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-burgundy flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-burgundy mb-0.5">We are Open</h4>
                    <p className="text-sm text-brand-dark font-bold">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-brand-cream rounded-3xl p-6 border border-brand-border shadow-md">
              {!success ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4 font-sans">
                  <h4 className="font-serif font-bold text-base text-brand-burgundy mb-2">Send a Quick Message</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white dark:bg-brand-cream text-brand-dark text-xs font-semibold focus:outline-none focus:border-brand-yellow/50"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white dark:bg-brand-cream text-brand-dark text-xs font-semibold focus:outline-none focus:border-brand-yellow/50"
                    />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message..."
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white dark:bg-brand-cream text-brand-dark text-xs font-semibold focus:outline-none focus:border-brand-yellow/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-burgundy text-brand-yellow dark:text-black font-bold text-xs hover:bg-brand-burgundy/90 transition-all flex items-center justify-center space-x-1.5 shadow-sm hover-lift"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message (বার্তা পাঠান)</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 space-y-3"
                >
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-serif font-bold text-sm text-brand-burgundy">Inquiry Received</h5>
                    <p className="font-sans text-[11px] text-brand-dark/60 font-semibold">We will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-brand-burgundy/5 relative min-h-[350px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.08480373887!2d87.3182888!3d22.4257404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4715f403dfdb%3A0x86ef997df0c3f5d8!2sHaveli%20Cafe!5e0!3m2!1sen!2sin!4v1720516422329!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
