import React from 'react'
import { Globe, ArrowRight } from 'lucide-react'
import TGSConnect from '../../assets/images/tgs-connect-removebg-preview.png'
import { motion } from 'framer-motion'
import { FacebookFilled, InstagramFilled, LinkedinFilled, TikTokFilled, WhatsAppOutlined } from '@ant-design/icons';


function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-sky-900 text-gray-100 py-12">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className='md:px-20 px-5'>
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className='space-y-4'>
                            <img src={TGSConnect} className='w-30' />
                            <p className="text-gray-100">
                                Empowering youth with global opportunities since 2024.
                            </p>
                            <div className='flex space-x-4 text-white'>
                                <FacebookFilled className='text-2xl' />
                                <InstagramFilled className='text-2xl' />
                                <LinkedinFilled className='text-2xl' />
                                <TikTokFilled className='text-2xl' />
                                <WhatsAppOutlined className='text-2xl' />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
                                <li><a href="#opportunities" className="hover:text-sky-400 transition-colors">Opportunities</a></li>
                                <li><a href="#blog" className="hover:text-sky-400 transition-colors">Blog</a></li>
                                <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Categories</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-sky-400 transition-colors">Scholarships</a></li>
                                <li><a href="#" className="hover:text-sky-400 transition-colors">Fellowships</a></li>
                                <li><a href="#" className="hover:text-sky-400 transition-colors">Conferences</a></li>
                                <li><a href="#" className="hover:text-sky-400 transition-colors">Volunteering</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
                            <p className="text-gray-100 mb-4">Get the latest opportunities in your inbox</p>
                            <div className="flex">
                                {/* <input
                                    type="email"
                                    placeholder="Your email"
                                    className="input flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
                                />
                                <button className="bg-sky-600 px-4 py-2 rounded-r-lg hover:bg-sky-700 transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </button> */}
                                <motion.div
                                    className="relative w-full md:w-[400px]"
                                >
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full input px-6 pr-3 py-6 rounded-full text-gray-800 font-medium
                                                focus:outline-none focus:ring-2 focus:ring-cyan-400
                                                relative z-0"
                                    />

                                    <button
                                        className="absolute right-2 top-1/2 -translate-y-1/2
                                                bg-sky-800 hover:bg-sky-700 transition-colors
                                                px-5 py-2 rounded-full
                                                z-10"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-500 pt-3 text-center text-gray-300">
                        <div className='md:flex justify-between items-center'>
                            {/* <p>&copy; {year} TGS Connect. All rights reserved.</p> */}
                            <p>&copy; {year} Powered by <a href='https://gitutechnology.onreder.com'>Gitu technology</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer