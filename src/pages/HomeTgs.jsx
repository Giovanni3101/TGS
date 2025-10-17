import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Globe, BookOpen, Award, Target } from 'lucide-react';

function Home() {
    const [currentStory, setCurrentStory] = useState(0);

    const successStories = [
        {
            name: "Kyamoneka Mpey Benjamin",
            role: "Founder & Executive Director",
            story: "From Goma's roots to global impact leader, transforming local action into international change",
            achievement: "Led 6,000 trees planting across 35 schools in Goma"
        },
        {
            name: "Alan Nonso",
            role: "TGS Ambassador",
            story: "Transforming opportunities into success through global fellowships and leadership",
            achievement: "Successfully secured multiple international fellowships"
        }
    ];

    const programs = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "TGS Global Scholars Program",
            duration: "12 months",
            target: "High school students (16-19)",
            description: "Prepares students for international higher education through academic readiness and leadership training",
            fee: "USD 15/month"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Opportunities Accelerator",
            duration: "6 months",
            target: "Undergraduate & graduate students",
            description: "Intensive guidance for global fellowships, internships, and conferences",
            fee: "USD 50/month"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Digital Rights & Technology",
            duration: "Flexible",
            target: "Youth advocates",
            description: "Empowering youth in AI, digital rights, and responsible technology use",
            fee: "Free"
        }
    ];

    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "ACCESS TO OPPORTUNITIES",
            description: "Facilitating youth access to fellowships, internships, scholarships, and jobs"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "TRAINING & CAPACITY BUILDING",
            description: "Delivering tailored programs through TGS Academy for lasting impact"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "GLOBAL PARTNERSHIPS",
            description: "Collaborating with international organizations worldwide"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStory((prev) => (prev + 1) % successStories.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/api/placeholder/1920/1080")'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 to-teal-800/80"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        YOUR PASSPORT TO GROWTH BEYOND BORDERS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-8 text-sky-100"
                    >
                        Opening doors for youth, from the Global South to the World
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="btn btn-primary btn-lg text-white bg-sky-600 border-sky-600 hover:bg-sky-700 hover:border-sky-700">
                            Explore Opportunities
                        </button>
                        <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-sky-900">
                            Join TGS Academy
                        </button>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="animate-bounce">
                        <ChevronRight className="w-6 h-6 text-white transform rotate-90" />
                    </div>
                </motion.div>
            </section>

            {/* Mission Banner */}
            <section className="bg-sky-900 text-white py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl text-center italic leading-relaxed"
                    >
                        "Talent knows no borders, but access to opportunity does. From villages to cities, from the Global South to the North, every young person deserves an equal and fair chance to rise."
                    </motion.blockquote>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-sky-900 mb-4">SUCCESSFUL STORIES</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover how TGS is transforming lives and creating global opportunities
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="avatar">
                                        <div className="w-24 h-24 rounded-full bg-sky-200 flex items-center justify-center">
                                            <Users className="w-12 h-12 text-sky-600" />
                                        </div>
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-sky-900 mb-2">
                                            {successStories[currentStory].name}
                                        </h3>
                                        <p className="text-sky-600 italic mb-3">{successStories[currentStory].role}</p>
                                        <p className="text-gray-700 mb-3">{successStories[currentStory].story}</p>
                                        <p className="text-sm text-gray-600">{successStories[currentStory].achievement}</p>

                                        <div className="flex justify-center md:justify-start gap-2 mt-4">
                                            {successStories.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentStory(index)}
                                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentStory ? 'bg-sky-600' : 'bg-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-actions justify-end mt-6">
                                    <button className="btn btn-outline btn-primary">See more stories</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TGS Academy */}
            <section id="academy" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-sky-900 mb-4">TGS Academy</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empowering youth through tailored training programs and global opportunities
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card bg-base-100 shadow-xl border-t-4 border-sky-500"
                            >
                                <div className="card-body">
                                    <div className="text-sky-600 mb-4">{program.icon}</div>
                                    <h3 className="card-title text-sky-900 mb-3">{program.title}</h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="badge badge-outline">{program.duration}</span>
                                        <span className="badge badge-outline badge-primary">{program.target}</span>
                                        <span className="badge badge-outline badge-secondary">{program.fee}</span>
                                    </div>

                                    <p className="text-gray-700 mb-6">{program.description}</p>

                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-sm">Learn More</button>
                                        <button className="btn btn-outline btn-sm">Apply Now</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <button className="btn btn-primary btn-lg">
                            Explore All Programs
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
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
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card bg-base-100 shadow-lg"
                            >
                                <div className="card-body text-center">
                                    <div className="text-sky-600 mb-4 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="card-title justify-center text-sky-900 mb-4 text-lg">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-sky-900 mb-6">Get in Touch</h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Ready to collaborate, partner, or invite us to speak? Want to support our work or have an inquiry?
                                Get in touch with us!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sky-900">Email</p>
                                        <p className="text-gray-700">kyamompey@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sky-900">Phone</p>
                                        <p className="text-gray-700">+354 797 427849</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-sky-900 mb-6">Send us a message</h3>

                                    <form className="space-y-4">
                                        <div className="form-control">
                                            <input
                                                type="text"
                                                placeholder="Full name"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <textarea
                                                placeholder="Describe your projects or needs..."
                                                className="textarea textarea-bordered h-32"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button type="submit" className="btn btn-primary">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-sky-900 text-white p-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">TGS</h3>
                            <p className="text-sky-200">THE GROWTH SPHERE</p>
                            <p className="text-sky-200 mt-2">Empowering youth beyond borders</p>
                        </div>

                        <div>
                            <h4 className="footer-title">Quick Links</h4>
                            <a href="/about" className="link link-hover text-sky-200">About</a>
                            <a href="#academy" className="link link-hover text-sky-200">TGS Academy</a>
                            <a href="/opportunities" className="link link-hover text-sky-200">Opportunities</a>
                        </div>

                        <div>
                            <h4 className="footer-title">Connect</h4>
                            <a href="#contact" className="link link-hover text-sky-200">Contact Us</a>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-sky-200 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                                <a href="#" className="text-sky-200 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
                                </a>
                                <a href="#" className="text-sky-200 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 12.014 0 12.017 0z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="footer-title">Legal</h4>
                            <a href="#" className="link link-hover text-sky-200">Terms of use</a>
                            <a href="#" className="link link-hover text-sky-200">Privacy policy</a>
                            <a href="#" className="link link-hover text-sky-200">Cookie policy</a>
                        </div>
                    </div>

                    <div className="border-t border-sky-700 mt-8 pt-8 text-center">
                        <p className="text-sky-200">
                            &copy; {new Date().getFullYear()} The Growth Sphere. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;