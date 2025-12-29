// src/pages/ArticleDetail.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Eye, Bookmark, ChevronLeft, 
  Facebook, Twitter, Linkedin, Link2, Check,
  FileText, Mail, Tag
} from 'lucide-react';
import { articleDetailData, blogContent } from '../Data/Blogdata.jsx';

/**
 * ArticleDetail Page
 * Full article view with content, author bio, social sharing, and related articles
 * 
 * @param {number} articleId - Article ID to display (in real app, from URL params)
 */
const ArticleDetail = ({ articleId = 1 }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Get article data
  const article = articleDetailData[articleId];
  const relatedArticles = article?.relatedArticles?.map(id => 
    blogContent.find(post => post.id === id)
  ).filter(Boolean) || [];

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
    return (
      <div className="min-h-screen flex  justify-center bg-gray-50">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button className="text-sky-600 hover:underline">Back to Blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-['Raleway',sans-serif] max-w-7xl mx-auto relative">
      {/* Skip to content - Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold z-50 focus:outline-none focus:ring-4 focus:ring-sky-300"
      >
        Skip to main content
      </a>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50 shadow-md">
        <div 
          className="h-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Reading progress"
        ></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm pt-4 pb-4 mt-25">
        <div className="w-full max-w-7xl mx-auto px-4 flex  justify-between">
          <button 
            className="flex  gap-2 text-gray-700 hover:text-sky-600 transition-colors font-semibold focus:outline-none focus:ring-4 focus:ring-sky-300 rounded-lg px-3 py-2"
            aria-label="Back to blog"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="sm:inline">Back to Blog</span>
          </button>
          
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 ${
              isBookmarked 
                ? 'bg-sky-600 text-white focus:ring-sky-300' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300'
            }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
            aria-pressed={isBookmarked}
          >
            <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <article className="bg-white">
        <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
          {/* Category Badge */}
          <div className="mb-8">
            <span className="inline-flex gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold uppercase tracking-wide">
              <FileText className="w-4 h-4" />
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-10 ">
            {article.subtitle}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-6 text-base text-gray-700 mb-8 pb-8 border-b-2 border-gray-200">
            <time dateTime={article.publishDate} className="flex  gap-2 font-medium">
              <Calendar className="w-5 h-5 text-sky-600" />
              {new Date(article.publishDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
            <span className="flex  gap-2 font-medium">
              <Clock className="w-5 h-5 text-sky-600" />
              {article.readTime}
            </span>
            <span className="flex  gap-2 font-medium">
              <Eye className="w-5 h-5 text-sky-600" />
              {article.views} views
            </span>
          </div>

          {/* Author & Social Share */}
          <div className="flex flex-col md:flex-row  justify-between gap-6">
            <div className="flex  gap-4">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-gray-200"
              />
              <div>
                <p className="font-bold text-xl text-gray-900">{article.author.name}</p>
                <p className="text-base text-gray-600 font-medium">{article.author.role}</p>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex  gap-3">
              <button 
                className="p-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                className="p-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                className="p-3 rounded-lg bg-sky-700 hover:bg-sky-800 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCopyLink}
                className="relative p-3 rounded-lg bg-gray-700 hover:bg-gray-800 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-400"
                aria-label="Copy link"
              >
                {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
                {copied && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-96 md:h-[600px] object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Article Content */}
        <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Render article content blocks here */}
          <div className="prose prose-lg max-w-none mx-auto">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-gray-800 leading-relaxed mb-8 text-lg ">
                      {block.text}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-6 ">
                      {block.text}
                    </h2>
                  );
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-6 border-sky-600 pl-8 py-6 my-12 bg-gradient-to-r from-sky-50 to-transparent rounded-r-xl mx-auto max-w-3xl">
                      <p className="text-2xl font-medium text-gray-900 mb-4 italic ">
                        "{block.text}"
                      </p>
                      {block.author && (
                        <cite className="text-base text-gray-700 not-italic font-semibold  block">
                          — {block.author}
                        </cite>
                      )}
                    </blockquote>
                  );
                case 'list':
                  return (
                    <ul key={index} className="space-y-5 my-10 max-w-2xl mx-auto">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-800 leading-relaxed text-lg">
                          <span className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Tags */}
          <nav className="flex flex-wrap  justify-center gap-3 mt-16 pt-10 border-t-2 border-gray-200">
            <span className="text-base text-gray-700 font-bold mr-2">Topics:</span>
            {article.tags.map((tag, index) => (
              <button
                key={index}
                className="inline-flex  gap-2 px-4 py-2.5 bg-gray-100 hover:bg-sky-600 hover:text-white text-gray-800 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-4 focus:ring-sky-300"
              >
                <Tag className="w-4 h-4" />
                {tag}
              </button>
            ))}
          </nav>

          {/* Author Bio */}
          <section className="mt-16 bg-gradient-to-br from-sky-50 via-sky-50 to-sky-50 rounded-3xl p-8 md:p-10 border-2 border-sky-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 ">About the Author</h3>
            <div className="flex flex-col sm:flex-row  gap-6">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
              <div className=" sm:text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">{article.author.name}</h4>
                <p className="text-sky-700 font-semibold mb-4 text-lg">{article.author.role}</p>
                <p className="text-gray-700 leading-relaxed text-base mb-6">{article.author.bio}</p>
                <div className="flex justify-center sm:justify-start">
                  <button className="inline-flex  gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300">
                    <Mail className="w-5 h-5" />
                    Contact {article.author.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-20">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 flex  justify-center gap-3">
                <span className="w-1.5 h-10 bg-gradient-to-b from-sky-600 to-sky-700 rounded-full"></span>
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedArticles.map((relatedArticle) => (
                  <a
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-sky-200 cursor-pointer block"
                  >
                    <img 
                      src={relatedArticle.image} 
                      alt=""
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <div className="flex  gap-4 text-sm text-gray-600">
                        <span className="flex  gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(relatedArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex  gap-1.5">
                          <Clock className="w-4 h-5" />
                          {relatedArticle.readTime}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>
      </article>
    </div>
  );
};

export default ArticleDetail;