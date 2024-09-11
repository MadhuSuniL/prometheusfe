import React, { useEffect, useState } from 'react';
import bg from '../assets/alien_connect_bg.mp4';
import Chat from './Chat';
import { useParams } from 'react-router-dom';
import { appendAlienToRecentAliens } from '../Utils/localstorage';

const LoadingScreen = () => {
    const [isVideoComplete, setIsVideoComplete] = useState(false); // State to check if the video is finished
    const { alien_name } = useParams();

    const handleVideoEnd = () => {
        setIsVideoComplete(true);
    };

    const handleVideoError = () => {
        // Call handleVideoEnd when there's an error playing the video
        handleVideoEnd();
    };

    useEffect(() => {
        appendAlienToRecentAliens(alien_name);
    }, [alien_name]);

    return (
        <div className='flex h-full font-main loading-bg gap-3'>
            {/* Video Background */}
            <video
                className={`video-bg transition-opacity duration-1000 ${isVideoComplete ? 'opacity-0' : 'opacity-100'}`}
                autoPlay
                onEnded={handleVideoEnd}
                onError={handleVideoError} // Handle video error
            >
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Chat Component - hidden until video completes */}
            <div
                className={`h-full w-full transition-opacity duration-1000 ${isVideoComplete ? 'opacity-100' : 'opacity-0'}`}
            >
                <Chat />
            </div>
        </div>
    );
};

export default LoadingScreen;
