import { BusinessInfo, ServiceItem, CategoryItem, MedicineItem, Testimonial, FAQItem, GalleryImage } from '../types';

// Images imported or fallback
import heroImage from '../assets/images/galaxy_pharmacy_hero_1784968912584.jpg';
import storefrontImage from '../assets/images/galaxy_store_front_1784968923296.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Galaxy Enterprise',
  subName: 'Galaxy Medical Store & Pharmacy',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy | Medical Store',
  phone: '09852909558',
  whatsapp: '919852909558',
  address: {
    building: 'Galaxy House, 01',
    landmark: 'near Bandhan Bank',
    locality: 'Kurthadih, Kurtha',
    state: 'Bihar',
    pincode: '804421',
    full: 'Galaxy House, 01, near Bandhan Bank, Kurthadih, Bihar 804421'
  },
  email: 'contact@galaxyenterprise.in',
  rating: 4.9,
  reviewCount: 128,
  openingHours: {
    days: 'Monday - Sunday',
    time: '7:00 AM - 10:30 PM',
    is24x7Emergency: true
  },
  googleMapsUrl: 'https://maps.google.com/?q=Galaxy+House+01+near+Bandhan+Bank+Kurthadih+Bihar+804421'
};

export const HERO_IMAGE = heroImage;
export const STOREFRONT_IMAGE = storefrontImage;

export const WHY_CHOOSE_US = [
  {
    title: '100% Genuine Medicines',
    description: 'Directly sourced from certified pharmaceutical distributors with batch verification.',
    icon: 'ShieldCheck',
    color: 'emerald'
  },
  {
    title: 'Experienced Staff',
    description: 'Qualified pharmacists ready to guide you on dosage and medicine instructions.',
    icon: 'UserCheck',
    color: 'blue'
  },
  {
    title: 'Affordable Prices',
    description: 'Fair pricing and maximum discounts on generic & daily healthcare products.',
    icon: 'Tag',
    color: 'indigo'
  },
  {
    title: 'Fast Service',
    description: 'Quick store counters and rapid local WhatsApp prescription processing.',
    icon: 'Zap',
    color: 'amber'
  },
  {
    title: 'Prescription Medicines',
    description: 'Comprehensive inventory of chronic, acute & specialty doctor-prescribed drugs.',
    icon: 'FileText',
    color: 'cyan'
  },
  {
    title: 'Healthcare Products',
    description: 'Wide variety of wellness, personal care, baby care & hygiene essentials.',
    icon: 'HeartPulse',
    color: 'rose'
  },
  {
    title: 'Trusted Local Pharmacy',
    description: 'Serving Kurthadih and surrounding areas in Bihar with high community care.',
    icon: 'Building2',
    color: 'sky'
  },
  {
    title: 'Easy WhatsApp Support',
    description: 'Send prescription photos on WhatsApp for instant availability checks.',
    icon: 'MessageSquare',
    color: 'green'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'med-sales',
    title: 'Medicine Sales',
    description: 'Retail supply of branded & generic pharmaceuticals stored under strict temperature controls.',
    icon: 'Pill',
    badge: 'Popular',
    details: ['All major pharma brands', 'Strict cold chain storage', 'Batch transparency & long expiry']
  },
  {
    id: 'rx-meds',
    title: 'Prescription Medicines',
    description: 'Doctor-prescribed formulations with careful verification and dosage consultation.',
    icon: 'FileCheck2',
    badge: 'Verified',
    details: ['Cardiology & Diabetic drugs', 'Antibiotics & Anti-infectives', 'Specialty prescription fulfilling']
  },
  {
    id: 'otc-meds',
    title: 'OTC Medicines',
    description: 'Over-the-counter remedies for fever, pain relief, cough, cold, and digestive wellness.',
    icon: 'ShieldPlus',
    details: ['Fast pain relievers', 'Digestive & Antacids', 'Cough & Allergy relief']
  },
  {
    id: 'baby-care',
    title: 'Baby Care Products',
    description: 'Dermatologically tested infant formula, diapers, baby wipes, lotions, and supplements.',
    icon: 'Baby',
    badge: 'Gentle',
    details: ['Infant nutrition & milk formula', 'Soft skin moisturizers', 'Baby feeding accessories']
  },
  {
    id: 'personal-care',
    title: 'Personal Care Products',
    description: 'Skincare, oral hygiene, hair care, and daily grooming supplies for men and women.',
    icon: 'Sparkles',
    details: ['Medicated soaps & lotions', 'Dermatological creams', 'Oral hygiene essentials']
  },
  {
    id: 'diabetic-care',
    title: 'Diabetic Care',
    description: 'Insulin needles, glucometers, sugar-free supplements, test strips, and diabetic footwear advice.',
    icon: 'Activity',
    badge: 'Essential',
    details: ['Blood glucose meters & strips', 'Insulin storage pouches', 'Diabetic health supplements']
  },
  {
    id: 'bp-monitor',
    title: 'Blood Pressure Monitor',
    description: 'Digital and manual sphygmomanometers with free on-site BP checks at store counter.',
    icon: 'Heart',
    details: ['Automatic digital monitors', 'Arm & wrist cuffs', 'Free BP check at store']
  },
  {
    id: 'first-aid',
    title: 'First Aid Supplies',
    description: 'Complete home & emergency kits including antiseptics, bandages, gauges, and tape.',
    icon: 'Cross',
    details: ['Antiseptic liquids & ointments', 'Sterile cotton & gauze rolls', 'Emergency first aid boxes']
  },
  {
    id: 'surgical-items',
    title: 'Surgical Items',
    description: 'Hospital-grade surgical gloves, masks, cannulas, IV sets, syringes, and wound dressings.',
    icon: 'Stethoscope',
    details: ['Sterile disposable syringes', 'Surgical gloves & face masks', 'Post-surgery care kits']
  },
  {
    id: 'health-supplements',
    title: 'Health Supplements',
    description: 'Multivitamins, calcium tablets, protein powders, immunity boosters, and minerals.',
    icon: 'Dumbbell',
    details: ['Whey & herbal proteins', 'Vitamin C, D3, & B12', 'Joint & bone support']
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices',
    description: 'Nebulizers, pulse oximeters, thermometers, steam inhalers, and heating pads.',
    icon: 'Thermometer',
    details: ['Digital thermometers', 'Fingertip pulse oximeters', 'Electric heating pads & vaporizers']
  },
  {
    id: 'home-care',
    title: 'Home Care Products',
    description: 'Adult diapers, underpads, mobility canes, hot water bags, and nursing supplies.',
    icon: 'Home',
    details: ['Adult incontinence care', 'Walking sticks & crutches', 'Disinfectant sprays & cleansers']
  }
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'tablets', name: 'Tablets', icon: 'Pill', count: '150+ Items', description: 'Pain relievers, antibiotics, supplements', color: 'from-blue-500 to-indigo-600' },
  { id: 'capsules', name: 'Capsules', icon: 'BoxSelect', count: '80+ Items', description: 'Gastro care, multivitamins, antibiotics', color: 'from-emerald-500 to-teal-600' },
  { id: 'syrups', name: 'Syrups', icon: 'Wine', count: '60+ Items', description: 'Cough formulas, tonics, pediatric liquids', color: 'from-amber-500 to-orange-600' },
  { id: 'injection', name: 'Injection', icon: 'Syringe', count: '40+ Items', description: 'Insulin, vaccines, emergency injectables', color: 'from-rose-500 to-pink-600' },
  { id: 'equipment', name: 'Medical Equipment', icon: 'Activity', count: '30+ Items', description: 'BP monitors, Nebulizers, Oximeters', color: 'from-cyan-500 to-blue-600' },
  { id: 'protein', name: 'Protein Supplements', icon: 'Dumbbell', count: '25+ Items', description: 'Nutritional drinks, mass gainers, whey', color: 'from-purple-500 to-violet-600' },
  { id: 'vitamins', name: 'Vitamins', icon: 'Sun', count: '50+ Items', description: 'Vitamin C, D3, Multivitamins, Minerals', color: 'from-yellow-500 to-amber-600' },
  { id: 'skin-care', name: 'Skin Care', icon: 'Sparkles', count: '45+ Items', description: 'Medicated creams, moisturizers, soaps', color: 'from-teal-500 to-emerald-600' },
  { id: 'baby-products', name: 'Baby Products', icon: 'Baby', count: '35+ Items', description: 'Diapers, baby wipes, infant milk', color: 'from-pink-500 to-rose-600' },
  { id: 'hygiene', name: 'Personal Hygiene', icon: 'Shield', count: '40+ Items', description: 'Hand sanitizers, face masks, wipes', color: 'from-sky-500 to-blue-600' },
  { id: 'orthopedic', name: 'Orthopedic Support', icon: 'Bone', count: '20+ Items', description: 'Knee caps, lumbar belts, crepe bandages', color: 'from-orange-500 to-red-600' },
  { id: 'diabetic-care', name: 'Diabetic Care', icon: 'HeartPulse', count: '30+ Items', description: 'Glucometer strips, lancets, sugar-free', color: 'from-emerald-600 to-green-700' }
];

export const FEATURED_MEDICINES: MedicineItem[] = [
  { id: 'm1', name: 'Paracetamol 650mg Tablets', category: 'Tablets', form: 'Tablet', dosage: '650mg', usage: 'Fever and general body pain relief', inStock: true, requiresPrescription: false, price: '₹30 / strip', description: 'Standard antipyretic and analgesic tablet.' },
  { id: 'm2', name: 'Omeprazole & Domperidone Capsules', category: 'Capsules', form: 'Capsule', dosage: '20mg/30mg', usage: 'Acidity, GERD & gas relief', inStock: true, requiresPrescription: false, price: '₹85 / strip', description: 'Proton pump inhibitor for hyperacidity.' },
  { id: 'm3', name: 'Benadryl Cough Syrup (100ml)', category: 'Syrups', form: 'Syrup', dosage: '100ml', usage: 'Dry cough and throat irritation', inStock: true, requiresPrescription: false, price: '₹125', description: 'Effective relief for throat tickle and dry cough.' },
  { id: 'm4', name: 'Digital Blood Pressure Monitor (Omron)', category: 'Medical Equipment', form: 'Device', dosage: 'N/A', usage: 'Home BP monitoring with digital LCD', inStock: true, requiresPrescription: false, price: '₹1,850', description: 'Accurate automatic blood pressure measurement.' },
  { id: 'm5', name: 'Accu-Chek Active Test Strips (50s)', category: 'Diabetic Care', form: 'Strips', dosage: 'N/A', usage: 'Blood sugar level testing at home', inStock: true, requiresPrescription: false, price: '₹925', description: 'High precision diabetic glucose test strips.' },
  { id: 'm6', name: 'Multivitamin & Zinc Capsules', category: 'Vitamins', form: 'Capsule', dosage: '1 Daily', usage: 'Daily immunity & energy enhancement', inStock: true, requiresPrescription: false, price: '₹110 / strip', description: 'Essential minerals and vitamins for daily vitality.' },
  { id: 'm7', name: 'Pampers Baby Dry Diapers (Medium - 44s)', category: 'Baby Products', form: 'Pack', dosage: 'M', usage: 'Infant overnight dryness protection', inStock: true, requiresPrescription: false, price: '₹649', description: 'Soft breathable baby diapers.' },
  { id: 'm8', name: 'Calamine Medicated Skin Lotion (100ml)', category: 'Skin Care', form: 'Lotion', dosage: '100ml', usage: 'Skin itching, rashes & sunburn relief', inStock: true, requiresPrescription: false, price: '₹140', description: 'Soothing dermatological lotion.' },
  { id: 'm9', name: 'Orthopedic Knee Support Braces', category: 'Orthopedic Support', form: 'Brace', dosage: 'L/XL', usage: 'Joint pain & arthritis support', inStock: true, requiresPrescription: false, price: '₹350', description: 'Comfortable elastic knee compression sleeve.' },
  { id: 'm10', name: 'Sterile Syringes 5ml with Needles (Pack of 10)', category: 'Injection', form: 'Sterile Pack', dosage: '5ml', usage: 'Medical injection & clinical use', inStock: true, requiresPrescription: true, price: '₹60', description: 'Single-use sterile surgical syringes.' },
  { id: 'm11', name: 'Protein Powder Vanilla (500g)', category: 'Protein Supplements', form: 'Powder', dosage: '30g scoop', usage: 'Muscle recovery & nutritional supplement', inStock: true, requiresPrescription: false, price: '₹580', description: 'Balanced protein for adults and seniors.' },
  { id: 'm12', name: 'Dettol Antiseptic Liquid 250ml', category: 'Personal Hygiene', form: 'Liquid', dosage: '250ml', usage: 'Wound cleaning & disinfectant', inStock: true, requiresPrescription: false, price: '₹135', description: 'Household and clinical antiseptic liquid.' }
];

export const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Visit Store or Order Online',
    description: 'Walk into Galaxy House, Kurthadih or send us your medicine query via WhatsApp.',
    icon: 'Store'
  },
  {
    step: '02',
    title: 'Share Prescription',
    description: 'Our certified staff verifies your doctor prescription and checks stock instantly.',
    icon: 'FileCheck'
  },
  {
    step: '03',
    title: 'Get Medicines',
    description: 'Medicines are carefully packed with clear dosage instructions and expiry checks.',
    icon: 'PackageCheck'
  },
  {
    step: '04',
    title: 'Easy Payment',
    description: 'Pay conveniently using UPI, QR Code, Cash, or Online Bank Transfer.',
    icon: 'CreditCard'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar Sharma',
    location: 'Kurthadih, Bihar',
    rating: 5,
    comment: 'Galaxy Enterprise is my go-to medical shop. They always have genuine medicines available and the staff is very polite and helpful. I appreciate their quick WhatsApp service!',
    date: '10 days ago',
    verified: true,
    avatarText: 'RK'
  },
  {
    id: 't2',
    name: 'Priya Kumari',
    location: 'Kurtha Main Market',
    rating: 5,
    comment: 'Best medical store near Bandhan Bank. I bought my mother diabetic test strips and BP monitor here at very reasonable prices compared to other shops.',
    date: '2 weeks ago',
    verified: true,
    avatarText: 'PK'
  },
  {
    id: 't3',
    name: 'Manoj Singh',
    location: 'Jehanabad / Kurtha Region',
    rating: 5,
    comment: 'Very reliable pharmacy! When my doctor prescribed urgent surgical items, Galaxy House shop packed everything in 5 minutes. Highly recommended.',
    date: '1 month ago',
    verified: true,
    avatarText: 'MS'
  },
  {
    id: 't4',
    name: 'Sanjeev Prasad',
    location: 'Kurthadih Village',
    rating: 5,
    comment: 'Authentic medicines and genuine advice. They explain the dosage timing clearly. WhatsApp order option is super convenient for my family.',
    date: '1 month ago',
    verified: true,
    avatarText: 'SP'
  },
  {
    id: 't5',
    name: 'Anita Devi',
    location: 'Near Bandhan Bank, Kurtha',
    rating: 5,
    comment: 'Excellent baby products collection! From diapers to baby food formula, everything is fresh with long expiry dates.',
    date: '2 months ago',
    verified: true,
    avatarText: 'AD'
  },
  {
    id: 't6',
    name: 'Dr. Alok Verma',
    location: 'Local Health Practitioner',
    rating: 5,
    comment: 'As a practitioner, I often advise local patients to visit Galaxy Medical Store because they maintain high storage quality and genuine pharma stocks.',
    date: '3 months ago',
    verified: true,
    avatarText: 'AV'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines sold at Galaxy Enterprise 100% genuine?',
    answer: 'Yes! All medicines and healthcare products at Galaxy Enterprise are 100% authentic, sourced directly from authorized pharmaceutical distributors with strict batch verification and temperature control.',
    category: 'Medicines & Quality'
  },
  {
    id: 'faq-2',
    question: 'How do I place a medicine order on WhatsApp?',
    answer: 'You can click our "WhatsApp Order" button or message 09852909558. Simply upload a photo of your doctor prescription or type the medicine names along with your address, and our team will confirm availability instantly.',
    category: 'Ordering'
  },
  {
    id: 'faq-3',
    question: 'Where is Galaxy Enterprise located in Kurtha, Bihar?',
    answer: 'We are located at Galaxy House, 01, near Bandhan Bank, Kurthadih, Bihar 804421. You can easily find us on Google Maps by clicking "Get Directions" on our website.',
    category: 'Location & Hours'
  },
  {
    id: 'faq-4',
    question: 'What are the store operating hours?',
    answer: 'Our store is open Monday through Sunday from 7:00 AM to 10:30 PM. For emergency medicine requests, you can contact our phone number 09852909558 anytime.',
    category: 'Location & Hours'
  },
  {
    id: 'faq-5',
    question: 'Do I need a prescription to buy prescription medicines?',
    answer: 'Yes, as per Indian government regulations, Schedule H and Schedule H1 prescription drugs require a valid prescription from a registered medical practitioner.',
    category: 'Medicines & Quality'
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), QR code scan at counter, and direct Bank Transfer.',
    category: 'Payments'
  },
  {
    id: 'faq-7',
    question: 'Do you sell surgical items and medical equipment?',
    answer: 'Yes, we stock digital BP monitors, pulse oximeters, glucometer test strips, nebulizers, surgical gloves, syringes, catheters, and first aid supplies.',
    category: 'Products'
  },
  {
    id: 'faq-8',
    question: 'Can I get generic medicines at lower prices?',
    answer: 'Yes! We maintain high-quality generic alternative medicines that provide identical active ingredients at significantly lower prices to support affordable healthcare.',
    category: 'Medicines & Quality'
  },
  {
    id: 'faq-9',
    question: 'Do you offer home delivery in Kurthadih and nearby areas?',
    answer: 'Yes, we provide local medicine delivery in Kurthadih and nearby local areas for elderly patients and urgent medical needs via WhatsApp booking.',
    category: 'Ordering'
  },
  {
    id: 'faq-10',
    question: 'How can I check if a specific medicine is currently in stock?',
    answer: 'You can use our online "Medicine Search Box" on this website, call us directly at 09852909558, or send a quick WhatsApp text for live stock confirmation.',
    category: 'Products'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Store Interior & Shelves',
    category: 'shelves',
    url: heroImage,
    caption: 'Clean, modern, organized pharmaceutical inventory at Galaxy House.'
  },
  {
    id: 'g2',
    title: 'Galaxy Store Front',
    category: 'front',
    url: storefrontImage,
    caption: 'Welcoming storefront near Bandhan Bank, Kurthadih.'
  },
  {
    id: 'g3',
    title: 'Cold Chain & Prescription Storage',
    category: 'store',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Temperature-controlled storage for insulin, vaccines, and injectables.'
  },
  {
    id: 'g4',
    title: 'Medical Devices & Equipment Display',
    category: 'equipment',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    caption: 'Digital BP monitors, Nebulizers, and Glucometers.'
  },
  {
    id: 'g5',
    title: 'Baby Care & Wellness Counter',
    category: 'products',
    url: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80',
    caption: 'Dermatologist approved baby products, powders, and milk formula.'
  },
  {
    id: 'g6',
    title: 'Pharmacist Prescription Counter',
    category: 'store',
    url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    caption: 'Qualified pharmacists assisting local community patients.'
  }
];

export const STORE_TIMELINE = [
  { year: '2018', title: 'Founding of Galaxy Enterprise', description: 'Established with a vision to provide genuine medicines to Kurthadih residents.' },
  { year: '2020', title: 'Emergency Response & Expansion', description: 'Maintained 24/7 supply of critical oxygen, pulse oximeters, and essential drugs.' },
  { year: '2022', title: 'Digital WhatsApp Ordering', description: 'Launched instant WhatsApp prescription delivery for surrounding rural areas.' },
  { year: '2024', title: 'Expanded Surgical & Healthcare Unit', description: 'Added complete surgical supplies, orthopedic support, and baby care hub.' }
];

export const SEO_SCHEMAS = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "Galaxy Enterprise",
    "image": "https://galaxyenterprise.in/logo.png",
    "@id": "https://galaxyenterprise.in/#pharmacy",
    "url": "https://galaxyenterprise.in",
    "telephone": "09852909558",
    "priceRange": "₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galaxy House, 01, near Bandhan Bank",
      "addressLocality": "Kurthadih, Kurtha",
      "addressRegion": "Bihar",
      "postalCode": "804421",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0432,
      "longitude": 84.8123
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "22:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  }
};
