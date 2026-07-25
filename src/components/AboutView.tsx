import React from 'react';
import { BUSINESS_INFO, STORE_TIMELINE, STOREFRONT_IMAGE, HERO_IMAGE } from '../data/pharmacyData';
import { Target, Eye, ShieldCheck, Heart, Award, Clock, Users, Building, MessageSquare, Phone } from 'lucide-react';

interface AboutViewProps {
  onOpenWhatsAppOrder: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenWhatsAppOrder }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white dark:bg-slate-900">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              About Galaxy Enterprise
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Serving Kurthadih with Quality Healthcare & Genuine Trust
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Established in Kurthadih, Bihar, Galaxy Enterprise (Galaxy Medical Store) was founded on the uncompromising pledge that every patient deserves authentic, fresh, and affordable medications.
            </p>
          </div>
        </div>
      </div>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Galaxy Enterprise Story
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Located at Galaxy House, 01, near Bandhan Bank, our store opened with a clear mission: to eliminate fake or low-grade drugs from the local retail supply chain. Over the years, we have grown into Kurthadih's most trusted healthcare hub.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Whether supplying emergency life-saving injections, maintenance cardiac/diabetic medications, or essential baby nutrition, our certified team handles every order with utmost precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</span>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Authentic Sourced Drugs</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</span>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Local Families Served</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
              <img
                src={STOREFRONT_IMAGE}
                alt="Galaxy House Storefront"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To provide swift, reliable access to genuine pharmaceutical medicines, surgical items, and health devices at affordable prices across Kurthadih and surrounding villages.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To be the most modern, technologically connected, and compassionate community pharmacy model in Bihar, bridging rural and urban healthcare access gaps.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Integrity in product sourcing, transparency in pricing, speed in emergency response, and patient privacy above all else.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-50 via-teal-50 to-sky-50 dark:from-slate-800 dark:to-slate-800/90 rounded-3xl p-8 sm:p-12 border border-emerald-100 dark:border-slate-700 space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-emerald-600" />
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message from the Owner</h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">Galaxy Enterprise Management</p>
            </div>
          </div>

          <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed">
            "Your health is our highest responsibility. We established Galaxy Enterprise with a firm commitment that no resident of Kurthadih should suffer from counterfeit medicines or inflated costs. When you walk into Galaxy House or message us on WhatsApp, you are family to us."
          </blockquote>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call Management: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Journey & Milestones</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">Continuously evolving to serve you better.</p>
        </div>

        <div className="space-y-6">
          {STORE_TIMELINE.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-extrabold text-sm h-fit">
                {item.year}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
