import React from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { MapPin, Navigation, Phone, Clock, Building, Compass } from 'lucide-react';

export const GoogleMapSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full mb-3">
            Visit Our Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find Us in Kurthadih, Bihar
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Conveniently located at Galaxy House near Bandhan Bank with ample parking and easy wheelchair access.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700/80 shadow-lg flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
                {BUSINESS_INFO.subName}
              </p>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Store Address</strong>
                    <span>{BUSINESS_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Landmark</strong>
                    <span>{BUSINESS_INFO.address.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Working Hours</strong>
                    <span>{BUSINESS_INFO.openingHours.days}: {BUSINESS_INFO.openingHours.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Phone Number</strong>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-600 font-semibold">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 fill-white/20" />
                Open Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-lg min-h-[360px] bg-slate-200 dark:bg-slate-800 relative">
            <iframe
              title="Galaxy Enterprise Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5238210351!2d84.8123!3d25.0432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzM1LjUiTiA4NMK1NDgnNDQuMyJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span className="font-semibold">Galaxy House, 01, near Bandhan Bank</span>
              <span className="text-emerald-600 font-bold">Kurthadih, Bihar 804421</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
