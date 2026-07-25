import React from 'react';
import { WHY_CHOOSE_US } from '../data/pharmacyData';
import {
  ShieldCheck,
  UserCheck,
  Tag,
  Zap,
  FileText,
  HeartPulse,
  Building2,
  MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  UserCheck: <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Tag: <Tag className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  FileText: <FileText className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
  Building2: <Building2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full mb-3">
            Our Key Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Galaxy Enterprise?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We are dedicated to delivering authentic healthcare products, genuine prescription medicines, and warm customer care in Kurthadih, Bihar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                  {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-emerald-600" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Verified Benefit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
