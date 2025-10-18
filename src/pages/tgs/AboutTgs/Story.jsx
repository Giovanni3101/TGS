import React from 'react';
import { Typography, Timeline, Row, Col, Card } from 'antd';
import {
  MapPin,
  Users,
  TreePine,
  GraduationCap,
  Globe,
  Target,
  Award,
  School,
  HeartHandshake,
  Lightbulb
} from 'lucide-react';
import Benjamin from '../../assets/Benjamin.jpg';

const { Title, Paragraph } = Typography;

const Story = () => {
  const milestones = [
    {
      year: "2019",
      icon: <TreePine className="w-6 h-6" />,
      title: "EDDEC Foundation",
      description: "Co-founded EDDEC (Act for a Sustainable Development of the Environment in Congo) and led a massive project planting 6,000 trees across 35 schools in Goma, benefiting over 3,000 students.",
      achievements: ["6,000 trees planted", "35 schools involved", "3,000+ students impacted", "Partnerships with WWF & Provincial Ministry"],
      color: "green"
    },
    {
      year: "2020-2023",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expansion & Capacity Building",
      description: "EDDEC continued organizing extensive trainings, workshops, and awareness campaigns on climate change and sustainable development, establishing a durable legacy of youth empowerment.",
      achievements: ["Climate change workshops", "Sustainable development training", "Youth empowerment programs"],
      color: "blue"
    },
    {
      year: "2024",
      icon: <School className="w-6 h-6" />,
      title: "Legal Advocacy & Education",
      description: "As Managing Partner at Legal Alliance Associates and Country Director for Lawrit Journal of Law, trained over 100 students in legal research and coordinated events for 1,500+ law students across Africa and Middle East.",
      achievements: ["100+ students trained", "1,500+ law students reached", "Legal research workshops", "Pan-African coordination"],
      color: "purple"
    },
    {
      year: "2025",
      icon: <Award className="w-6 h-6" />,
      title: "Global Recognition & Turning Point",
      description: "Selected as youngest Human Rights Defender globally for Venice School and participant at key international forums including HISA Youth Fellowship (Oxford), Youth Vision Assembly (Amsterdam), and Global Youth MIDORI Platform.",
      achievements: [
        "Youngest Human Rights Defender",
        "HISA Youth Fellowship, Oxford",
        "Youth Vision Assembly, Amsterdam",
        "Only African at Global Youth MIDORI"
      ],
      color: "orange"
    },
    {
      year: "2025+",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "The Growth Sphere Birth",
      description: "Driven by the realization that 'Talent knows no borders, but access to opportunity does,' Benjamin created TGS to bridge the global opportunity gap for Global South youth.",
      achievements: ["Global youth platform", "Rooted in Global South", "6+ years experience", "Bridging opportunity gaps"],
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="story" className="py-0" >
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-10">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Our Story
          </Title>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <Paragraph className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif" }}>
            From Goma's Roots to Global Growth: The Inspiring Journey of The Growth Sphere
          </Paragraph>
        </div>

        {/* Hero Quote */}
        <Card
          className="mb-10 border-l-4 border-blue-500 shadow-lg bg-white/80 backdrop-blur-sm"
          style={{ padding: '2rem', marginBottom: 20 }}
        >
          <div className="text-center">
            <HeartHandshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <Paragraph className="text-2xl md:text-3xl font-light text-gray-800 italic text-center leading-relaxed">
              "Talent knows no borders, but access to opportunity does. From villages to cities,
              from the Global South to the North, every young person deserves an equal and fair chance to rise."
            </Paragraph>
            <div className="mt-4 text-lg font-semibold text-blue-600">
              — Kyamoneka Mpey Benjamin, Founder
            </div>
          </div>
        </Card>

        <Row gutter={[48, 32]} align="top">
          {/* Timeline Section */}
          <Col xs={24} lg={12}>
            <div className="sticky top-2">
              <Title level={3} className="text-3xl font-bold text-gray-900 mb-8">
                Our Journey Timeline
              </Title>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 z-0"></div>

                <div className="space-y-8 relative z-10">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-6 group">
                      {/* Year & Icon */}
                      <div className="flex-shrink-0 relative">
                        <div className={`w-12 h-12 rounded-full border-2 ${getColorClasses(milestone.color)} flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                          {milestone.year}
                        </div>
                        <div className={`absolute -left-1 top-14 w-4 h-4 rounded-full border-4 ${getColorClasses(milestone.color).replace('bg-', 'bg-').replace('text-', 'bg-').split(' ')[0]} border-white`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-lg ${getColorClasses(milestone.color)} mr-3`}>
                            {milestone.icon}
                          </div>
                          <Title level={4} className="text-xl font-bold text-gray-900 mb-0">
                            {milestone.title}
                          </Title>
                        </div>

                        <Paragraph className="text-gray-700 mb-4 leading-relaxed">
                          {milestone.description}
                        </Paragraph>

                        <div className="flex flex-wrap gap-2">
                          {milestone.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Story Details Section */}
          <Col xs={24} lg={12}>
            <div className="space-y-8">

              {/* Founding Story */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <Card.Meta
                  avatar={<MapPin className="w-8 h-8 text-red-500" />}
                  title="Roots in Democratic Republic of Congo"
                  description="The journey began not in a conference hall, but on the ground in Goma, DRC"
                />
                <Paragraph className="text-gray-700 mt-4 text-lg leading-relaxed">
                  The journey of <strong>The Growth Sphere (TGS)</strong> is the story of its founder,
                  <strong> Kyamoneka Mpey Benjamin</strong>, and a realization born from deep commitment
                  and firsthand experience. It's a journey that began in the heart of the Global South,
                  where potential meets persistent barriers.
                </Paragraph>
              </Card>

              {/* EDDEC Impact */}
              <Card className="border-0 shadow-lg bg-green-50/80 backdrop-blur-sm">
                <Card.Meta
                  avatar={<TreePine className="w-8 h-8 text-green-600" />}
                  title="EDDEC: More Than An Organization"
                  description="A testament to local action and youth leadership"
                />
                <Paragraph className="text-gray-700 mt-4 text-lg leading-relaxed">
                  In December 2019, Benjamin co-founded <strong>EDDEC (Act for a Sustainable Development
                    of the Environment in Congo)</strong>. This was more than an organization; it was a testament
                  to local action. As Co-founder and President, he successfully led a massive project to
                  plant <strong>6,000 trees</strong> across 35 schools in Goma, benefiting over 3,000 students.
                </Paragraph>
                <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                  <Paragraph className="text-green-800 font-semibold mb-2">
                    Key Partnerships Established:
                  </Paragraph>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">WWF</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Provincial Ministry of Environment</span>
                  </div>
                </div>
              </Card>

              {/* Global Realization */}
              <Card className="border-0 shadow-lg bg-blue-50/80 backdrop-blur-sm">
                <Card.Meta
                  avatar={<Globe className="w-8 h-8 text-blue-600" />}
                  title="The Global Realization"
                  description="Witnessing potential, identifying gaps"
                />
                <Paragraph className="text-gray-700 mt-4 text-lg leading-relaxed">
                  Through participation in international forums and global platforms, Benjamin witnessed
                  the exceptional potential of Global South youth firsthand. Yet, he also saw a critical gap:
                  <strong> 'Talent knows no borders, but access to opportunity does.'</strong>
                </Paragraph>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-600 font-semibold">Challenge Identified</div>
                    <div className="text-gray-700">Underrepresentation of Global South youth</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-600 font-semibold">Systemic Barrier</div>
                    <div className="text-gray-700">Lack of access to critical information</div>
                  </div>
                </div>
              </Card>

              {/* TGS Birth */}
              <Card className="border-0 shadow-lg bg-purple-50/80 backdrop-blur-sm">
                <Card.Meta
                  avatar={<Target className="w-8 h-8 text-purple-600" />}
                  title="The Growth Sphere: A Vision Realized"
                  description="Bridging the global opportunity gap"
                />
                <Paragraph className="text-gray-700 mt-4 text-lg leading-relaxed">
                  Driven by this realization, Benjamin created <strong>The Growth Sphere (TGS)</strong>.
                  TGS is the culmination of his six-year journey—a global youth empowerment platform,
                  rooted in the Global South, built upon the foundation of local and continental training
                  to bridge the global opportunity gap he personally experienced.
                </Paragraph>
                <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                  <Title level={5} className="text-purple-800 mb-3">
                    TGS Mission Today:
                  </Title>
                  <Paragraph className="text-gray-700">
                    To equip the next generation of leaders with the skills, mentorship, and opportunities
                    they need to rise, ensuring every young person, regardless of their origin, has an
                    equal and fair chance to shape the future.
                  </Paragraph>
                </div>
              </Card>

              {/* Impact Stats */}
              <Card className="border-0 shadow-lg bg-orange-50/80 backdrop-blur-sm text-center">
                <Title level={4} className="text-orange-800 mb-6">
                  Cumulative Impact Across the Journey
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={12} sm={6}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">6,000+</div>
                      <div className="text-sm text-gray-600">Trees Planted</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">3,000+</div>
                      <div className="text-sm text-gray-600">Students Impacted</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">100+</div>
                      <div className="text-sm text-gray-600">Students Trained</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">1,500+</div>
                      <div className="text-sm text-gray-600">Law Students Reached</div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Story;
