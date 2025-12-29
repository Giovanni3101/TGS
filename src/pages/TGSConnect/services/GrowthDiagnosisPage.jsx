import { ArrowLeft, CheckCircle, Clock, Users, Target, Brain, FileText, Video, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrowthDiagnosisPage() {
    const features = [
        {
            icon: Brain,
            title: 'Five Core Competency Areas',
            description: 'Communication, leadership, digital fluency, global citizenship, and professional readiness assessment'
        },
        {
            icon: Target,
            title: 'Goals & Interests Mapping',
            description: 'Comprehensive evaluation of your aspirations, lived experiences, and growth barriers'
        },
        {
            icon: Video,
            title: 'Optional Growth Interview',
            description: 'One-on-one virtual session with TGS advisor for deeper context exploration'
        },
        {
            icon: FileText,
            title: 'Personalized Report',
            description: 'Detailed diagnosis report with scorecard, insights, and tailored recommendations'
        }
    ];

    const reportIncludes = [
        'A personalized skills scorecard',
        'Readiness level classification (Foundation → Global-Ready)',
        'Narrative insights on strengths and gaps',
        'A tailored development roadmap',
        'Curated opportunity recommendations aligned to your profile'
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-300">
                <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link to="/home#services" className="text-gray-500 hover:text-blue-600">Services</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">TGS Growth Diagnosis</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-sky-900 py-16">
                <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-32">
                    <div className="text-center text-white">
                        <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Your personalized roadmap to global readiness
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6"
                            style={{
                                fontFamily: "Great vibes"
                            }}
                        >
                            TGS Growth Diagnosis
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Discover what's holding you back — and what could take you global
                        </p>
                        <div className="max-w-5xl mx-auto text-gray-100 font-medium italic text-xl"
                            style={{
                                fontFamily: "Outfit"
                            }}
                        >
                            <Quote className="text-start w-8 h-8 mb-1 text-sky-400 transform -scale-x-100" />
                            Most global opportunities are won by those who understand themselves best — and act strategically.
                            <Quote className="ml-auto w-8 h-8 mt-1 text-sky-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-20 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    You have ambition. You have potential. But do you know <strong>exactly where you stand</strong>,
                                    what's slowing you down, and <strong>which opportunities truly fit your goals and passions?</strong>
                                </p>
                                <p>
                                    The TGS Growth Diagnosis is a personalized, evidence-based assessment designed for young
                                    people who want to understand themselves deeply, grow beyond borders, excel in global
                                    opportunities, and lead meaningful change within their communities.
                                </p>
                                <p>
                                    It evaluates your skills, aspirations, readiness, interests, and barriers — and translates them
                                    into a clear, actionable growth and opportunity roadmap aligned with who you are and
                                    where you want to go.
                                </p>
                                <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg">
                                    <p className="text-sky-800 font-medium">
                                        <strong>Best for:</strong> Students and young professionals seeking clarity, direction, and a competitive edge
                                        in global opportunities that truly align with their aspirations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-14 md:bg-white md:rounded-xl md:shadow-sm md:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                            <div className="space-y-6">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-sky-900" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* What You'll Receive */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your TGS Diagnosis Report Includes</h2>
                            <div className="space-y-3">
                                {reportIncludes.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-sky-900 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                <p className="text-green-800 font-medium">
                                    The Growth Diagnosis ensures that every participant receives <strong>clarity, direction, and a
                                        structured plan</strong>, rather than guesswork.
                                </p>
                            </div>
                        </div>

                        {/* Process */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-14 md:bg-white md:rounded-xl md:shadow-sm md:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Process</h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-sky-900 pl-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Online Assessment</h3>
                                    <p className="text-gray-600">
                                        Complete our structured Growth Diagnosis Form that assesses five core competency areas
                                        and maps your goals, interests, and barriers.
                                    </p>
                                </div>
                                <div className="border-l-4 border-sky-900 pl-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Growth Interview (Optional)</h3>
                                    <p className="text-gray-600">
                                        Based on your responses, you may be invited to a one-on-one virtual Growth Interview
                                        with a TGS advisor for deeper exploration.
                                    </p>
                                </div>
                                <div className="border-l-4 border-sky-900 pl-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Receive Your Report</h3>
                                    <p className="text-gray-600">
                                        Get your comprehensive TGS Diagnosis Report with personalized insights and
                                        next-step recommendations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-sky-200">
                                <div className="text-center mb-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">USD $10</div>
                                    <p className="text-gray-600">One-time assessment</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-sky-900" />
                                        <span className="text-sm text-gray-700">Online assessment + optional interview</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FileText className="w-5 h-5 text-sky-900" />
                                        <span className="text-sm text-gray-700">Personalized Diagnosis Report</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Target className="w-5 h-5 text-sky-900" />
                                        <span className="text-sm text-gray-700">Next-step recommendations</span>
                                    </div>
                                </div>

                                <button className="w-full bg-sky-900 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                                    Take Growth Diagnosis
                                </button>
                            </div>

                            {/* Who This Is For */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Users className="w-5 h-5 mr-2 text-sky-900" />
                                    Who This Is For
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Students seeking clarity on their global potential</li>
                                    <li>• Young professionals planning international careers</li>
                                    <li>• Anyone who wants strategic guidance over guesswork</li>
                                    <li>• Those ready to move from awareness to action</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}