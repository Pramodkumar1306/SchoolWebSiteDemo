import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Globe, Sparkles, Star, Trophy, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/30 rounded-full animate-ping" />
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-red-300/40 rounded-full animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-yellow-400 animate-spin" />
                <span className="text-yellow-300 font-semibold">Kendriya Vidyalaya</span>
                <Star className="h-6 w-6 text-yellow-400 animate-spin" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  Excellence in Education
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-orange-100">Since 1963</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                🌟 Nurturing young minds through innovative education, character building, and global perspectives. Join our legacy of academic excellence and creative learning! 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/admissions"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-2xl transform"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center hover:scale-105 backdrop-blur-sm"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl" />
              <img
                src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg"
                alt="School Campus"
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg">
                <Trophy className="h-8 w-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              K V by Numbers
            </h2>
            <p className="text-xl text-gray-600">Our achievements speak for themselves</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Happy Students', value: '3,500+', color: 'from-blue-500 to-purple-500' },
              { icon: BookOpen, label: 'Classes Offered', value: 'I to XII', color: 'from-green-500 to-teal-500' },
              { icon: Award, label: 'Awards Won', value: '200+', color: 'from-yellow-500 to-orange-500' },
              { icon: Globe, label: 'Alumni Worldwide', value: '50+', color: 'from-pink-500 to-red-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Why Choose K V? 🎯
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide a comprehensive, innovative educational experience that prepares students for success in an ever-changing world with creativity and excellence! ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🎓 Academic Excellence',
                description: 'Rigorous CBSE curriculum with experienced faculty and cutting-edge teaching methods.',
                image: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg',
                link: '/academics',
                gradient: 'from-blue-500 to-purple-500',
              },
              {
                title: '🌟 Holistic Development',
                description: 'Focus on character building, leadership skills, moral values, and creative thinking.',
                image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
                link: '/pastoral',
                gradient: 'from-green-500 to-teal-500',
              },
              {
                title: '🎨 Co-curricular Activities',
                description: 'Sports, arts, music, dance, and cultural programs to nurture diverse talents and creativity.',
                image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg',
                link: '/co-curricular',
                gradient: 'from-pink-500 to-red-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Target className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-orange-600 hover:text-orange-800 font-bold group-hover:translate-x-2 transition-all duration-300"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-500/10 rounded-full animate-bounce" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Interactive Learning Experience 🚀
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our innovative approach to education with technology-enhanced learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Smart Classrooms',
                description: 'Interactive whiteboards and digital learning tools',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔬',
                title: 'Science Labs',
                description: 'State-of-the-art laboratories for hands-on experiments',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '📚',
                title: 'Digital Library',
                description: 'Vast collection of books and online resources',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🎭',
                title: 'Arts Studio',
                description: 'Creative spaces for music, dance, and visual arts',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '⚽',
                title: 'Sports Complex',
                description: 'Modern facilities for various sports and fitness',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: '🌐',
                title: 'Global Connect',
                description: 'International exchange programs and partnerships',
                color: 'from-indigo-500 to-purple-500'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group-hover:scale-105 transform">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-300/30 rounded-full animate-ping" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-yellow-300 animate-spin" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Join K V Family?
              </h2>
              <Sparkles className="h-8 w-8 text-yellow-300 animate-spin" />
            </div>
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              🎉 Discover how Kendriya Vidyalaya can shape your child's future with innovative education, creative learning, and endless possibilities! Schedule a campus visit or apply online today. 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl transform inline-flex items-center justify-center"
              >
                <Star className="mr-2 h-6 w-6" />
                Schedule a Visit
              </Link>
              <Link
                to="/admissions"
                className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-110 backdrop-blur-sm inline-flex items-center justify-center"
              >
                <Trophy className="mr-2 h-6 w-6" />
                Apply Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;