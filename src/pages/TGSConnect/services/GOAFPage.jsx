import { ArrowLeft, Target, Users, Award, Globe, Calendar, DollarSign, CheckCircle, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GOAFPage() {
    const objectives = [
        'Equip participants with practical tools to successfully apply for global opportunities featured on the TGS platform and beyond',
        'Strengthen professional communication and application writing skills, including CVs, motivation letters, and essays',
        'Provide structured mentorship and career guidance from experienced international fellows and professionals',
        'Expand participants\' academic and professional networks across regions and sectors',
        'Develop leadership capacity and intercultural competence for effective global engagement'
    ];

    const components = [
        {
            title: 'Access to Global Opportunities',
            items: [
                'Exclusive access to 500+ curated international opportunities, updated monthly',
                'Early alerts, insider insights, and deadline tracking through the TGS platform'
            ]
        },
        {
            title: 'Application Strategy & Profile Building',
            items: [
                'Masterclasses on crafting outstanding CVs, cover letters, and essays',
                'Mock reviews, peer feedback sessions, and personalized improvement plans'
            ]
        },
        {
            title: 'Interview Preparation & Communication Skills',
            items: [
                'Practical interview simulations and storytelling workshops',
                'Confidence-building sessions for online interviews and professional networking'
            ]
        },
        {
            title: 'Mentorship & Personalized Guidance',
            items: [
                'Each fellow is paired with a dedicated mentor (alumni, professional, or academic)',
                'Continuous one-on-one support, progress tracking, and accountability'
            ]
        },
        {
            title: 'Workshops & International Webinars',
            items: [
                'Interactive sessions with global experts, fellowship alumni, and partner institutions',
                'Topics include leadership, global citizenship, personal branding, and career strategy'
            ]
        },
        {
            title: 'Networking & Collaboration',
            items: [
                'Engagement with a diverse, cross-regional cohort of fellows',
                'Opportunities to collaborate on youth initiatives, projects, and advocacy campaigns'
            ]
        }
    ];

    const benefits = [
        'Guaranteed access to all global opportunities published by TGS during the fellowship',
        'Personalized mentorship and continuous application guidance',
        'Participation in international webinars, workshops, and leadership sessions',
        'Membership in the TGS Global Fellows Network for long-term networking and collaboration',
        'A Certificate of Completion from the TGS Academy',
        'Increased competitiveness for global programs, scholarships, fellowships, and internships',
        'Hands-on guidance while actively applying for opportunities throughout the program'
    ];

    const eligibility = [
        'Be an undergraduate student, graduate student, or early-career young professional (any field of study)',
        'Demonstrate strong motivation for international engagement and growth',
        'Possess good English communication skills',
        'Commit to full participation throughout the six-month fellowship'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-purple-600">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link to="/#academy" className="text-gray-500 hover:text-purple-600">Academy</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">GOAF Fellowship</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-sky-900 py-16">
                <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            🎓 TGS Global Opportunities Accelerator Fellowship
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6"
                            style={{
                                fontFamily: "Great vibes"
                            }}
                        >
                            GOAF Fellowship
                        </h1>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                            Your fast-track into global fellowships, internships & conferences
                        </p>
                        <div className="max-w-5xl mx-auto text-gray-100 font-medium italic text-xl"
                            style={{
                                fontFamily: "Outfit"
                            }}
                        >
                            <Quote className="text-start w-8 h-8 mb-1 text-sky-400 transform -scale-x-100" />
                            Global opportunities are competitive, and talent alone is not enough. GOAF is a guided fellowship that trains you to apply smarter, communicate better, and compete globally. With mentorship, insider strategies, and curated opportunities, you move from "I wish" to "I got selected."
                            <Quote className="ml-auto w-8 h-8 mt-1 text-sky-400" />
                        </div>
                        <div className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            🌟 This is not theory. This is results.
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-20 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Program Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The TGS Global Opportunities Accelerator Fellowship (GOAF) is a six-month guided
                                    fellowship designed to empower ambitious university students and young professionals to
                                    <strong> access, compete for, and succeed in global opportunities</strong>.
                                </p>
                                <p>
                                    Through expert mentorship, practical workshops, and continuous exposure to curated
                                    international programs, fellows develop the skills and strategic mindset required to craft
                                    strong, competitive applications for fellowships, internships, trainings, conferences, and
                                    leadership programs featured on the TGS Global Opportunities Platform.
                                </p>
                                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
                                    <p className="text-sky-800 font-medium">
                                        GOAF is built for action. It transforms potential into measurable progress — guiding
                                        participants from <strong>opportunity awareness to tangible global success</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Program Objectives */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-14 lg:bg-white lg:rounded-xl lg:shadow-sm lg:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Target className="w-8 h-8 mr-3 text-sky-600" />
                                Program Objectives
                            </h2>
                            <div className="space-y-4">
                                {objectives.map((objective, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-sky-600 text-sm font-bold">{index + 1}</span>
                                        </div>
                                        <span className="text-gray-700">{objective}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Program Components */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-14 lg:bg-white lg:rounded-xl lg:shadow-sm lg:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Star className="w-8 h-8 mr-3 text-sky-600" />
                                Core Program Components
                            </h2>
                            <div className="space-y-6">
                                {components.map((component, index) => (
                                    <div key={index} className="border-l-4 border-sky-500 pl-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{component.title}</h3>
                                        <ul className="space-y-2">
                                            {component.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                                <h4 className="font-semibold text-sky-900 mb-2">Capstone: The Opportunity Action Plan</h4>
                                <p className="text-sky-800 text-sm">
                                    Fellows design a personalized, strategic roadmap to pursue global opportunities beyond the fellowship.
                                </p>
                            </div>
                        </div>

                        {/* Program Benefits */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                {/* <Award className="w-8 h-8 mr-3 text-sky-600" /> */}
                                Program Benefits
                            </h2>
                            <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                {/* <Users className="w-8 h-8 mr-3 text-sky-600" /> */}
                                Eligibility Criteria
                            </h2>
                            <div className="space-y-3">
                                {eligibility.map((criterion, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{criterion}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-sky-200">
                                <div className="text-center mb-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">USD $50</div>
                                    <p className="text-gray-600">Per month</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">6-month duration</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">Fully online, cohort-based</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">Dedicated mentor assigned</span>
                                    </div>
                                </div>

                                <button className="w-full bg-sky-900 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium mb-4">
                                    Apply for GOAF
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Application Fee: Free
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-sky-600" />
                                    Timeline
                                </h3>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Applications Open:</span>
                                        <span className="font-medium">April 2025</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Cohort Launch:</span>
                                        <span className="font-medium">July 2025</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Duration:</span>
                                        <span className="font-medium">6 months</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Mode:</span>
                                        <span className="font-medium">Virtual</span>
                                    </div>
                                </div>
                            </div>

                            {/* Financial Aid */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <DollarSign className="w-5 h-5 mr-2 text-sky-600" />
                                    Financial Aid
                                </h3>
                                <p className="text-sm text-gray-700 mb-3">
                                    Limited need-based and merit-based scholarships available through the TGS Opportunity Fund.
                                </p>
                                <button className="w-full border border-sky-600 text-sky-600 py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors text-sm font-medium">
                                    Learn About Scholarships
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}