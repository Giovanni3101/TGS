import { motion } from 'framer-motion';
import { Quote, QuoteIcon } from 'lucide-react';
import { containerVariants, itemVariants, buttonVariants } from '../../animation/Animation';

function MissionBanner() {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-sky-900 text-white md:py-8 py-6"
        >
            <motion.div
                variants={containerVariants}
                className="mx-auto px-4 max-w-2xl"
            >
                <motion.blockquote
                    variants={itemVariants}
                    className="text-2xl md:text-4xl text-center leading-relaxed"
                    style={{
                        fontFamily: "Outfit"
                    }}
                >
                    <Quote className="text-start w-8 h-8 mb-1 text-sky-400 transform -scale-x-100" />
                    Talent knows no borders, but access to opportunity does. From villages to cities, from the Global South to the North, every young person deserves an equal and fair chance to rise.
                    <Quote className="ml-auto w-8 h-8 mt-1 text-sky-400" />
                </motion.blockquote>
                <motion.div
                    variants={itemVariants}
                    className="bg-white/30 p-4 md:rounded-full rounded-2xl flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-center md:mt-14 mt-8"
                >
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="min-w-[18rem] px-6 py-2 rounded-full text-lg text-gray-100 font-semibold bg-sky-900 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Opportunities →
                    </motion.button>

                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="min-w-[18rem] px-6 py-2 rounded-full text-lg font-semibold bg-transparent text-gray-100 border-2 border-gray-100 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white"
                    >
                        Join TGS Academy
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default MissionBanner;