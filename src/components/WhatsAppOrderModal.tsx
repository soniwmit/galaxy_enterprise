import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { OrderFormData } from '../types';
import { MessageSquare, Phone, X, Upload, CheckCircle, ShieldAlert, Clock, Send, FileText } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetMessage?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  presetMessage = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Kurthadih, Bihar',
    medicineName: '',
    uploadPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Immediate (Within 1 Hour)'
  });

  const [simulatedFileName, setSimulatedFileName] = useState<string>('');

  useEffect(() => {
    if (presetMessage) {
      setFormData((prev) => ({
        ...prev,
        medicineName: presetMessage
      }));
    }
  }, [presetMessage]);

  if (!isOpen) return null;

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSimulatedFileName(file.name);
      setFormData((prev) => ({
        ...prev,
        uploadPrescription: true,
        prescriptionFileName: file.name
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Galaxy Enterprise

Customer Name: ${formData.customerName || 'N/A'}
Phone: ${formData.mobileNumber || 'N/A'}
Medicine Required: ${formData.medicineName || 'N/A'}
Address: ${formData.address || 'N/A'}
Prescription Attached: ${formData.uploadPrescription ? `Yes (${simulatedFileName || 'File Selected'})` : 'No'}
Preferred Time: ${formData.preferredDeliveryTime}
Message: ${formData.message || 'None'}`;

    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white">
              <MessageSquare className="w-6 h-6 fill-white/20" />
            </div>
            <div>
              <h3 className="text-xl font-bold">WhatsApp Order & Support</h3>
              <p className="text-xs text-emerald-100">Galaxy Enterprise • {BUSINESS_INFO.phone}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Verma"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 09852909558"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. rahul@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Delivery Address *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Near Bandhan Bank, Kurthadih"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / Product Name *
            </label>
            <textarea
              required
              rows={2}
              placeholder="e.g. Paracetamol 650mg, Insulin Glargine, Omron BP Monitor..."
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Prescription Upload Simulator */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Upload Prescription Photo
              </label>
              {simulatedFileName && (
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> File Selected
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label className="flex-1 border-2 border-dashed border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 bg-white dark:bg-slate-800 p-3 rounded-xl cursor-pointer text-center text-xs text-slate-600 dark:text-slate-300 transition flex items-center justify-center gap-2">
                <Upload className="w-4 h-4 text-emerald-500" />
                <span>{simulatedFileName || 'Choose image or doctor prescription PDF'}</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileSimulate}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="Immediate (Within 1 Hour)">Immediate (Within 1 Hour)</option>
                <option value="Today Evening">Today Evening</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Store Pickup at Counter">Store Pickup at Counter</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Additional Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Call before coming"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold text-sm transition flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Now
            </a>
          </div>

        </form>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500">
          This will open WhatsApp directly prefilled with your request details.
        </div>

      </div>
    </div>
  );
};
