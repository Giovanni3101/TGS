import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Quote, Play, Pause, ArrowRight, ArrowLeft } from 'lucide-react';
import { successStories } from '../data/homeData';

// Importez une image de fond moderne
import SuccessBg from '../../../../public/storiesBg.jpg';

function SuccessStories() {
    const [currentStory, setCurrentStory] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(0);
    const intervalRef = useRef();

    const nextStory = () => {
        setDirection(1);
        setCurrentStory((prev) => (prev + 1) % successStories.length);
    };

    const prevStory = () => {
        setDirection(-1);
        setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    const goToStory = (index) => {
        setDirection(index > currentStory ? 1 : -1);
        setCurrentStory(index);
    };

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(nextStory, 6000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying]);

    // Variantes d'animation
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.8
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.4
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section 
            className="relative py-4 md:py-8 bg-cover bg-fixed bg-center overflow-hidden"
            style={{ backgroundImage: `url(${SuccessBg})` }}
        >
            {/* Overlay de fond */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-sky-900/90 via-purple-900/80 to-teal-900/90"></div> */}
            <div className="absolute inset-0 bg-black"></div>

            {/* Éléments décoratifs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-2 relative z-10">
                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 mt-8 text-center "
                >
                    <motion.h2 
                        className="text-2xl md:text-4xl font-black text-white mb-2 tracking-widest"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SUCCESS STORIES
                    </motion.h2>
                    
                    <motion.p 
                        className="text-md md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Discover how TGS is transforming lives and creating{' '}
                        <span className="font-semibold text-white">global opportunities</span>
                    </motion.p>
                </motion.div>

                {/* Carte principale */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="card bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden"
                    >
                        <div className="card-body p-8 md:p-12">
                            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                                {/* Photo/avatar */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 p-1 shadow-2xl">
                                            <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                                                <Users className="w-16 h-16 text-cyan-300" />
                                            </div>
                                        </div>
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Quote className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Contenu du témoignage */}
                                <div className="flex-1 text-center lg:text-left">
                                    <AnimatePresence mode="wait" custom={direction}>
                                        <motion.div
                                            key={currentStory}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div>
                                                <motion.h3
                                                    variants={textVariants}
                                                    className="text-2xl md:text-4xl font-bold text-black mb-1"
                                                >
                                                    {successStories[currentStory].name}
                                                </motion.h3>
                                                
                                                <motion.p
                                                    variants={textVariants}
                                                    className="text-cyan-900 italic text-lg md:text-xl font-semibold mb-2"
                                                >
                                                    {successStories[currentStory].role}
                                                </motion.p>
                                                
                                                <motion.p
                                                    variants={textVariants}
                                                    className="text-black text-lg leading-relaxed mb-2"
                                                >
                                                    "{successStories[currentStory].story}"
                                                </motion.p>
                                                
                                                <motion.p
                                                    variants={textVariants}
                                                    className="text-cyan-900 font-medium text-md"
                                                >
                                                    {successStories[currentStory].achievement}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Contrôles de navigation */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between mt-1 pt-6 border-t border-white/20">
                                        {/* Indicateurs */}
                                        <div className="flex items-center gap-4 mb-2 sm:mb-0">
                                            <button
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className="p-2 rounded-full bg-cyan-900 hover:bg-white/30 transition-all duration-300"
                                            >
                                                {isPlaying ? 
                                                    <Pause className="w-5 h-5 text-white" /> : 
                                                    <Play className="w-5 h-5 text-white" />
                                                }
                                            </button>
                                            
                                            <div className="flex gap-2">
                                                {successStories.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToStory(index)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                            index === currentStory 
                                                            ? 'bg-cyan-900 scale-125' 
                                                            : 'bg-white/50 hover:bg-white/80'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Boutons de navigation */}
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={prevStory}
                                                className="p-3 rounded-full bg-cyan-900 hover:bg-white/20 border border-white/20 transition-all duration-300 group"
                                            >
                                                <ArrowLeft className="w-5 h-5 text-white group-hover:text-cyan-300" />
                                            </button>
                                            
                                            <button
                                                onClick={nextStory}
                                                className="p-3 rounded-full bg-cyan-900 hover:bg-white/20 border border-white/20 transition-all duration-300 group"
                                            >
                                                <ArrowRight className="w-5 h-5 text-white group-hover:text-cyan-300" />
                                            </button>
                                            
                                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900 to-teal-700 text-white font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                                                See More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistiques ou témoignages supplémentaires */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 max-w-4xl mx-auto mt-3"
                >
                    {[
                        { number: "500+", text: "Youth Empowered" },
                        // { number: "50+", text: "Countries Reached" },
                        { number: "95%", text: "Success Rate" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-2 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-cyan-900 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-black font-medium">
                                {stat.text}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default SuccessStories;