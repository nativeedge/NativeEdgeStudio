import React from 'react';
import { ArrowRight, Play, Zap, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden " >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img src="/1.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute top-32 left-16 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-64 right-32 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-32 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex items-center justify-center min-h-screen mt-9">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Build. Launch. Scale.
            </span><br/>
            <span 
              className="text-white text-5xl" 
            >
             Your Vision, Engineered.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
           NativeEdge Studio is your strategic partner in crafting exceptional software solutions that drive growth and innovation. From concept to code, we bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact" className="group bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-xl">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;