import { Code, Bot, Server, Smartphone, BarChart, ShieldCheck } from 'lucide-react';

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact us" },
];

export const services = [
  {
    id: 1,
    icon: Code,
    title: "Custom Web Development",
    shortDescription: "Bespoke web solutions tailored to your business needs.",
    description: "We build high-performance, scalable, and secure web applications from scratch. Our team specializes in modern frameworks like React, Next.js, and Node.js to deliver seamless user experiences. Whether it's a complex enterprise platform or a customer-facing portal, we've got you covered.",
    details: [
      "Front-end and back-end development",
      "API development and integration",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
    ],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Engaging mobile apps for iOS and Android platforms.",
    description: "From concept to launch, we create intuitive and powerful mobile applications for iOS and Android. We use native technologies and cross-platform frameworks like React Native to ensure your app is fast, reliable, and looks great on every device.",
     details: [
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform development with React Native",
      "App Store submission and maintenance",
      "Mobile UI/UX design",
    ],
  },
  {
    id: 3,
    icon: Bot,
    title: "AI & Machine Learning",
    shortDescription: "Integrate intelligent solutions to automate and innovate.",
    description: "Leverage the power of Artificial Intelligence and Machine Learning to gain a competitive edge. Our experts can help you with data analysis, predictive modeling, natural language processing, and computer vision to unlock new possibilities for your business.",
     details: [
      "Custom AI model development",
      "Natural Language Processing (NLP)",
      "Computer vision and image analysis",
      "Predictive analytics and data modeling",
    ],
  },
  {
    id: 4,
    icon: Server,
    title: "Cloud & DevOps",
    shortDescription: "Streamline your infrastructure and development lifecycle.",
    description: "We help you build and manage a robust, scalable cloud infrastructure. Our DevOps practices ensure a faster development lifecycle, continuous integration/continuous deployment (CI/CD), and automated workflows to improve efficiency and reduce time-to-market.",
     details: [
      "Cloud architecture design (AWS, Google Cloud, Azure)",
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC) with Terraform",
      "Containerization with Docker and Kubernetes",
    ],
  },
   {
    id: 5,
    icon: BarChart,
    title: "Data Analytics & BI",
    shortDescription: "Turn your data into actionable business insights.",
    description: "Make data-driven decisions with our business intelligence and data analytics services. We help you collect, process, and visualize data to understand your business better, identify trends, and discover opportunities for growth.",
     details: [
      "Data warehousing and ETL pipelines",
      "Interactive dashboard creation (Tableau, Power BI)",
      "Custom reporting solutions",
      "Data-driven strategy consulting",
    ],
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    shortDescription: "Protect your digital assets from emerging threats.",
    description: "Safeguard your applications and infrastructure with our expert cybersecurity consulting. We offer vulnerability assessments, penetration testing, and security architecture reviews to identify and mitigate risks before they become problems.",
     details: [
      "Vulnerability scanning and penetration testing",
      "Security code review",
      "Compliance and risk management (GDPR, HIPAA)",
      "Incident response planning",
    ],
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Alisha Vance",
    role: "Founder & CEO",
    bio: "With over 15 years in the tech industry, Alisha is a visionary leader passionate about leveraging technology to solve real-world problems. She founded BitSmiths to build a culture of innovation and excellence.",
    imageId: "team-1",
  },
  {
    id: 2,
    name: "Marco Reyes",
    role: "Chief Technology Officer",
    bio: "Marco is a master architect of scalable systems. He leads our engineering team, setting the technical direction and ensuring we stay at the forefront of technological advancements.",
    imageId: "team-2",
  },
  {
    id: 3,
    name: "Lena Petrova",
    role: "Head of Product",
    bio: "Lena bridges the gap between business goals and technical execution. She has a keen eye for user experience and is dedicated to delivering products that customers love.",
    imageId: "team-3",
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    role: "Lead DevOps Engineer",
    bio: "Kenji is the wizard behind our cloud infrastructure and automated pipelines. He ensures our systems are reliable, scalable, and secure, enabling our developers to ship code with confidence.",
    imageId: "team-4",
  },
];

export const testimonials = [
  {
    quote: "Working with BitSmiths was a game-changer for us. Their team is not only technically proficient but also deeply understands our business needs. They delivered beyond our expectations.",
    name: "Sarah Johnson",
    company: "CEO, Innovate Inc.",
  },
  {
    quote: "The mobile app they developed has received rave reviews from our users. The process was smooth, transparent, and collaborative from start to finish.",
    name: "Michael Chen",
    company: "Product Manager, ConnectApp",
  },
  {
    quote: "BitSmiths's expertise in AI and machine learning helped us unlock new revenue streams. Their solution was innovative, robust, and delivered on time.",
    name: "Emily Rodriguez",
    company: "Director of Data Science, QuantumLeap",
  },
  {
    quote: "The DevOps transformation they led has significantly improved our development velocity and system stability. I can't recommend them enough.",
    name: "David Lee",
    company: "VP of Engineering, CloudSphere",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Revamp for StyleHub",
    client: "StyleHub",
    problem: "StyleHub's legacy e-commerce site was slow, difficult to manage, and not mobile-friendly, leading to high bounce rates and lost sales.",
    solution: "We engineered a new, headless e-commerce platform using Next.js for the front-end and a custom Node.js backend. We integrated with Stripe for payments and implemented a modern CMS for easy content management.",
    outcome: "Achieved a 200% increase in mobile conversions, a 50% reduction in page load times, and a 30% uplift in average order value. The marketing team can now launch campaigns in hours instead of weeks.",
    imageId: "case-study-1",
  },
  {
    id: 2,
    title: "Predictive Analytics Engine for FinTech Innovators",
    client: "FinTech Innovators",
    problem: "The client needed to provide their users with accurate financial forecasting tools but lacked the in-house AI expertise to build a reliable predictive model.",
    solution: "Our data science team developed a suite of machine learning models to predict market trends and portfolio performance. We built a scalable API for easy integration into their existing application.",
    outcome: "The new feature led to a 40% increase in user engagement and became a key differentiator in the market. The model's accuracy exceeded 95% in back-testing.",
    imageId: "case-study-2",
  },
  {
    id: 3,
    title: "Cloud Migration & DevOps for HealthCare Solutions",
    client: "HealthCare Solutions",
    problem: "Their on-premise infrastructure was costly, difficult to scale, and not compliant with modern healthcare data regulations like HIPAA.",
    solution: "We orchestrated a full migration to a HIPAA-compliant AWS cloud environment. We implemented Infrastructure as Code (IaC) using Terraform and set up a CI/CD pipeline with automated security and compliance checks.",
    outcome: "Reduced infrastructure costs by 60%, achieved 99.99% uptime, and passed all compliance audits with ease. Development cycles were shortened from months to weeks.",
    imageId: "case-study-3",
  },
  {
    id: 4,
    title: "AI-Powered Customer Support Chatbot",
    client: "Global Retail Corp",
    problem: "High volume of customer support queries was overwhelming the support team, leading to long wait times and customer dissatisfaction.",
    solution: "We developed and trained a custom NLP-based chatbot to handle over 80% of common customer inquiries, such as order tracking and returns. The chatbot seamlessly hands off complex issues to human agents.",
    outcome: "Reduced customer support ticket volume by 75% and improved customer satisfaction scores by 25 points. The support team can now focus on high-value interactions.",
    imageId: "case-study-4",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Rise of Serverless: A Developer's Guide",
    author: "Marco Reyes",
    date: "2024-07-15",
    excerpt: "Serverless architecture is transforming how we build applications. In this post, we'll explore the benefits, challenges, and best practices for adopting a serverless-first mindset.",
    content: "Full markdown content here...",
    imageId: "blog-1",
  },
  {
    id: 2,
    title: "Why Your Next Project Should Be in TypeScript",
    author: "Lena Petrova",
    date: "2024-06-28",
    excerpt: "TypeScript isn't just JavaScript with types. It's a powerful tool for building robust, maintainable, and scalable applications. Let's dive into why our team at BitSmiths loves it.",
    content: "Full markdown content here...",
    imageId: "blog-2",
  },
  {
    id: 3,
    title: "Unlocking Business Value with Machine Learning",
    author: "Alisha Vance",
    date: "2024-06-10",
    excerpt: "Machine learning is more than just a buzzword. Discover real-world examples of how AI/ML can drive efficiency, create new products, and provide a competitive advantage for your business.",
    content: "Full markdown content here...",
    imageId: "blog-3",
  },
];
