import React, { useState } from 'react';
import { PageView } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/pharmacyData';
import {
  Cross,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  ShieldCheck,
  X,
  FileText
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageView) => void;
  onOpenWhatsAppOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenWhatsAppOrder }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Business Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Cross className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  Galaxy <span className="text-emerald-400">Enterprise</span>
                </span>
                <p className="text-xs text-slate-400">Pharmacy & Medical Store</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}. Serving Kurthadih and surrounding areas with 100% genuine pharmaceuticals and healthcare supplies.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-400 font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', page: 'home' as PageView },
                { label: 'About Us', page: 'about' as PageView },
                { label: 'Pharmacy Services', page: 'services' as PageView },
                { label: 'Store Gallery', page: 'gallery' as PageView },
                { label: 'Customer Reviews', page: 'testimonials' as PageView },
                { label: 'Pharmacy FAQ', page: 'faq' as PageView },
                { label: 'Contact Store', page: 'contact' as PageView }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
              Pharmacy Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-emerald-400 transition text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Working Hours & Map */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
              Working Hours
            </h4>
            <div className="text-xs space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Store Hours</strong>
                  <span>{BUSINESS_INFO.openingHours.days}</span>
                  <br />
                  <span className="text-emerald-400 font-semibold">{BUSINESS_INFO.openingHours.time}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-xs text-slate-300 hover:text-white transition"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  Google Maps Location
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Galaxy Enterprise</strong>. All rights reserved. | Developed by{' '}
           <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-emerald-400 transition"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-emerald-400 transition"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('disclaimer')}
              className="hover:text-emerald-400 transition"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Content Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms & Conditions'}
                {legalModal === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' && (
                <>
                  <p>Galaxy Enterprise is committed to protecting patient privacy. Customer contact details, prescription images, and address information submitted via WhatsApp or website forms are used strictly for order fulfillment and internal health service communication.</p>
                  <p>We do not sell, rent, or share patient medical records or contact details with third-party advertising companies.</p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>1. Prescriptions are mandatory for Schedule H and H1 medications as per Indian Drugs and Cosmetics Rules.</p>
                  <p>2. Prices listed on this website are subject to retail MRP or store discounts applicable at counter.</p>
                  <p>3. WhatsApp orders are subject to stock verification by our qualified pharmacists.</p>
                </>
              )}

              {legalModal === 'disclaimer' && (
                <>
                  <p>The information provided on this website is for educational and informational purposes only and does not substitute professional medical advice, diagnosis, or treatment.</p>
                  <p>Always consult a licensed medical doctor or qualified physician regarding any medical condition or drug prescription.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setLegalModal(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
