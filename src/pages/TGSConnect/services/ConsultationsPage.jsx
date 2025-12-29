import { ArrowLeft, MessageCircle, Target, FileText, Video, Users, CheckCircle, Clock, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConsultationsPage() {
  const questions = [
    "Why do others keep getting selected, and not me?",
    "Is my CV actually competitive, or just \"good enough\"?",
    "Am I even eligible, or am I wasting my time applying?",
    "Why do my essays sound weak, generic, or forced?",
    "I've applied before… so why did I get rejected again?",
    "What am I doing wrong, and what should I change?"
  ];

  const services = [
    'Strategic analysis of past applications and rejection feedback',
    'In-depth CV and LinkedIn profile review and optimization',
    'Guidance on writing compelling motivation letters and essays',
    'Application strategy development and opportunity alignment',
    'Interview preparation, personal storytelling, and confidence-building',
    'Career clarity, growth planning, and long-term positioning',
    'Personalized growth discussions based on your goals and readiness'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/home#services" className="text-gray-500 hover:text-blue-600">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">One-on-One Consultations</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-sky-900 to-blue-700 py-16">
        <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Expert guidance tailored to you
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6"
              style={{
                fontFamily: "Great vibes"
              }}
            >
              One-on-One Consultations
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Because global opportunities are not won by guesswork
            </p>
            <div className="max-w-xl mx-auto text-gray-100 font-medium italic text-xl"
              style={{
                fontFamily: "Outfit"
              }}
            >
              <Quote className="text-start w-8 h-8 mb-1 text-sky-400 transform -scale-x-100" />
              This is where ambition meets precision.
              <Quote className="ml-auto w-8 h-8 mt-1 text-sky-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xll mx-auto px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Questions Section */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Have You Ever Asked Yourself...</h2>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  // <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                  <div key={index} className="flex items-start space-x-3">
                    {/* <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div> */}
                    <p className="text-gray-800 italic">{question}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-sky-900 rounded-lg">
                <p className="text-gray-100 font-medium text-lg">
                  If you've ever asked yourself any of these questions, you don't need more information,
                  you need <strong>expert guidance tailored to you</strong>.
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our One-on-One Consultations are designed for applicants who want <strong>clarity, honesty, and
                    strategy</strong>, not recycled advice. They help you sharpen your CV, strengthen your essays, refine
                  your strategy, and position yourself competitively for scholarships, fellowships, conferences,
                  and internships.
                </p>
                <p>
                  TGS consultations provide focused, one-on-one support tailored to your goals. Whether you
                  are looking for or applying for a scholarship, fellowship, conference, internship, or leadership
                  program, our advisors help you position yourself competitively.
                </p>
              </div>
            </div>

            {/* What We Cover */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Consultations Cover</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-sky-900 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium">
                  Each session is <strong>practical, results-oriented, and tailored to you</strong>, grounded in real global
                  selection standards and designed to strengthen your competitiveness.
                </p>
              </div>
            </div>

            {/* Session Types */}
            {/* <div className="bg-white rounded-xl shadow-sm p-8"> */}
            <div className="mt-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Session Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-sky-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Review</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive review of your CV, essays, and application materials with specific improvement recommendations.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-sky-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy Session</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic planning for your application approach, opportunity selection, and positioning.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-sky-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Prep</h3>
                  <p className="text-gray-600 text-sm">
                    Mock interviews, storytelling practice, and confidence-building for virtual and in-person interviews.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-sky-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Career clarity discussions, long-term positioning, and personalized development roadmaps.
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">USD $10-15</div>
                  <p className="text-gray-600">Per session</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-sky-900" />
                    <span className="text-sm text-gray-700">30-60 minutes virtual session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-sky-900" />
                    <span className="text-sm text-gray-700">Tailored to your specific goals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-sky-900" />
                    <span className="text-sm text-gray-700">Actionable recommendations</span>
                  </div>
                </div>

                <button className="w-full bg-sky-900 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-medium">
                  Book a Consultation
                </button>
              </div>

              {/* Format Details */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium">Virtual (Zoom/Teams)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">30-60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scheduling:</span>
                    <span className="font-medium">Flexible timing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Follow-up:</span>
                    <span className="font-medium">Written summary</span>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-sky-900" />
                  Who This Is For
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Students applying for scholarships/fellowships</li>
                  <li>• Professionals seeking global opportunities</li>
                  <li>• Anyone who has faced rejections before</li>
                  <li>• Those wanting strategic, honest feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}