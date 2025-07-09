import React from 'react';
import { Link } from 'react-router-dom';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

export default function Home() {
    return (
        <>
        <Header/>
        <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
        

            {/* 👉 Main Content */}
            <div className="flex-1 mx-auto w-full max-w-17xl px-4 sm:px-8 py-30">
                <aside className="flex flex-col sm:flex-row items-center justify-between gap-10 bg-white-100 backdrop-blur-none rounded-2xl shadow-2xl p-20  transition-all duration-300">

                    {/* 👈 Left Side: Paragraph */}
                    <div className="flex flex-col justify-center items-start text-left w-full sm:w-1/2 gap-6">
                        <h1 className="text-4xl font-bold text-gray-900">Welcome to the Home Page</h1>
                        <p className="text-lg text-gray-700">
                            This is your React dashboard to explore various projects. Dive into components, props, and even TradingView integrations.
                        </p>
                    </div>

                    {/* 👉 Right Side: Buttons */}
                    <div className="flex flex-col justify-center items-start sm:items-end text-right w-full sm:w-1/2 gap-6">
                        <Link
                            to="/Gallery"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            GALLERY
                        </Link>

                        <Link
                            to="/Table"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            DASHBORD
                        </Link>
                        <Link
                            to="/Dashboard"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            GAALLERY PLOT
                        </Link>
                        <Link
                            to="/Tableplots"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            DASHBORD PLOTS
                        </Link>

                        
                    </div>
                </aside>
            </div>

           
        </div>
        <Footer/>
        </>
    );
}
