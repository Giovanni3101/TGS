import React from 'react'
import { Award, Target, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { itemVariants, containerVariants } from '../../animation/Animation'
import { Link } from 'react-router'
import { URLS } from '../../../utils/urls'

function ServiceSection() {

    const services = [
        {
            icon: Award,
            title: 'GOAF Fellowship',
            description: 'Your fast-track into global fellowships, internships & conferences',
            price: 'USD 50/month',
            color: 'bg-purple-100',
            link: `${URLS.tgsAcademyUrl}/academy/goaf`
        },
        {
            icon: Target,
            title: 'Global Scholars Program',
            description: 'Preparing the next generation of global scholars and leaders',
            price: 'USD 15/month',
            color: 'bg-orange-100',
            link: `${URLS.tgsAcademyUrl}/academy/gsp`
        }
    ];


    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-sky-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Turning potential into clear pathways, guidance into action, and ambition into achievement.
                        Our services are designed to meet young people where they are, and guide them to where they want to be.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-2 gap-8 px-6 place-items-center"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={service.link}>
                                <motion.div
                                    variants={itemVariants}
                                    key={index}
                                    className="bg-white relative rounded-xll p-4 h-56 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                                >
                                    <div className="bg-sky-300 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-sky-800" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 break-words max-w-full">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                                        {service.description}
                                    </p>
                                    <div className='absolute right-4 bottom-8'>
                                        <button className="w-fit bg-sky-900 text-white py-2 px-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                                            <Link to={service.link} className="block w-full">
                                                <ArrowRight />
                                            </Link>
                                        </button>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default ServiceSection