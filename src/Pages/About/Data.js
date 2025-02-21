// data.js
import { FaHandshake, FaLightbulb, FaUsers, FaRocket, FaTwitter, FaLinkedin, FaGithub, FaMedium, FaGlobe } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiAws, SiMongodb, SiDocker } from 'react-icons/si';

export const TeamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    photo: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739649614/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764_jfimri.jpg',
    socialLinks: [
      { name: 'Twitter', url: '#', icon: <FaTwitter /> },
      { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
      { name: 'GitHub', url: '#', icon: <FaGithub /> }
    ]
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    photo: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739649611/3a3f2d35-8167-4708-9ef0-bdaa980989f9_n90tq6.jpg',
    socialLinks: [
      { name: 'Twitter', url: '#', icon: <FaTwitter /> },
      { name: 'Medium', url: '#', icon: <FaMedium /> },
      { name: 'Website', url: '#', icon: <FaGlobe /> }
    ]
  },
];

export const valuesList = [
  {
    title: 'Integrity',
    description: 'We believe in transparency and ethical business practices',
    icon: FaHandshake
  },
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries of what\'s possible',
    icon: FaLightbulb
  },
  {
    title: 'Collaboration',
    description: 'Great things happen when we work together',
    icon: FaUsers
  },
  {
    title: 'Excellence',
    description: 'Striving for perfection in everything we do',
    icon: FaRocket
  }
];

export const techStack = [
  { name: 'React', logo: 'https://skillicons.dev/icons?i=react' },
  { name: 'Node.js', logo: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Python', logo: 'https://skillicons.dev/icons?i=python' },
  { name: 'AWS', logo: 'https://skillicons.dev/icons?i=aws' },
  { name: 'MongoDB', logo: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'Docker', logo: 'https://skillicons.dev/icons?i=docker' },
  { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=typescript' },
  { name: 'GraphQL', logo: 'https://skillicons.dev/icons?i=graphql' }
];