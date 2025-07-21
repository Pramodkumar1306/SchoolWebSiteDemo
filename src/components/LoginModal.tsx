import React, { useState } from 'react';
import { X, User, Users, Eye, EyeOff, Sparkles, Lock } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'student' | 'parent';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { type, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-300">
        <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${
          type === 'student' 
            ? 'from-orange-400 to-red-400' 
            : 'from-blue-400 to-purple-400'
        }`} />
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {type === 'student' ? (
                  <User className="h-7 w-7 text-orange-600" />
                ) : (
                  <Users className="h-7 w-7 text-blue-600" />
                )}
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {type === 'student' ? 'Student Portal' : 'Parent Portal'}
                </h2>
                <p className="text-xs text-gray-500">K V Login System</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {type === 'student' ? 'Student ID' : 'Parent ID'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                  placeholder={`Enter your ${type} ID`}
                  required
                />
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pl-10 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                  placeholder="Enter your password"
                  required
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded transition-all duration-200"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-600 hover:text-orange-800 font-medium hover:underline transition-all duration-200">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                type === 'student'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Sign In</span>
                <Sparkles className="h-4 w-4" />
              </span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help accessing your account?{' '}
              <a href="/contact" className="text-orange-600 hover:text-orange-800 font-medium hover:underline transition-all duration-200">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;