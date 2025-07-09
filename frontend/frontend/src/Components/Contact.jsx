import React from 'react';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

const Contact = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you! Fill out the form and we'll get back to you shortly.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
