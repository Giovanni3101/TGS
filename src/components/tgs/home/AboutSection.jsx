import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {containerVariants, itemVariants, buttonVariants,  imageVariants, paragraphVariants, statItemVariants} from '../../animation/Animation'

const AboutSection = () => {
    const stats = [
        { value: "100+", label: "Happy\nYouth" },
        { value: "50+", label: "Global\nPartners" },
        { value: "30+", label: "Countries\nReached" },
        { value: "500+", label: "Opportunities\nCreated" },
    ];

    return (
        <section className="py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto"
            >
                <motion.div
                    className='md:flex md:space-x-24 space-y-12 md:space-y-0'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Image Column */}
                    <motion.div
                        className='flex-1 hidden md:block'
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <motion.img
                            src='https://media.istockphoto.com/id/1912511508/photo/portrait-of-happy-high-school-students-looking-at-camera.jpg?s=612x612&w=0&k=20&c=69wPs2E1pjk9UfRgEZogIFweao1Uw8FgXLDOZmYtLVg='
                            alt="About The Growth Sphere"
                            className="w-full h-full object-cover rounded-lg shadow-2xl shadow-sky-900/30"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </motion.div>

                    {/* Right Content Column */}
                    <motion.div
                        className='flex-1'
                        variants={itemVariants}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-sky-800 mb-4"
                            variants={itemVariants}
                        >
                            About The Growth Sphere.{" "}
                            <span className="text-sky-600 italic">Empowering Youth Globally</span>
                        </motion.h2>

                        <div className="space-y-6 text-gray-700 text-md leading-relaxed">
                            {[
                                "The Growth Sphere (TGS) is a global organization dedicated to bridging the gap between talented youth from underserved communities and the opportunities they deserve. Founded on the belief that talent knows no borders, TGS works tirelessly to provide access to education, mentorship, and career development resources to young individuals worldwide.",
                                "Our mission is to empower the next generation of leaders, innovators, and change-makers by creating pathways for personal and professional growth. Through strategic partnerships with educational institutions, corporations, and community organizations, TGS delivers impactful programs that nurture talent and foster inclusive growth.",
                                "At TGS, we envision a world where every young person, regardless of their background or location, has the opportunity to realize their full potential and contribute meaningfully to society. Join us in our journey to unlock talent and create a brighter future for all."
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    custom={index}
                                    variants={paragraphVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {text}
                                </motion.p>
                            ))}

                            <motion.div
                                variants={buttonVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="px-6 py-3 rounded-full text-lg text-white font-semibold bg-gradient-to-r from-sky-700 to-sky-900 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <Link to="/our_mission" className="flex items-center gap-2">
                                        Discover our mission
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                                        >
                                            →
                                        </motion.span>
                                    </Link>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="text-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 bg-gradient-to-r from-white/50 to-teal-50/50 backdrop-blur-sm p-6 md:p-6 shadow-2xl shadow-cyan-500/10 rounded-2xl border border-teal-100/50"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statItemVariants}
                            whileHover="hover"
                            className="flex items-center justify-center gap-2"
                        >
                            <p className="md:text-4xl text-3xl font-semibold">{stat.value}</p>
                            <p className='text-[12px]'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;