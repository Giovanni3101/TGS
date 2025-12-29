import { ArrowLeft, GraduationCap, Users, Award, Globe, Calendar, DollarSign, CheckCircle, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GSPPage() {
    const tracks = [
        {
            title: 'Track 1: High School Students',
            description: 'For high school students (or recent graduates) aspiring to pursue higher education abroad',
            ageRange: '16-21 years'
        },
        {
            title: 'Track 2: University Students',
            description: 'For university students in their 3rd, 4th, or final year aiming to study abroad or apply for international scholarships',
            ageRange: '18-25 years'
        }
    ];

    const objectives = [
        'Prepare students academically and mentally for studying in international environments',
        'Foster global citizenship through intercultural dialogue, international exposure, and cross-border collaboration',
        'Build leadership, communication, and personal development skills essential for higher education success',
        'Guide students through scholarship and university application processes with expert mentorship',
        'Create a global network of aspiring young leaders committed to excellence and community impact'
    ];

    const modules = [
        {
            title: 'Academic Readiness & Study Skills',
            items: [
                'Critical thinking, academic writing, and integrity',
                'Understanding global education systems (U.S., U.K., Canada, Europe, etc.)'
            ]
        },
        {
            title: 'Global Citizenship & Cultural Competence',
            items: [
                'Intercultural communication workshops',
                'Cross-border dialogue sessions with peers from other regions'
            ]
        },
        {
            title: 'Leadership & Personal Growth',
            items: [
                'Youth leadership bootcamps and reflection labs',
                'Training on communication, emotional intelligence, and public speaking'
            ]
        },
        {
            title: 'University Application & Scholarship Guidance',
            items: [
                'Step-by-step guidance on applications for universities and scholarships',
                'Crafting strong portfolios, motivation letters, and recommendation strategies'
            ]
        },
        {
            title: 'Career & Future Pathway Exploration',
            items: [
                'Discover academic and career interests aligned with global opportunities',
                'Talks from professionals, alumni, and international students'
            ]
        },
        {
            title: 'Mentorship & Community Engagement',
            items: [
                'One-on-one mentorship with international students or alumni',
                'Community project component promoting local action and global awareness'
            ]
        }
    ];

    const benefits = [
        'Gain personalized mentorship from international students, alumni, and academic advisors',
        'Receive hands-on guidance for university and scholarship applications',
        'Join a global community of young leaders preparing to study abroad',
        'Build transferable skills in leadership, communication, critical thinking, and problem-solving',
        'Earn a TGS Global Scholars Certificate upon successful completion',
        'Access exclusive opportunities, including summer schools, exchange programs, and internships curated by TGS'
    ];

    const eligibility = [
        'Be aged 16–21 for high school track or 18–25 for university track',
        'Be currently enrolled in high school, recently completed secondary education, or in the 3rd/4th/final year of university',
        'Demonstrate strong academic motivation and interest in global learning',
        'Show leadership potential and commitment to community service',
        'Have intermediate or advanced proficiency in English (recommended)'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-orange-600">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link to="/#academy" className="text-gray-500 hover:text-orange-600">Academy</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">Global Scholars Program</span>
                    </nav>
                </div>
            </div>

            <div className="bg-sky-900 py-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            🎓 TGS Global Scholars Program
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6"
                            style={{
                                fontFamily: "Great vibes"
                            }}
                        >
                            Global Scholars Program (GSP)
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                            Preparing the next generation of global scholars and leaders
                        </p>
                        <div className="max-w-xl mx-auto text-gray-100 font-medium italic text-xl"
                            style={{
                                fontFamily: "Outfit"
                            }}
                        >
                            <Quote className="text-start w-8 h-8 mb-1 text-sky-400 transform -scale-x-100" />
                            <span className="font-medium text-lg">
                                Dreaming of studying abroad is not enough — preparation is everything.
                            </span>
                            The Global Scholars Program equips high school students with the academic readiness,
                            confidence, and global mindset needed to thrive in international education systems and beyond.                            <Quote className="ml-auto w-8 h-8 mt-1 text-sky-400" />
                        </div>
                        <div className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            ✨ Global education begins long before crossing borders.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-32 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Program Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The TGS Global Scholars Program (GSP) is a year-long, guided journey designed to
                                    prepare ambitious students for success in international higher education. Through mentorship,
                                    global engagement, and structured learning, participants gain the <strong>academic, personal, and
                                        leadership skills</strong> needed to excel in competitive global university environments.
                                </p>
                                <p>
                                    GSP empowers global-minded youth to become <strong>confident, purpose-driven scholars</strong>,
                                    capable of thriving academically while making meaningful contributions to their communities.
                                </p>
                            </div>
                        </div>

                        {/* Program Tracks */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <BookOpen className="w-8 h-8 mr-3 text-sky-600" />
                                Program Tracks
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {tracks.map((track, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{track.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{track.description}</p>
                                        <div className="bg-sky-50 px-3 py-1 rounded-full text-sky-700 text-xs font-medium inline-block">
                                            Age: {track.ageRange}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Program Objectives */}
                        {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
                        <div className="mt-14 md:bg-white md:rounded-xl md:shadow-sm md:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Award className="w-8 h-8 mr-3 text-sky-600" />
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
                        <div className="mt-14 md:bg-white md:rounded-xl md:shadow-sm md:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Program Components</h2>
                            <p className="text-gray-600 mb-6">The GSP consists of six structured modules delivered over 12 months:</p>
                            <div className="space-y-6">
                                {modules.map((module, index) => (
                                    <div key={index} className="border-l-4 border-sky-500 pl-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{module.title}</h3>
                                        <ul className="space-y-2">
                                            {module.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Program Benefits */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <GraduationCap className="w-8 h-8 mr-3 text-sky-600" />
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
                                <Users className="w-8 h-8 mr-3 text-sky-600" />
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
                                    <div className="text-3xl font-bold text-gray-900 mb-2">USD $15</div>
                                    <p className="text-gray-600">Per month</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">12-month duration</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">Online, cohort-based</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm text-gray-700">Personal mentorship</span>
                                    </div>
                                </div>

                                <button className="w-full bg-sky-900 text-white py-3 px-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all font-medium mb-4">
                                    Apply for GSP
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Enrollment Fee: Free
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-sky-600" />
                                    Application & Timeline
                                </h3>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Applications Open:</span>
                                        <span className="font-medium">December 2025</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Cohort Begins:</span>
                                        <span className="font-medium">March 2026</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Duration:</span>
                                        <span className="font-medium">12 months</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Mode:</span>
                                        <span className="font-medium">Fully virtual</span>
                                    </div>
                                </div>
                            </div>

                            {/* Financial Aid */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <DollarSign className="w-5 h-5 mr-2 text-sky-600" />
                                    Scholarships Available
                                </h3>
                                <p className="text-sm text-gray-700 mb-3">
                                    Limited need-based and merit-based scholarships available via the TGS Opportunity Fund.
                                </p>
                                <button className="w-full border border-sky-600 text-sky-600 py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors text-sm font-medium">
                                    Apply for Scholarship
                                </button>
                            </div>

                            {/* Inspiration Quote */}
                            <div className="bg-sky-100 to-red-100 rounded-xl p-6">
                                <p className="text-sky-800 font-medium italic text-center">
                                    "Global education is not just about crossing borders, it's about expanding minds and building bridges for a better world."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}