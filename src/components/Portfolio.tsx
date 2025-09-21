import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mobile Apps', 'Web Apps', 'E-commerce', 'SaaS'];

  const projects = [
    {
      id: 1,
      title: 'Managify',
      category: 'Mobile Apps',
      description: 'A comprehensive store management app with real-time analytics.',
      image: '/m.png',
      technologies: ['React Native', 'Node.js', 'Firebase'],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 2,
      title: 'Makkaislamic.com',
      category: 'E-commerce',
      description: 'Modern e-commerce solution based on Shopify for Islamic products.',
      image: '/mk.png',
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      gradient: 'from-pink-500 to-orange-400'
    },
    {
      id: 3,
      title: 'Managify',
      category: 'SaaS',
      description: 'Comprehensive business intelligence dashboard with real-time data visualization.',
      image: '/m.png',
      technologies: ["AWS"],
      gradient: 'from-orange-400 to-yellow-400'
    },
    {
      id: 4,
      title: 'Nursify Health App',
      category: 'Mobile Apps',
      description: 'Patient management system with telemedicine capabilities and appointment scheduling.',
      image: '/n.png',
      technologies: ['AWS'],
      gradient: 'from-yellow-400 to-green-400'
    },
    {
      id: 5,
      title: 'Quantum Visuals',
      category: 'Website',
      description: 'Professional protfolio website with SEO.',
      image: '/qv.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      gradient: 'from-green-400 to-blue-400'
    },
       {
      id: 5,
      title: 'Hexatech Solutions',
      category: 'Web Apps',
      description: 'AI Based Advising Platform for Tech Solutions.',
      image: 'ht.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS' , 'Gemini' , "Firebase"],
      gradient: 'from-green-400 to-blue-400'
    },
    {
      id: 6,
      title: 'Nursify Health App',
      category: 'SaaS',
      description: 'Nursing Agency Management System with scheduling, billing, and compliance tracking.',
      image: 's.png',
      technologies: ['AWS'],
      gradient: 'from-blue-400 to-purple-600'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                    <Github className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{project.category}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-orange-100 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;