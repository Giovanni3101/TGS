import React, { useState, useEffect } from 'react';
import { Mail, Phone, Building, Facebook, Linkedin, Instagram } from 'lucide-react';
import contactBanner from '../../../assets/images/contact-banner.png'
import {URLS} from '../../../utils/urls.js';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const { prenom, nom, email, message } = formData;
    
    if (!prenom || !nom || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center pt-32 pb-16 px-4 md:pl-20 lg:pb-0">
      <div className="w-full relative overflow-hidden">
        <div 
          className="flex space-x-4 transition-transform duration-300" 
          style={{ transform: isMobile ? `translateX(-${currentSlide * 50}%)` : 'none' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Left Column - Form Section */}
          <div className="max-w-3xl flex-1 lg:w-full space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 lg:min-w-0 px-4 sm:px-0">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Contact Us!
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Have a question, suggestion or need assistance? Our team is here to listen. 
              Fill out the form or use the information below to reach us. We'll respond as soon as possible.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Quick Contact</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">info@thegrowthsphere.org</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone Number</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">+243 895 579 454</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Physical Address</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-5 md:space-x-6 mt-6 sm:mt-8">
              <a href="https://www.facebook.com/people/The-Growth-Sphere-TGS-En/61581261688760/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/the-growth-sphere-tgs/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/tgs2.025?igsh=YXdvcDNjemJlMnFu" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 hover:text-white" />
              </a>
            </div>
            
            {/* Form Fields */}
            <div className="space-y-5 sm:space-y-6">
              {/* First Name and Last Name - Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="prenom" className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="nom" className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>
              
              {/* Email - Full width */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              
              {/* Message - Textarea */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none text-sm sm:text-base"
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full flex-1 lg:w-full flex items-center justify-center pb-0 hidden lg:flex">
            {/* <div className="w-full h-fit rounded-2xl overflow-hidden pb-0"> */}
              <img
                src={contactBanner}
                alt="Contact support - man in denim jacket making call gesture"
                className="w-full h-full object-cover"
              />
            {/* </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}