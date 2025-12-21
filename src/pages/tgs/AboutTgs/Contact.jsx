import React, { useState } from 'react';
import { Mail, Phone, Building } from 'lucide-react';
import contactBanner from '/home/alves/Desktop/TGS/src/assets/images/contact-banner.png'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-20 pb-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left Column - Form Section */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Contactez-nous!
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Une question, une suggestion ou besoin d'assistance ? Notre équipe est à votre 
            écoute. Remplissez le formulaire ou utilisez les informations ci-dessous pour nous 
            joindre. Nous vous répondrons dans les plus brefs délais.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contact Rapide</h3>
                <p className="text-gray-600 text-sm">info@thegrowthsphere.org</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Numéro Tél.</h3>
                <p className="text-gray-600 text-sm">+243 895 579 454</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Adresse Physique</h3>
                <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          {/* Form Fields */}
          <div className="space-y-6">
            {/* First Name and Last Name - Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prenom" className="block text-gray-900 font-medium mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Prénom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="nom" className="block text-gray-900 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Email - Full width */}
            <div>
              <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
            
            {/* Message - Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
              />
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="hidden lg:flex items-center justify-center pb-0">
          <div className="w-full h-full min-h-[600px] rounded-2xl overflow-hidden pb-0">
            <img
              src={contactBanner}
              alt="Contact support - man in denim jacket making call gesture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}