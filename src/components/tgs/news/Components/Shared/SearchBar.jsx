// src/components/shared/SearchBar.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';

/**
 * SearchBar Component
 * Search input with button for blog content
 * 
 * @param {function} onSearch - Callback function when search is triggered
 * @param {string} placeholder - Placeholder text for input
 */
const SearchBar = ({ onSearch, placeholder = "Search articles, events, reports..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative max-w-2xl w-full">
      <input
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full px-6 py-4 pr-12 rounded-full border-2 border-white-200 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all focus:ring-4 focus:ring-blue-300"
        aria-label="Search blog content"
      />
      
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-14 top-1/2 -translate-y-1/2 text-white hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
      
      <button 
        onClick={handleSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Submit search"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;