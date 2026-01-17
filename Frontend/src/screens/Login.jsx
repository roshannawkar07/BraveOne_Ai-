import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Please sign in to continue
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
            hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg 
            shadow-lg transition-transform transform hover:scale-[1.01]"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400">Don’t have an account? </span>
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-medium transition"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
