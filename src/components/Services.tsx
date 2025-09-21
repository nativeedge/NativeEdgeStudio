import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Database, 
  Palette, 
  Settings,
  ArrowRight,
  Code2
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform'],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications using the latest frameworks and best practices.',
      features: ['React', 'Next.js', 'TypeScript', 'Responsive Design'],
      gradient: 'from-pink-500 to-orange-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      features: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      gradient: 'from-orange-400 to-yellow-400'
    },
    {
      icon: Settings,
      title: 'Brand Strategy and Automation',
      description: 'Strategic brand development and automated marketing solutions to elevate your business presence.',
      features: ['Brand Identity', 'Marketing Automation', 'CRM Integration', 'Analytics'],
      gradient: 'from-yellow-400 to-green-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      features: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      gradient: 'from-green-400 to-blue-400'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative visual designs that communicate your brand message effectively.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      gradient: 'from-blue-400 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-orange-100 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <button className="flex items-center space-x-2 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:bg-clip-text transition-all duration-300 font-medium group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;