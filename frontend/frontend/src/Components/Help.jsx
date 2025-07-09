import React from 'react';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

const Help = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Help Center</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the Help Center. Here you’ll find answers to the most common questions.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>How to use the platform?</li>
          <li>How to reset your password?</li>
          <li>How to contact customer support?</li>
          <li>How to delete your account?</li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Help;
