import React from 'react';
import { WORKING_PROCESS } from '../data/pharmacyData';
import { Store, FileCheck, PackageCheck, CreditCard, Award, CheckCircle, Shield, HeartHandshake } from 'lucide-react';

const processIcons: Record<string, React.ReactNode> = {
  Store: <Store className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  FileCheck: <FileCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
};

export const WhyTrustUs: React.FC = () => {
  const trustPoints = [
    { title: 'Experienced Pharmacy', desc: 'Qualified pharmacists with years of dispensing knowledge and compassionate patient care.' },
    { title: 'Quality Medicines', desc: 'Strict verification of seal, expiry date, batch number, and temperature cold-chains.' },
    { title: 'Quick Service', desc: 'Fast counter service so you never have to wait long during medical emergencies.' },
    { title: 'Friendly Staff', desc: 'Approachable staff eager to explain medicine schedules, precautions, and dietary advice.' },
    { title: 'Reasonable Pricing', desc: 'Fair, standard MRP discounts with genuine generic options for cost savings.' },
    { title: 'Convenient Location', desc: 'Situated right at Galaxy House near Bandhan Bank, easily accessible in Kurthadih.' }
  ];

  return (
    <div className="space-y-20 py-16 sm:py-20 bg-white dark:bg-slate-900">
      
      {/* Why Customers Trust Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Community Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Local Customers Trust Galaxy Enterprise
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Healthcare requires uncompromised trust. For years, families across Kurthadih and Kurtha have relied on us for authentic medications, surgical essentials, and honest health advice.
            </p>

            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0 shadow-md">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  100% Patient Satisfaction
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Over 10,000+ happy customers served with genuine medicines in Bihar.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/80 hover:border-emerald-500/50 transition duration-300"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Working Process */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full mb-3 border border-emerald-500/30">
              Simple & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our 4-Step Working Process
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              Getting your required medicines is quick and hassle-free whether you visit us in person or order via WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {WORKING_PROCESS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 relative flex flex-col justify-between group hover:border-emerald-500/80 transition duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-emerald-400/30 group-hover:text-emerald-400 transition duration-300">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-700/80 flex items-center justify-center">
                    {processIcons[item.icon]}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <Shield className="w-3.5 h-3.5" /> Verified Step
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
