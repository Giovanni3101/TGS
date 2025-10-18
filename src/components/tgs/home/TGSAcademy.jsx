import { motion } from 'framer-motion';
import { BookOpen, Globe, Award, ChevronRight } from 'lucide-react';
import { programs } from '../data/homeData';

const iconComponents = {
    BookOpen,
    Globe,
    Award
};

function TGSAcademy() {
    return (
        <section id="academy" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête */}
                <div className="text-left mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        TGS Academy: Votre Passerelle vers l'Excellence Mondiale
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-4xl leading-relaxed"
                    >
                        En combinant expertise pédagogique, mentorat personnalisé et un engagement inébranlable 
                        envers la réussite des jeunes, nous avons formé des centaines de talents à s'épanouir 
                        sur la scène internationale.
                    </motion.p>
                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-300 my-12"></div>

                {/* Section Programmes */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">PROGRAMMES DE FORMATION</h2>
                        <p className="text-lg text-gray-600">
                            Découvrez nos parcours éducatifs conçus pour propulser votre carrière à l'international
                        </p>
                    </motion.div>

                    {/* Grille des programmes */}
                    <div className="space-y-8">
                        {programs.map((program, index) => {
                            const IconComponent = iconComponents[program.icon];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Icône et en-tête */}
                                        <div className="flex items-start gap-4 md:w-1/4">
                                            <div className="p-3 bg-blue-100 rounded-lg">
                                                <IconComponent className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {program.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {program.duration}
                                                    </span>
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {program.target}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description et actions */}
                                        <div className="md:w-3/4">
                                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                                {program.description}
                                            </p>
                                            
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="text-lg font-semibold text-blue-600">
                                                    {program.fee}
                                                </div>
                                                
                                                <div className="flex gap-3">
                                                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                                                        Postuler Maintenant
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors duration-300">
                                                        En Savoir Plus
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-300 my-12"></div>

                {/* Section Témoignages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">TÉMOIGNAGES</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Nos étudiants parlent de leur expérience
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Témoignage 1 */}
                        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Digital Skills Program</h4>
                                    <p className="text-blue-600 font-medium">Formation en Développement Web</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                "TGS Academy m'a offert les compétences et la confiance nécessaires pour décrocher 
                                un poste en tant que développeur full-stack en Europe. Le mentorat personnalisé et 
                                les projets concrets ont été déterminants pour mon succès."
                            </p>
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-bold text-gray-900">Amina Diallo</p>
                                <p className="text-gray-600">Développeuse Full-Stack • Berlin, Allemagne</p>
                            </div>
                        </div>

                        {/* Témoignage 2 */}
                        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-lg">K</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Global Leadership Program</h4>
                                    <p className="text-green-600 font-medium">Formation en Management International</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                "Le programme de leadership de TGS Academy a transformé ma vision du management. 
                                Grâce aux stages internationaux et au réseau professionnel, j'ai pu intégrer 
                                une multinationale à Dubaï juste après ma formation."
                            </p>
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-bold text-gray-900">Kevin Mbuyi</p>
                                <p className="text-gray-600">Chef de Projet • Dubaï, Émirats Arabes Unis</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                        Découvrir Tous Nos Programmes
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default TGSAcademy;