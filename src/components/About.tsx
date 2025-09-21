import React from 'react';
import { Users, Target, Lightbulb, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve exceptional results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work quality.'
    }
  ];

  const achievements = [
    'Consultants',
    'AWS Certified Team',
    '99% Client Satisfaction'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">NativeEdge</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between innovative ideas and exceptional software solutions, 
              NativeEdge Studio has been at the forefront of digital transformation for over 2 years.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of passionate developers, designers, and strategists work together to create 
              software that not only meets your requirements but exceeds your expectations. We believe 
              in the power of technology to transform businesses and improve lives.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg font-semibold">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;