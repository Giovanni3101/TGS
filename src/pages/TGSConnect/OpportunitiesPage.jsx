import { useState, useMemo } from 'react';
import { Search, Filter, Grid2x2 as Grid, List } from 'lucide-react';
import OpportunityCard from '../../components/TGSConnect/opportunities/OpportunitiesCard';
import { opportunities } from '../../components/TGSConnect/data/opportunities';

export default function OpportunitiesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFunding, setSelectedFunding] = useState('all');

    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'conferences', label: 'Conferences' },
        { value: 'scholarships', label: 'Scholarships' },
        { value: 'fellowships', label: 'Fellowships' },
        { value: 'volunteering', label: 'Volunteering' },
        { value: 'trainings', label: 'Trainings' },
        { value: 'workshops', label: 'Workshops' }
    ];

    const fundingOptions = [
        { value: 'all', label: 'All Funding Types' },
        { value: 'Fully Funded', label: 'Fully Funded' },
        { value: 'Partially Funded', label: 'Partially Funded' },
        { value: 'Funded', label: 'Funded' },
        { value: 'Unfunded', label: 'Unfunded' }
    ];

    const filteredOpportunities = useMemo(() => {
        return opportunities.filter(opportunity => {
            const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                opportunity.location.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory === 'all' || opportunity.category === selectedCategory;

            const matchesFunding = selectedFunding === 'all' || opportunity.funding === selectedFunding;

            return matchesSearch && matchesCategory && matchesFunding;
        });
    }, [searchTerm, selectedCategory, selectedFunding]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* <div className="bg-gradient-to-r from-sky-600 to-sky-700 py-16"> */}
            <div className='bg-sky-900 py-16'>
                <div className="max-w-7xlll mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{
                            fontFamily: "Great vibes"
                        }}
                    >
                        Discover Your Next Opportunity
                    </h1>
                    <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                        Explore thousands of life-changing opportunities including scholarships, fellowships,
                        conferences, and volunteer programs from around the world.
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-sm border-b border-gray-300">
                <div className="max-w-7xlll mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
                        {/* Search */}
                        {/* <div className="relative flex-1 md:max-w-4xl w-fit">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search opportunities..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            />
                        </div> */}
                        <div
                            className="relative w-full md:w-[400px]"
                        >
                            <input
                                type="text"
                                placeholder="Search opportunities..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full input px-6 pr-3 py-6 rounded-full text-gray-800 font-medium
                                                focus:outline-none focus:ring-2 focus:ring-cyan-400
                                                relative z-0"
                            />

                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2
                                                bg-sky-800 hover:bg-sky-700 transition-colors
                                                px-5 py-2 rounded-full
                                                z-10 text-white"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex items-center space-x-2">
                                <Filter className="w-5 h-5 text-gray-400" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                >
                                    {categories.map(category => (
                                        <option key={category.value} value={category.value}>
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <select
                                value={selectedFunding}
                                onChange={(e) => setSelectedFunding(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                                {fundingOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xlll mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {filteredOpportunities.length} Opportunities Found
                    </h2>
                </div>

                {filteredOpportunities.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
                        <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredOpportunities.map((opportunity) => (
                            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}