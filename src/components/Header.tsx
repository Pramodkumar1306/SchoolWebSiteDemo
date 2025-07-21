import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, User, Users, Sparkles } from 'lucide-react';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'parent'>('student');
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Pastoral', path: '/pastoral' },
    { name: 'Co-curricular', path: '/co-curricular' },
    { name: 'Social Responsibility', path: '/social-responsibility' },
    { name: 'Summer School', path: '/summer-school' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLoginClick = (type: 'student' | 'parent') => {
    setLoginType(type);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-orange-600 group-hover:text-orange-700 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  K V
                </span>
                <span className="text-xs text-gray-600 -mt-1">Kendriya Vidyalaya</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-orange-600 bg-orange-50 shadow-md'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Login Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleLoginClick('student')}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <User className="h-4 w-4" />
                <span>Student Login</span>
              </button>
              <button
                onClick={() => handleLoginClick('parent')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Users className="h-4 w-4" />
                <span>Parent Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 hover:translate-x-2 ${
                    location.pathname === item.path ? 'text-orange-600 bg-orange-50' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => handleLoginClick('student')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  <User className="h-4 w-4" />
                  <span>Student Login</span>
                </button>
                <button
                  onClick={() => handleLoginClick('parent')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Users className="h-4 w-4" />
                  <span>Parent Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type={loginType}
      />
    </>
  );
};

export default Header;