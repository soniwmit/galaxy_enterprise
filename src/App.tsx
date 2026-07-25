/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { WhyTrustUs } from './components/WhyTrustUs';
import { TestimonialsSection } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { ContactCTA } from './components/ContactCTA';
import { AboutView } from './components/AboutView';
import { GallerySection } from './components/GallerySection';
import { ContactView } from './components/ContactView';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { SEOInspector } from './components/SEOInspector';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Footer } from './components/Footer';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Initialize global analytics & page view tracker
  useTracker(activePage);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCategoryFilter, setSearchCategoryFilter] = useState('');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppPresetMessage, setWhatsAppPresetMessage] = useState('');
  const [isSEOOpen, setIsSEOOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenWhatsAppOrder = (preset?: string) => {
    if (preset) setWhatsAppPresetMessage(preset);
    else setWhatsAppPresetMessage('');
    setIsWhatsAppModalOpen(true);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSearchCategoryFilter(categoryName);
    setIsSearchOpen(true);
  };

  const handleNavigateToDirections = () => {
    setActivePage('contact');
    window.scrollTo({ top: 1200, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200 flex flex-col justify-between">
      
      {/* Sticky Top Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => {
          setSearchCategoryFilter('');
          setIsSearchOpen(true);
        }}
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        onOpenSEO={() => setIsSEOOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
              onOpenSearch={() => setIsSearchOpen(true)}
              onNavigateToDirections={handleNavigateToDirections}
            />
            <WhyChooseUs />
            <ServicesSection onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />
            <FeaturedCategories onSelectCategory={handleCategorySelect} />
            <WhyTrustUs />
            <TestimonialsSection />
            <FAQSection />
            <GoogleMapSection />
            <ContactCTA onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          </>
        )}

        {activePage === 'about' && (
          <AboutView onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
        )}

        {activePage === 'services' && (
          <>
            <ServicesSection onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />
            <ContactCTA onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          </>
        )}

        {activePage === 'gallery' && (
          <GallerySection />
        )}

        {activePage === 'testimonials' && (
          <TestimonialsSection />
        )}

        {activePage === 'faq' && (
          <FAQSection />
        )}

        {activePage === 'contact' && (
          <ContactView onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
      />

      {/* Floating Action Buttons */}
      <FloatingWidgets
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
      />

      {/* Modals */}
      <MedicineSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={searchCategoryFilter}
        onOpenWhatsAppOrder={handleOpenWhatsAppOrder}
      />

      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        presetMessage={whatsAppPresetMessage}
      />

      <SEOInspector
        isOpen={isSEOOpen}
        onClose={() => setIsSEOOpen(false)}
      />

    </div>
  );
}
