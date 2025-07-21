import React from 'react';
import { BookOpen, Award, Users, Globe, Microscope, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const Academics: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive curriculum combines rigorous academics with innovative teaching methods to prepare students for success in a global environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              A well-rounded education that balances academic rigor with creativity and critical thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'CBSE Curriculum',
                description: 'Following the Central Board of Secondary Education guidelines with enhanced learning outcomes.',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'],
              },
              {
                icon: Globe,
                title: 'International Programs',
                description: 'Cambridge IGCSE and IB programs for global educational standards.',
                subjects: ['Extended Essay', 'Theory of Knowledge', 'CAS Program', 'International Mindedness'],
              },
              {
                icon: Microscope,
                title: 'STEM Focus',
                description: 'Emphasis on Science, Technology, Engineering, and Mathematics with hands-on learning.',
                subjects: ['Physics', 'Chemistry', 'Biology', 'Computer Science', 'Robotics'],
              },
            ].map((curriculum, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <curriculum.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{curriculum.title}</h3>
                <p className="text-gray-600 mb-4">{curriculum.description}</p>
                <div className="space-y-2">
                  {curriculum.subjects.map((subject, idx) => (
                    <div key={idx} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                      {subject}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Departments
            </h2>
            <p className="text-xl text-gray-600">
              Specialized departments led by expert faculty members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Languages & Literature',
                description: 'Comprehensive language programs including English, Hindi, Sanskrit, and foreign languages.',
                features: ['Creative Writing Workshops', 'Public Speaking Programs', 'Literature Circles', 'Multilingual Support'],
                image: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg',
              },
              {
                title: 'Mathematics & Sciences',
                description: 'Advanced programs in pure and applied mathematics, physics, chemistry, and biology.',
                features: ['Research Projects', 'Laboratory Experiments', 'Science Olympiads', 'Mathematical Modeling'],
                image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg',
              },
              {
                title: 'Social Sciences',
                description: 'Exploring history, geography, political science, economics, and psychology.',
                features: ['Model United Nations', 'Historical Research', 'Field Trips', 'Current Affairs Analysis'],
                image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
              },
              {
                title: 'Arts & Technology',
                description: 'Creative arts, music, computer science, and emerging technologies.',
                features: ['Digital Art Studios', 'Music Conservatory', 'Coding Bootcamps', 'AI & Robotics Lab'],
                image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
              },
            ].map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={department.image}
                  alt={department.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{department.title}</h3>
                  <p className="text-gray-600 mb-4">{department.description}</p>
                  <div className="space-y-2">
                    {department.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Our students consistently achieve excellence in academics and competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '98%', label: 'Pass Rate', icon: Award },
              { stat: '85%', label: 'Above 90% Marks', icon: BookOpen },
              { stat: '150+', label: 'Awards Won', icon: Users },
              { stat: '95%', label: 'University Admissions', icon: Globe },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl p-8 text-center"
              >
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approaches */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We employ innovative teaching methods that cater to different learning styles and promote critical thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Project-Based Learning',
                description: 'Students work on real-world projects that integrate multiple subjects and develop practical skills.',
              },
              {
                title: 'Technology Integration',
                description: 'Smart classrooms with interactive boards, tablets, and educational software enhance learning.',
              },
              {
                title: 'Collaborative Learning',
                description: 'Group activities and peer learning foster communication and teamwork skills.',
              },
              {
                title: 'Individual Attention',
                description: 'Small class sizes ensure personalized attention and support for every student.',
              },
              {
                title: 'Assessment for Learning',
                description: 'Continuous assessment and feedback help students track progress and improve.',
              },
              {
                title: 'Global Perspectives',
                description: 'International partnerships and exchange programs broaden students\' worldview.',
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                <p className="text-blue-100">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;