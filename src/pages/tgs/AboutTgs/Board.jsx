import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, ExternalLink } from 'lucide-react';
import Alan from '../../../assets/images/Alan.png';
import Amira from '../../../assets/images/Amira.jpeg';
import Bernice from '../../../assets/images/bernice.jpeg';
import Francis from '../../../assets/images/francis.jpeg';
import Idris from '../../../assets/images/idris.jpeg';
import Jubilant from '../../../assets/images/jubilant.jpeg';
import Benjamin from '../../../assets/images/Benjamin.jpg';

/**
 * EXTENDED BOARD MEMBER DATA STRUCTURE
 * Added fullDescription for popup content
 */
const boardMembers = [
  {
    id: 1,
    name: 'Kyamoneka Mpey Benjamin',
    role: 'Founder & Executive Director',
    shortBio: 'Visionary leader with over 7 years of experience in organizational development and strategic planning.',
    fullDescription: 'Kyamoneka Mpey Benjamin is a Congolese human rights defender, youth advocate, and emerging legal professional based in Nairobi, Kenya. He is deeply committed to advancing human rights through capacity-building, education, and youth-led innovation, with a particular focus on fostering inclusive and safe civic and digital spaces for young people. Currently serves as Research Lead for the Privacy First Campaign at Amnesty International Kenya.',
    photo: Benjamin,
    linkedin: 'https://linkedin.com',
    email: 'benjamin@organization.org',
    tags: ['Human Rights', 'Digital Rights', 'Youth Advocacy']
  },
  {
    id: 2,
    name: 'Amira Puji Hastuti',
    role: 'Co-Founder & Deputy Executive Director',
    shortBio: 'Strategic thinker specializing in international partnerships and program design.',
    fullDescription: 'Amira Puji Hastuti is an ambitious and dedicated Indonesian youth leader and third-year Nutrition student at the University of Indonesia, majoring in Public Health. Passionate about health, sustainability, and youth empowerment, she has earned numerous international awards. As Founder and President of Youth in Public Health, she leads initiatives focused on stunting prevention, women\'s empowerment, and community nutrition awareness across Indonesia.',
    photo: Amira,
    linkedin: 'https://linkedin.com',
    email: 'amira@organization.org',
    tags: ['Public Health', 'Youth Empowerment', 'Sustainability']
  },
  {
    id: 3,
    name: 'Sophia Madima',
    role: 'General Secretary',
    shortBio: 'Dedicated administrator with proven track record in governance and compliance.',
    fullDescription: 'Sophia Madima is a passionate advocate for justice, education, and social impact. Through participation in multiple moot court competitions, she has refined her legal reasoning, advocacy, and research skills. Based in Kenya, Sophia strives to advance access to education, empowerment, and equality, driving meaningful change within her community and beyond.',
    photo: {},
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Legal Advocacy', 'Education', 'Social Impact']
  },
  {
    id: 4,
    name: 'Nonso Echendu Alan',
    role: 'Co-Founder & Director of IT/Programs',
    shortBio: 'Technology innovator driving digital transformation and program delivery.',
    fullDescription: 'Alan Nonso is an emerging data scientist and researcher, with a strong interdisciplinary background spanning statistics, data science, artificial intelligence, and bio-chemistry. Currently pursuing a Bachelor of Science in Statistics and Data Science at Strathmore University, where he is developing a solid foundation in data-driven problem solving and analytical thinking.',
    photo: Alan,
    linkedin: 'https://linkedin.com',
    email: 'nonso@organization.org',
    tags: ['Data Science', 'AI', 'Research']
  },
  {
    id: 5,
    name: 'Muhammad Idris',
    role: 'Director of Human Resources & Expansion',
    shortBio: 'People-focused leader committed to talent development and organizational growth.',
    fullDescription: 'Muhammad Idris is a Rohingya human rights activist and advocate originally from Rakhine State, Myanmar. He fled his homeland in 2017 due to the genocide committed against the Rohingya by the Myanmar government. Since then, he has dedicated his life to advancing justice, accountability, and equality for the Rohingya community. He is the Founder and Executive Director of the Refugees Empowerment Network (REN).',
    photo: Idris,
    linkedin: 'https://linkedin.com',
    email: 'muhammad@organization.org',
    tags: ['Human Rights', 'Refugee Advocacy', 'Social Justice']
  },
  {
    id: 6,
    name: 'Bernice Gladys Wambui',
    role: 'Director of Finance & Administration',
    shortBio: 'Financial strategist ensuring fiscal responsibility and sustainable growth.',
    fullDescription: 'Bernice Gladys Wambui is a passionate human rights advocate and environmental enthusiast committed to empowering individuals with knowledge of their rights and responsibilities. Dedicated to promoting access to justice and equal opportunity, she strives to create lasting community impact. Bernice has also served as Treasurer for Legal Alliance Associates, a student-led law firm.',
    photo: Bernice,
    linkedin: 'https://linkedin.com',
    email: 'bernice@organization.org',
    tags: ['Finance', 'Human Rights', 'Environmental Advocacy']
  },
  {
    id: 7,
    name: 'Jubilant Zulu',
    role: 'Director of Marketing & Communication',
    shortBio: 'Creative communications expert building brand visibility and stakeholder engagement.',
    fullDescription: 'Jubilant Zulu is a dynamic legal scholar, youth leader, and emerging voice in law and business. Passionate about using law for transformation and social impact, she serves as Campus Director for the Millennium Fellowship, leading youth empowerment initiatives. As Country Director at The Lawrit Journal of Law, she advances legal research and dialogue across Africa.',
    photo: Jubilant,
    linkedin: 'https://linkedin.com',
    email: 'jubilant@organization.org',
    tags: ['Marketing', 'Legal Research', 'Youth Leadership']
  }
];

const teamMembers = [
  {
    id: 8,
    name: 'Stephanie Andriamora',
    role: 'HR & Partnerships Manager',
    shortBio: 'Relationship builder connecting organizations with strategic partners.',
    fullDescription: 'Relationship builder connecting organizations with strategic partners. Dedicated to cultivating meaningful collaborations and talent acquisition. Experienced in developing partnerships that drive organizational growth and impact.',
    photo: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjM4NzQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    linkedin: 'https://linkedin.com',
    email: 'stephanie@organization.org',
    tags: ['HR', 'Partnerships', 'Talent Acquisition']
  },
  {
    id: 9,
    name: 'Francis Muraguri',
    role: 'Head of Projects',
    shortBio: 'Results-oriented project manager with expertise in planning and execution.',
    fullDescription: 'Results-oriented project manager with expertise in planning, execution, and impact measurement. Committed to delivering excellence in every initiative. Skilled in managing complex projects from conception to completion while ensuring alignment with organizational goals.',
    photo: Francis,
    linkedin: 'https://linkedin.com',
    email: 'francis@organization.org',
    tags: ['Project Management', 'Strategy', 'Impact Measurement']
  }
];

/**
 * ELEGANT HOVER POPUP COMPONENT
 * Appears on hover/click and displays full professional description
 */
function ProfilePopup({ member, isVisible, position, onClose }) {
  const popupRef = useRef(null);

  // Handle click outside to close (for mobile)
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isVisible, onClose]);

  // Calculate optimal position
  const getPopupPosition = () => {
    if (!position) return {};
    
    const { x, y, width, height } = position;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Default to right side on desktop
    let left = x + width + 20;
    let top = y;
    
    // If popup would overflow right edge, show on left
    if (left + 400 > viewportWidth) {
      left = x - 420;
    }
    
    // If popup would overflow bottom, adjust top
    if (top + 500 > viewportHeight) {
      top = viewportHeight - 550;
    }
    
    // Ensure popup stays within viewport
    left = Math.max(20, Math.min(left, viewportWidth - 420));
    top = Math.max(20, Math.min(top, viewportHeight - 550));
    
    return {
      left: `${left}px`,
      top: `${top}px`,
      position: 'fixed'
    };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Popup Container */}
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1] // Custom easing for premium feel
            }}
            style={getPopupPosition()}
            className="fixed z-50 w-full max-w-sm md:max-w-md"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-sky-100/50 border border-sky-200/50 overflow-hidden">
              {/* Gradient Header */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white to-sky-50/20" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white transition-all duration-200"
                aria-label="Close profile"
              >
                <X className="w-4 h-4 text-slate-600" />
              </button>
              
              <div className="relative p-6">
                {/* Profile Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                      {member.role}
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                {member.tags && member.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Full Description */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    Professional Profile
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {member.fullDescription}
                  </p>
                </div>
                
                {/* Contact & Social Links */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    Contact & Links
                  </h4>
                  <div className="flex items-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-all duration-200 group/link"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg transition-all duration-200 group/link"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Email</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative Bottom Gradient */}
              <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * ENHANCED BOARD MEMBER CARD COMPONENT
 * Now includes hover popup functionality
 */
function BoardCard({ member, index }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);
  const cardRef = useRef(null);
  let hoverTimeout;

  // Handle hover events with delay for smooth UX
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) { // Desktop only
      hoverTimeout = setTimeout(() => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          setPopupPosition({
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height
          });
          setIsPopupVisible(true);
        }
      }, 300); // 300ms delay for intentional hover
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    if (window.innerWidth >= 768) {
      setIsPopupVisible(false);
    }
  };

  // Handle click for mobile
  const handleClick = () => {
    if (window.innerWidth < 768) {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setPopupPosition({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
      setIsPopupVisible(!isPopupVisible);
    }
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Card Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/60 hover:border-sky-300 transition-all duration-500 hover:shadow-xl hover:shadow-sky-100/50 cursor-pointer">
          {/* Gradient Accent on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-sky-50/0 to-sky-100/0 group-hover:from-sky-50/50 group-hover:to-sky-100/30 transition-all duration-500" />
          
          {/* Hover Indicator */}
          <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${isPopupVisible ? 'bg-sky-500' : 'bg-slate-300 group-hover:bg-sky-400'}`} />

          <div className="relative p-8">
            {/* Profile Photo */}
            <div className="mb-6 relative">
              <div className="relative w-32 h-32 mx-auto">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <motion.img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
            </div>

            {/* Member Info */}
            <div className="text-center space-y-3">
              {/* Name */}
              <h3 className="text-lg md:text-xl text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                {member.name}
              </h3>

              {/* Role */}
              <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-base transition-all duration-300 group-hover:bg-sky-100">
                {member.role}
              </div>

              {/* Short Bio */}
              <p className="text-slate-600 text-base leading-relaxed min-h-[60px]">
                {member.shortBio}
              </p>

              {/* View More Hint */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-sm text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="md:hidden">Tap to view</span>
                  <span className="hidden md:inline">Hover to view</span>
                  <span className="text-sky-400">→</span>
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 group/link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-4 h-4 text-slate-600 group-hover/link:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 group/link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-4 h-4 text-slate-600 group-hover/link:text-white transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profile Popup */}
      <ProfilePopup
        member={member}
        isVisible={isPopupVisible}
        position={popupPosition}
        onClose={() => setIsPopupVisible(false)}
      />
    </>
  );
}

/**
 * MAIN APP COMPONENT - OUR BOARD PAGE
 */
export default function Board() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(14, 165, 233) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sky-200 rounded-full mb-6 shadow-sm"
            >
              <div className="w-2 h-2 bg-sky-500 rounded-full" />
              <span className="text-sky-700 text-base md:text-lg tracking-wide">Leadership & Governance</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-900"
            >
              Board of Directors
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our board comprises visionary leaders dedicated to advancing our mission through strategic oversight, 
              ethical governance, and unwavering commitment to creating lasting positive impact.
              <span className="block mt-2 text-sm text-sky-600">
                Hover over cards or tap on mobile to view detailed profiles
              </span>
            </motion.p>
          </div>
        </motion.header>

        {/* Board Members Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <BoardCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 py-2 bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 text-slate-500 text-lg tracking-wide">
                  Management Team
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <BoardCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}