import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { clearCurrentTopic } from '../../redux/Slice';
import { format } from 'date-fns'; // To format the current date
import { IoMdLocate } from "react-icons/io";
import ActiveAndRecentAliens from '../Meta/ActiveAndRecentAliens';
import MessageStatus from '../Meta/MessageStatus';

const Meta = ({ isDrawerOpen }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { alien_name } = useParams()

    const [currentTime, setCurrentTime] = useState(new Date());
    const [isShowing, setIsShowing] = useState(true); // State to manage spinning

    // Function to update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    const gotoPrometheus = () => {
        return nav(`/`);
    };

    // Toggle spinning state
    const toggleSpin = () => {
        setIsShowing(!isShowing);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-80 lg:w-80 text-sm transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:static`}
            >
                <div className="flex flex-col h-full p-1">
                    {/* Header */}
                    <div className='flex-0 pt-1'>
                        <div onClick={gotoPrometheus} className='flex justify-evenly cursor-pointer items-center p-1'>
                            <h1 className='text-main text-5xl font-main font-extrabold uppercase'>Prometheus</h1>
                            <IoMdLocate
                                onClick={toggleSpin} // Add onClick to toggle spin
                                className={`text-main text-5xl font-main font-extrabold uppercase ${isShowing ? '' : 'hidden'}`}
                            />
                        </div>
                        <div className='text-center flex flex-col items-end'>
                            <p className='text-lg font-bold text-cyan-500'>
                                {format(currentTime, 'EEEE, MMMM do yyyy')} {/* Display current date */}
                            </p>
                            <p className='text-lg text-cyan-400'>
                                {format(currentTime, 'hh:mm:ss a')} {/* Display current time */}
                            </p>
                        </div>
                        <h1 className='text-center text-main text-xl my-1 mt-2 font-bold'>{alien_name ? `Active alien - ${alien_name}` : 'Recent aliens'} </h1>
                    </div>

                    {/* Body -1 */}
                    <div className='flex-1 overflow-y-auto'>
                        <ActiveAndRecentAliens />
                    </div>

                    {/* Body -2 */}
                    <div className='flex-1 overflow-y-auto'>
                        <MessageStatus />
                    </div>

                    {/* Footer */}
                    <div className='flex-0 relative'>
                        <div className='text-center text-cyan-400'>
                            <p>&copy; {new Date().getFullYear()} Prometheus. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Meta;
