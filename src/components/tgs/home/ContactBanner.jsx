import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useMotionValue, useSpring } from 'framer-motion';
import Contact from '../../../assets/images/contact.jpg';

function ContactBanner() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    const overlayVariants = {
        hidden: {
            background: "rgba(0, 0, 0, 0.3)",
        },
        visible: {
            background: "rgba(0, 0, 0, 0.6)",
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            id='contact'
            className="relative max-w-[1100px] rounded-4xl overflow-hidden mx-auto cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
            >
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Contact})`,
                    }}
                />

                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/50 to-cyan-900/70 mix-blend-multiply"
                    variants={overlayVariants}
                />

                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </motion.div>

            <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center py-12 px-2 md:px-8"
                variants={containerVariants}
            >
                <div className="text-center text-white max-w-2xl mx-auto px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        Get in Touch with{' '}
                        <span className="text-cyan-400 italic">
                            The Growth Sphere
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-sm md:text-md mb-10 text-cyan-100 leading-relaxed max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        We're here to answer your questions, explore collaborations, and help
                        you become part of our global youth empowerment movement.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.div
                            className="relative w-80 md:w-[400px]"
                            variants={itemVariants}
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full input px-6 pr-36 py-6 rounded-full text-gray-800 font-medium
                                                focus:outline-none focus:ring-2 focus:ring-cyan-400
                                                relative z-0"
                            />

                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2
                                                bg-sky-800 hover:bg-sky-700 transition-colors
                                                px-5 py-2 rounded-full
                                                z-10"
                            >
                                <span className="text-white font-medium">Submit Email</span>
                            </button>
                        </motion.div>

                    </div>
                </div>
            </motion.div>


        </motion.section>
    );
}

export default ContactBanner;