import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bg from '../../assets/bg.mp4';

const AppWelcomeLayout = () => {
    const isDrawerOpen = useSelector(state => state.store.isDrawerOpen);
    const isNotesOpen = useSelector(state => state.store.isNotesOpen);


    // Check if the current path is the root (i.e., "/")

    return (
        <div className='flex h-screen font-main space-bg'>
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
