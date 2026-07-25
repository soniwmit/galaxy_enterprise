import React from 'react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/pharmacyData';
import { Phone, MessageSquare, Navigation, ShieldCheck, Clock, Award, Star, Search, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenWhatsAppOrder: () => void;
  onOpenSearch: () => void;
  onNavigateToDirections: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppOrder,
  onOpenSearch,
  onNavigateToDirections
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center py-12 lg:py-20">
      {/* Background Image with Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Galaxy Enterprise Medical Store Pharmacy Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                New Galaxy Medical
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Genuine Medicines
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 Rating (128+ Reviews)
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Galaxy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Enterprise</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                Your Trusted Pharmacy in Kurtha
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices near Bandhan Bank, Kurthadih.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base transition shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                Call Now
              </a>

              <button
                onClick={onOpenWhatsAppOrder}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                WhatsApp Order
              </button>

              <button
                onClick={onNavigateToDirections}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700 transition"
              >
                <Navigation className="w-5 h-5 text-sky-400" />
                Get Directions
              </button>
            </div>

            {/* Quick Medicine Search Bar Trigger inside Hero */}
            <div className="pt-4 max-w-xl">
              <div
                onClick={onOpenSearch}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 text-slate-300 cursor-pointer shadow-inner backdrop-blur-md transition group"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
                  <span className="text-sm font-medium text-slate-300">
                    Search medicines (e.g., Paracetamol, Insulin, BP Monitor, Diapers)...
                  </span>
                </div>
                <span className="text-xs bg-slate-700 group-hover:bg-emerald-600 text-slate-200 group-hover:text-white font-semibold px-2.5 py-1 rounded-lg transition">
                  Search
                </span>
              </div>
            </div>
          </div>

          {/* Hero Feature Highlight Box / Quick Store Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 lg:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    Quick Store Info
                  </h3>
                  <p className="text-xs text-slate-400">Kurthadih, Bihar 804421</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Store Open
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Business Hours</span>
                    <p className="text-sm font-semibold text-slate-200">7:00 AM – 10:30 PM (Mon - Sun)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Phone & WhatsApp Hotline</span>
                    <p className="text-sm font-semibold text-slate-200">09852909558</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Quality Guarantee</span>
                    <p className="text-sm font-semibold text-slate-200">100% Genuine Certified Stocks</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenWhatsAppOrder}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  Upload Prescription on WhatsApp
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
