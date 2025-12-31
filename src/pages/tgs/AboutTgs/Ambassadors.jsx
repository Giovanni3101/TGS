import { useState, useEffect, useRef } from 'react';
import SeoHead from '../../../components/SeoHead.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, ExternalLink } from 'lucide-react';
import Mary from '../../../assets/images/Mary.jpeg';
import Beatrice from '../../../assets/images/Beatrice.jpeg';
import Gloria from '../../../assets/images/Gloria.jpeg';
import GloriaS from '../../../assets/images/GloriaS.jpeg';
import Taylor from '../../../assets/images/Taylor.jpeg';
import Richard from '../../../assets/images/Richard.jpeg';


/**
 * EXTENDED BOARD MEMBER DATA STRUCTURE
 * Added fullDescription for popup content
 */
const AmbassadorsMember = [
  {
    id: 1,
    name: 'Mary Teklay',
    role: 'TGS Ambassador - UK',
    fullDescription: [
				"Mary Teklay is a law student and human rights advocate from the United Kingdom.",
				"Her upbringing taught her the values of displacement, resilience, and justice, since both her parents were forced to leave their homes during the war in Ethiopia and Eritrea.",
				"She has volunteered at a Commercial Law Clinic, gaining firsthand experience supporting people with legal challenges.",
				"She completed a placement at Citizens Advice, helping clients access vital support.",
				"With experience in sales and teamwork, she has developed strong communication and collaborative skills.",
				"Passionate about creativity and storytelling, Mary uses narrative to bring real human experiences to life, highlight pressing social issues, and inspire action.",
				"Combining her legal knowledge, advocacy experience, and creative approach, she is committed to giving a voice to those who are often unheard and driving meaningful change."
			],
    photo: Mary,
    tags: ['Human Rights', 'Digital Rights', 'Youth Advocacy']
  },
  {
    id: 2,
    name: 'Beatrice Caldarone',
    role: 'TGS Ambassador - Italy',
    fullDescription: ["Beatrice Caldarone is an Italian activist dedicated to the preservation and promotion of cultural heritage.",
				" With an academic background in International Relations and Communication, she volunteered with the National Association Italian Partisans, a cultural and historical association in Italy that preserves the historical records of WWII partisans who fought against the fascist regime.",
				" There, she was responsible for the organisation and digitisation of the archival material, coordinated project proposals with the Directorate-General Archives, and secured €10,000 in funding for preservation initiatives of the archive heritage.",
				" Working with cultural institutes and nonprofit organizations across Italy, she developed content strategies, organized events and conferences, and supported policy-oriented initiatives.",
				" With the De Gasperi Foundation, she developed a research for the exhibition \"Servus Inutilis\", which has been showcased across 15+ cities. This year, she was chosen as Italian delegate at the World Bank Youth Summit to discuss youth involvement in the creation of economic opportunities and served as Young Ambassador Society Delegate to participate at the preparatory works of the UNFCCC SB62 for COP30,",
				" where she contributed to communication efforts focused on climate action and social inclusion."],
    photo: Beatrice,
    tags: ['Public Health', 'Youth Empowerment', 'Sustainability']
  },
  {
    id: 3,
    name: 'Gloria Solomon',
    role: 'TGS Ambassador- Nigeria',
    fullDescription: ["Glory Y. Solomon is a Nigerian law graduate and legal influencer in the media space, actively creating relatable legal content online that reaches thousands of young people.",
				"She is the team lead empowering over 300 female entrepreneurs across Africa with digital skills and financial literacy, in a partnership with IMPACTHER and Youth Making Impact.",
				"She has volunteered with organizations such as Pannyword Foundation and Prevail Foundation, leading outreach programs in IDP camps and campaigns on justice, governance, and social inclusion.",
				"Her online legal content has reached audiences of up to 130,000 people per post, simplifying complex issues into accessible knowledge for youth.",
				"Through her work, she has gained firsthand insight into how information and misinformation spread on social media, as well as the risks false content poses to communities.",
				"Understanding both the content creation side and the audience engagement side uniquely positions her to craft impactful awareness campaigns that safeguard young people’s right to accurate information in the AI era while bridging law and technology."],
    photo: Gloria,
    tags: ['Legal Education', 'Women\'s Empowerment', 'Digital Literacy', 'Social Media Advocacy']
  },
  
  {
    id: 4,
    name: 'Gloria Sisia',
    role: 'TGS Ambassador - Kenya',
    fullDescription: ["Gloria M. Sisia is a transformer and trailblazer for community-driven change, with a strong commitment to youth empowerment and inclusive leadership.",
                        "She has served in organizations such as FALAS, The Lawrit Journal of Law, the Reformation Community, the Embassy of Pakistan in Rwanda, and the OPPRC, experiences that have significantly strengthened her dedication to amplifying youth voices and advancing meaningful social impact.",        
                        "Gloria is passionate about fostering partnerships and developing initiatives that build skills, inspire innovation, and promote inclusive leadership. She firmly believes that young people from the Global South carry the resilience and creativity necessary to address today’s global challenges and is committed to ensuring their voices are heard on international platforms.",
                        ""],
    photo: GloriaS,
    tags: ['Youth Empowerment', 'Inclusive Leadership', 'Community Development', 'Global Advocacy']
  },
  {
    id: 5,
    name: 'Taylor Locke',
    role: 'TGS Ambassador - USA',
    fullDescription: ["Taylor Locke is an award-winning mental health advocate and international public speaker, committed to advancing social justice and mental health equity both locally and globally.",
                        "Before becoming involved with advocacy, Taylor was enrolled in a military scholarship program to work on U.S. Navy Nuclear Reactors, and graduated from Rensselaer Polytechnic Institute with honors in both mathematics and physics.",
                        "They were medically discharged from continued military service due to a history with mental illness and PTSD, and transitioned into the mental health field.  While still in college, they founded New York State Mental Health Week – a student-led initiative that united 11 universities and over 100 organizations to host more than 65 individual events across the state.",
                        ""],
   
    photo: Taylor,
    tags: ['Youth Empowerment', 'Inclusive Leadership', 'Community Development', 'Global Advocacy']
  },
   {
    id: 6,
    name: 'Richard Chibaka',
    role: 'TGS Ambassador - DRC',
    fullDescription: ["Richard Chibaka is a Congolese youth leader, regional advocate, and TGS (The Growth Sphere) Ambassador committed to youth empowerment and East African regional integration. He currently serves as the EAC Youth Ambassador to the Democratic Republic of Congo (DRC) and Regional Coordinator of the EAC Youth Ambassadors Platform (EACYAP), where he advances youth participation, peacebuilding, and inclusive governance across the region.",
                      "Richard is the Co-Founder of the Lumumba Leadership Forgium and the Coordination of Congolese Students in Uganda, leading initiatives that promote educational equity, leadership development, and support for displaced communities in Eastern Congo. A Fellow of the EAC Youth Fellowship Programme (Cohort II – 2024), he represents a new generation of African leaders dedicated to regional cooperation, socio-economic empowerment, and transformative leadership."],
   
    photo: Richard,
    tags: ['Youth Empowerment', 'Regional Integration', 'Peacebuilding', 'Inclusive Governance']
  },
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
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-sky-100/50 border border-sky-200/50 overflow-hidden max-h-[80vh]">
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
              <h3 className="text-lg md:text-xl text-slate-900 transition-colors duration-300">
                {member.name}
              </h3>

              {/* Role */}
              <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-base transition-all duration-300">
                {member.role}
              </div>

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
        title="Ambassadors | The Growth Sphere"
        description="Explore The Growth Sphere’s ambassadors championing youth empowerment and community impact globally."
        ogTitle="Ambassadors | The Growth Sphere"
        ogDescription="Explore The Growth Sphere’s ambassadors championing youth empowerment and community impact globally."
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
              Our Ambassadors
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our ambassadors are young leaders driving change within their communities, championing youth voices and human rights on international platforms such as conferences and fellowships, while fostering local connections, mentoring peers, and leading impactful initiatives that inspire positive, sustainable change.
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
              {AmbassadorsMember.map((member, index) => (
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