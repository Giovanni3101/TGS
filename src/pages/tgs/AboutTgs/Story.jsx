import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Story = () => {
  const [activeYear, setActiveYear] = useState(2022);
  const [isMobile, setIsMobile] = useState(false);
  
  // Détecter la taille de l'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const timelineData = {
    2022: {
      title: "Foundation",
      content: "It all started with a conversation. In 2022, during an informal exchange between Kyamoneka Benjamin, a law student, and Nonso Alan, a data science student, a clear reality emerged: thousands of talented individuals across the Global South possess immense potential, yet remain excluded from global opportunities due to limited access to information, guidance, and networks. This discussion marked the birth of a simple but ambitious idea — to create a bridge between talent and opportunity.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
    },
    2023: {
      title: "From Idea to Initiative",
      content:  "The idea gradually took shape and became The Growth Sphere (TGS). At this stage, TGS was not yet a formal organization, but rather an initiative driven by a clear mission: to make academic, professional, and technological opportunities accessible to people from the Global South. Early efforts focused on identifying scholarships, conferences, programs, and job opportunities, centralizing them, and sharing them with a growing and engaged community.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop"
    },
    2024: {
      title: "Building Support and Trust",
      content:  "Over time, one reality became evident — access to information alone was not enough. Many beneficiaries expressed the need for personalized guidance, application support, strategic advice, and a reassuring framework to help them move forward with confidence. In response, The Growth Sphere expanded its mission by offering optional mentorship, academic and career orientation, and practical support adapted to local realities. TGS began to position itself not only as an opportunity hub, but as a trusted partner along each individual’s journey.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2670&auto=format&fit=crop"
    },
    2025: {
      title: " A Growing Ecosystem",
      content: "Today, The Growth Sphere is evolving into a growing ecosystem. The initiative sits at the intersection of humanitarian support, technology, and human capital development. Its vision is clear: to connect talent from the Global South with global opportunities, reduce systemic barriers, and foster sustainable, inclusive, and equitable growth.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2670&auto=format&fit=crop"
    },
  };

  const years = Object.keys(timelineData).map(Number);
  
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

  // Gestion du swipe sur mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-700 to-white flex items-center justify-center p-4 md:p-8 font-sans">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif-title { font-family: 'Playfair Display', serif; }
        .font-sans-body { font-family: 'Inter', sans-serif; }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Styles pour la scrollbar de la timeline sur mobile */
        .timeline-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #00A3E0 #f0f0f0;
        }
        
        .timeline-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        
        .timeline-scrollbar::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }
        
        .timeline-scrollbar::-webkit-scrollbar-thumb {
          background: #00A3E0;
          border-radius: 10px;
        }
      `}</style>

      <div className="w-full max-w-7xl bg-white rounded-3xl md:rounded-[40px] shadow-lg md:shadow-2xl overflow-hidden flex flex-col relative mx-2 md:mx-0">
        
        {/* Header Section */}
        <div className="pt-12 md:pt-20 pb-8 md:pb-10 px-6 md:px-12 lg:px-24 text-center z-10 bg-white">
          
          <h3 className="text-[#0097B2] font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase mb-3 md:mb-4">
            History
          </h3>
          
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] text-sky-900 font-serif-title font-bold mb-4 md:mb-6 leading-tight">
            Our Story
          </h1>
          
          <p className="text-gray-500 font-sans-body text-sm md:text-[15px] leading-6 md:leading-7 max-w-xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
            Discover the milestones that have shaped our journey and commitment to connecting talent from the Global South with global opportunities.
          </p>
          
          {/* Timeline Years - Version Responsive */}
          <div 
            className={`
              ${isMobile 
                ? 'flex overflow-x-auto pb-4 px-4 gap-6 timeline-scrollbar snap-x snap-mandatory' 
                : 'flex justify-center items-baseline flex-wrap gap-4 md:gap-8 lg:gap-16'
              }
              select-none transition-all duration-300
            `}
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchMove={isMobile ? onTouchMove : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {years.map((year) => (
              <div 
                key={year} 
                className={`
                  relative group cursor-pointer flex flex-col items-center transition-all duration-300
                  ${isMobile ? 'snap-center min-w-[80px]' : ''}
                `}
                onClick={() => setActiveYear(year)}
              >
                <span className={`
                  font-bold font-sans-body transition-all duration-300
                  ${activeYear === year 
                    ? `text-[#00A3E0] ${isMobile ? 'text-2xl' : 'text-2xl md:text-3xl'}` 
                    : `text-gray-300 hover:text-gray-500 ${isMobile ? 'text-xl' : 'text-lg md:text-xl'}`
                  }
                `}>
                  {year}
                </span>
                
                {/* Indicateur pour l'année active */}
                {activeYear === year && (
                  <div className={`
                    absolute -bottom-2 md:-bottom-4 
                    ${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} 
                    bg-[#00A3E0] rounded-full animate-fadeIn
                  `}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Indicateurs de swipe pour mobile */}
          {isMobile && (
            <div className="flex justify-center items-center mt-4 space-x-2">
              {years.map((year) => (
                <div 
                  key={year}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeYear === year ? 'bg-[#00A3E0]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Image & Content Overlay Section */}
        <div 
          className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchMove={isMobile ? onTouchMove : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
        >
          
          {/* Background Image dynamique */}
          <div className="absolute inset-0 w-full h-full transition-all duration-500">
            <img 
              src={timelineData[activeYear].image} 
              alt={timelineData[activeYear].title} 
              className="w-full h-full object-cover object-center md:object-bottom transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-white to-transparent opacity-60"></div>
          </div>

          {/* Floating White Content Card - Version Responsive */}
          <div className={`
            absolute ${isMobile ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-2'} 
            w-[calc(100%-2rem)] md:w-[90%] lg:w-[600px] z-20 px-2 md:px-0
          `}>
            
            <div className="bg-white p-6 md:p-10 lg:p-12 shadow-lg md:shadow-xl relative rounded-2xl md:rounded-none animate-fadeIn">
              
              {/* Upward Pointing Triangle - Seulement sur desktop */}
              {!isMobile && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>
              )}
              
              {/* Titre de l'année */}
              <h3 className="text-[#0097B2] font-bold text-xs md:text-sm uppercase mb-2 md:mb-3">
                {timelineData[activeYear].title}
              </h3>
              
              {/* Contenu dynamique */}
              <p className="text-gray-600 font-sans-body text-sm md:text-[15px] lg:text-[16px] leading-[1.7] md:leading-[1.8]">
                {timelineData[activeYear].content}
              </p>
              
              {/* Boutons de navigation pour mobile - à l'intérieur de la carte */}
              {isMobile && (
                <div className="flex justify-center mt-6 space-x-4">
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center rounded-full transition-all duration-300 shadow-md active:scale-95"
                    aria-label="Previous year"
                  >
                    <ChevronLeft size={20} strokeWidth={3} />
                  </button>
                  <div className="flex items-center space-x-1">
                    {years.map((year) => (
                      <div 
                        key={year}
                        className={`w-1.5 h-1.5 rounded-full ${
                          activeYear === year ? 'bg-[#00A3E0]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center rounded-full transition-all duration-300 shadow-md active:scale-95"
                    aria-label="Next year"
                  >
                    <ChevronRight size={20} strokeWidth={3} />
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Buttons - Version Desktop */}
            {!isMobile && (
              <div className="absolute -bottom-4 md:-bottom-6 right-4 md:-right-8 flex gap-1">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center transition-all duration-300 shadow-md group hover:scale-105 active:scale-95 rounded-full md:rounded-none"
                  aria-label="Previous year"
                >
                  <ChevronLeft size={isMobile ? 20 : 24} strokeWidth={3} className="group-hover:-translate-x-0.5 transition-transform"/>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#4DD0E1] hover:bg-[#26c6da] text-white flex items-center justify-center transition-all duration-300 shadow-md group hover:scale-105 active:scale-95 rounded-full md:rounded-none"
                  aria-label="Next year"
                >
                  <ChevronRight size={isMobile ? 20 : 24} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform"/>
                </button>
              </div>
            )}
          </div>

          {/* Indicateur de swipe pour mobile */}
          {isMobile && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
              ← Swipe → pour naviguer
            </div>
          )}
        </div>
        
        {/* Footer avec compteur pour mobile */}
        {isMobile && (
          <div className="bg-white py-4 px-6 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {years.indexOf(activeYear) + 1} / {years.length}
              </span>
              <span className="text-[#00A3E0] font-bold text-lg">
                {activeYear}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;