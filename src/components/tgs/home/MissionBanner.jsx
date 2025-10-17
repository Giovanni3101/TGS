import { motion } from 'framer-motion';

function MissionBanner() {
    return (
        <section className="bg-teal-900 text-white md:py-6 py-2">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm md:text-xl text-center italic leading-relaxed"
                >
                    "Talent knows no borders, but access to opportunity does. From villages to cities, from the Global South to the North, every young person deserves an equal and fair chance to rise."
                </motion.blockquote>
            </div>
        </section>
    );
}

export default MissionBanner;