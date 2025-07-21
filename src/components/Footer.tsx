import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="relative">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-orange-500 group-hover:text-orange-400 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">K V</span>
                <div className="text-sm text-gray-400">Kendriya Vidyalaya</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Excellence in Education Since 1963. Nurturing minds, building character, shaping futures with innovative learning approaches.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-red-400 cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Admissions</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Academics</Link></li>
              <li><Link to="/alumni" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Alumni</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Jobs at K V</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/pastoral" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Pastoral Care</Link></li>
              <li><Link to="/co-curricular" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Co-curricular</Link></li>
              <li><Link to="/social-responsibility" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Social Responsibility</Link></li>
              <li><Link to="/summer-school" className="text-gray-300 hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">Summer School</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 11 2696 2580</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@kv.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>© 2024 K V (Kendriya Vidyalaya). Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>for education.</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Privacy Policy | Terms of Service | Student Guidelines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;