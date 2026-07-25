export interface BusinessInfo {
  name: string;
  subName: string;
  tagline: string;
  category: string;
  phone: string;
  whatsapp: string;
  address: {
    building: string;
    landmark: string;
    locality: string;
    state: string;
    pincode: string;
    full: string;
  };
  email: string;
  rating: number;
  reviewCount: number;
  openingHours: {
    days: string;
    time: string;
    is24x7Emergency: boolean;
  };
  googleMapsUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  details: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  count: string;
  description: string;
  color: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  form: string;
  dosage: string;
  usage: string;
  inStock: boolean;
  requiresPrescription: boolean;
  price: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'front';
  url: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  uploadPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}

export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact' | 'whatsapp-order';
