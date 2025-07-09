import React, { useState, useEffect } from 'react';

const Lodingpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center z-50">
        {/* Spinning Circle Animation */}
        <div className="relative mb-6">
          <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-purple-500"></div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we prepare your content</p>
        
        {/* Optional: Skip button */}
        <button
          onClick={() => setIsLoading(false)}
          className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
        >
          Skip
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Welcome to Your Home Page!
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Content Loaded Successfully
          </h2>
          <p className="text-gray-600 mb-6">
            Your page content goes here. The spinning circle loading animation has completed.
          </p>
          
          <button
            onClick={() => setIsLoading(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Show Loading Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lodingpage;