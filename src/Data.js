
import { FaBrain, FaChartLine, FaMobileAlt, FaLaptopCode, FaDatabase, FaChartBar, FaChartPie, FaChartArea } from 'react-icons/fa';

export const services = [
  { name: 'all', label: 'All Projects' },
  {
    name: 'AI Solutions',
    icon: <FaBrain />,
    label: 'AI Solutions',
  },
  {
    name: 'Data Analytics',
    icon: <FaChartLine />,
    label: 'Data Analytics',
  },
  {
    name: 'Mobile',
    icon: <FaMobileAlt />,
    label: 'Mobile Development',
  },
  {
    name: 'Web',
    icon: <FaLaptopCode />,
    label: 'Web Development',
  },
  {
    name: 'Data Science',
    icon: <FaDatabase />,
    label: 'Data Science',
  },
];

export const works = [
  {
    id: 1,
    title: 'AI-powered Chatbot',
    service: 'AI Solutions',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/chatbot',
    description: 'An intelligent chatbot that uses natural language processing to engage users effectively.',
    techStack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 2,
    title: 'AL-Shifa',
    service: 'Web',
    icon: require("./Assets/logo/logo.png"),
    image: require('./Assets/Work/Alshifa.jpeg'),
    website: 'https://www.alshifalab.net/',
    description: 'A healthcare management system built to streamline operations for clinics and laboratories.',
    techStack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 3,
    title: 'AL-Tmargy',
    service: 'Web',
    icon: require("./Assets/logo/mednet.png"),
    image: require('./Assets/Work/Alshifa.jpeg'),
    description: 'A fully functional e-commerce store with payment integration and user authentication.',
    techStack: ['React', 'Node.js'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    service: 'Web',
    icon: require("./Assets/logo/mednet.png"),
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/portfolio',
    description: 'A sleek and modern portfolio website showcasing personal projects and skills.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 5,
    title: 'LlamaIndex-Powered Document Retrieval System',
    service: 'AI Solutions',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742171265/WhatsApp_Image_2025-03-16_at_18.56.06_3489d10e_awzsn5.jpg',
    description: 'Built a smart document retrieval system for querying and summarizing uploaded reports.',
    techStack: ['LlamaIndex', 'Pinecone', 'AWS Cloud', 'Vector Embeddings'],
  },
  {
    id: 6,
    title: 'Predictive Model for Medical Standards Compliance',
    service: 'AI Solutions',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742171266/WhatsApp_Image_2025-03-17_at_00.26.05_66748ee9_lzvu12.jpg',
    description: 'Developed a classification model to determine compliance with global medical standards.',
    techStack: ['GRU', 'RoBERTa', 'Flask API'],
  },
  {
    id: 7,
    title: 'Customer Churn Prediction for E-Commerce Platforms',
    service: 'Data Science',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    description: 'Developed a predictive model to identify customers at risk of churning.',
    techStack: ['XGBoost', 'Random Forest', 'Feature Engineering'],
  },
  {
    id: 8,
    title: 'AI-Based Sentiment Analysis for Social Media Monitoring',
    service: 'Data Science',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    description: 'Designed an NLP system to analyze sentiment in Arabic and English social media posts.',
    techStack: ['Transformers', 'LSTM', 'Hugging Face', 'Flask'],
  },
  {
    id: 9,
    title: 'Automated Document Summarization System',
    service: 'Data Science',
    icon: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg",
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    description: 'Built an AI-powered system for summarizing legal and business documents.',
    techStack: ['TextRank', 'BERT', 'NLP', 'FastAPI'],
  },
];

export const servicess = [
  {
    title: "Data Analytics",
    description: "Unlock insights from your data with advanced analytics and visualization.",
    specs: ["Big Data", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
    color: "from-cyan-600 to-emerald-500",
    offset: 150
  },
  {
    title: "AI Solutions",
    description: "Transform your business with intelligent automation and machine learning solutions.",
    specs: ["Machine Learning", "Deep Learning", "Natural Language Processing", "AI-powered Chatbots"],
    color: "from-purple-600 to-blue-500",
    offset: 250
  },
  {
    title: "Support in Scientific Research and Academic Papers",
    description: "Transform your business with intelligent automation and machine learning solutions.",
    specs: [" Data analysis using SPSS, Python, R.", " Assistance in writing research papers following academic standards", "Designing websites to showcase research findings and engage with audiences"],
    color: "from-purple-600 to-blue-500",
    offset: 250
  },
  {
    title: "Mobile Development",
    description: "Build cross-platform mobile experiences with native performance.",
    specs: [
      "iOS & Android Development",
      "Flutter",
      "Mobile UI/UX Design",
      "API Integration",
      "App Store Optimization"
    ],
    color: "from-purple-500 to-pink-400",
    offset: 350
  },

  {
    title: "Web Development",
    description: "Build high-performance web applications with modern architectures.",
    specs: ["React/Next.js", "Full-Stack Development", "Progressive Web Apps", "API Development"],
    color: "from-pink-600 to-rose-400",
    offset: 450
  },
  {
    title: "Data Science",
    description: "Transform raw data into actionable insights through advanced analytics and machine learning.",
    specs: [
      "Predictive Modeling",
      "Data Mining & Wrangling",
      "Statistical Analysis",
      "Big Data Processing",
      "ML Ops & Deployment"
    ],
    color: "from-green-500 to-teal-400",
    offset: 250
  },
];