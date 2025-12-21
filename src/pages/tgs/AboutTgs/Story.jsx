import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Story = () => {
  // État pour gérer l'année active
  const [activeYear, setActiveYear] = useState(1968);
  
  // Données pour chaque année
  const timelineData = {
    1968: {
      title: "Foundation",
      content: "The California FAIR Plan was established in 1968, following the riots and brush fires of the 1960s. We became the state's insurer of last resort, providing access to fire coverage for California homeowners unable to obtain it from a traditional insurance carrier.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
    },
    1985: {
      title: "Expansion",
      content: "In 1985, the FAIR Plan expanded its coverage to include additional perils, responding to the growing needs of California homeowners during challenging market conditions.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop"
    },
    1992: {
      title: "Modernization",
      content: "The 1992 reforms modernized the FAIR Plan's operations, introducing new technologies and streamlined processes to better serve policyholders.",
      image: "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?q=80&w=2670&auto=format&fit=crop"
    },
    2000: {
      title: "New Millennium",
      content: "Entering the new millennium, the FAIR Plan adapted to changing climate patterns and increased its focus on wildfire risk management.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop"
    },
    2021: {
      title: "Recent Developments",
      content: "In response to unprecedented wildfire seasons, the FAIR Plan implemented new initiatives in 2021 to enhance coverage options and support communities at risk.",
      image: "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?q=80&w=2670&auto=format&fit=crop"
    }
  };

  const years = Object.keys(timelineData).map(Number);
  
  // Fonctions de navigation
  const handlePrev = () => {
    const currentIndex = years.indexOf(activeYear);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : years.length - 1;
    setActiveYear(years[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = years.indexOf(activeYear);
    const nextIndex = currentIndex < years.length - 1 ? currentIndex + 1 : 0;
    setActiveYear(years[nextIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row-reverse items-center py-20">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif-title { font-family: 'Playfair Display', serif; }
        .font-sans-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* Header Section */}
        <div className="pt-20 pb-10 px-6 md:px-24 text-center z-10 bg-white">
          
          <h3 className="text-[#0097B2] font-bold text-xs tracking-[0.25em] uppercase mb-4">
            History
          </h3>
          
          <h1 className="text-5xl md:text-[3.5rem] text-gray-900 font-serif-title font-bold mb-6 leading-tight">
            Our Story
          </h1>
          
          <p className="text-gray-500 font-sans-body text-[15px] leading-7 max-w-xl mx-auto mb-16">
            The CA FAIR Plan was created to provide basic property insurance when coverage is not available from traditional insurance companies.
          </p>
          
          {/* Timeline Years - Maintenant interactive */}
          <div className="flex justify-center items-baseline space-x-8 md:space-x-16 select-none">
            {years.map((year) => (
              <div 
                key={year} 
                className="relative group cursor-pointer flex flex-col items-center transition-all duration-300"
                onClick={() => setActiveYear(year)}
              >
                <span className={`
                  font-bold text-3xl font-sans-body transition-all duration-300
                  ${activeYear === year 
                    ? 'text-[#00A3E0] text-3xl' 
                    : 'text-gray-300 text-xl hover:text-gray-500'
                  }
                `}>
                  {year}
                </span>
                {/* Indicateur pour l'année active */}
                {activeYear === year && (
                  <div className="absolute -bottom-4 w-2 h-2 bg-[#00A3E0] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image & Content Overlay Section */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          
          {/* Background Image dynamique */}
          <div className="absolute inset-0 w-full h-full transition-all duration-500">
            <img 
              src={timelineData[activeYear].image} 
              alt={timelineData[activeYear].title} 
              className="w-full h-full object-cover object-bottom transition-all duration-500"
            />
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
          </div>

          {/* Floating White Content Card */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-[90%] md:w-[600px] z-20">
            
            <div className="bg-white p-10 md:p-12 shadow-lg relative">
              
              {/* Upward Pointing Triangle */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>
              
              {/* Titre de l'année */}
              <h3 className="text-[#0097B2] font-bold text-sm uppercase mb-3">
                {timelineData[activeYear].title}
              </h3>
              
              {/* Contenu dynamique */}
              <p className="text-gray-600 font-sans-body text-[16px] leading-[1.8]">
                {timelineData[activeYear].content}
              </p>
            </div>

            {/* Navigation Buttons - Maintenant fonctionnelles */}
            <div className="absolute -bottom-6 right-8 md:-bottom-6 md:-right-8 flex gap-1">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center transition-all duration-300 shadow-md group hover:scale-105 active:scale-95"
                aria-label="Previous year"
              >
                <ChevronLeft size={24} strokeWidth={3} className="group-hover:-translate-x-0.5 transition-transform"/>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center transition-all duration-300 shadow-md group hover:scale-105 active:scale-95"
                aria-label="Next year"
              >
                <ChevronRight size={24} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;