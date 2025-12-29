// src/components/blog/BlogSidebar.jsx
import React from 'react';
import { TrendingUp, Tag, Calendar, Clock } from 'lucide-react';
import NewsletterCTA from '../Components/Blog/NewsLetterCTA.jsx';

/**
 * BlogSidebar Component
 * Sidebar with recent posts, popular tags, and newsletter subscription
 * 
 * @param {array} recentPosts - Array of recent blog posts
 * @param {array} popularTags - Array of popular tag strings
 */
const BlogSidebar = ({ recentPosts = [], popularTags = [] }) => {
  return (
    <aside className="space-y-8">
      {/* Recent Posts Section */}
      {recentPosts.length > 0 && (
        <section 
          className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
          aria-labelledby="recent-posts-heading"
        >
          <h3 
            id="recent-posts-heading"
            className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"
          >
            <TrendingUp className="w-5 h-5 text-sky-600" />
            Recent Posts
          </h3>
          
          <div className="space-y-4">
            {recentPosts.slice(0, 4).map((post) => (
              <a
                key={post.id} 
                href={`/news/${post.id}`}
                className="group block cursor-pointer"
                role="link"
              >
                <div className="flex gap-3">
                  <img 
                    src={post.image} 
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Popular Tags Section */}
      {popularTags.length > 0 && (
        <section 
          className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
          aria-labelledby="popular-tags-heading"
        >
          <h3 
            id="popular-tags-heading"
            className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
          >
            <Tag className="w-5 h-5 text-sky-600" />
            Popular Tags
          </h3>
          
          <nav 
            className="flex flex-wrap gap-2"
            aria-label="Popular content tags"
          >
            {popularTags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-1.5 bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-700 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
                aria-label={`View content tagged with ${tag}`}
              >
                {tag}
              </button>
            ))}
          </nav>
        </section>
      )}

      {/* Newsletter Subscription */}
      <NewsletterCTA />
    </aside>
  );
};

export default BlogSidebar;