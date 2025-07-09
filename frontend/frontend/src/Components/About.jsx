import React from 'react';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

const About = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">About Us</h1>
        <p className="text-gray-700 mb-4">
          We are a team dedicated to building user-friendly and powerful web solutions. Our mission is to help
          users and businesses achieve their goals through clean and modern technology.
        </p>
        <p className="text-gray-700">
          Founded in 2025, we’ve worked with clients across the globe to deliver scalable and beautiful digital
          experiences.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
