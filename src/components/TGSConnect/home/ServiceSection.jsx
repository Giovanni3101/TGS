import React from 'react'
import { Search, Users, Award, Target, Link as LinkIcon} from 'lucide-react'
import { Link } from 'react-router'

function ServiceSection() {

    const services = [
        {
            icon: Search,
            title: 'TGS Growth Diagnosis',
            description: 'Discover what\'s holding you back and what could take you global',
            price: 'USD 10',
            color: 'bg-blue-100',
            link: '/services/growth-diagnosis'
        },
        {
            icon: Users,
            title: 'One-on-One Consultations',
            description: 'Expert guidance tailored to you - because global opportunities are not won by guesswork',
            price: 'USD 10-15',
            color: 'bg-green-100',
            link: '/services/consultations'
        },
        {
            icon: Award,
            title: 'GOAF Fellowship',
            description: 'Your fast-track into global fellowships, internships & conferences',
            price: 'USD 50/month',
            color: 'bg-purple-100',
            link: '/academy/goaf'
        },
        {
            icon: Target,
            title: 'Global Scholars Program',
            description: 'Preparing the next generation of global scholars and leaders',
            price: 'USD 15/month',
            color: 'bg-orange-100',
            link: '/academy/gsp'
        }
    ];


    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Turning potential into clear pathways, guidance into action, and ambition into achievement.
                        Our services are designed to meet young people where they are, and guide them to where they want to be.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={service.link}>
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                                >
                                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                                        <Icon className="w-7 h-7 text-sky-800" />
                                    </div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                        <span className="w-fit bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <button className="w-fit bg-sky-900 text-white py-2 px-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                                        {/* <Link to={service.link} className="block w-full">Learn More</Link> */}
                                        Discover
                                    </button>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection