// src/components/blog/BlogCard.jsx
import React, { useState } from 'react';

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
import { Calendar, Clock, MapPin, Tag, ArrowRight } from 'lucide-react';
import ContentTypeBadge from './ContentTypeBadge';

/**
 * BlogCard Component
 * Reusable card for displaying blog content (articles, events, reports, etc.)
 * 
 * @param {object} content - Content object with title, excerpt, author, etc.
 * @param {boolean} featured - Whether this is a featured card (larger layout)
 */
const BlogCard = ({ content, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
        featured ? 'md:flex md:flex-row' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div 
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2' : 'w-full'
        } ${
          featured ? 'h-64 md:h-auto' : 'h-56'
        }`}
      >
        <img 
          src={content.image} 
          alt={content.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        
        {/* Content Type Badge */}
        <div className="absolute top-4 left-4">
          <ContentTypeBadge type={content.type} />
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-sky-400 text-sky-900 px-3 py-1 rounded-full text-xs font-bold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className={`p-6 ${featured ? 'md:w-1/2 md:p-8' : ''} flex flex-col justify-between`}>
        <div>
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(content.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {content.readTime}
            </span>
            {content.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {content.location}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {content.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-600 leading-relaxed mb-4 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {content.excerpt}
          </p>

          {/* Tags */}
          {content.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {content.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {content.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-700 font-medium">{content.author}</span>
          </div>
          
          <button 
            className="flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-3 transition-all"
            aria-label={`Read more about ${content.title}`}
            onClick={() => {
              const slug = slugify(content.title);
              window.location.href = `/news/${slug}`;
            }}  
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;