import React from 'react';
import { Mail, Phone, Menu, X, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import tgsConnect from '../../assets/images/tgs-connect-removebg-preview.png'
import { FacebookFilled, InstagramFilled, LinkedinFilled, TikTokFilled, WhatsAppOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'
import { Link } from 'react-router';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        { label: 'Home', href: '/home#' },
        { label: 'How it works', href: '/home#how-it-works' },
        { label: 'Blog', href: '/#' },
    ];

    return (
        <header className="w-full relative top-0">
            <div className="bg-sky-900 py-4 px-4 text-sm">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4">
                    <div className='flex flex-col justify-between items-center md:flex-row space-x-5 text-white'>
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                            <Phone size={16} className="" />
                            <a
                                href="tel: +254116701163"
                                className="hover:text-sky-600 transition-colors"
                            >
                                +254 116 701 163
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={16} className="" />
                            <a
                                href="mailto:connect@thegrowthsphere.com"
                                className="hover:text-sky-600 transition-colors"
                            >
                                connect@thegrowthsphere.com
                            </a>
                        </div>
                    </div>
                    {/* <div className='flex space-x-6'>
                        <div className='text-gray-100'>
                            <FacebookIcon size={20} />
                        </div>
                        <div className='text-gray-100'>
                            <LinkedinIcon size={20} />
                        </div>
                        <div className='text-gray-100'>
                            <TwitterIcon size={20} />
                        </div>
                        <div className='text-gray-100'>
                            <InstagramIcon size={20} />
                        </div>
                    </div> */}
                    <div className='flex space-x-4 text-white'>
                        <FacebookFilled className='text-2xl' />
                        <InstagramFilled className='text-2xl' />
                        <LinkedinFilled className='text-2xl' />
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
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-blue-600 font-medium transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                        <div className='md:flex items-center space-x-2'>
                            <Link to="/opportunities">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-sky-900 text-white w-[150px] py-4 rounded-xl hover:bg-sky-600"
                                >
                                    Opportunities
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-sky-900 w-[150px] py-4 rounded-xl border-3 border-sky-900 hover:bg-sky-600"
                            >
                                TGS ACADEMY
                            </motion.button>
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
                                <Link to="/opportunities">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gray-100 text-sky-900 w-[150px] py-4 rounded-xl border-3 border-gray-100 hover:bg-sky-600"
                                    >
                                        Opportunities
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-100 w-[150px] py-4 rounded-xl border-3 border-gray-100 hover:bg-sky-600"
                                >
                                    TGS ACADEMY
                                </motion.button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;