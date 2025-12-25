import React from 'react'
import { CheckCircle } from 'lucide-react'

function AcadmySection() {
    return (
        <section id="academy" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        TGS <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Academy</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The learning and opportunity engine of The Growth Sphere, where skills are built,
                        opportunities are unlocked, and leadership is cultivated.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Inside the TGS Academy, participants can:
                        </h3>
                        <div className="space-y-4">
                            {[
                                'Create and manage a personal account',
                                'Access programs, opportunities, and events',
                                'Take the TGS Growth Diagnosis',
                                'Apply for fellowships and courses',
                                'Book consultations and mentorship sessions',
                                'Track growth and achievements through a personalized dashboard'
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <button className="cursor-pointer bg-sky-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-sky-300 hover:to-purple-700 transition-all font-medium">
                                Join Academy
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="TGS Academy learning environment"
                            className="rounded-xl shadow-lg w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcadmySection