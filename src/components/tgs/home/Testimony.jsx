import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, Users, Globe, Award } from 'lucide-react';
import { itemVariants } from '../../animation/Animation';

function Testimony() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Youth Leader, Kenya",
            quote: "Joining TGS has been a transformative experience. The opportunities and support I've received have propelled my career to new heights. The mentorship program changed my life!",
            rating: 5,
        },
        {
            id: 2,
            name: "Maria Rodriguez",
            role: "University Graduate, Colombia",
            quote: "The community at TGS is incredible. I've connected with so many like-minded individuals who inspire and motivate me every day. The global network opened doors I never imagined.",
            rating: 5,
        },
        {
            id: 3,
            name: "Liam Smith",
            role: "Social Entrepreneur, Ghana",
            quote: "TGS provided me with the resources and mentorship I needed to succeed. I'm grateful for the impact they've had on my professional journey and community projects.",
            rating: 5,
        },
        {
            id: 4,
            name: "Kwame Osei",
            role: "Community Organizer, Nigeria",
            quote: "As someone from a rural community, I never thought I'd connect with global opportunities. TGS made it possible. Their dedication to inclusivity is remarkable.",
            rating: 5,
        },
        {
            id: 5,
            name: "Aisha Mohammed",
            role: "Education Advocate, Tanzania",
            quote: "The Growth Sphere doesn't just provide opportunities - they build leaders. The leadership program equipped me with skills I now use to mentor other young women in my community.",
            rating: 5,
        },
        {
            id: 6,
            name: "David Kim",
            role: "Tech Entrepreneur, South Korea",
            quote: "Through TGS, I found international collaborators for my startup. The cross-cultural exposure and business connections have been invaluable for our growth.",
            rating: 5,
        },
        {
            id: 7,
            name: "Isabella Silva",
            role: "Climate Activist, Brazil",
            quote: "The environmental sustainability program at TGS connected me with global experts. Now I'm leading community conservation projects that impact thousands.",
            rating: 5,
        },
        {
            id: 8,
            name: "Ahmed Hassan",
            role: "Refugee Scholar, Jordan",
            quote: "As a refugee, opportunities seemed impossible. TGS not only believed in me but provided scholarships and mentorship. Today, I'm studying at university with a bright future ahead.",
            rating: 5,
        }
    ];

    const evenTestimonials = testimonials.filter((_, index) => index % 2 === 0);
    const oddTestimonials = testimonials.filter((_, index) => index % 2 !== 0);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 3) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 3 + testimonials.length) % testimonials.length);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const quoteVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/5"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative md:hidden text-center mb-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Stories of <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Transformation</span>
                            </h2>

                            <p className="text-md text-gray-600 mx-auto">
                                Hear from the incredible young leaders whose lives have been transformed through
                                The Growth Sphere's programs and opportunities.
                            </p>
                        </motion.div>
                        <div className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-800 rounded-3xl py-4 px-8 md:p-10 min-h-[500px] flex flex-col justify-between overflow-hidden">
                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <Quote className="w-12 h-12 text-cyan-300 opacity-50" />
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={testimonials[activeTestimonial].id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4"
                                    >
                                        "{testimonials[activeTestimonial].quote}"
                                    </motion.h1>
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`author-${testimonials[activeTestimonial].id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center gap-2"
                                    >
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {testimonials[activeTestimonial].name}
                                            </h3>
                                            <p className="text-white">
                                                {testimonials[activeTestimonial].role}
                                            </p>
                                            <div className="flex gap-1 mt-1">
                                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="relative z-10 flex justify-center gap-4 mt-1">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={prevTestimonial}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={nextTestimonial}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:w-3/5"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="text-center mb-6 md:block hidden"
                        >
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            >
                                Stories of <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Transformation</span>
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-md text-gray-600 mx-auto"
                            >
                                Hear from the incredible young leaders whose lives have been transformed through
                                The Growth Sphere's programs and opportunities.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="relative overflow-hidden"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="wrap_testimony_left gap-8 ml-32"
                            >
                                {[...evenTestimonials, ...evenTestimonials].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        // variants={cardVariants}
                                        // whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gray-50 border-[1px] border-gray-300 rounded-tl-[50px] rounded-br-[50px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300"
                                    >
                                        <div className="p-6">
                                            <p className="text-gray-600 mb-2 line-clamp-4">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex gap-1 mb-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="wrap_testimony_left gap-8 mt-6"
                            >
                                {[...oddTestimonials, ...oddTestimonials].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        // variants={cardVariants}
                                        // whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gray-50 border-[1px] border-gray-300 rounded-tl-[50px] rounded-br-[50px] shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300"
                                    >
                                        <div className="p-6">
                                            <p className="text-gray-600 mb-2 line-clamp-4">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex gap-1 mb-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
                            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}

export default Testimony;