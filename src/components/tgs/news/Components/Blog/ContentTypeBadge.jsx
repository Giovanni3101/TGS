// src/components/blog/ContentTypeBadge.jsx
import React from 'react';
import { FileText, Calendar, Award, Megaphone, Image } from 'lucide-react';

/**
 * ContentTypeBadge Component
 * Displays a color-coded badge for different content types
 * 
 * @param {string} type - Content type: 'article', 'event', 'report', 'news', 'gallery'
 */
const ContentTypeBadge = ({ type }) => {
  const typeConfig = {
    article: {
      color: 'bg-blue-100 text-blue-700',
      icon: <FileText className="w-3 h-3" />,
      label: 'Article'
    },
    event: {
      color: 'bg-green-100 text-green-700',
      icon: <Calendar className="w-3 h-3" />,
      label: 'Event'
    },
    report: {
      color: 'bg-purple-100 text-purple-700',
      icon: <Award className="w-3 h-3" />,
      label: 'Report'
    },
    news: {
      color: 'bg-orange-100 text-orange-700',
      icon: <Megaphone className="w-3 h-3" />,
      label: 'News'
    },
    gallery: {
      color: 'bg-pink-100 text-pink-700',
      icon: <Image className="w-3 h-3" />,
      label: 'Gallery'
    }
  };

  const config = typeConfig[type] || typeConfig.article;

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.color}`}
      aria-label={`Content type: ${config.label}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
};

export default ContentTypeBadge;