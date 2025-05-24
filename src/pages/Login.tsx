import React, { useState } from 'react';
import peralinkLogo from '../assets/images/peralink-logo.png';
import universityIllustration from '../assets/images/university-illustration.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Panel - Branding and Illustration */}
      <div className="login-left-panel hidden md:flex md:w-2/5 flex-col items-center justify-center p-8 relative">
        <div className="absolute inset-0">
          <img 
            src={universityIllustration} 
            alt="University life illustration" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="z-10 flex flex-col items-center text-center">
          <img src={peralinkLogo} alt="Peralink Logo" className="w-24 h-24 mb-6" />
          <h1 className="text-3xl font-bold mb-2 text-white">Peralink</h1>
          <p className="text-xl font-light mb-8 text-white">Connect. Discover. Belong.</p>
          <div className="max-w-md">
            <p className="text-white text-opacity-90 mb-4">
              A social platform designed specifically for university students to connect, 
              collaborate, and enhance your academic journey.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white">Connect with classmates and professors</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white">Discover academic resources and events</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white">Simplify your daily academic tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="login-form-container w-full md:w-3/5 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden flex flex-col items-center mb-8">
            <img src={peralinkLogo} alt="Peralink Logo" className="w-16 h-16 mb-4" />
            <h1 className="text-2xl font-bold text-primary-blue">Peralink</h1>
            <p className="text-sm text-medium-gray">Connect. Discover. Belong.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Log in to your account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">University Email</label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="your.name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-primary-blue"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">Remember me</label>
                </div>
                <a href="#" className="text-sm text-primary-blue hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="btn-primary w-full">
                Log in
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-medium-gray">
              Don't have an account?{' '}
              <a href="#" className="text-primary-blue hover:underline">Sign up</a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-light-gray">
            <p className="text-xs text-center text-medium-gray">
              © 2025 Peralink | Hackers' Club UOP | Department of Computer Engineering, University of Peradeniya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
