import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Login Form */}
      <div className="flex flex-col items-center justify-center h-[550px] w-[400px] bg-white rounded-3xl shadow-lg p-8 lg:p-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">Login</h2>
        <p className="text-center text-black mt-2 font-medium">
          Hey, Enter your details to get sign in to your account
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4 w-full">
          <div>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-3 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Enter Email / Phone Number"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-3 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1971c2] text-white py-3 px-4 rounded-xl text-lg font-medium"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center justify-center space-x-2 w-full">
          <span className="block h-px w-full bg-gray-300"></span>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-black font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
