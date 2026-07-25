import React from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { Phone, MessageSquare, Cross } from 'lucide-react';

interface ContactCTAProps {
  onOpenWhatsAppOrder: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenWhatsAppOrder }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white">
          <Cross className="w-6 h-6 stroke-[2.5]" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Need Genuine Medicines Urgently?
        </h2>

        <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
          Call us directly or send your doctor prescription on WhatsApp. We confirm stock availability and prepare your items immediately!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-base shadow-xl transition hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5 text-emerald-600" />
            Call {BUSINESS_INFO.phone}
          </a>

          <button
            onClick={onOpenWhatsAppOrder}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shadow-xl transition hover:scale-105 active:scale-95 border border-slate-700"
          >
            <MessageSquare className="w-5 h-5 fill-white/20 text-emerald-400" />
            Send WhatsApp Order
          </button>
        </div>
      </div>
    </section>
  );
};
