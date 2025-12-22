import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OpportunityCard({ opportunity }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            conferences: 'bg-purple-100 text-purple-700',
            scholarships: 'bg-blue-100 text-blue-700',
            fellowships: 'bg-green-100 text-green-700',
            volunteering: 'bg-orange-100 text-orange-700',
            trainings: 'bg-red-100 text-red-700',
            workshops: 'bg-yellow-100 text-yellow-700'
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    const getFundingColor = (funding) => {
        if (funding === 'Fully Funded') return 'bg-green-100 text-green-700';
        if (funding === 'Partially Funded' || funding === 'Funded') return 'bg-yellow-100 text-yellow-700';
        return 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xll overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer group">
            <div className="h-48 overflow-hidden">
                <img
                    src={opportunity.image_url || 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${getCategoryColor(opportunity.category)}`}>
                        {opportunity.category}
                    </span>
                    {opportunity.funding && (
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getFundingColor(opportunity.funding)}`}>
                            {opportunity.funding}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-900 transition-colors">
                    {opportunity.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {opportunity.short_description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {opportunity.location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        Deadline: {formatDate(opportunity.deadline)}
                    </div>
                    {opportunity.funding && (
                        <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                            {opportunity.funding}
                        </div>
                    )}
                </div>

                <div className='mt-auto'>
                    <Link
                        to={`/${opportunity.category}/${opportunity.slug}`}
                        className="px-4 py-2 rounded-full text-sm font-medium text-white bg-sky-900 hover:from-sky-700 hover:to-cyan-700 transition-all duration-300"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </div>
    );
}