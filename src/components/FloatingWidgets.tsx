import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { Phone, MessageSquare, ArrowUp, AlertCircle, ShieldAlert } from 'lucide-react';

interface FloatingWidgetsProps {
  onOpenWhatsAppOrder: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenWhatsAppOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:scale-110 active:scale-95 transition duration-200 border border-slate-700/50"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="pointer-events-auto p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 transition duration-200 flex items-center justify-center group"
        title={`Call ${BUSINESS_INFO.name}: ${BUSINESS_INFO.phone}`}
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Call {BUSINESS_INFO.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppOrder}
        className="pointer-events-auto p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition duration-200 flex items-center justify-center group animate-bounce"
        title="WhatsApp Medicine Order"
      >
        <MessageSquare className="w-6 h-6 fill-white/20" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-extrabold pl-0 group-hover:pl-2">
          WhatsApp Order
        </span>
      </button>

    </div>
  );
};
