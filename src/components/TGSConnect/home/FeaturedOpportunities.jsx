import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router'
import { getFeaturedOpportunities } from '../data/opportunities';


function FeaturedOpportunities() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(300);

    const featuredOpportunities = getFeaturedOpportunities();

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setContainerWidth(width);

                if (width < 640) {
                    setItemWidth(width * 0.9);
                } else if (width < 1024) {
                    setItemWidth(width / 2 - 24);
                } else {
                    setItemWidth(width / 3 - 32);
                }
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const maxScroll = Math.max(0, (featuredOpportunities.length * itemWidth) - containerWidth);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + itemWidth, maxScroll));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - itemWidth, 0));
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Featured <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Opportunities</span>
                        </h2>
                        <p className="text-gray-600">
                            Don't miss out on these trending opportunities
                        </p>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="relative overflow-hidden"
                >
                    <motion.div
                        className="flex space-x-6"
                        animate={{ x: -currentIndex }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {featuredOpportunities.map((opp, index) => (
                            <div
                                key={index}
                                style={{ minWidth: itemWidth }}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-sky-600 capitalize">{opp.category}</span>
                                        <span className="bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-medium">
                                            {opp.funding || 'Featured'}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {opp.title}
                                    </h3>
                                    <p className="text-gray-800 mb-3">
                                        {opp.short_description}
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Globe className="w-4 h-4 mr-2" />
                                            {opp.location}
                                        </div>
                                        <div className="flex items-center">
                                            <BookOpen className="w-4 h-4 mr-2" />
                                            Deadline: {opp.deadline}
                                        </div>
                                    </div>
                                    <Link to={`/${opp.category}/${opp.slug}`}>
                                        <button className="cursor-pointer mt-6 text-start text-sky-600 hover:text-sky-700 font-medium">
                                            Explore →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-10">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex <= 0}
                        className={`p-2 rounded-full transition-colors ${currentIndex <= 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxScroll}
                        className={`p-2 rounded-full transition-colors ${currentIndex >= maxScroll
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                <Link to='/opportunities'>
                    <button className="mt-6 cursor-pointer border-2 border-sky-600 text-sky-600 px-8 py-2 rounded-full hover:bg-sky-50 transition-colors font-medium text-lg">
                        Explore All
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default FeaturedOpportunities;