import React, { useEffect, useRef, useState } from 'react';
import SeoHead from '../../../components/SeoHead.jsx';
import { Calendar, Users, Globe, Award, TrendingUp, MapPin } from 'lucide-react';
import History1 from '../../../assets/images/history1.jpeg';
import History2 from '../../../assets/images/history2.jpeg';

const Story = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection observer for scroll animations
  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(prev => ({ ...prev, [key]: true }));
              }
            });
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      <SeoHead
        title="Our Story | The Growth Sphere"
        description="Learn about The Growth Sphere’s mission, origins, and the values driving our work across Africa."
        ogTitle="Our Story | The Growth Sphere"
        ogDescription="Learn about The Growth Sphere’s mission, origins, and the values driving our work across Africa."
        ogImage="/tgs1.png"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50 py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div 
            ref={el => sectionRefs.current['hero'] = el}
            className={`transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              <span>2019 — Present</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Story
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              From grassroots environmental action in Eastern DR Congo to a global ecosystem 
              empowering youth across continents—this is the journey of transformation, 
              commitment, and strategic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Foundational Work Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={el => sectionRefs.current['foundation'] = el}
            className={`transition-all duration-1000 delay-200 ${
              isVisible['foundation'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section Header */}
            <div className="flex items-start gap-6 mb-12">
              <div className="hidden md:block">
                <div className="w-1 h-24 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Foundational Work
                </h2>
                <p className="text-sky-600 font-semibold text-lg">2019 — 2024</p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The foundations of The Growth Sphere were laid through years of grassroots 
                  leadership, institutional building, and capacity development led by 
                  <span className="font-semibold text-gray-900"> Kyamoneka Mpey Benjamin</span>.
                </p>
                
                <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">
                    In December 2019, he co-founded <span className="font-semibold text-sky-700">EDDEC</span>, 
                    a youth-led environmental organization rooted in local action. As Co-Founder and 
                    President, he spearheaded a large-scale afforestation initiative that resulted in 
                    the planting of <span className="font-bold text-sky-700">6,000 trees</span> across 
                    <span className="font-bold text-sky-700"> 35 schools</span> in Goma (Eastern DR Congo).
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  This initiative directly benefited over 3,000 students and secured strategic 
                  partnerships with WWF and the Provincial Ministry of the Environment. EDDEC 
                  further sustained its impact through trainings, workshops, and awareness campaigns 
                  on climate change and sustainable development.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl transform rotate-3"></div>
                <img 
                  src={History1}
                  alt="Students planting trees in an environmental education program"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-sky-100">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-sky-600">6,000</p>
                    <p className="text-sm text-gray-600">Trees Planted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expansion Section */}
            <div className="mt-16 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1.5">
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Expanding Into Legal Advocacy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building on this experience, Benjamin expanded into legal advocacy and capacity 
                    building. Between 2024 and 2025, he served as Managing Partner at 
                    <span className="font-semibold"> Legal Alliance Associates</span> and as Country 
                    Director for the <span className="font-semibold">Lawrit Journal of Law</span>, 
                    where he trained over 100 students in legal research and coordinated academic 
                    debates, webinars, and engagements reaching more than 1,500 students across 
                    Africa and the Middle East.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight Callout */}
      <section className="py-16 px-6 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => sectionRefs.current['insight'] = el}
            className={`transition-all duration-1000 ${
              isVisible['insight'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-center space-y-6">
              <TrendingUp className="w-12 h-12 text-white mx-auto" />
              <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                "These experiences consistently revealed a vast pool of talent constrained 
                not by ability, but by limited access to structured mentorship, global exposure, 
                and opportunity pipelines."
              </blockquote>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">35</div>
                <div className="text-sky-100">Schools Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3,000+</div>
                <div className="text-sky-100">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1,500+</div>
                <div className="text-sky-100">Youth Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Establishment of TGS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={el => sectionRefs.current['establishment'] = el}
            className={`transition-all duration-1000 delay-200 ${
              isVisible['establishment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section Header */}
            <div className="flex items-start gap-6 mb-12">
              <div className="hidden md:block">
                <div className="w-1 h-24 bg-gradient-to-b from-sky-600 to-sky-800 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Establishment of The Growth Sphere
                </h2>
                <p className="text-sky-600 font-semibold text-lg">2025</p>
              </div>
            </div>

            {/* Content Grid - Reversed */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl transform -rotate-3"></div>
                <img 
                  src={History2}
                  alt="Youth leaders at international forum representing global collaboration"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-sky-100">
                  <Globe className="w-8 h-8 text-sky-600" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Growth Sphere (TGS) was established in 2025 as the institutional response 
                  to the structural gaps observed throughout this foundational work.
                </p>
                
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-sky-600" />
                    The Decisive Moment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    During Benjamin's participation in high-level global forums—including the 
                    Venice School, the 2025 HISA Youth Fellowship at Oxford, the Youth Vision 
                    Assembly in Amsterdam, the Youth Dialogue Forum in Dubai, and the United 
                    Nations University Global Youth MIDORI Platform, where he was the only 
                    participant from Africa.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Across these spaces, a consistent pattern became evident: youth from Africa 
                  and the wider Global South were significantly underrepresented. While many 
                  possessed strong intellectual capacity and lived expertise, they often lacked 
                  access to mentorship, strategic guidance, and skills aligned with global 
                  selection and leadership ecosystems.
                </p>
              </div>
            </div>

            {/* The Response */}
            <div className="mt-16 bg-gradient-to-br from-sky-50 to-white p-8 md:p-12 rounded-2xl border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Response</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In response, Benjamin founded The Growth Sphere as a structured, action-oriented 
                ecosystem designed to convert potential into measurable outcomes. Joined by 
                <span className="font-semibold"> Alan Nonso</span> and 
                <span className="font-semibold"> Amira Puji Hastuti</span> as co-founders, TGS 
                was built to develop globally competitive youth through targeted skills training, 
                mentorship, and equitable access to opportunities grounded in local realities and 
                global standards.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sky-200">
                  <Users className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Mentorship</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sky-200">
                  <TrendingUp className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Skills Training</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sky-200">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Global Standards</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sky-200">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Local Realities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={el => sectionRefs.current['closing'] = el}
            className={`transition-all duration-1000 ${
              isVisible['closing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block p-4 bg-sky-100 rounded-full mb-6">
              <Globe className="w-8 h-8 text-sky-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From Grassroots to Global Impact
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our journey reflects a commitment to addressing systemic gaps through strategic 
              action. From planting trees in Goma to building bridges across continents, 
              The Growth Sphere continues to transform potential into measurable outcomes.
            </p>

            <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Story;