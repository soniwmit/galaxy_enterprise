import React from 'react';
import { CATEGORIES } from '../data/pharmacyData';
import { CategoryItem } from '../types';
import {
  Pill,
  BoxSelect,
  Wine,
  Syringe,
  Activity,
  Dumbbell,
  Sun,
  Sparkles,
  Baby,
  Shield,
  Bone,
  HeartPulse,
  ArrowRight
} from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-6 h-6 text-white" />,
  BoxSelect: <BoxSelect className="w-6 h-6 text-white" />,
  Wine: <Wine className="w-6 h-6 text-white" />,
  Syringe: <Syringe className="w-6 h-6 text-white" />,
  Activity: <Activity className="w-6 h-6 text-white" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-white" />,
  Sun: <Sun className="w-6 h-6 text-white" />,
  Sparkles: <Sparkles className="w-6 h-6 text-white" />,
  Baby: <Baby className="w-6 h-6 text-white" />,
  Shield: <Shield className="w-6 h-6 text-white" />,
  Bone: <Bone className="w-6 h-6 text-white" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-white" />
};

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full mb-3">
              Explore Our Aisle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Product Categories
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-sm">
            Browse through our wide spectrum of pharmaceuticals, wellness products, surgical supplies, and patient care equipment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition duration-300`}>
                  {iconMap[cat.icon] || <Pill className="w-6 h-6 text-white" />}
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {cat.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>{cat.count}</span>
                <span className="group-hover:translate-x-1 transition duration-200">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
