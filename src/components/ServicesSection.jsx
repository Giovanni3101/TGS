import React from 'react'
import { Search, Users, Award, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './animation/Animation';
import { URLS } from '../utils/urls'
import tgsdiagnosis from '../assets/images/services/tgsdiagnosis.jpeg'
import tgsconsultation from '../assets/images/services/consultation.jpeg'
import tgsglobal from '../assets/images/services/tgsglobal.jpeg'
import tgsopp from '../assets/images/services/tgsopp.jpeg'

function ServicesSection() {

    const services = [
        {
            icon: Search,
            title: 'TGS Growth Diagnosis',
            description: 'Discover what\'s holding you back and what could take you global',
            price: 'USD 10',
            color: 'bg-blue-100',
            link: `${URLS.tgsAcademyUrl}/services/growth-diagnosis`,
            image: tgsdiagnosis
        },
        {
            icon: Users,
            title: 'One-on-One Consultations',
            description: 'Expert guidance tailored to you - because global opportunities are not won by guesswork',
            price: 'USD 10-15',
            color: 'bg-green-100',
            link: `${URLS.tgsAcademyUrl}/services/consultations`,
            image: tgsconsultation
        },
        {
            icon: Award,
            title: 'GOAF Fellowship',
            description: 'Your fast-track into global fellowships, internships & conferences',
            price: 'USD 50/month',
            color: 'bg-purple-100',
            link: `${URLS.tgsAcademyUrl}/academy/goaf`,
            image: tgsglobal
        },
        {
            icon: Target,
            title: 'Global Scholars Program',
            description: 'Preparing the next generation of global scholars and leaders',
            price: 'USD 15/month',
            color: 'bg-orange-100',
            link: `${URLS.tgsAcademyUrl}/academy/gsp`,
            image: tgsopp
        }
    ];


    return (
        <motion.section
            id='services'
            className="py-20 bg-white scroll-smooth scroll-mt-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
            >
                <motion.div
                    variants={containerVariants}
                    initial="visible"
                    className="hidden md:block absolute inset-0 pointer-events-none"
                >
                    <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-sky-400/30 rounded-full blur-3xl" />
                    <div className="absolute top-1/4 right-[-6rem] w-96 h-96 bg-sky-500/25 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-5rem] left-1/3 w-[28rem] h-[28rem] bg-sky-300/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl" />
                    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-sky-200/20 rounded-full blur-[140px]" /> */}
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="relative text-center mb-16"
                >
                    <motion.h2
                        variants={{ itemVariants }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        variants={{ itemVariants }}
                        className="text-lg text-sky-600 max-w-3xl mx-auto font-bold"
                    // style={{
                    //     fontFamily: "Outfit"
                    // }}
                    >
                        Turning potential into clear pathways, guidance into action, and ambition into achievement.
                    </motion.p>
                    <motion.p
                        variants={{ itemVariants }}
                        className='text-lg text-gray-600 max-w-2xl mx-auto'
                    >
                        At TGS, our services are designed to meet young people where they are, and guide them to
                        where they want to be. We combine personalized assessment, expert guidance, and structured
                        support to help youth across the Global South access global opportunities, build critical skills,
                        and grow into confident leaders.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={service.link}>
                                <motion.div
                                    variants={itemVariants}
                                    key={index}
                                    className="bg-white relative rounded-xll  shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                                >
                                    {service.image ? (
                                        <img src={service.image} className='object-cover w-full h-32'></img>
                                    ) : (
                                        <div className="bg-sky-300 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-sky-800" />
                                        </div>
                                    )}
                                    <div className='p-4'>
                                        <h3 className="text-xl font-bold text-gray-900 break-words max-w-full truncate">
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
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default ServicesSection