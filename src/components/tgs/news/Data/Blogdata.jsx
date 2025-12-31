// src/data/blogData.js
// Mock data for blog content - replace with API calls in production

export const blogContent = [
  {
    id: 1,
    type: 'article',
    title: 'The Talent Paradox: Bridging the Gap Between Youth Potential and Opportunity in the Global South',
    excerpt: 'The Global South is experiencing a historic demographic shift, yet millions of talented youth remain excluded from opportunity. This article defines the Talent Paradox and the TGS approach to solving it.',
    author: 'The Growth Sphere (TGS)',
    date: '2025-01-01',
    readTime: '9 min read',
    category: 'Analysis',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    featured: true,
    tags: ['Talent Paradox', 'Youth', 'Global South']
  },
  {
    id: 2,
    type: 'article',
    title: 'The Geometry of Justice: How the “Circle of Change” is Redefining Youth Potential in the Global South',
    excerpt: 'Duru ya Mabadiliko transforms traditional community gatherings into engines for social evolution, addressing FGM/C and unlocking youth potential through education-centered rites of passage.',
    author: 'The Growth Sphere (TGS)',
    date: '2025-11-30',
    readTime: '7 min read',
    category: 'Program Insights',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    featured: true,
    tags: ['Duru ya Mabadiliko', 'FGM/C', 'Youth Empowerment']
  }
];

export const categories = [
  { name: 'All', count: blogContent.length },
  { name: 'Articles', count: blogContent.filter(i => i.type === 'article').length },
  { name: 'Events', count: 0 },
  { name: 'Reports', count: 0 },
  { name: 'News', count: 0 },
  { name: 'Galleries', count: 0 }
];

// Full article content for detail page
export const articleDetailData = {
  1: {
    id: 1,
    type: 'article',
    title: 'The Talent Paradox: Bridging the Gap Between Youth Potential and Opportunity in the Global South',
    subtitle: 'A data-driven exploration of the widening gap between potential and opportunity—and TGS’s pathway from awareness to agency.',
    author: {
      name: 'The Growth Sphere (TGS)',
      role: 'Editorial Team',
      avatar:'/tgs1.png',
      bio: 'The Growth Sphere advances youth potential in the Global South through skills, mentorship, and access to global opportunities.'
    },
    publishDate: '2025-01-01',
    readTime: '9 min read',
    views: '—',
    category: 'Analysis',
    tags: ['Talent Paradox', 'Youth', 'Global South', 'Mentorship', 'Education'],
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
    content: [
      { type: 'paragraph', text: 'The Global South is experiencing one of the most consequential demographic shifts in modern history. Sub-Saharan Africa is now the world’s youngest region, with over 60% of its population under the age of 25, and projections show that by 2050, one in three young people globally will live in Africa. This surge represents not a crisis, but a historic opportunity.' },
      { type: 'paragraph', text: 'Yet, this promise is constrained by a persistent contradiction: while the global economy faces acute shortages of skills, innovation, and leadership, millions of talented young people across the Global South remain excluded from education pathways, decent work, and global decision-making spaces. This contradiction is what The Growth Sphere (TGS) defines as the Talent Paradox, a widening gap between potential, opportunity, and accessibility.' },
      { type: 'heading', text: '1. The Education Paradox: Enrollment Without Empowerment' },
      { type: 'paragraph', text: 'Over the past two decades, access to education across the Global South has expanded significantly. However, increased enrollment has not translated into employability or leadership readiness.' },
      { type: 'paragraph', text: 'Education systems continue to prioritize theoretical instruction and rote learning, often at the expense of competencies demanded by the 21st-century economy—critical thinking, communication, leadership, digital fluency, and innovation. According to the World Bank, two out of three young workers in developing economies are employed in jobs that do not match their qualifications, revealing a profound skills mismatch.' },
      { type: 'paragraph', text: 'In countries where TGS operates, such as the Democratic Republic of Congo, Kenya, and South Africa, youth unemployment averages over 35%, with South Africa’s youth unemployment exceeding 58%. Degrees increasingly function as credentials without direction, producing graduates who are academically qualified but practically unprepared.' },
      { type: 'heading', text: '2. The Missing Middle: Skills, Mentorship, and Social Capital' },
      { type: 'paragraph', text: 'Education alone is insufficient without the support systems that translate learning into opportunity. In high-income economies, mentorship, networks, and exposure—often referred to as social capital—serve as invisible accelerators of success. In much of the Global South, this “missing middle” remains largely inaccessible.' },
      { type: 'paragraph', text: 'Many youth initiatives focus on short-term training or one-off workshops that raise awareness but fail to provide follow-up guidance, accountability, or inclusion pathways. Without sustained mentorship and structured progression, motivated young people quickly encounter a ceiling imposed not by ability, but by geography and limited access to networks.' },
      { type: 'paragraph', text: 'As a result, brilliance goes unseen, opportunities go unclaimed, and youth from the Global South remain underrepresented in global forums, fellowships, and leadership pipelines.' },
      { type: 'heading', text: '3. The Economic Reality: High Potential, Low Placement' },
      { type: 'paragraph', text: 'Approximately 86% of employment in Africa exists in the informal sector, offering limited job security, growth, or skill utilization. Each month, over one million young Africans enter the labor market, yet few pathways exist to absorb them into dignified, future-oriented work.' },
      { type: 'paragraph', text: 'Young women face a compounded disadvantage, with the International Labour Organization reporting that three out of four youth in sub-Saharan Africa lack secure employment, and gender disparities persist in access, wages, and leadership.' },
      { type: 'paragraph', text: 'Without targeted intervention, the Talent Paradox risks becoming a generational bottleneck, stifling innovation, deepening inequality, and limiting global progress.' },
      { type: 'heading', text: '4. From Awareness to Agency: The TGS Approach' },
      { type: 'paragraph', text: 'The Growth Sphere (TGS) was founded to move youth development beyond awareness and aspiration toward meaningful action and sustained agency. Its approach is grounded in evidence-based best practices and responds directly to the structural gaps that prevent young people in the Global South from translating potential into impact.' },
      { type: 'paragraph', text: 'At the core of this approach is a strong emphasis on practical, transferable competencies such as persuasive writing, public speaking, leadership, problem-solving, and digital literacy.' },
      { type: 'paragraph', text: 'TGS also focuses on global connectivity, recognizing that talent alone is insufficient without access. Through its digital platform and structured programs, the organization connects youth to scholarships, fellowships, conferences, internships, and other global opportunities, while providing the guidance necessary to compete effectively in these highly selective spaces.' },
      { type: 'paragraph', text: 'Finally, TGS is committed to building sustainable mentorship ecosystems. Through personalized assessments, one-on-one support, and cohort-based learning, the organization creates long-term inclusion pathways that extend beyond a single program.' },
      { type: 'paragraph', text: 'This model ensures continuity, accountability, and impact, enabling today’s beneficiaries to evolve into tomorrow’s mentors, role models, and leaders.' },
      { type: 'heading', text: 'Conclusion: Unlocking a Global Asset' },
      { type: 'paragraph', text: 'The gap between youth potential and opportunity in the Global South is not a regional challenge—it is a global economic and moral imperative. When a young person in Kinshasa, Nairobi, or Antananarivo is denied the tools to innovate and lead, the world loses a potential solution to its most pressing challenges.' },
      { type: 'paragraph', text: 'At The Growth Sphere, we believe that talent is universal, but access is not. By investing in skills, mentorship, and opportunity pathways, we are cultivating globally competitive youth equipped to lead, innovate, and shape the future.' },
      { type: 'paragraph', text: 'The bridge between potential and opportunity is being built. The question is no longer whether the Global South has talent, but whether the world is ready to invest in it.' }
    ],
    relatedArticles: [2]
  },
  2: {
    id: 2,
    type: 'article',
    title: 'The Geometry of Justice: How the “Circle of Change” is Redefining Youth Potential in the Global South',
    subtitle: 'Duru ya Mabadiliko: An intergenerational toolkit transforming cultural rites into engines for agency and opportunity.',
    author: {
      name: 'The Growth Sphere (TGS)',
      role: 'Program Team',
      avatar: '/tgs1.png',
      bio: 'TGS designs localized innovations with global standards to unlock youth potential.'
    },
    publishDate: '2025-11-30',
    readTime: '7 min read',
    views: '—',
    category: 'Program Insights',
    tags: ['Duru ya Mabadiliko', 'FGM/C', 'Youth Empowerment', 'Social Change'],
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600',
    content: [
      { type: 'paragraph', text: 'While the global community discusses the "Future of Work," a silent crisis persists across the Global South. It is not just a lack of technology or capital; it is the systemic exclusion of young women through the preservation of harmful traditional practices.' },
      { type: 'paragraph', text: 'According to 2024 UNICEF data, over 200 million girls and women alive today have undergone Female Genital Mutilation (FGM/C). Beyond the devastating physical toll, this practice creates a "participation ceiling."' },
      { type: 'heading', text: '1. Duru ya Mabadiliko: Innovation via Tradition' },
      { type: 'paragraph', text: 'In November 2025, TGS launched Duru ya Mabadiliko (The Circle of Change), an intergenerational toolkit designed to transform the traditional Baraza (community gathering) into a laboratory for social evolution. Implemented across Rongai and Mombasa in Kenya, this initiative used a participatory model of 20 color-coded conversation cards to facilitate a "collective awakening."' },
      { type: 'heading', text: '2. Field Insights: The "Cultural Vacuum" Theory' },
      { type: 'paragraph', text: 'Our implementation data from 41 diverse participants—including university lecturers, clergy, and students—revealed a profound sociological insight: Resistance to change is often driven by a fear of loss, not a love of harm.' },
      { type: 'quote', text: 'Elders fear being lost if traditions change and there would be nothing to believe in.', author: 'Maxwell, participant' },
      { type: 'paragraph', text: 'TGS addresses this "Identity Gap" by proposing Alternative Rites of Passage (ARP). We are not asking communities to abandon the concept of a rite of passage; we are helping them redefine it. In our sessions at the Technical University of Mombasa, a new consensus emerged: Education is the ultimate initiation.' },
      { type: 'heading', text: '3. The Multiplier Effect: Men as Allies in the Circle' },
      { type: 'paragraph', text: 'One of the most significant findings from the TGS 2025 report was the response from male participants. Though often viewed as a women’s issue, FGM/C sessions saw men openly committing to body autonomy and advocacy.' },
      { type: 'paragraph', text: 'By involving trusted leaders, we leveraged existing social capital to validate new norms. Participants shifted from viewing FGM/C as a cultural requirement to recognizing it as an obstruction of agency.' },
      { type: 'heading', text: '4. Scaling for Global Impact' },
      { type: 'paragraph', text: 'The high demand for the Duru Cards—participants requested personal copies to take to their remote villages—demonstrates that this tool is a "social franchise" ready for scale.' },
      { type: 'heading', text: 'Conclusion: From Trauma to Transformation' },
      { type: 'paragraph', text: 'Every girl protected from harm is a potential scientist, leader, or entrepreneur added to the global workforce. Through Duru ya Mabadiliko, we are ensuring that when the youth of the Global South step into the future, they do so with dignity intact and potential unlimited.' }
    ],
    relatedArticles: [1]
  }
};

export const popularTags = [
  'Talent Paradox',
  'Global South',
  'Youth',
  'Education',
  'Mentorship',
  'FGM/C',
  'Social Change',
  'Opportunities'
];