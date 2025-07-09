// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/userinfo/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: Email, PassWord: PassWord }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate('/Home');
      } else {
        setError('Wrong credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6"
     style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              value={Email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              placeholder="Enter Email"
            />
            <label className="absolute left-4 top-2 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="PassWord"
              value={PassWord}
              required
              onChange={(e) => setPassWord(e.target.value)}
              className="peer w-full px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              placeholder="Enter PassWord"
            />
            <label className="absolute left-4 top-2 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white">
              PassWord
            </label>
          </div>

          {error && (
            <p className="text-red-300 text-sm font-medium text-center animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-white/20 text-white font-semibold py-2 rounded-md hover:bg-white/30 backdrop-blur transition duration-300 shadow-md hover:shadow-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
