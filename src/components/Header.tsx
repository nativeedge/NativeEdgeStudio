import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 px-4 pt-4">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        isScrolled ? 'bg-white/60 backdrop-blur-xl shadow-2xl' : 'bg-white/10 backdrop-blur-md'
      } rounded-full px-6 lg:px-8`}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 text-white" />
            </div> */}
            <img src="/nativeedge.png" alt="" width={42}/>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                NativeEdge
              </h1>
              <p className={`text-xs font-medium -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-purple-200'
              }`}>STUDIO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 hover:bg-clip-text' 
                    : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 hover:bg-clip-text'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:via-orange-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl">
            <nav className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold text-lg mt-4 text-center block">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;