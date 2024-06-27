/* eslint-disable react/no-unescaped-entities */
// CombinedPage.js
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../assets/earth-bg.mp4';

const Login = () => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [signupFormData, setSignupFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add login form submission logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add signup form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-200">
      <video autoPlay loop muted className="fixed inset-0 z-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute z-10 w-full px-4">
        <div className="max-w-md mx-auto">
          <div data-aos="fade-down"  className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Welcome to SpaceX</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                value={loginFormData.email}
                onChange={handleLoginChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleLoginChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={navigate('/home')}
              >
                Login
              </button>
            </form>
            <div className="my-2 flex justify-center items-center h-full">
              <span className=''>OR</span>
            </div>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                name="fullName"
                value={signupFormData.fullName}
                onChange={handleSignupChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                value={signupFormData.email}
                onChange={handleSignupChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                value={signupFormData.password}
                onChange={handleSignupChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                name="confirmPassword"
                value={signupFormData.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                onClick={navigate('/home')}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


