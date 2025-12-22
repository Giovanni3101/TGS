import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, ExternalLink, ArrowLeft, Clock, Users, Award, CheckCircle } from 'lucide-react';
import { getOpportunityBySlug } from '../../components/TGSConnect/data/opportunities';

export default function OpportunityDetailPage() {
    const { category, slug } = useParams();

    if (!category || !slug) {
        return <Navigate to="/opportunities" replace />;
    }

    const opportunity = getOpportunityBySlug(category, slug);

    if (!opportunity) {
        return (
            <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Opportunity Not Found</h1>
                    <p className="text-gray-600 mb-6">The opportunity you're looking for doesn't exist.</p>
                    <Link
                        to="/opportunities"
                        className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Opportunities
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getDaysUntilDeadline = (deadline) => {
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const daysLeft = getDaysUntilDeadline(opportunity.deadline);

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

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-white border-b border-gray-300">
                <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-sky-600">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link to="/opportunities" className="text-gray-500 hover:text-sky-600">Opportunities</Link>
                        <span className="text-gray-400">/</span>
                        <Link to={`/opportunities?category=${category}`} className="text-gray-500 hover:text-sky-600 capitalize">
                            {category}
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">{opportunity.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xlll mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="p-3 md:p-8 mb-8">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className={`text-sm px-3 py-1 rounded-full font-medium capitalize ${getCategoryColor(opportunity.category)}`}>
                                            {opportunity.category}
                                        </span>
                                        {opportunity.featured && (
                                            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        {opportunity.title}
                                    </h1>
                                    <p className="text-lg text-gray-600">
                                        {opportunity.short_description}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <img
                                    src={opportunity.image_url || 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                                    alt={opportunity.title}
                                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-6 h-6 text-sky-600" />
                                    <div>
                                        <div className="text-sm text-gray-500">Location</div>
                                        <div className="font-semibold text-gray-900">{opportunity.location}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-6 h-6 text-sky-600" />
                                    <div>
                                        <div className="text-sm text-gray-500">Deadline</div>
                                        <div className="font-semibold text-gray-900">{formatDate(opportunity.deadline)}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="w-6 h-6 text-sky-600" />
                                    <div>
                                        <div className="text-sm text-gray-500">Funding</div>
                                        <div className="font-semibold text-gray-900">{opportunity.funding || 'Not specified'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Opportunity</h2>
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {opportunity.description}
                                </div>
                            </div>
                        </div>

                        {opportunity.benefits && opportunity.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    {/* <Award className="w-6 h-6 mr-3 text-sky-600" /> */}
                                    Benefits & What You'll Get
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {opportunity.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='flex flex-col md:flex-row md:space-x-8'>
                            {opportunity.eligibility && (
                                <div className="h-fit bg-white rounded-xl shadow-sm p-8 mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        {/* <Users className="w-6 h-6 mr-3 text-sky-600" /> */}
                                        Eligibility Requirements
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">{opportunity.eligibility}</p>
                                </div>
                            )}

                            {opportunity.how_to_apply && (
                                <div className="h-fit bg-white rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
                                    <p className="text-gray-700 leading-relaxed">{opportunity.how_to_apply}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className={`p-6 rounded-xl ${daysLeft <= 7 ? 'bg-red-50 border border-red-200' :
                                daysLeft <= 30 ? 'bg-yellow-50 border border-yellow-200' :
                                    'bg-green-50 border border-green-200'
                                }`}>
                                <div className="flex items-center space-x-3 mb-3">
                                    <Clock className={`w-6 h-6 ${daysLeft <= 7 ? 'text-red-600' :
                                        daysLeft <= 30 ? 'text-yellow-600' :
                                            'text-green-600'
                                        }`} />
                                    <h3 className="font-bold text-gray-900">Application Deadline</h3>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">
                                    {formatDate(opportunity.deadline)}
                                </p>
                                <p className={`text-sm font-medium ${daysLeft <= 7 ? 'text-red-600' :
                                    daysLeft <= 30 ? 'text-yellow-600' :
                                        'text-green-600'
                                    }`}>
                                    {daysLeft > 0 ? `${daysLeft} days remaining` : 'Deadline passed'}
                                </p>
                            </div>

                            {/* Apply Button */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                                <div className="space-y-3">
                                    {opportunity.website && (
                                        <a
                                            href={opportunity.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-sky-600 text-white py-3 px-4 rounded-lg hover:bg-sky-700 transition-colors font-medium flex items-center justify-center"
                                        >
                                            Apply Now
                                            <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    )}
                                    <button className="w-full border-2 border-sky-600 text-sky-600 py-3 px-4 rounded-lg hover:bg-sky-50 transition-colors font-medium">
                                        Save for Later
                                    </button>
                                    <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                        Share Opportunity
                                    </button>
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="font-medium text-gray-900 capitalize">{opportunity.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Location:</span>
                                        <span className="font-medium text-gray-900">{opportunity.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Funding:</span>
                                        <span className="font-medium text-gray-900">{opportunity.funding || 'Not specified'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Posted:</span>
                                        <span className="font-medium text-gray-900">
                                            {opportunity.created_at ? formatDate(opportunity.created_at) : 'Recently'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Back to Opportunities */}
                            <Link
                                to="/opportunities"
                                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to All Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}