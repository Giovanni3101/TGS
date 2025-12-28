import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target, Eye, Globe, Users, BookOpen, TrendingUp, Award,
  MapPin, Heart, ArrowRight, Sparkles, ChevronRight, CheckCircle,
  Play, Zap, Target as TargetIcon, Globe as GlobeIcon, Quote
} from 'lucide-react';
import { URLS } from '../../../utils/urls.js';




const statsData = [
  { value: '100+', label: 'Youth Empowered', icon: <Users className="w-10 h-10" /> },
  { value: '30+', label: 'Countries Reached', icon: <MapPin className="w-10 h-10" /> },
  { value: '500+', label: 'Opportunities Shared', icon: <TrendingUp className="w-10 h-10" /> },
  { value: '85%', label: 'Success Rate', icon: <Award className="w-10 h-10" /> }
];

const impactMetrics = [
  { number: "32", label: "Months of Operation", description: "Serving youth since 2022" },
  { number: "1500+", label: "Hours of Training", description: "Professional development" },
  { number: "85%", label: "Satisfaction Rate", description: "From program participants" },
  { number: "10+", label: "Partner Organizations", description: "Global collaborations" }
];
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&auto=format&fit=crop&q=80",
    alt: "Diverse students collaborating in workshop",
    caption: "Global Youth Collaboration"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    alt: "Students in leadership training",
    caption: "Leadership Development"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    alt: "Team building activity",
    caption: "Team Building & Networking"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop&q=80",
    alt: "Professional mentorship session",
    caption: "Expert Mentorship"
  }
];

const valuesData = [
  {
    icon: <Globe className="w-9 h-9" />,
    title: "Access to Opportunities",
    description: "Facilitating youth access to fellowships, internships, scholarships, jobs, and other opportunities at both local and international levels to unlock their potential.",
    gradient: "from-sky-400 to-sky-600"
  },
  {
    icon: <BookOpen className="w-9 h-9" />,
    title: "Training & Capacity Building",
    description: "Delivering tailored programs through TGS Academy to strengthen leadership, personal growth, and professional skills for lasting impact.",
    gradient: "from-sky-500 to-sky-700"
  },
  {
    icon: <Users className="w-9 h-9" />,
    title: "Consultation & Application Guidance",
    description: "Providing personalized consultation to assess educational and professional growth, offering tailored recommendations, and guiding applicants through every stage of the process.",
    gradient: "from-sky-600 to-sky-800"
  },
  {
    icon: <Heart className="w-9 h-9" />,
    title: "Digital Community & Youth Advocacy",
    description: "Building an inclusive digital platform where young people can access opportunities, collaborate, and grow as a global community of changemakers.",
    gradient: "from-sky-500 to-sky-700"
  },
  {
    icon: <Target className="w-9 h-9" />,
    title: "Global Partnerships & Sustainable Development",
    description: "Collaborating with international organizations and institutions to amplify youth voices and foster equitable access worldwide, aligned with the SDGs.",
    gradient: "from-sky-400 to-sky-600"
  }
];

const Mission = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Raleway', sans-serif" }}>

      {/* Hero Section */}
      <motion.section
      style={{ opacity, scale }}
      className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 overflow-hidden"
      >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text Content */}
            <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-white space-y-10"
            >
            <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.15em] border border-white/20 shadow-lg"
            >
            <Sparkles className="w-4 h-4" />
            Global Youth Empowerment
          </motion.span>

          <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
            Talent Knows
            <br />
            No Borders.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-sky-200 leading-[1.3] tracking-tight italic">
            Opportunity Should Not Either.
          </p>
        </motion.div>

        <motion.p
        variants={fadeInUp}
        className="text-lg sm:text-xl lg:text-2xl text-sky-50/90 leading-[1.75] max-w-2xl font-light"
        >
        The Growth Sphere bridges the opportunity gap for youth across the Global South and beyond, providing tools, training, and access to transform potential into impact.
      </motion.p>

      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
      <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => window.open(URLS.opportunitiesUrl, '_blank')}
      className="bg-white text-sky-950 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-3"
      >
      Get Started
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </motion.button>

    <motion.button
    whileHover={{ scale: 1.03, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300"
    >
    Learn More
  </motion.button>
</motion.div>
</motion.div>

{/* Image Carousel */}
<motion.div
variants={scaleIn}
initial="hidden"
animate="visible"
className="relative"
>
<div className="relative rounded-[2rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] aspect-square">
  {images.map((image, index) => (
    <motion.img
    key={image.id}
    src={image.url}
    alt={image.alt}
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{
        opacity: currentImageIndex === index ? 1 : 0,
        scale: currentImageIndex === index ? 1 : 1.1
    }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="absolute inset-0 w-full h-full object-cover"
    />
))}
<div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent"></div>

  {/* Decorative Border */}
<div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10"></div>
</div>

{/* Image Indicators */}
<div className="flex justify-center gap-3 mt-8">
  {images.map((_, index) => (
    <motion.button
    key={index}
    onClick={() => setCurrentImageIndex(index)}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`h-2.5 rounded-full transition-all duration-500 ${
      currentImageIndex === index ? 'w-12 bg-white shadow-lg' : 'w-2.5 bg-white/30'
    }`}
    />
))}
</div>
</motion.div>
</div>
</div>
</motion.section>

{/* Stats Section */}
<section className="py-0 bg-gradient-to-b from-white to-sky-50/30 relative overflow-hidden" style={{paddingBottom:0, paddingTop:0}}>

  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "0px" }}
  variants={staggerContainer}
  className="max-w-7xl mx-auto px-4 flex gap-20 flex-col items-center py-20"
  >
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
    {statsData.map((stat, index) => (
      <motion.div
      key={index}
      variants={fadeInUp}
      className="text-center group"
      >
      <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="inline-flex justify-center items-center mb-2 sm:mb-3 text-sky-600  p-3 sm:p-5 "
      >
      {stat.icon}
    </motion.div>
    <motion.div
    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-sky-950 mb-2 sm:mb-3 tracking-tight"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
    >
    {stat.value}
  </motion.div>
<div className="text-sky-700 text-sm sm:text-base lg:text-lg font-medium tracking-wide">{stat.label}</div>
</motion.div>
))}
</div>
</motion.div>
</section>

{/* Mission Section - Avec image */}
<section className="py-16 sm:py-24 bg-white relative overflow-hidden w-full " style={{paddingBottom:0, paddingTop:0}}>
<div className="absolute top-0 left-0 w-full  h-1 "></div>

  <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row-reverse items-center py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Mission Content */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromLeft}
      className="space-y-6 sm:space-y-8"
      >
      <div className="flex items-center gap-4">
        <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-sky-500 to-sky-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0"
        >
        <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.div>
      <div>
      <div className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider mb-1">Our Purpose</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-950">Mission</h2>
      </div>
    </div>

    <motion.div
    whileHover={{ x: 8 }}
    className="bg-gradient-to-r from-sky-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-sky-500 shadow-sm"
    >
    <div className="flex items-start gap-3">
      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 mt-1 flex-shrink-0" />
      <p className="text-base sm:text-lg lg:text-xl text-sky-950 leading-relaxed font-medium italic">
        "By bridging gaps in access and representation, we prepare young people to thrive as changemakers in a more inclusive and sustainable world."
      </p>
    </div>
  </motion.div>

  <div className="space-y-4 text-black leading-relaxed text-sm sm:text-base">
    <p>
      The Growth Sphere empowers youth by equipping them with leadership and personal development skills through tailored training via TGS Academy.
    </p>
    <p>
      We connect young people to global opportunities, mentorship, and strategic guidance, preparing them to thrive as changemakers regardless of their origin.
    </p>
  </div>

  <div className="pt-4 sm:pt-6 border-t border-sky-100">
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {["Leadership Training", "Global Access", "Personal Growth", "Sustainable Impact"].map((item, idx) => (
        <motion.span
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
        >
        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
        {item}
      </motion.span>
))}
</div>
</div>
</motion.div>

{/* Mission Image */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={slideInFromRight}
className="relative"
>
<div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
  <img
  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
  alt="Students collaborating in mission workshop"
  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
  />
<div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-sky-900/20 to-transparent"></div>
  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
  <p className="text-white text-base sm:text-lg font-semibold">Empowering Future Leaders</p>
  <p className="text-sky-200 text-sm">Hands-on training and mentorship</p>
  </div>
</div>

{/* Decorative Element */}
<div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl sm:rounded-2xl -z-10"></div>
</motion.div>
</div>
</div>
</section>

{/* Vision Section - Avec image */}
<section className="py-16 sm:py-24 bg-gradient-to-bl from-sky-900 via-white to-sky-50/30 relative overflow-hidden w-full " style={{paddingBottom:0, paddingTop:0}}>
  <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row- reverse items-center py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Vision Image */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromLeft}
      className="relative lg:order-2"
      >
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
        <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
        alt="Vision for global youth empowerment"
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-sky-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-base sm:text-lg font-semibold">Global Community Building</p>
        <p className="text-sky-200 text-sm">Connecting changemakers worldwide</p>
        </div>
      </div>

      {/* Decorative Element */}
    <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl sm:rounded-2xl -z-10"></div>
    </motion.div>

    {/* Vision Content */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={slideInFromRight}
    className="space-y-6 sm:space-y-8 lg:order-1"
    >
    <div className="flex items-center gap-4">
      <motion.div
      whileHover={{ rotate: -360 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-sky-500 to-sky-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0"
      >
      <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    </motion.div>
    <div>
    <div className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider mb-1">Our Aspiration</div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-950">Vision</h2>
    </div>
  </div>

  <motion.div
  whileHover={{ x: -8 }}
  className="bg-gradient-to-r from-white to-sky-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-r-4 border-sky-500 shadow-sm"
  >
  <div className="flex items-start gap-3">
    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 mt-1 flex-shrink-0" />
    <p className="text-base sm:text-lg lg:text-xl text-sky-950 leading-relaxed font-medium italic">
      "We equip young people with skills, mentorship, and opportunities through education and personal development, fostering the next generation of leaders."
    </p>
  </div>
</motion.div>

<div className="space-y-4 text-black leading-relaxed text-sm sm:text-base">
  <p>
    To become a leading global youth empowerment platform, rooted in the Global South yet inclusive of all regions.
  </p>
  <p>
    We foster the next generation of leaders and changemakers who will drive sustainable impact across communities worldwide.
  </p>
</div>

<div className="pt-4 sm:pt-6 border-t border-sky-100">
  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    {impactMetrics.map((metric, idx) => (
      <motion.div
      key={idx}
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-sky-100"
      >
    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-700">{metric.number}</div>
    <div className="text-xs sm:text-sm font-semibold text-sky-900">{metric.label}</div>
    <div className="text-xs text-sky-600 mt-1">{metric.description}</div>
    </motion.div>
))}
</div>
</div>
</motion.div>
</div>
</div>
</section>


{/* Core Values Section */}
<section className="py-32 bg-white relative overflow-hidden" style={{paddingBottom:10, paddingTop:0}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.03),transparent_50%)]"></div>

  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
  className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10"
  >
  <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sky-950 leading-[1.1] tracking-tight">
    Our Core Values
  </h2>
  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
    These five pillars guide everything we do at The Growth Sphere
  </p>
</motion.div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
  {valuesData.map((value, index) => (
    <motion.div
    key={index}
    variants={fadeInUp}
    whileHover={{ y: -12, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    className="group relative"
    >
    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-sky-100 hover:border-sky-300 shadow-lg shadow-sky-50 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 h-full">
      {/* Gradient Background on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>

      <div className="relative z-10 space-y-4 sm:space-y-6">
        <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.gradient} rounded-xl sm:rounded-2xl text-white shadow-xl`}
        >
        {value.icon}
      </motion.div>

      <h3 className="text-xl sm:text-2xl font-bold text-sky-950 leading-tight tracking-tight">
        {value.title}
      </h3>

      <p className="text-base sm:text-lg text-black leading-[1.75] font-light">
        {value.description}
      </p>
    </div>
  </div>
</motion.div>
))}
</div>
</motion.div>
</section>

{/* Call to Action */}
<section className="py-32 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
    <motion.div
    animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
    }}
    transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
    }}
    className="absolute inset-0 bg-gradient-to-br from-sky-600/10 via-transparent to-sky-400/10"
    style={{ backgroundSize: '400% 400%' }}
    />
  </div>

  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10"
  >
  <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight">
    Ready to Join Our Mission?
  </h2>

  <p className="text-lg sm:text-xl lg:text-2xl text-sky-100 leading-[1.75] max-w-3xl mx-auto font-light">
    Become part of a global movement that's transforming youth opportunities and creating lasting change across the Global South and beyond.
  </p>
</motion.div>

<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-6 sm:pt-8">
<motion.button
whileHover={{ scale: 1.05, y: -3 }}
whileTap={{ scale: 0.97 }}
className="bg-white text-sky-950 px-10 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg shadow-[0_20px_50px_-12px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_60px_-12px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
onClick={() => window.open(URLS.tgsAcademyUrl, '_blank')}
>
Get Involved
<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
</motion.button>

<motion.button
whileHover={{ scale: 1.05, y: -3 }}
whileTap={{ scale: 0.97 }}
className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
>
Learn More
</motion.button>
</motion.div>
</motion.div>
</section>
</div>
);
};

export default Mission;