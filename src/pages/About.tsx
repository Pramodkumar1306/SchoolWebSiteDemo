import React from 'react';
import { Award, Users, Globe, BookOpen, Sparkles, Star, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-300/30 rounded-full animate-ping" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="h-8 w-8 text-yellow-300 animate-spin" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                About K V
              </h1>
              <Star className="h-8 w-8 text-yellow-300 animate-spin" />
            </div>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              🌟 A legacy of excellence in education, character building, and nurturing future leaders since 1963. 
              Kendriya Vidyalaya - where dreams take flight and futures are built! ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg"
                alt="School Heritage"
                className="relative rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 animate-pulse" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Our Mission 🎯
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide world-class education that nurtures intellectual curiosity, develops character, 
                  and prepares students to become responsible global citizens who contribute meaningfully to society with creativity and innovation! 🌟
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Vision ✨
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be recognized as a premier educational institution that sets the benchmark for 
                  holistic education, innovation in teaching, character development, and creative excellence! 🚀
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Classes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Classes Offered 📚
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education from Class I through Class XII with innovative teaching methods! 🎓
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Primary (Class I-V)',
                description: 'Foundation years focusing on play-based learning, basic literacy, numeracy, and social skills development with creative activities.',
                ages: 'Ages 6-10',
                icon: '🌱',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Upper Primary (Class VI-VIII)',
                description: 'Building core academic skills in mathematics, English, science, social studies with hands-on experiments and projects.',
                ages: 'Ages 11-13',
                icon: '📖',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Secondary (Class IX-X)',
                description: 'CBSE curriculum with focus on board exam preparation, career guidance, and comprehensive skill development.',
                ages: 'Ages 14-15',
                icon: '🎯',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Senior Secondary (Class XI-XII)',
                description: 'Specialized streams in Science, Commerce, and Humanities with college preparation and career counseling.',
                ages: 'Ages 16-17',
                icon: '🎓',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Special Programs',
                description: 'Remedial classes, talent nurturing programs, and special support for differently-abled students.',
                ages: 'All Ages',
                icon: '⭐',
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Extra-Curricular',
                description: 'Sports, arts, music, dance, drama, and various clubs for holistic personality development.',
                ages: 'All Ages',
                icon: '🎨',
                gradient: 'from-pink-500 to-purple-500',
              },
            ].map((grade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${grade.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {grade.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {grade.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{grade.description}</p>
                  <div className={`text-sm font-bold bg-gradient-to-r ${grade.gradient} bg-clip-text text-transparent`}>
                    {grade.ages}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                  Our Rich Heritage 🏛️
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 1963, Kendriya Vidyalaya has been at the forefront of educational excellence for over 60 years! 
                  What began as a vision to provide quality education has grown into one of India's most trusted educational systems. 🌟
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Over the decades, we have maintained our commitment to holistic education while embracing modern 
                  pedagogical approaches and technological advancements. Our alumni have become leaders, innovators, 
                  and change-makers across the globe! 🚀
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">60+</div>
                  <div className="text-orange-100">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <div className="text-blue-100">Alumni Worldwide</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
                alt="School History"
                className="relative rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our Core Values 💎
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The principles that guide our educational philosophy and campus life with passion and purpose! ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Award, 
                title: 'Excellence 🏆', 
                description: 'Striving for the highest standards in all endeavors with dedication and passion',
                gradient: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: Users, 
                title: 'Integrity 🤝', 
                description: 'Honesty, respect, and ethical behavior in all interactions and relationships',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Globe, 
                title: 'Global Perspective 🌍', 
                description: 'Preparing students for an interconnected world with cultural awareness',
                gradient: 'from-green-500 to-teal-500'
              },
              { 
                icon: BookOpen, 
                title: 'Innovation 💡', 
                description: 'Embracing creativity, new ideas, and cutting-edge approaches in learning',
                gradient: 'from-purple-500 to-pink-500'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 group-hover:scale-105 transform">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;