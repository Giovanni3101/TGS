import React from 'react'

function Steps() {
    return (
        <section id="how-it-works" className="py-20 bg-sky-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-100 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                        Getting started is easy. Follow these simple steps to find your perfect opportunity
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 mb-3">
                            Create Your Profile
                        </h3>
                        <p className="text-gray-100">
                            Sign up and tell us about your interests, goals, and aspirations
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 mb-3">
                            Browse & Discover
                        </h3>
                        <p className="text-gray-100">
                            Explore thousands of curated opportunities matched to your profile
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 mb-3">
                            Apply & Succeed
                        </h3>
                        <p className="text-gray-100">
                            Get guidance on applications and start your journey to success
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps