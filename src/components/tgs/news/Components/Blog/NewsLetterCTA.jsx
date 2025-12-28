// src/components/blog/NewsletterCTA.jsx
import React, { useState } from 'react';
import { Check } from 'lucide-react';

/**
 * NewsletterCTA Component
 * Email subscription widget for blog sidebar and article pages
 * 
 * @param {boolean} large - Use larger layout (for in-article placement)
 */
const NewsletterCTA = ({ large = false }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    setError('');
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // TODO: Connect to newsletter API
    console.log('Subscribing:', email);
    setSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  if (large) {
    // Large version for in-article placement
    return (
      <aside 
        className="bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 rounded-3xl p-10 md:p-12 text-white my-16 shadow-2xl relative overflow-hidden"
        aria-labelledby="newsletter-heading"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative text-center max-w-2xl mx-auto">
          <h3 id="newsletter-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed & Inspired
          </h3>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Join 10,000+ changemakers receiving weekly insights on youth empowerment and global opportunities.
          </p>
          
          {!subscribed ? (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white text-lg font-medium"
                  aria-label="Email address for newsletter"
                  aria-invalid={!!error}
                  aria-describedby={error ? "email-error" : undefined}
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-white text-sky-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              {error && (
                <p id="email-error" className="text-red-200 text-sm mt-3" role="alert">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="bg-white text-sky-700 px-8 py-6 rounded-xl font-bold text-xl inline-flex items-center gap-3">
              <Check className="w-6 h-6" />
              Successfully subscribed!
            </div>
          )}
        </div>
      </aside>
    );
  }

  // Compact version for sidebar
  return (
    <aside 
      className="bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 rounded-2xl p-8 text-white relative overflow-hidden"
      aria-labelledby="newsletter-sidebar-heading"
    >
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="relative">
        <h3 id="newsletter-sidebar-heading" className="text-2xl font-bold mb-3">
          Stay Updated
        </h3>
        <p className="text-sky-100 mb-6 text-sm">
          Get the latest stories and opportunities delivered weekly.
        </p>
        
        {!subscribed ? (
          <div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="px-4 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for newsletter"
                aria-invalid={!!error}
              />
              <button 
                onClick={handleSubscribe}
                className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p className="text-red-200 text-xs mt-2" role="alert">{error}</p>
            )}
          </div>
        ) : (
          <div className="bg-white text-sky-700 px-4 py-3 rounded-lg font-bold text-sm flex items-center gap-2">
            <Check className="w-4 h-4" />
            Subscribed!
          </div>
        )}
      </div>
    </aside>
  );
};

export default NewsletterCTA;