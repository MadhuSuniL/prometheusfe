import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Meta from '../../Components/AppLayout/Meta';
import bg from '../../assets/bg.mp4';
import music from '../../assets/bg.mp3'; // Ensure it's a valid audio format

const AppLayout = () => {
    const isDrawerOpen = useSelector(state => state.store.isDrawerOpen);
    const isNotesOpen = useSelector(state => state.store.isNotesOpen);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false); // State to check if audio is playing

    // Fullscreen functionality
    const handleFullScreen = () => {
        const element = document.documentElement; // Get the root element (HTML)
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    };

    const onFullScreenChange = () => {
        if (!document.fullscreenElement) {
            // Force back to full screen if the user exits
            handleFullScreen();
        }
    };

    useEffect(() => {
        // Force fullscreen on mount
        handleFullScreen();

        // Listen for fullscreen changes
        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);
        document.addEventListener("msfullscreenchange", onFullScreenChange);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener("fullscreenchange", onFullScreenChange);
            document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
            document.removeEventListener("mozfullscreenchange", onFullScreenChange);
            document.removeEventListener("msfullscreenchange", onFullScreenChange);
        };
    }, []);

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
        <div className='flex h-screen font-main space-bg gap-3 p-2 uppercase'>
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
            <div className='w-full z-10 rounded-md shadow shadow-cyan-500'>
                <Outlet />
            </div>

            <div className='p-1 z-10 rounded-md shadow shadow-cyan-500'>
                <Meta />
            </div>

        </div>
    );
};

export default AppLayout;
