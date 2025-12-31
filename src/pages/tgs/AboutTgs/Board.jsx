import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeoHead from '../../../components/SeoHead.jsx';
import { Linkedin, Mail, X, ExternalLink } from 'lucide-react';
import Alan from '../../../assets/images/Alan.png';
import Amira from '../../../assets/images/Amira.jpeg';
import Bernice from '../../../assets/images/bernice.jpeg';
import Francis from '../../../assets/images/francis.jpeg';
import Idris from '../../../assets/images/idris.jpeg';
import Jubilant from '../../../assets/images/jubilant.jpeg';
import Benjamin from '../../../assets/images/Benjamin.jpg';
import Sophia from '../../../assets/images/Sophia.jpeg';
import Abel from '../../../assets/images/Abel.jpeg';
import BerniceS from '../../../assets/images/BerniceS.jpeg';
import Elsie from '../../../assets/images/Elsie.jpeg';
import FrancisK from '../../../assets/images/FrancisK.jpeg';
import Georges from '../../../assets/images/Georges.jpeg';
import Hariet from '../../../assets/images/Hariet.jpeg';
import Marthe from '../../../assets/images/Marthe.jpeg';
import Stephanie from '../../../assets/images/Stephanie.jpeg';

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
    name: 'Francis Muraguri',
    role: 'General Secretary',
    shortBio: 'Results-oriented project manager with expertise in planning and execution.',
    fullDescription: 'Results-oriented project manager with expertise in planning, execution, and impact measurement. Committed to delivering excellence in every initiative. Skilled in managing complex projects from conception to completion while ensuring alignment with organizational goals.',
    photo: Francis,
    linkedin: 'https://linkedin.com',
    email: 'francis@organization.org',
    tags: ['Project Management', 'Strategy', 'Impact Measurement']
  },
  
  {
    id: 4,
    name: 'Nonso Echendu Alan',
    role: 'Co-Founder & Research/Projects Director',
    shortBio: 'Strategic leader bridging research and execution to turn ideas into sustainable solutions.',
    fullDescription: 'Alan Nonso is an emerging data scientist and researcher, with a strong interdisciplinary background spanning statistics, data science, artificial intelligence, and bio-chemistry. Currently pursuing a Bachelor of Science in Statistics and Data Science at Strathmore University, where he is developing a solid foundation in data-driven problem solving and analytical thinking.',
    photo: Alan,
    linkedin:'https://alan-n-offical-portfolio.streamlit.app/',
    email: 'nonsoalan171417@gmail.com',
    tags: ['Data Science', 'AI', 'Research']
  },
  {
    id: 5,
    name: 'Muhammad Idris',
    role: 'Human Resources & Expansion Director',
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
    role: 'Finance & Administration Director',
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
    role: 'Marketing & Communication Director',
    shortBio: 'Creative communications expert building brand visibility and stakeholder engagement.',
    fullDescription: 'Jubilant Zulu is a dynamic legal scholar, youth leader, and emerging voice in law and business. Passionate about using law for transformation and social impact, she serves as Campus Director for the Millennium Fellowship, leading youth empowerment initiatives. As Country Director at The Lawrit Journal of Law, she advances legal research and dialogue across Africa.',
    photo: Jubilant,
    linkedin: 'https://linkedin.com',
    email: 'jubilant@organization.org',
    tags: ['Marketing', 'Legal Research', 'Youth Leadership']
  },
   {
    id: 8,
    name: 'Giovanni Mahasano',
    role: 'Co-Founder & IT/Programs Director',
    shortBio: 'Technology innovator driving digital transformation and program delivery.',
    fullDescription: 'The founder of GITU Technology, a Goma-based company driven by a passion for innovation, electronics, and artificial intelligence. His journey began at ITIG Don Bosco, where he completed his secondary studies in electronic engineering. Today, he continues to pursue his dream as a Bachelor student in Computer Science, combining academic growth with entrepreneurial vision to build technologies that inspire progress.',
    photo:'',
    linkedin:'https://www.linkedin.com/in/giovanni-mahasano-a07023345?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BD89eHwveTG21opDlu9UdAA%3D%3D',
    email: 'giovannimahasano@gmail.com',
    tags: ['Computer Science', 'AI', 'Electronic & Computer Engineer']
  },
];

const teamMembers = [
  {
    id: 9,
    name: 'Stephanie Andriamora',
    role: 'HR & Partnerships Manager',
    shortBio: 'Relationship builder connecting organizations with strategic partners.',
    fullDescription: ["Andriamoranantenaina Felantsoa Stéphanie is an accomplished professional in human resources and partnerships, currently serving as HR & Partnerships Manager. She brings extensive experience in organizational leadership, stakeholder engagement, and strategic relationship management. Stéphanie has a strong background in public law and political sciences and has held leadership positions, including President of the FONGOTRA UCM Club. She has also contributed as a public relations officer at FALAS Madagascar, and is an alumna of the Apire Leaders Program. As an ambassador for African Rebirth (2024–2025) and an active climate advocate, she combines professional expertise with a commitment to social impact and sustainable development."],
    photo: Stephanie,
    linkedin: 'https://linkedin.com',
    email: 'stephanie@organization.org',
    tags: ['HR', 'Partnerships', 'Talent Acquisition']
  },
  
  {
    id: 10,
    name: 'Sophia Madima',
    role: 'Internal Communication Officer',
    shortBio: 'Dedicated administrator with proven track record in governance and compliance.',
    fullDescription: 'Sophia Madima is a passionate advocate for justice, education, and social impact. Through participation in multiple moot court competitions, she has refined her legal reasoning, advocacy, and research skills. Based in Kenya, Sophia strives to advance access to education, empowerment, and equality, driving meaningful change within her community and beyond.',
    photo: Sophia,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Legal Advocacy', 'Education', 'Social Impact']
  },
   {
    id: 11,
    name: 'Abel Masirika',
    role: 'Program Research Assistant',
    shortBio: 'Research assistant focused on data-driven program evaluation and stakeholder insights.',
    fullDescription: 'Abel Masirika is passionate about chemistry, manufacturing, and innovation through emerging technologies. He is deeply committed to social and community development by sharing knowledge and values. Abel firmly believes that quality education, in all its forms, is the cornerstone of sustainable development and the foundation for building a peaceful and thriving society.',
    photo: Abel,
    linkedin: 'https://linkedin.com',
    email: 'abel@organization.org',
    tags: ['Research', 'Data Analysis', 'Impact Assessment', 'Stakeholder Engagement']
  },
   {
    id: 12,
    name: 'Bernice Aunita',
    role: 'Deputy Head of Project',
    shortBio: 'Finance professional supporting budgeting, compliance, and transparent program delivery.',
    fullDescription: 'Bernice Aunita is a finance professional with experience in nonprofit and humanitarian organizations, supporting financial management, budgeting, reporting, and compliance for impact-driven programs. Her work is closely aligned with human rights advocacy, climate change action, and community-focused development initiatives. She holds a Bachelor’s degree in Finance and has a strong interest in development finance, climate justice, governance, and the role of sound financial systems in advancing social and environmental accountability. Her professional focus centers on ensuring transparency, sustainability, and ethical stewardship of resources within advocacy and development organizations.',
    photo: BerniceS,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Finance', 'Compliance', 'Development Finance', 'Climate Justice']
  },
   {
    id: 13,
    name: 'Muchai Hariet',
    role: 'Social Media Manager',
    shortBio: 'Digital communicator crafting impactful narratives across social platforms.',
    fullDescription: 'Muchai Hariet is a passionate advocate for justice, education, and social impact. Through participation in multiple moot court competitions, she has refined her legal reasoning, advocacy, and research skills. Based in Kenya, Sophia strives to advance access to education, empowerment, and equality, driving meaningful change within her community and beyond.',
    photo: Hariet,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Social Media', 'Content Strategy', 'Digital Advocacy']
  },
   {
    id: 14,
    name: 'Kedibone Elsie',
    role: 'Events Cordinator',
    shortBio: 'Organizes high-impact events with strong coordination and stakeholder management.',
    fullDescription: 'Elsie is a dedicated legal professional pursuing an LLB, specializing in Education Law and International Human Rights Law. She possesses strong expertise in communication, problem-solving, and time management, with proficiency in Microsoft Office (Word, Excel, PowerPoint) and a proven ability to build effective interpersonal relationships. Highly adaptable and organized, she is committed to delivering quality outcomes while ensuring compliance with relevant regulations. Elsie plans to further her expertise through a Master’s in Labour Law.',
    photo: Elsie,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Event Management', 'Stakeholder Engagement', 'Communication']
  },
   {
    id: 15,
    name: 'Georges Bush ',
    role: 'Deputy Director of Marketing & Communication',
    shortBio: 'Marketing and design lead driving brand storytelling and campaign strategy.',
    fullDescription: 'George Bush Nyakundi is a Kenyan law trainee at the Catholic University of Eastern Africa and a passionate human rights advocate with a growing interest in technology and digital rights. He is part of the Jua Terms Campaign, an initiative focused on promoting simpler, clearer, and more transparent digital terms and conditions. Beyond law, George has strong skills in marketing and design, having played a key role in leading the campaign’s branding, content design, and marketing strategy. With experience both locally and internationally, he has worked with law firms in Kenya and served as a legal assistant and legal intern. George remains committed to advancing justice, innovation, and meaningful impact through law, advocacy, and creative communication.',
    photo: Georges,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Marketing', 'Brand Design', 'Digital Rights']
  },
   {
    id: 16,
    name: 'Mwenge Marthe',
    role: 'Project Officer',
    shortBio: 'Project officer integrating law, technology, and community engagement for impact.',
    fullDescription: 'Mwenge Tussi Marthe is a Public International Law lawyer dedicated to social justice, protection of vulnerable communities, and the intersection of law and emerging technologies. She has extensive experience in legal research, advocacy, and community engagement, integrating cultural diplomacy and artistic initiatives to promote collective memory and resilience. Mwenge has participated in international programs on climate, cybersecurity, and humanitarian law, and serves as founder of the “MÉMOIRE” Art Project. She combines expertise in law, project management, and intercultural communication with a strong commitment to inclusion, youth empowerment, and sustainable development.',
    photo: Marthe,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Project Management', 'Digital Rights', 'Community Engagement']
  },
   {
    id: 17,
    name: 'Francis Kamau',
    role: 'Research Associate',
    shortBio: 'Research associate supporting data collection, analysis, and knowledge outputs.',
    fullDescription: 'Research associate supporting data collection, analysis, and knowledge outputs for policy and program learning across teams.',
    photo: FrancisK,
    linkedin: 'https://linkedin.com',
    email: 'sophia@organization.org',
    tags: ['Research', 'Data Collection', 'Policy Analysis']
  },
];

/**
 * ELEGANT HOVER POPUP COMPONENT
 * Appears on hover/click and displays full professional description
 */
function ProfilePopup({ member, isVisible, position, onClose }) {
  const popupRef = useRef(null);

  // Handle click outside to close (desktop & mobile)
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
              
              <div className="relative p-6 max-h-[75vh] overflow-y-auto">
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
 * Now includes click popup functionality
 */
function BoardCard({ member, index }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);
  const cardRef = useRef(null);

  // Handle click for all devices
  const handleClick = () => {
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
        onClick={handleClick}
      >
        {/* Card Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/60 hover:border-sky-300 transition-all duration-500 hover:shadow-xl hover:shadow-sky-100/50 cursor-pointer">
          {/* Gradient Accent on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-sky-50/0 to-sky-100/0 transition-all duration-500" />
          
          {/* Click Indicator */}
          <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${isPopupVisible ? 'bg-sky-500' : 'bg-slate-300'}`} />

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
                    className="w-full h-full object-cover grayscale-[30%] transition-all duration-500"
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
                <span className="inline-flex items-center gap-1 text-sm text-sky-600 opacity-100 transition-opacity duration-300">
                  <span>Click to view</span>
                  <span className="text-sky-400">→</span>
                </span>
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
    <>
      <SeoHead
        title="Board of Directors | The Growth Sphere"
        description="Meet The Growth Sphere’s leadership team driving governance, strategy, and impact."
        ogTitle="Board of Directors | The Growth Sphere"
        ogDescription="Meet The Growth Sphere’s leadership team driving governance, strategy, and impact."
        ogImage="/tgs1.png"
      />
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
                Click on cards to view detailed profiles
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <BoardCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}