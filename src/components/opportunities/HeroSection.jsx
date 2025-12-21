import React from 'react';
import heroImage from '../../assets/images/hero/heroOpportunities.jpeg'
import heroImage2 from '../../assets/images/hero/bg-hero_m7zwmb.png'
import { motion } from 'framer-motion'
import Navbar from './Navbar';

function HeroSection() {
    return (
        <section id='home'>
            <Navbar />
            <div className="flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-sky-400/30 rounded-full blur-3xl" />
                    <div className="absolute top-1/4 right-[-6rem] w-96 h-96 bg-sky-500/25 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-5rem] left-1/3 w-[28rem] h-[28rem] bg-sky-300/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-sky-200/20 rounded-full blur-[140px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img src={heroImage2} className='w-[450px]' />
                        </div>

                        <div className="order-1 lg:order-2 space-y-6 text-center">
                            {/* <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                                Your Gateway to Global Opportunities
                            </div> */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Unlock your future with{' '}
                                <span
                                    className="text-sky-600 text-6xl"
                                    style={{
                                        fontFamily: "Great vibes"
                                    }}
                                >
                                    Global Opportunities
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Discover fully-funded scholarships, prestigious fellowships, international conferences,
                                and life-changing volunteer programs. We connect ambitious youth with opportunities
                                that transform dreams into reality.
                            </p>
                            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
                                <button className="bg-sky-600 text-white px-8 py-2 rounded-full hover:bg-sky-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                                    Explore Opportunities
                                    {/* <ArrowRight className="ml-2 w-5 h-5" /> */}
                                </button>
                                <button className="border-2 border-sky-600 text-sky-600 px-8 py-2 rounded-full hover:bg-sky-50 transition-colors font-medium text-lg">
                                    Learn More
                                </button>
                            </div>
                            <div className="flex items-center justify-center space-x-8 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">5000+</div>
                                    <div className="text-sm text-gray-600">Opportunities</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">150+</div>
                                    <div className="text-sm text-gray-600">Countries</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">50K+</div>
                                    <div className="text-sm text-gray-600">Success Stories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection