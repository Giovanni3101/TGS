import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Importez vos images (ajoutez au moins 3-4 images pour le carrousel)
import HeroPhoto1 from '../../../../public/hero1.webp';
import HeroPhoto2 from '../../../../public/hero2.jpeg';
import HeroPhoto3 from '../../../../public/hero3.webp';
import HeroPhoto4 from '../../../../public/hero4.jpeg';

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const sliderRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Animation de parallaxe pour le background
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const images = [
        HeroPhoto1,
        HeroPhoto2,
        HeroPhoto3,
        HeroPhoto4,
    ];

    // Animation automatique du carrousel
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Variantes d'animation pour le texte
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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.8
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 300,
                delay: 0.6
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 400,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section className="min-h-[70vh] md:min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-fixed relative overflow-hidden">
            {/* Carrousel d'arrière-plan avec parallaxe */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y }}
                ref={sliderRef}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                        initial={false}
                        animate={{
                            scale: index === currentSlide ? 1 : 1.1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Overlay gradient amélioré */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-transparent to-teal-900/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Contrôles du carrousel */}
            <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Contenu principal */}
            <div className="relative md:mt-6 z-10 text-start text-white px-4 max-w-6xl mx-auto w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-2"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-2xl md:text-4xl lg:text-4xl font-black leading-tight tracking-tight"
                    >
                        <span className="block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                            YOUR PASSPORT
                        </span>
                        <span className="block bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent mt-2">
                            TO GROWTH BEYOND
                        </span>
                        <span className="block bg-gradient-to-r from-teal-200 to-sky-300 bg-clip-text text-transparent mt-2">
                            BORDERS
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="bg-black/50 w-fit text-sm md:text-xl font-light max-w-3xl leading-relaxed"
                    >
                        Opening doors for youth from the Global South to the world, 
                        The Growth Sphere (TGS) is a dynamic movement that empowers 
                        young people to unlock their potential and lead change across borders.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-2 md:gap-4 items-start mt-4"
                    >
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="px-6 py-2 rounded-full text-lg font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm border border-cyan-400/20"
                        >
                            Explore Opportunities
                        </motion.button>

                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="px-6 py-2 rounded-full text-lg font-semibold bg-transparent text-white border-2 border-white/80 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white"
                        >
                            Join TGS Academy
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicateur de défilement amélioré */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="text-white/80 text-xs font-light tracking-widest">
                        SCROLL TO EXPLORE
                    </div>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-white/80 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </section>
    );
}

export default HeroSection;