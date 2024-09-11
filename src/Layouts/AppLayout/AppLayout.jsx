import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Meta from '../../Components/AppLayout/Meta';
import bg from '../../assets/bg.mp4';
import music from '../../assets/bg.mp3'; // Ensure it's a valid audio format

const AppLayout = () => {
    const isDrawerOpen = useSelector(state => state.store.isDrawerOpen);
    const isNotesOpen = useSelector(state => state.store.isNotesOpen);
    const location = useLocation(); // Get the current location
    const [isAudioPlaying, setIsAudioPlaying] = useState(false); // State to check if audio is playing

    useEffect(() => {
        const audio = new Audio(music);
        audio.loop = true;
        audio.volume = 0.1; // Adjust the volume as needed

        const playAudio = async () => {
            try {
                await audio.play();
                setIsAudioPlaying(true);
            } catch (error) {
                console.error('Autoplay blocked or error playing audio:', error);
                setIsAudioPlaying(false);
            }
        };

        // Try playing the music when the component mounts
        playAudio();

        // Cleanup when the component unmounts
        return () => {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning
        };
    }, []);

    return (
        <div className='flex h-screen font-main space-bg gap-3 p-2'>
            {/* Background video */}
            <video
                className="video-bg"
                autoPlay
                muted
                loop
                onError={(e) => {
                    console.error('Error loading background video:', e);
                }}
            >
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Main content */}
            <div className='p-1 w-full z-10 rounded-md shadow shadow-cyan-500'>
                <Outlet />
            </div>

            <div className='p-1 z-10 rounded-md shadow shadow-cyan-500'>
                <Meta />
            </div>

        </div>
    );
};

export default AppLayout;
