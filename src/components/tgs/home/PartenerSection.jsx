import { motion } from "framer-motion";
import { Link } from 'react-router'
import ambassader from '../../../assets/ambassader.png';
import partner1 from '../../../assets/images/partners/1.png';
import partner2 from '../../../assets/images/partners/2.jpeg';
import partner3 from '../../../assets/images/partners/3.jpeg';
import partner4 from '../../../assets/images/partners/4.jpeg';
import partner5 from '../../../assets/images/partners/5.jpeg';
import partner6 from '../../../assets/images/partners/6.jpeg';
import partner7 from '../../../assets/images/partners/7.jpeg';
import partner8 from '../../../assets/images/partners/8.jpeg';
import partner9 from '../../../assets/images/partners/9.jpeg';
import partner10 from '../../../assets/images/partners/10.jpeg';
import partner11 from '../../../assets/images/partners/11.jpeg';
import partner12 from '../../../assets/images/partners/12.jpeg';
import partner13 from '../../../assets/images/partners/13.jpeg';
import partner14 from '../../../assets/images/partners/14.jpeg';
import partner15 from '../../../assets/images/partners/15.jpeg';
import { containerVariants, itemVariants } from "../../animation/Animation";



const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
];

function PartnerSection() {
    return (
        <section className="py-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto px-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-extrabold text-gray-900 text-start"
                >
                    Our Partners
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="md:mb-20 mb-10"
                >
                    They trust us with their projects and we are proud to be a part of their success stories.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    className="relative overflow-hidden md:mb-30 mb-6"
                >
                    <motion.div
                        // variants={containerVariants}
                        className="wrap"
                    >
                        {[...partners, ...partners].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="h-20 w-56 object-contain hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
                    <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-12 p-6 bg-sky-100 rounded-3xl flex items-center"
                >
                    <motion.div
                        variants={itemVariants}
                    >
                        <h1 className="text-start md:text-5xl text-3xl" style={{ fontFamily: "Great Vibes" }}>Become an Ambassador for Our Programs</h1>
                        <p className="mt-4 text-start">Join us as an ambassador and share your passion for our training programs and opportunities. As an ambassador, you will enjoy exclusive benefits while helping to promote our offerings to your network. Play a role in the success of our youth !</p>
                        <Link to='/contact'>
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 px-6 py-3 bg-gray-100 border-3 border-sky-900 text-sky-900 rounded-xl hover:text-white hover:bg-sky-700 transition-colors duration-300"
                            >
                                Join as an ambassador
                            </motion.button>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.img src={ambassader} className="hidden md:block w-[800px]"></motion.img>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default PartnerSection;
