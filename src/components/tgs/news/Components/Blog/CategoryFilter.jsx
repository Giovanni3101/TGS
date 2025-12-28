// src/components/blog/CategoryFilter.jsx
import React from 'react';
import { Filter, FileText, Calendar, Award, Megaphone, Image } from 'lucide-react';

/**
 * CategoryFilter Component
 * Interactive filter buttons for blog content categories
 * 
 * @param {array} categories - Array of category objects with name and count
 * @param {string} activeCategory - Currently selected category
 * @param {function} onCategoryChange - Callback when category is selected
 */
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  // Icon mapping for each category
  const iconMap = {
    'All': <Filter className="w-4 h-4" />,
    'Articles': <FileText className="w-4 h-4" />,
    'Events': <Calendar className="w-4 h-4" />,
    'Reports': <Award className="w-4 h-4" />,
    'News': <Megaphone className="w-4 h-4" />,
    'Galleries': <Image className="w-4 h-4" />
  };

  return (
    <nav 
      className="flex flex-wrap gap-3"
      role="navigation"
      aria-label="Content category filter"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.name;
        
        return (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 ${
              isActive
                ? 'bg-sky-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-sky-600 hover:text-sky-600'
            }`}
            aria-pressed={isActive}
            aria-label={`Filter by ${category.name}, ${category.count} items`}
          >
            {iconMap[category.name] || <Filter className="w-4 h-4" />}
            {category.name}
            <span 
              className={`text-xs px-2 py-0.5 rounded-full ${
                isActive ? 'bg-sky-500' : 'bg-gray-200'
              }`}
            >
              {category.count}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default CategoryFilter;