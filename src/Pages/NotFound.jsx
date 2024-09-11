import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdLocate } from "react-icons/io";

const NotFound = () => {
    const navigate = useNavigate();

    // Function to navigate back to the home page
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            {/* HUD - Title */}
            <div className="flex justify-around items-center p-1 mb-6">
                <h1 className="text-main text-6xl font-main font-extrabold uppercase">Prometheus</h1>
                <IoMdLocate className="text-main text-6xl font-main font-extrabold " />
            </div>

            {/* 404 Error Message */}
            <div className="text-center">
                <h2 className="text-5xl text-main font-bold mb-4">404 - Not Found</h2>
                <p className="text-xl font-semibold text-main">Oops! The page you're looking for doesn't exist.</p>
            </div>

            {/* Button to return home */}
            <button
                onClick={goToHome}
                className="m-3 px-8 py-4 text-cyan-500 border border-cyan-500 rounded-lg hover:bg-opacity-30 hover:text-white transition duration-300 ease-in-out text-xl bg-opacity-10 bg-cyan-500"
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default NotFound;
