import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bg from '../../assets/bg.mp4';

const AppWelcomeLayout = () => {
    const isDrawerOpen = useSelector(state => state.store.isDrawerOpen);
    const isNotesOpen = useSelector(state => state.store.isNotesOpen);


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

    // Check if the current path is the root (i.e., "/")

    return (
        <div className='flex h-screen font-main space-bg uppercase'>
            <video className="video-bg" autoPlay muted loop>
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='p-1 w-full z-10'>
                <Outlet />
            </div>
        </div>
    );
}

export default AppWelcomeLayout;
