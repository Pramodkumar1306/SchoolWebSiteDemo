import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Contact from './pages/Contact';

// Placeholder components for remaining pages
const Pastoral = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Pastoral Care 🌟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive pastoral care program focuses on the emotional, social, and spiritual well-being of our students with love and dedication! 💝
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['🧠 Mental Health Support', '🤝 Peer Counseling', '👨‍👩‍👧‍👦 Family Engagement', '🎯 Goal Setting', '💪 Resilience Building', '🌈 Diversity Celebration'].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
              <p className="text-gray-600">Comprehensive support and guidance for holistic development.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CoCurricular = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Co-curricular Activities 🎨
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our exciting range of co-curricular activities including sports, arts, music, dance, and cultural programs to nurture diverse talents! 🌟
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['⚽ Sports & Games', '🎭 Drama & Theatre', '🎵 Music & Dance', '🎨 Visual Arts', '🔬 Science Club', '💻 Tech Club', '📚 Literary Society', '🌍 Environment Club'].map((activity, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{activity}</h3>
              <p className="text-gray-600 text-sm">Discover your passion and talents!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SocialResponsibility = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6">
            Social Responsibility 🌱
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to social responsibility through community service, environmental initiatives, and making a positive impact on society! 🌍
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['🌳 Environmental Conservation', '🤝 Community Service', '♻️ Sustainability Projects', '💚 Social Awareness Campaigns'].map((initiative, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative}</h3>
              <p className="text-gray-600">Making a difference in our community and environment through meaningful action.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SummerSchool = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Summer School ☀️
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enriching summer programs offering academic courses, skill development, recreational activities, and fun learning experiences! 🏖️
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['📖 Academic Enhancement', '🎯 Skill Development', '🎪 Fun Activities', '🏊‍♀️ Sports Camps', '🎨 Creative Workshops', '🔬 Science Experiments'].map((program, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program}</h3>
              <p className="text-gray-600">Exciting summer learning opportunities for all students!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Alumni = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Alumni Network 🎓
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our distinguished alumni community spanning across various industries worldwide, making us proud every day! 🌟
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['👨‍💼 Business Leaders', '👩‍⚕️ Healthcare Heroes', '👨‍🔬 Scientists & Researchers', '👩‍🎨 Artists & Creators', '👨‍💻 Tech Innovators', '👩‍🏫 Educators', '👨‍⚖️ Legal Experts', '👩‍✈️ Global Citizens'].map((field, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{field}</h3>
              <p className="text-gray-600 text-sm">Making a difference worldwide!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Jobs at K V 💼
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our dedicated team of educators and staff. Explore current openings and career opportunities to shape young minds! 🚀
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['👩‍🏫 Teaching Positions', '👨‍💼 Administrative Roles', '🔧 Support Staff', '💻 IT Specialists', '🏥 Health & Wellness', '🎨 Activity Coordinators'].map((position, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{position}</h3>
              <p className="text-gray-600 mb-4">Be part of our mission to provide excellent education and shape the future!</p>
              <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/pastoral" element={<Pastoral />} />
            <Route path="/co-curricular" element={<CoCurricular />} />
            <Route path="/social-responsibility" element={<SocialResponsibility />} />
            <Route path="/summer-school" element={<SummerSchool />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;