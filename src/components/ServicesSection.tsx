import React, { useState } from 'react';
import { SERVICES } from '../data/pharmacyData';
import { ServiceItem } from '../types';
import {
  Pill,
  FileCheck2,
  ShieldPlus,
  Baby,
  Sparkles,
  Activity,
  Heart,
  Cross,
  Stethoscope,
  Dumbbell,
  Thermometer,
  Home,
  MessageSquare,
  CheckCircle2,
  X,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenWhatsAppOrder: (presetMessage?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  FileCheck2: <FileCheck2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  ShieldPlus: <ShieldPlus className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
  Baby: <Baby className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  Activity: <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Heart: <Heart className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
  Cross: <Cross className="w-6 h-6 text-red-600 dark:text-red-400" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
  Thermometer: <Thermometer className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
  Home: <Home className="w-6 h-6 text-orange-600 dark:text-orange-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenWhatsAppOrder }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full mb-3">
            Comprehensive Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Medical & Pharmacy Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From critical doctor-prescribed medications to daily wellness and medical equipment, Galaxy Enterprise provides full pharmacy support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition duration-300">
                    {iconMap[service.icon] || <Pill className="w-6 h-6 text-emerald-600" />}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenWhatsAppOrder(`Hello Galaxy Enterprise, I have an inquiry regarding your ${service.title} service.`)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition"
                >
                  <MessageSquare className="w-3 h-3" />
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
                  {iconMap[selectedService.icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    Galaxy Enterprise Pharmacy
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 mb-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Service Inclusions
                </h4>
                <ul className="space-y-2">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenWhatsAppOrder(`Hello Galaxy Enterprise, I want to order/inquire about ${title}.`);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order / Inquire via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
