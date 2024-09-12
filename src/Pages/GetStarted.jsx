import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import startSound from '../assets/start.mp3';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const sound = new Audio(startSound);
    sound.play().catch((error) => {
      console.error('Error playing start sound:', error);
    });
    setTimeout(() => {
      navigate('/aliens');
    }, 1);
  };

  return (
    <div className="get-started-container text-center mt-32 px-4">
      {/* Main title */}
      <h1 className="text-cyan-500 text-8xl font-extrabold uppercase mb-6 tracking-wide">
        Prometheus
      </h1>

      {/* Typing effect for subtitle */}
      <h2 className="text-cyan-400 text-5xl font-bold my-4">
        <ReactTyped
          strings={[
            'Connect with Alien Civilizations',
            'Explore Distant Galaxies',
            'Chat with Intelligent Beings'
          ]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={2000}
          startDelay={500}
          loop
        />
      </h2>

      {/* Description */}
      <p className="text-cyan-300 text-lg max-w-2xl mx-auto mb-8">
        Journey across galaxies, explore distant constellations, and chat with intelligent beings from different stars.
        Expand your mind by communicating with life forms from distant worlds and discovering secrets of the universe.
      </p>

      {/* Start button */}
      <button
        onClick={handleStartClick}
        className="px-8 py-4 text-cyan-500 border border-cyan-500 rounded-lg hover:bg-opacity-30 hover:text-white transition duration-300 ease-in-out text-xl bg-opacity-10 bg-cyan-500"
        style={{
          cursor: 'pointer',
        }}
      >
        Start Your Intergalactic Chat
      </button>

      {/* Note about headphones */}
      <p className="text-cyan-300 text-sm mt-8 italic">
        For the best experience, please use headphones.
      </p>
    </div>
  );
};

export default GetStarted;
