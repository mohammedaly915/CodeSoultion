// data.js
import { FaHandshake, FaLightbulb, FaUsers, FaRocket, FaTwitter, FaLinkedin, FaGithub, FaMedium, FaGlobe } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiAws, SiMongodb, SiDocker } from 'react-icons/si';

export const TeamMembers = [
  {
    name: 'Abdelrahman Emad',
    role: 'Founder & Data Scientist',
    photo: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739649614/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764_jfimri.jpg',
    socialLinks: [
      { name: 'Twitter', url: '#', icon: <FaTwitter /> },
      { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
      { name: 'GitHub', url: '#', icon: <FaGithub /> }
    ]
  },
  {
    name: 'Muhammed Aly',
    role: 'CO-Founder & Software Engineering',
    photo: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739649614/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764_jfimri.jpg',
    socialLinks: [
      { name: 'Twitter', url: '#', icon: <FaTwitter /> },
      { name: 'Linked In', url: '#', icon: <FaLinkedin /> },
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