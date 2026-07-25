import React, { useState } from 'react';
import { BUSINESS_INFO, FAQS, SEO_SCHEMAS } from '../data/pharmacyData';
import { Code, Check, Copy, X, Search, FileCode, CheckCircle2 } from 'lucide-react';

interface SEOInspectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOInspector: React.FC<SEOInspectorProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schema' | 'meta' | 'faq-schema'>('schema');

  if (!isOpen) return null;

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.slice(0, 5).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const currentJson = activeTab === 'schema' ? SEO_SCHEMAS.localBusiness : faqSchemaData;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden relative font-mono text-xs">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2.5">
            <Code className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-sm font-sans text-white">SEO & JSON-LD Schema Auditor</h3>
              <p className="text-[11px] text-slate-400 font-sans">Galaxy Enterprise Pharmacy Technical Tags</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-3 border-b border-slate-800 bg-slate-900 font-sans">
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition ${
              activeTab === 'schema' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Pharmacy Schema (JSON-LD)
          </button>
          <button
            onClick={() => setActiveTab('faq-schema')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition ${
              activeTab === 'faq-schema' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            FAQ Schema
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-3 py-1.5 rounded-xl font-semibold transition ${
              activeTab === 'meta' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Meta Tags Audit
          </button>
        </div>

        {/* Body View */}
        <div className="p-5 flex-1 overflow-y-auto">
          {activeTab === 'meta' ? (
            <div className="space-y-4 font-sans text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold">Meta Title:</span>
                <p className="text-slate-200 font-semibold">Galaxy Enterprise | Pharmacy & Medical Store in Kurthadih, Bihar</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold">Meta Description:</span>
                <p className="text-slate-300">
                  Galaxy Enterprise near Bandhan Bank in Kurthadih provides 100% genuine medicines, surgical supplies, baby care, diabetic items, and instant WhatsApp ordering. Phone: 09852909558.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold">Target Keywords:</span>
                <p className="text-slate-400">
                  Galaxy Enterprise, Galaxy Medical Store, Pharmacy in Kurthadih, Medical shop near Bandhan Bank Kurtha, Genuine medicines Bihar, WhatsApp medicine delivery Kurtha
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold">Open Graph & Twitter Cards:</span>
                <p className="text-slate-300">og:title, og:description, og:image, twitter:card = summary_large_image</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <pre className="p-4 bg-slate-950 rounded-2xl border border-slate-800 overflow-x-auto text-emerald-300 text-[11px] leading-relaxed">
                {JSON.stringify(currentJson, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between font-sans">
          <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> SEO Ready & Validated
          </span>

          {activeTab !== 'meta' && (
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard' : 'Copy Schema Code'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
