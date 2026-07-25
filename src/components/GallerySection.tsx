import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryImage } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'front', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'store', label: 'Store Interior' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'products', label: 'Products' }
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (img: GalleryImage) => {
    setSelectedImage(img);
    setZoomLevel(1);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((i) => i.id === selectedImage.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = filteredImages.length - 1;
    if (nextIndex >= filteredImages.length) nextIndex = 0;
    setSelectedImage(filteredImages[nextIndex]);
    setZoomLevel(1);
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full mb-3">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Galaxy Store Gallery
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Take a look inside Galaxy Enterprise at Kurthadih. Clean interiors, organized medicine shelves, cold storage units, and genuine healthcare products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img)}
              className="group relative bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {img.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">{img.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Zoom */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-slate-800/80 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition z-20"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition z-20"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Frame with Zoom */}
              <div className="overflow-hidden rounded-2xl max-h-[75vh] w-full bg-black flex items-center justify-center border border-slate-800 relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[75vh] object-contain transition-transform duration-300 cursor-zoom-in"
                  onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : 1)}
                />
              </div>

              {/* Image Caption Bar */}
              <div className="mt-4 text-center bg-slate-900/90 border border-slate-800 p-4 rounded-2xl w-full max-w-lg text-white">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-bold mb-1">
                  <span>{selectedImage.title}</span>
                  <button
                    onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : 1)}
                    className="flex items-center gap-1 hover:underline text-slate-300"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    {zoomLevel === 1 ? 'Click to Zoom' : 'Reset Zoom'}
                  </button>
                </div>
                <p className="text-xs text-slate-300">{selectedImage.caption}</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
