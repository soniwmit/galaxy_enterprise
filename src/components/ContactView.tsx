import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { GoogleMapSection } from './GoogleMapSection';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactViewProps {
  onOpenWhatsAppOrder: (msg?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenWhatsAppOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Prefill WhatsApp message with contact query
    const text = `Hello Galaxy Enterprise, My Name is ${formData.name}. Phone: ${formData.phone}. Email: ${formData.email || 'N/A'}. Message: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 bg-white dark:bg-slate-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full mb-3">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact Galaxy Enterprise
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
          Have questions regarding medicine stock, prices, or doctor prescription orders? Reach out via call, WhatsApp, or drop us a message below.
        </p>
      </div>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Business Details Card */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 space-y-8 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Store Location & Contact
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                Galaxy House, Kurthadih
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Full Address</h4>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Phone & Hotline</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">Available Mon-Sun (7 AM - 10:30 PM)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">WhatsApp Support</h4>
                  <button
                    onClick={() => onOpenWhatsAppOrder()}
                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    Send Message on 09852909558
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Working Hours</h4>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    {BUSINESS_INFO.openingHours.days}<br />
                    {BUSINESS_INFO.openingHours.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Pharmacy Retailer • Bihar Government License Compliant</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl relative">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-8">
              Fill in your details below and your query will automatically open in WhatsApp with prefilled details.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Redirecting to WhatsApp for instant pharmacist response...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 09852909558"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. customer@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Message / Medicine Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe required medicines, quantity, or medical inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry via WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMapSection />

    </div>
  );
};
