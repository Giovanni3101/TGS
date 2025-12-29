import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { containerVariants, itemVariants, buttonVariants } from '../../animation/Animation';
import { URLS } from '../../../utils/urls'
import { Link } from 'react-router'
import HeroPhoto2 from '../../../../public/hero2.jpeg';
import HeroPhoto5 from '../../../assets/images/hero/1.png'

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const sliderRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Animation de parallaxe pour le background
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const images = [
        HeroPhoto5,
    ];

    // Animation automatique du carrousel
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    return (
        <section className="min-h-[70vh] md:min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-fixed relative overflow-hidden">
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

            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-transparent to-sky-900/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-white/60"></div>


            {/* Contenu principal */}
            <div className="relative md:mt-10 z-10 text-start md:flex md:space-x-24 px-4 max-w-7xl mx-auto w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-2 flex-1 mt-24"
                >
                    <motion.p
                        variants={itemVariants}
                        className="flex items-center text-sm md:text-sm w-fit text-gray-700 p-2 bg-white/60 backdrop-blur-sm rounded-full tracking-wide"
                    >
                        <ChevronRight className='bg-sky-900 p-1 rounded-full text-white mr-1' />
                        Empowering Youth
                    </motion.p>
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-[100px] lg:text-4xl"
                    >
                        <p className='text-gray-800'>
                            <span className='text-4xl font-bold md:text-6xl lg:text-5xl'>The Growth Sphere:</span>
                            <span className='block font-semibold mt-2 md:mt-4'>Your passport to growth beyond borders</span>

                        </p>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="w-fit text-sm md:text-[15px] max-w-3xl "
                    >
                        Opening doors for youth from the Global South to the world,
                        The Growth Sphere (TGS) is a dynamic movement that empowers
                        young people to unlock their potential and lead change across borders.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-2 md:gap-4 items-start mt-4"
                    >
                        <Link to={`${URLS.tgsAcademyUrl}/opportunities`} target="_blank">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-6 py-2 rounded-full text-lg text-white font-semibold bg-sky-900 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Opportunities →
                            </motion.button>
                        </Link>
                        <Link to={`${URLS.tgsAcademyUrl}/login`} target="_blank">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-6 py-2 rounded-full text-lg font-semibold bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white"
                            >
                                Join TGS Academy
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hidden md:block flex-1 flex justify-center items-center mb-12 md:mb-0"
                >
                    <motion.img
                        src={HeroPhoto2}
                        alt="Hero Image"
                        className="w-[600px] h-full mx-auto rounded-lg shadow-2xl shadow-cyan-500/25 mt-8 md:mt-0"
                        variants={itemVariants}
                    >
                    </motion.img>
                </motion.div>
            </div>



            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </section>
    );
}

export default HeroSection;