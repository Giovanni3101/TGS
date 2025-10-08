import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { Target, Eye, Heart, Globe, Users, BookOpen } from 'lucide-react';

const { Title, Paragraph } = Typography;

const Mission = () => {
  const valuesData = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ACCESS TO OPPORTUNITIES",
      description: "Facilitating youth access to fellowships, internships, scholarships, jobs, and other opportunities at both local and international levels to unlock their potential.",
      color: "blue"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "TRAINING & CAPACITY BUILDING",
      description: "Delivering tailored programs through TGS Academy to strengthen leadership, personal growth, and professional skills for lasting impact.",
      color: "green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CONSULTATION & APPLICATION GUIDANCE",
      description: "Providing personalized consultation to assess educational and professional growth, offering tailored recommendations, and guiding applicants through every stage of the process to help them stand out in competitive opportunities and boost success rates.",
      color: "purple"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "DIGITAL COMMUNITY & YOUTH ADVOCACY",
      description: "Building an inclusive digital platform where young people can access opportunities, collaborate, and grow as a global community of changemakers, while amplifying their voices in leadership, innovation, and policy spaces to ensure youth representation in shaping the future.",
      color: "red"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "GLOBAL PARTNERSHIPS & SUSTAINABLE DEVELOPMENT",
      description: "Collaborating with international organizations and institutions to amplify youth voices and foster equitable access worldwide, while aligning all initiatives with the Sustainable Development Goals (SDGs) to ensure meaningful and lasting change.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-400'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        hover: 'hover:border-green-400'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-400'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        hover: 'hover:border-red-400'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        hover: 'hover:border-orange-400'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="mission" className="py-20 bg-white" style={{ fontFamily: "'Raleway', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Our Mission, Vision & Values
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif" }}>
            At The Growth Sphere, we believe that talent knows no borders, but access to opportunity does. 
            From villages to cities, from the Global South to the North, every young person deserves an 
            equal and fair chance to rise.
          </Paragraph>
        </div>

        {/* Mission & Vision Cards */}
        <Row gutter={[32, 32]} className="mb-20">
          <Col xs={24} lg={12}>
            <Card 
              className="h-full border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              bodyStyle={{ padding: '2rem' }} style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <Title level={3} className="text-2xl font-bold text-blue-800 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Our Mission
                </Title>
              </div>
              <Paragraph className="text-lg text-gray-700 leading-relaxed text-justify" style={{ fontFamily: "'Raleway', sans-serif" }}>
                The mission of TGS is to empower youth by equipping them with leadership and personal 
                development skills, providing tailored training through the TGS Academy, and connecting 
                them to global opportunities, mentorship, and strategic guidance. By bridging gaps in 
                access and representation, TGS prepares young people, regardless of origin, to thrive 
                as changemakers in a more inclusive and sustainable world.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card 
              className="h-full border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300"
              bodyStyle={{ padding: '2rem' }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <Title level={3} className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Our Vision
                </Title>
              </div>
              <Paragraph className="text-lg text-gray-700 leading-relaxed text-justify" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Becoming a leading global youth empowerment platform, rooted in the Global South yet 
                inclusive of all regions, equipping young people with skills, mentorship, and opportunities 
                through training, education, and personal development, while fostering the next generation 
                of leaders and changemakers.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Title level={3} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Our Core Values
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Raleway', sans-serif" }}>
              These five pillars guide everything we do at The Growth Sphere
            </Paragraph>
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
                      <div className={`p-3 rounded-xl ${colorClasses.bg} border ${colorClasses.border}`}>
                        <div className={colorClasses.icon}>
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Title level={4} className={`text-lg font-bold mb-3 ${colorClasses.icon}`} style={{ fontFamily: "'Raleway', sans-serif" }}>
                          {value.title}
                        </Title>
                        <Paragraph className="text-gray-700 leading-relaxed">
                          {value.description}
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12 border border-gray-200">
          <Title level={3} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Ready to Join Our Mission?
          </Title>
          <Paragraph className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Become part of a global movement that's transforming youth opportunities and creating 
            lasting change across the Global South and beyond.
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
      </div>
    </section>
  );
};

export default Mission;