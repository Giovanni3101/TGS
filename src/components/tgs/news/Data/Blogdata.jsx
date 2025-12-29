// src/data/blogData.js
// Mock data for blog content - replace with API calls in production

export const blogContent = [
  {
    id: 1,
    type: 'article',
    title: 'Breaking Barriers: How Youth Are Reshaping Global Leadership',
    excerpt: 'Exploring the emerging patterns of youth-led initiatives transforming governance, social innovation, and community development across the Global South.',
    author: 'Sarah Kimani',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    featured: true,
    tags: ['Youth Leadership', 'Global South', 'Innovation']
  },
  {
    id: 2,
    type: 'event',
    title: 'Global Youth Summit 2025: Registration Now Open',
    excerpt: 'Join 500+ young changemakers from 50+ countries for three days of learning, networking, and collaboration in Nairobi.',
    author: 'TGS Events Team',
    date: '2025-03-20',
    location: 'Nairobi, Kenya',
    readTime: '3 min read',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    featured: true,
    tags: ['Summit', 'Networking', 'Capacity Building']
  },
  {
    id: 3,
    type: 'report',
    title: '2024 Impact Report: Empowering 15,000 Youth Across 45 Countries',
    excerpt: 'Our annual impact assessment reveals significant progress in youth empowerment, with 85% of participants securing opportunities within 6 months.',
    author: 'Research & Impact Team',
    date: '2024-12-01',
    readTime: '15 min read',
    category: 'Reports',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    featured: false,
    tags: ['Impact', 'Data', 'Annual Report']
  },
  {
    id: 4,
    type: 'news',
    title: 'TGS Launches AI-Powered Opportunity Matching Platform',
    excerpt: 'New technology connects youth with personalized scholarship, fellowship, and job opportunities based on their profiles and aspirations.',
    author: 'Technology Team',
    date: '2024-11-28',
    readTime: '4 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: false,
    tags: ['Technology', 'Innovation', 'Platform']
  },
  {
    id: 5,
    type: 'gallery',
    title: 'Faces of Change: Youth Stories from East Africa',
    excerpt: 'A visual journey through the lives of young leaders making impact in their communities across Kenya, Uganda, Tanzania, and Rwanda.',
    author: 'Media Team',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Stories',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    featured: false,
    tags: ['Photography', 'East Africa', 'Youth Stories']
  },
  {
    id: 6,
    type: 'article',
    title: 'The Skills Gap: Bridging Education and Employment in Africa',
    excerpt: 'Analysis of workforce development challenges and innovative solutions addressing the disconnect between academic training and market needs.',
    author: 'Dr. James Odhiambo',
    date: '2024-11-15',
    readTime: '10 min read',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    featured: false,
    tags: ['Education', 'Employment', 'Skills']
  }
];

export const categories = [
  { name: 'All', count: blogContent.length },
  { name: 'Articles', count: 2 },
  { name: 'Events', count: 1 },
  { name: 'Reports', count: 1 },
  { name: 'News', count: 1 },
  { name: 'Galleries', count: 1 }
];

// Full article content for detail page
export const articleDetailData = {
  1: {
    id: 1,
    type: 'article',
    title: 'Breaking Barriers: How Youth Are Reshaping Global Leadership',
    subtitle: 'Exploring the emerging patterns of youth-led initiatives transforming governance, social innovation, and community development across the Global South',
    author: {
      name: 'Sarah Kimani',
      role: 'Senior Program Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Sarah leads youth empowerment programs across East Africa with over 10 years of experience in international development and capacity building.'
    },
    publishDate: '2024-12-15',
    readTime: '8 min read',
    views: '2.4K',
    category: 'Leadership',
    tags: ['Youth Leadership', 'Global South', 'Innovation', 'Social Impact', 'Governance'],
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200',
    content: [
      {
        type: 'paragraph',
        text: 'In boardrooms from Lagos to Nairobi, in community centers across Manila and São Paulo, a quiet revolution is unfolding. Young people are no longer waiting for permission to lead—they are creating their own tables, designing innovative solutions, and fundamentally reshaping what leadership looks like in the 21st century.'
      },
      {
        type: 'heading',
        text: 'The New Face of Leadership'
      },
      {
        type: 'paragraph',
        text: 'Traditional leadership models, often hierarchical and exclusionary, are being challenged by a generation that values collaboration, transparency, and impact over titles and tenure. This shift is particularly pronounced in the Global South, where youth populations are not just growing—they are mobilizing.'
      },
      {
        type: 'quote',
        text: 'We are not the leaders of tomorrow. We are the leaders of today, making decisions that will shape the world we inherit.',
        author: 'Amina Wanjiru, Founder, FarmConnect Africa'
      },
      {
        type: 'heading',
        text: 'Key Patterns Emerging from Youth-Led Movements'
      },
      {
        type: 'list',
        items: [
          'Technology as Equalizer: 78% of youth-led initiatives leverage digital tools to scale impact.',
          'Collaborative Networks Over Hierarchies: Young leaders prioritize collective action.',
          'Solutions-Oriented Pragmatism: Focus on building working prototypes and demonstrating impact.'
        ]
      }
    ],
    relatedArticles: [2, 3, 6]
  }
};

export const popularTags = [
  'Youth Leadership',
  'Global South',
  'Innovation',
  'Education',
  'Technology',
  'Capacity Building',
  'Impact',
  'Opportunities'
];