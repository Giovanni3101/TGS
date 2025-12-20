import React from "react";
import { useState, useEffect } from "react";
import { Typography, Card, Row, Col } from "antd";
import { Target, Eye, Globe, Users, BookOpen, TrendingUp, Award, MapPin, Heart} from 'lucide-react';

const { Title, Paragraph } = Typography;

const statsData = [
  { value: '100+', label: 'Youth Empowered', icon: <Users className="w-8 h-8" /> },
  { value: '30+', label: 'Countries Reached', icon: <MapPin className="w-8 h-8" /> },
  { value: '500+', label: 'Opportunities Shared', icon: <TrendingUp className="w-8 h-8" /> },
  { value: '85%', label: 'Success Rate', icon: <Award className="w-8 h-8" /> }
];
const images = [
  { id:1,
  url: "https://images.pexels.com/photos/6147398/pexels-photo-6147398.jpeg?cs=srgb&dl=pexels-keira-burton-6147398.jpg&fm=jpg",
  alt: "Étudiants multiraciaux étudiant ensemble"
},
{ id:2,
url: "https://images.pexels.com/photos/6655508/pexels-photo-6655508.jpeg?cs=srgb&dl=pexels-rdne-6655508.jpg&fm=jpg",
alt: "Filles apprenant le tir à l'arc"
},
{ id:3,
url: "https://images.pexels.com/photos/5896917/pexels-photo-5896917.jpeg?cs=srgb&dl=pexels-mary-taylor-5896917.jpg&fm=jpg",
alt: "Écolières avec manuel près d'un bus"
},
{ id:4,
url: "https://images.pexels.com/photos/7869074/pexels-photo-7869074.jpeg?cs=srgb&dl=pexels-vanessa-loring-7869074.jpg&fm=jpg",
alt: "Fille tenant un kit de robotique"
},
{ id:5,
url: "https://images.pexels.com/photos/10637661/pexels-photo-10637661.jpeg?cs=srgb&dl=pexels-ron-lach-10637661.jpg&fm=jpg",
alt: "Groupe d'étudiants divers en uniforme vert"
},

]
const Mission = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const valuesData = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ACCESS TO OPPORTUNITIES",
      description:
        "Facilitating youth access to fellowships, internships, scholarships, jobs, and other opportunities at both local and international levels to unlock their potential.",
        color: "blue",
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "TRAINING & CAPACITY BUILDING",
        description:
          "Delivering tailored programs through TGS Academy to strengthen leadership, personal growth, and professional skills for lasting impact.",
          color: "green",
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "CONSULTATION & APPLICATION GUIDANCE",
          description:
            "Providing personalized consultation to assess educational and professional growth, offering tailored recommendations, and guiding applicants through every stage of the process to help them stand out in competitive opportunities and boost success rates.",
            color: "purple",
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: "DIGITAL COMMUNITY & YOUTH ADvOCACY",
            description:
              "Building an inclusive digital platform where young people can access opportunities, collaborate, and grow as a global community of changemakers, while amplifying their voices in leadership, innovation, and policy spaces to ensure youth representation in shaping the future.",
              color: "red",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "GLOBAL PARTNERSHIPS & SUSTAINABLE DEVELOPMENT",
              description:
                "Collaborating with international organizations and institutions to amplify youth voices and foster equitable access worldwide, while aligning all initiatives with the Sustainable Development Goals (SDGs) to ensure meaningful and lasting change.",
                color: "orange",
              },
            ];

            const getColorClasses = (color) => {
              const colors = {
                blue: {
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                  icon: "text-blue-600",
                  hover: "hover:border-blue-400",
                },
                green: {
                  bg: "bg-green-50",
                  border: "border-green-200",
                  icon: "text-green-600",
                  hover: "hover:border-green-400",
                },
                purple: {
                  bg: "bg-purple-50",
                  border: "border-purple-200",
                  icon: "text-purple-600",
                  hover: "hover:border-purple-400",
                },
                red: {
                  bg: "bg-red-50",
                  border: "border-red-200",
                  icon: "text-red-600",
                  hover: "hover:border-red-400",
                },
                orange: {
                  bg: "bg-orange-50",
                  border: "border-orange-200",
                  icon: "text-orange-600",
                  hover: "hover:border-orange-400",
                },
              };
              return colors[color] || colors.blue;
            };


            useEffect(() => {
              const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
              }, 7000);
              return () => clearInterval(interval);
            }, []);

            return (
              <section
              className="min-h-[70vh] md:min-h-[90vh] flex flex-col items-center justify-center bg-cover bg-center bg-fixed relative overflow-hidden"
              style={{ fontFamily: "'Raleway', sans-serif" }}>

              {/* Head Section - inchangée */}
              <div className="head w-full bg-gradient-to-r from-white via-teal-700 to-sky-900" style={{marginTop: -250, paddingTop:100}}>
                <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row items-center py-20 " style={{marginTop:250}}>
                  <div className="head-text text-center md:text-left max-w-3xl flex-1">
                    <span className="bg-sky-900 mb-6 px-6 py-2 rounded-full text-white text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Poppins' }}>
                      Global Youth Empowerment
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6 text-teal-900" style={{ fontFamily: 'Poppins' }}>
                      Talent Knows No Borders.<br />
                    <span className="text-black font-italic text-3xl md:text-4xl " style={{ fontFamily: 'Poppins' }}>Opportunity Should Not Either.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-12">
                      The Growth Sphere bridges the opportunity gap for youth across the Global South and beyond,
                      providing tools, training, and access to transform potential into impact.
                    </p>
                  </div>
                  <div className="head-images flex-1">
                    <img
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].alt}
                    style={{ width: '500px', height: '500px', fit: 'cover', borderRadius: '10px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Section - maintenant en dessous de la div head */}
              <div className="w-full py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
                  {statsData.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3 text-teal-900">
                        {stat.icon}
                      </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-teal-900" style={{ fontFamily: 'Poppins' }}>{stat.value}</div>
                    <div className="text-teal-900 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>{stat.label}</div>
                    </div>
              ))}
            </div>
          </div>

          {/* our mission and vision section */}
          <div className="Mission w-full bg-gradient-to-br from-sky-900 via-white to-white">
            <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row-reverse items-center py-20 " >
              <div className="head-text text-center md:text-left max-w-3xl flex-1">
                <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mb-4 ">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <Title
                className="text-5xl md:text-6xl font-bold mb-6 mt-6 text-sky-900"
                style={{ fontFamily: "'Poppins', serif" }}
                >
                Our Mission
              </Title>
              <div className="bg-sky-50 rounded-xl p-4 border-l-4 border-blue-500 mb-6">
                <p className="text-base text-gray-700 italic">
                  "By bridging gaps in access and representation, we prepare young people to thrive as changemakers in a more inclusive and sustainable world."
                </p>
              </div>
              <p
              className= "text-xl md:text-1xl text-black max-w-2xl mx-auto leading-relaxed mb-12 text-justify"
              style={{ fontFamily: "'Raleway', sans-serif" }}
              >
              The mission of TGS is to empower youth by equipping them with
              leadership and personal development skills, providing tailored
              training through the TGS Academy, and connecting them to global
              opportunities, mentorship, and strategic guidance. By bridging
              gaps in access and representation, TGS prepares young people,
              regardless of origin, to thrive as changemakers in a more
              inclusive and sustainable world.
            </p>

          </div>
          <div className="Mission-image flex-1">
            <img
            src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjYxNTIwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mission Illustration"
            style={{ width: '600px', height: '500px', fit: 'cover', borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>

      {/* our mission and vision section */}
      <div className="Vision w-full bg-gradient-to-tl from-teal-900 via-white to-white" >
        <div className="max-w-7xl mx-auto px-4 flex gap-20 flex-col md:flex-row items-center py-20" style={{ paddingTop:0}}>
          <div className="head-text text-center md:text-left max-w-3xl flex-1">
            <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mb-4 ">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <Title
            className="text-5xl md:text-6xl font-bold mb-6 mt-6 text-teal-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            >
            Our Vision
          </Title>
          <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500 mb-6">
            <p className="text-base text-gray-700 italic">
              "We equip young people with skills, mentorship, and opportunities through education and personal development, fostering the next generation of leaders."
            </p>
          </div>
          <p
          className= "text-xl md:text-1xl text-black max-w-2xl mx-auto leading-relaxed mb-12 text-justify"
          style={{ fontFamily: "'Raleway', sans-serif" }}
          >
          Becoming a leading global youth empowerment platform, rooted in
          the Global South yet inclusive of all regions, equipping young
          people with skills, mentorship, and opportunities through
          training, education, and personal development, while fostering
          the next generation of leaders and changemakers.
        </p>

      </div>
      <div className="Mission-image flex-1">
        <img
        src="https://plus.unsplash.com/premium_photo-1661645672144-de1e08be7473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhhcHB5JTIwcGVyc29ucyUyMHNraWxsZWR8ZW58MHx8MHx8fDA%3D"
        alt="Vision Illustration"
        style={{ width: '600px', height: '500px', fit: 'cover', borderRadius: '10px' }}
        />
      </div>
    </div>
  </div>

  {/* Core Values Section */}
  <div className="mb-16 mx-auto px-4 max-w-7xl w-full">
    <div className="text-center mb-12">
      <Title
      className="text-5xl md:text-6xl font-bold mb-6 mt-6 text-sky-900"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      >
      Our Core Values

    </Title>
    <p
    className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-12"
    style={{ fontFamily: "'Cabin', sans-serif" }}
    >
    These five pillars guide everything we do at The Growth Sphere
  </p>
</div>

<Row gutter={[24, 24]}>
  {valuesData.map((value, index) => {
    const colorClasses = getColorClasses(value.color);
    return (
      <Col key={index} xs={24} lg={12} xl={8}>
      <div
      className={`h-full p-6 rounded-2xl border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} transition-all duration-300 transform hover:-translate-y-1`}
      >
      <div className="flex items-start space-x-4">
        <div
        className={`p-3 rounded-xl ${colorClasses.bg} border ${colorClasses.border}`}
        >
      <div className={colorClasses.icon}>{value.icon}</div>
      </div>
      <div className="flex-1">
        <Title
        level={3}
        className={`text-lg font-bold mb-3 ${colorClasses.icon}`}
        style={{ fontFamily: "'Raleway', serif" }}
        >
        {value.title}
      </Title>
      <p className= "text-xl md:text-1xl text-black max-w-2xl mx-auto leading-relaxed mb-12"
      style={{ fontFamily: "'Raleway', sans-serif" }}>
      {value.description}
    </p>
  </div>
</div>
</div>
</Col>
);
})}
</Row>
</div>

{/* Call to Action */}
<div className="text-center bg-gradient-to-r from-sky-700 via-white to-teal-700 rounded-2xl p-12 border border-gray-200  mb-16 mx-auto px-4 max-w-7xl w-full">
  <Title
  level={3}
  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
  style={{ fontFamily: "'Poppins', sans-serif" }}
  >
  Ready to Join Our Mission?
</Title>
<Paragraph
className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
style={{ fontFamily: "'Raleway', sans-serif" }}
>
Become part of a global movement that's transforming youth
opportunities and creating lasting change across the Global South
and beyond.
</Paragraph>
<div className="flex flex-wrap justify-center gap-4">
  <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-4 rounded-full font-semibold text-lg">
    Get Involved
  </button>
  <button className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg">
    Learn More
  </button>
</div>
</div>

</section>
);
};

export default Mission;