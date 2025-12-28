// src/pages/BlogLanding.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/Blog/BlogCard.jsx';
import CategoryFilter from '../Components/Blog/CategoryFilter.jsx';
import BlogSidebar from '../Components/Blog/BlogSideBar.jsx';
import SearchBar from '../Components/Shared/SearchBar.jsx';
import { blogContent, categories, popularTags } from '../Data/Blogdata.jsx';

/**
 * BlogLanding Page
 * Main blog landing page with featured content, category filters, and content grid
 */
const BlogLanding = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(blogContent);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading content
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Filter content by category and search term
  useEffect(() => {
    let filtered = blogContent;

    // Filter by category
    if (activeCategory !== 'All') {
      // Map category names to content types properly
      const categoryToTypeMap = {
        'Articles': 'article',
        'Events': 'event',
        'Reports': 'report',
        'News': 'news',
        'Galleries': 'gallery'
      };
      
      const type = categoryToTypeMap[activeCategory];
      if (type) {
        filtered = filtered.filter(item => item.type === type);
      }
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.excerpt.toLowerCase().includes(term) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    setFilteredContent(filtered);
  }, [activeCategory, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Featured content should only show when no category filter is applied and no search
  const showFeaturedContent = activeCategory === 'All' && !searchTerm.trim();
  
  const featuredContent = showFeaturedContent ? filteredContent.filter(item => item.featured) : [];
  const regularContent = filteredContent.filter(item => !item.featured || !showFeaturedContent);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-['Raleway',sans-serif]">
      {/* Hero Header Section */}
      <header className="bg-gradient-to-br from-sky-900 via-sky-600 to-sky-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-sky-500 bg-opacity-20 backdrop-blur-sm border border-sky-300 text-sky-100 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mt-6 mb-6">
              TGS Insights & Stories
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Youth,<br />
              <span className="text-sky-300">One Story at a Time</span>
            </h1>
            
            <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover insights, opportunities, and stories from the global youth empowerment movement
            </p>
            
            <div className="flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Content Section */}
            {featuredContent.length > 0 && (
              <section aria-labelledby="featured-heading">
                <h2 
                  id="featured-heading"
                  className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2"
                >
                  <span className="w-1 h-8 bg-sky-600 rounded-full"></span>
                  Featured Content
                </h2>
                <div className="space-y-6">
                  {featuredContent.map(content => (
                    <BlogCard key={content.id} content={content} featured={true} />
                  ))}
                </div>
              </section>
            )}

            {/* Regular Content Grid */}
            <section aria-labelledby="content-heading">
              <h2 
                id="content-heading"
                className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2"
              >
                <span className="w-1 h-8 bg-sky-600 rounded-full"></span>
                {searchTerm.trim() 
                  ? `Search Results for "${searchTerm}"` 
                  : activeCategory === 'All' 
                    ? 'Latest Stories' 
                    : activeCategory
                }
                <span className="text-lg text-gray-600 font-normal ml-2">
                  ({filteredContent.length} {filteredContent.length === 1 ? 'item' : 'items'})
                </span>
              </h2>
              
              {regularContent.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {regularContent.map(content => (
                    <BlogCard key={content.id} content={content} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                  <p className="text-gray-500 text-lg">
                    {searchTerm.trim() 
                      ? `No results found for "${searchTerm}". Try different keywords.`
                      : 'No content found in this category'
                    }
                  </p>
                  {searchTerm.trim() && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="mt-4 text-sky-600 font-semibold hover:underline"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar 
                recentPosts={blogContent}
                popularTags={popularTags}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogLanding;