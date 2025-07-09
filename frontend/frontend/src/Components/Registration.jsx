// src/Components/Registration.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Registration() {
  const [itm, setItem] = useState([]);
  const [editingi, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [Form, serForm] = useState({
    Email: '',
    MobileNumber: '',
    PassWord: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/userinfo/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Form),
    });

    if (response.ok) {
      alert("Registration successful!");
      resetForm();
      navigate('/Login');
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  const resetForm = () => {
    serForm({
      Email: '',
      MobileNumber: '',
      PassWord: ''
    });
    setEditingId(null);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl hover:shadow-indigo-500 transition duration-300">
        <h1 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">Sign up to continue</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={Form.Email}
              onChange={(e) => serForm({ ...Form, Email: e.target.value })}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-black/20 text-black placeholder-transparent border border-black/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
            <label className="absolute left-4 top-2 text-black text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-black transition-all">
              Email
            </label>
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <input
              type="MobileNumber"
              placeholder="MobileNumber"
              value={Form.MobileNumber}
              onChange={(e) => serForm({ ...Form, MobileNumber: e.target.value })}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-black/20 text-black placeholder-transparent border border-black/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
            <label className="absolute left-4 top-2 text-black text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-black transition-all">
              MobileNumber
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={Form.PassWord}
              onChange={(e) => serForm({ ...Form, PassWord: e.target.value })}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-white/20 text-black placeholder-transparent border border-black/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
            <label className="absolute left-4 top-2 text-black text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-black transition-all">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-200 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            Submit
          </button>
          <Link
              to="/Login"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
              Login..
          </Link>
        </form>
        <a href="/Login" className="text-center text-white hover:text-indigo-300 transition duration-300"/>
        <div className="text-center mt-6">
          
        </div>
      </div>
    </div>
  );
}
