import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projet1 from '../../../assets/images/projects/1.jpeg';
import projet2 from '../../../assets/images/projects/2.jpeg';
import projet3 from '../../../assets/images/projects/3.webp';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { buttonVariants, cardVariants, containerVariants, itemVariants } from '../../animation/Animation';


function ProjectsSection() {
    const [expandedCard, setExpandedCard] = useState(null);

    const projects = [
        {
            id: 1,
            title: "TGS Connect",
            description: "TGS Connect is a youth empowerment initiative bridging the gap between potential, opportunity, and accessibility across the Global South. Responding to high youth unemployment, skills mismatches, and limited access to mentorship and global networks, the project equips young people aged 16–35 with practical, future-ready competencies.",
            fullDescription: "Through the TGS Digital Platform and Academy, participants access capacity-building programs, mentorship, and curated global opportunities. A core innovation is the AI-powered Growth Diagnosis (currently under development), which combines data-driven assessment, contextual analysis, and expert guidance to generate personalized skills scorecards and development roadmaps. TGS Connect transforms untapped talent into globally competitive leadership through a scalable, inclusive, and youth-centered model.",
            image: projet1,
            color: "from-blue-600 to-cyan-500",
            stats: ["5000+ Youth", "12 Countries", "100+ Partners"],
            status: "Active"
        },
        {
            id: 2,
            title: "TGS ConnectEd",
            description: "TGS ConnectEd Project is an education recovery initiative of TGS Academy, advancing SDG 4 by distributing the proven ConnectEd catch-up tutoring model to primary school learners in the Democratic Republic of Congo affected by conflict, poverty, and prolonged schooling disruptions.",
            fullDescription: "The project focuses on scaling an evidence-based, high-dosage tutoring solution through trained university graduates, in collaboration with the Provincial Directorate of the Ministry of Primary and Secondary Education (EPSP) and Higher Pedagogical Institutes. Learners are assessed and matched to level-appropriate tutoring delivered weekly via phone-based sessions. A centralized digital platform supports monitoring, evaluation, and quality assurance. Piloted in Lubumbashi and Goma, the project aims to help learners recover up to 33% of lost learning, reaching 25,000 children within five years through a low-cost, scalable model.",
            image: projet3,
            color: "from-emerald-600 to-teal-500",
            stats: ["10,000+ Students", "200 Tutors", "2 Regions"],
            status: "Expanding"
        },
        {
            id: 3,
            title: "Sugar Daddy Challenge",
            description: "Sugar Daddy Challenge is a school-based prevention initiative under Duru ya Mabadiliko, designed to protect adolescent girls from HIV, teenage pregnancy, and exploitation linked to age-disparate relationships.",
            fullDescription: "The intervention itself is a proven, evidence-based solution that has demonstrated effectiveness in reducing risky cross-generational sexual behavior. This project focuses on distributing and scaling that proven solution across girls' high schools, beginning with a pilot in Thika Sub-County, Kiambu County, with support from the D-Prize. Trained graduates and university students deliver one-hour, age-appropriate sessions on adolescent health, sexual and reproductive health, and safeguarding, aligned with guidance from education and health authorities. Through strong monitoring, evaluation, and digital reporting, the initiative aims to reach over 100,000 girls within five years, translating proven impact into large-scale prevention.",
            image: projet2,
            color: "from-purple-600 to-pink-500",
            stats: ["50,000+ Girls", "40 Schools", "5 Years"],
            status: "Pilot"
        }
    ];

    const toggleCardExpansion = (cardId) => {
        if (expandedCard === cardId) {
            setExpandedCard(null);
        } else {
            setExpandedCard(cardId);
        }
    };

    return (
        <section className="py-6 bg-sky-100">
            <div className="px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="text-center mb-2 lg:mb-6"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 "
                    >
                        <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">
                            Our Initiatives
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                    >
                        Featured <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm text-gray-600 max-w-3xl mx-auto"
                    >
                        Discover our ongoing initiatives creating meaningful impact across communities,
                        empowering youth, and building sustainable futures.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 lg:gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            // variants={cardVariants}
                            className="relative group w-full md:w-[calc(33.333%-1rem)] md:max-w-md"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-200/50 h-full flex flex-col"
                            >
                                <div className="relative h-48 md:h-56 overflow-hidden p-4">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full rounded-t-2xl object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

                                    {/* Status Badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm
                                            ${project.status === 'Active' ? 'bg-green-500/20 text-white border border-green-500/30' :
                                                project.status === 'Expanding' ? 'bg-blue-500/20 text-white border border-blue-500/30' :
                                                    'bg-purple-500/20 text-white border border-purple-500/30'}`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-6 left-6 bg-sky-900 border-2 border-white px-2 py-1 rounded-full">
                                        <h3 className="text-xl md:text-xl text-gray-100 drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="py-2 px-4 flex-grow flex flex-col">
                                    {/* Short Description */}
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Stats Row */}
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {project.stats.map((stat, idx) => (
                                            <div
                                                key={idx}
                                                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 text-sm font-medium text-sky-700"
                                            >
                                                {stat}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Full Description with Toggle */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{
                                            height: expandedCard === project.id ? 'auto' : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-gray-500 text-sm mb-4">
                                                {project.fullDescription}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <button
                                            onClick={() => toggleCardExpansion(project.id)}
                                            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors duration-200"
                                        >
                                            <span className="text-sm font-medium">
                                                {expandedCard === project.id ? 'Show less' : 'Learn more'}
                                            </span>
                                            <motion.div
                                                animate={{
                                                    rotate: expandedCard === project.id ? 180 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {expandedCard === project.id ?
                                                    <FiChevronUp className="w-4 h-4" /> :
                                                    <FiChevronDown className="w-4 h-4" />
                                                }
                                            </motion.div>
                                        </button>

                                        <a
                                            href="#"
                                            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-sky-900 hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                                        >
                                            <span>View Project →</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className='flex flex-col justify-center items-center py-10 md:mx-4 my-12 md:mt-32 bg-sky-900 rounded-3xl'
                >
                    <div className='text-center text-white px-'>
                        <motion.p
                            variants={itemVariants}
                            className='text-3xl mt-4 font-semibold'
                        >
                            A specific project in mind?
                        </motion.p>
                        <motion.p
                        variants={itemVariants}
                            className='text-md'
                        >
                            Contact us to discuss your needs and find out how we can contribute to your personal development.
                        </motion.p>
                        <motion.button
                        values={buttonVariants}
                            className="mt-4 px-6 py-2 rounded-full text-lg text-white font-semibold bg-transparent border-2 border-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            <a href='#contact'>Contact Us →</a>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ProjectsSection;