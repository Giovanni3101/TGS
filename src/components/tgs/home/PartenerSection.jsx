import { motion } from "framer-motion";
import ambassader from '../../../assets/ambassader.png';
import partner1 from '../../../assets/images/partners/1.png';
import partner2 from '../../../assets/images/partners/2.jpeg';
import partner3 from '../../../assets/images/partners/3.jpeg';
import partner4 from '../../../assets/images/partners/4.jpeg';
import partner5 from '../../../assets/images/partners/5.jpeg';
import partner6 from '../../../assets/images/partners/6.jpeg';
import partner7 from '../../../assets/images/partners/7.jpeg';
import partner8 from '../../../assets/images/partners/8.jpeg';



const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
];

function PartnerSection() {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-gray-900 text-start">
                    Our Partners
                </h2>
                <p className="md:mb-20 mb-10">
                    They trust us with their projects and we are proud to be a part of their success stories.
                </p>

                <div className="relative overflow-hidden md:mb-30 mb-6">
                    <motion.div
                        className="flex items-center gap-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...partners, ...partners].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="h-16 object-contain hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 p-6 bg-sky-100 rounded-3xl flex items-center"
                >
                    <div>
                        <h1 className="text-start md:text-5xl text-3xl" style={{ fontFamily: "Great Vibes" }}>Become an Ambassador for Our Programs</h1>
                        <p className="mt-4 text-start">Join us as an ambassador and share your passion for our training programs and opportunities. As an ambassador, you will enjoy exclusive benefits while helping to promote our offerings to your network. Play a role in the success of our youth !</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 px-6 py-3 bg-gray-100 border-3 border-sky-900 text-sky-900 rounded-xl hover:text-white hover:bg-sky-700 transition-colors duration-300"
                        >
                            Join as an ambassador
                        </motion.button>
                    </div>
                    <div>
                        <img src={ambassader} className="hidden md:block w-[800px]"></img>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default PartnerSection;
