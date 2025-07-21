import React from 'react';
import { Calendar, FileText, Users, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Admissions: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our community of learners and embark on a journey of academic excellence and character development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              A simple and transparent process to join our academic community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: 'Application',
                description: 'Submit online application with required documents',
                step: '01',
              },
              {
                icon: Users,
                title: 'Interview',
                description: 'Parent-student interview with admissions committee',
                step: '02',
              },
              {
                icon: FileText,
                title: 'Assessment',
                description: 'Age-appropriate assessment for grade placement',
                step: '03',
              },
              {
                icon: CheckCircle,
                title: 'Enrollment',
                description: 'Complete admission formalities and fee payment',
                step: '04',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 mt-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendars for key admission milestones
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  event: 'Application Opens',
                  date: 'October 1, 2024',
                  status: 'active',
                },
                {
                  event: 'Application Deadline',
                  date: 'January 31, 2025',
                  status: 'upcoming',
                },
                {
                  event: 'Entrance Assessments',
                  date: 'February 15-28, 2025',
                  status: 'upcoming',
                },
                {
                  event: 'Interview Period',
                  date: 'March 1-15, 2025',
                  status: 'upcoming',
                },
                {
                  event: 'Results Announcement',
                  date: 'March 25, 2025',
                  status: 'upcoming',
                },
                {
                  event: 'Admission Confirmation',
                  date: 'April 10, 2025',
                  status: 'upcoming',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg ${
                    item.status === 'active' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                  }`}
                >
                  <Calendar className={`h-6 w-6 ${
                    item.status === 'active' ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <div>
                    <div className="font-semibold text-gray-900">{item.event}</div>
                    <div className="text-gray-600">{item.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <div className="space-y-4">
                {[
                  'Completed online application form',
                  'Birth certificate (original and photocopy)',
                  'Previous school transcripts and transfer certificate',
                  'Medical certificate and immunization records',
                  'Parent/Guardian identification documents',
                  'Recent passport-size photographs',
                  'Character certificate from previous school',
                  'Caste certificate (if applicable)',
                ].map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fee Structure</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-4">
                  {[
                    { grade: 'Pre-K to Grade 2', fee: '₹1,50,000' },
                    { grade: 'Grades 3-5', fee: '₹1,75,000' },
                    { grade: 'Grades 6-8', fee: '₹2,00,000' },
                    { grade: 'Grades 9-10', fee: '₹2,25,000' },
                    { grade: 'Grades 11-12', fee: '₹2,50,000' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-medium text-gray-900">{item.grade}</span>
                      <span className="font-bold text-blue-600">{item.fee}/year</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <strong>Note:</strong> Fees include tuition, library, laboratory, and sports facilities. 
                      Transportation and meal plans are available at additional cost.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your child's journey with us. Apply online today or schedule a campus visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;