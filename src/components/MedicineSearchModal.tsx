import React, { useState, useMemo } from 'react';
import { FEATURED_MEDICINES } from '../data/pharmacyData';
import { MedicineItem } from '../types';
import { Search, X, Pill, ShieldAlert, CheckCircle, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenWhatsAppOrder: (presetMessage?: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  onOpenWhatsAppOrder
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(FEATURED_MEDICINES.map((m) => m.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return FEATURED_MEDICINES.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.usage.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
        
        {/* Header & Search Bar */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Galaxy Medicine & Product Search
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Search 100% genuine medicines & check live store availability
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-200/60 dark:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search medicine name, health product, or condition (e.g. Fever, Diabetes)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              autoFocus
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredMedicines.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredMedicines.map((med) => (
                <div
                  key={med.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/60 transition flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {med.name}
                      </h4>
                      <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 whitespace-nowrap bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                        {med.price}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {med.category} • {med.form} ({med.dosage})
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800 mb-3">
                      <strong>Usage:</strong> {med.usage}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] font-semibold">
                      {med.requiresPrescription ? (
                        <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md">
                          <ShieldAlert className="w-3 h-3" /> Rx Prescription Required
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                          <CheckCircle className="w-3 h-3" /> OTC Available
                        </span>
                      )}
                      <span className="text-slate-400">•</span>
                      <span className="text-emerald-500 font-bold">In Stock</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenWhatsAppOrder(`Hello Galaxy Enterprise, I want to order/check stock for: ${med.name} (${med.price}).`);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Order via WhatsApp
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  No direct database match for "{searchTerm}"
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
                  Don't worry! We stock over 2,000+ pharmaceutical products at our Kurthadih store. Send your prescription or query directly on WhatsApp.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenWhatsAppOrder(`Hello Galaxy Enterprise, do you have ${searchTerm} in stock at Kurthadih store?`);
                }}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
              >
                <MessageSquare className="w-4 h-4" />
                Ask Pharmacist on WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-6">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            Showing catalog matches for Galaxy Enterprise, Kurtha
          </span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Close Search
          </button>
        </div>

      </div>
    </div>
  );
};
