import React, { useState } from 'react';
import { Mail, Phone, Menu, X, CircleUserRound } from 'lucide-react';
import { FacebookFilled, InstagramFilled, LinkedinFilled, TikTokFilled, WhatsAppOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import tgsConnect from '../../assets/images/tgs-connect-removebg-preview.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/home#' },
        // { label: 'How it works', href: '/home#how-it-works' },
        { label: 'Our services', href: '/home#services' },
        { label: 'Opportunities', href: '/opportunities' },
    ];

    return (
        <header className="w-full relative top-0">
            <div className="bg-sky-900 py-4 px-4 text-sm">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4">
                    <div className='flex flex-col justify-between items-center md:flex-row space-x-5 text-white'>
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                            <Phone size={16} className="" />
                            <a
                                href="tel: +254 797 427 649"
                                className="hover:text-sky-600 transition-colors"
                            >
                                +254 797 427 649
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={16} className="" />
                            <a
                                href="mailto:info@thegrowthsphere.org"
                                className="hover:text-sky-600 transition-colors"
                            >
                                info@thegrowthsphere.org
                            </a>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-white'>
                        <a href="https://www.facebook.com/people/The-Growth-Sphere-TGS-En/61581261688760/">
                            <FacebookFilled className='text-2xl' />
                        </a>
                        <a href="https://www.linkedin.com/company/the-growth-sphere-tgs/">
                            <LinkedinFilled className='text-2xl' />
                        </a>
                        <a href="https://www.instagram.com/tgs2.025?igsh=YXdvcDNjemJlMnFu">
                            <InstagramFilled className='text-2xl' />
                        </a>
                        <TikTokFilled className='text-2xl' />
                        <WhatsAppOutlined className='text-2xl' />
                    </div>
                </div>
            </div>

            <nav className="bg-white shadow-sm">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    <div className="flex items-center">
                        <img src={tgsConnect} className='w-32'></img>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className='md:flex items-center space-x-8'>
                            {navItems.map((item) => (
                                <HashLink
                                    key={item.label}
                                    to={item.href}
                                    className="hover:text-blue-600 font-medium transition-colors"
                                >
                                    {item.label}
                                </HashLink>
                            ))}
                        </div>
                        <div className='md:flex items-center space-x-2'>
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-between space-x-2 px-4 bg-gray-100 text-gray-900 py-2 rounded-full border-3 border-sky-900 hover:bg-sky-600"
                                >
                                    <CircleUserRound />
                                    <p>Log in</p>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-sky-900 mt-4 pb-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-100 hover:text-blue-600 font-medium py-2 px-4 hover:bg-gray-50 rounded transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className='md:flex items-center space-x-2 px-4'>
                                <Link to="/login">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex items-center items-center justify-center space-x-2 px-4 bg-gray-100 text-gray-900 py-2 rounded-full border-3 border-sky-900 hover:bg-sky-600"
                                    >
                                        <CircleUserRound />
                                        <p>Log in</p>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;