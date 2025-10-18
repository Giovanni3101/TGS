import { motion } from 'framer-motion';
import { Target, Users, Globe } from 'lucide-react';
import { values } from '../data/homeData';

const iconComponents = {
    Target,
    Users,
    Globe
};

function ValuesSection() {
    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-sky-900 mb-4">Our Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The principles that guide our mission and drive our impact
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {values.map((value, index) => {
                        const IconComponent = iconComponents[value.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card bg-base-100 shadow-lg"
                            >
                                <div className="card-body text-center">
                                    <div className="text-sky-600 mb-4 flex justify-center">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="card-title justify-center text-sky-900 mb-4 text-lg">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700">{value.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ValuesSection;