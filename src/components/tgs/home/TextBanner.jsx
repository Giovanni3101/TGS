import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../animation/Animation'
import ScrollReveal from '../../ui/ScrollReveal'


function TextBanner() {
    return (
        <section className='bg-white py-20 md:pt-32'>
            <motion.div
                variant={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='max-w-5xl mx-auto flex flex-col items-center justify-center gap-4'
            >
                <ScrollReveal
                    baseOpacity={0.6}
                    enableBlur={true}
                    baseRotation={20}
                    blurStrength={10}
                    textClassName='text-5xl md:text-8xl text-center'
                >
                    The Growth Sphere:
                    Your passport to growth beyond borders
                </ScrollReveal>
            </motion.div>
        </section>
    )
}

export default TextBanner