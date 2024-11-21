import React from 'react';
import { FiPlus } from 'react-icons/fi';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Sign Up Form */}
      <div className="flex flex-col items-center justify-center h-[650px] w-[400px] bg-white rounded-3xl shadow-lg p-8 lg:p-10">
        <h2 className="text-2xl lg:text-2xl font-bold text-center">Sign Up</h2>

        {/* Avatar Upload */}
        <div className="my-4 flex justify-center">
          <label htmlFor="avatar-upload" className="relative">
            <img
              src="/path-to-placeholder.png" // Replace with actual placeholder image path
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
            />
            <span className="absolute bottom-0 right-0 bg-[#1971c2] text-white text-sm rounded-full p-2 cursor-pointer">
              <FiPlus className="w-5 h-5" /> {/* React Icon */}
            </span>
          </label>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4 w-full">
          <div>
            <input
              id="second-name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              id="username"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              id="phone"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1971c2] text-white py-2 px-4 rounded-xl text-lg font-medium mt-[8px]"
          >
            Register
          </button>
        </form>

        <div className="my-5 flex items-center justify-center space-x-2 w-full">
          <span className="block h-px w-full bg-gray-300"></span>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-black font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
