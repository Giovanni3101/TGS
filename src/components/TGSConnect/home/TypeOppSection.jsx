import React from 'react'
import { Icon, Globe, Award, Briefcase, Heart, Users, BookOpen } from 'lucide-react'

function TypeOppSection() {

    const opportunities = [
        {
            icon: Globe,
            title: 'Global Conferences',
            description: 'Attend international conferences and connect with young leaders worldwide',
            color: 'bg-sky-100'
        },
        {
            icon: Award,
            title: 'Scholarships',
            description: 'Find fully-funded scholarships for undergraduate and graduate studies',
            color: 'bg-sky-50'
        },
        {
            icon: Briefcase,
            title: 'Fellowships',
            description: 'Discover prestigious fellowship programs to advance your career',
            color: 'bg-sky-100'
        },
        {
            icon: Heart,
            title: 'Volunteering',
            description: 'Make a difference through meaningful volunteer opportunities globally',
            color: 'bg-sky-50'
        },
        {
            icon: Users,
            title: 'Trainings',
            description: 'Access professional development and skill-building programs',
            color: 'bg-sky-100'
        },
        {
            icon: BookOpen,
            title: 'Workshops',
            description: 'Join interactive workshops led by industry experts and mentors',
            color: 'bg-sky-50'
        }
    ];


    return (
        <section id="opportunities" className="py-20 bg-gradient-to-b from-sky-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Explore Opportunities
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Browse through diverse opportunities designed to help you grow, learn, and make a global impact
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {opportunities.map((opportunity, index) => {
                        const Icon = opportunity.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                            >
                                <div className={`w-14 h-14 ${opportunity.color} rounded-lg flex items-center justify-center mb-6`}>
                                    <Icon className="w-7 h-7 text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {opportunity.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {opportunity.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default TypeOppSection