import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'; // To format the current date
import { IoMdLocate } from "react-icons/io";
import ActiveAndRecentAliens from '../Meta/ActiveAndRecentAliens';
import MessageStatus from '../Meta/MessageStatus';

const Meta = ({ isDrawerOpen }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { alien_name } = useParams()
    const [connectionId, setConnectionId] = useState(null);
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

    useEffect(() => {
        if (alien_name) {
            const newId = uuidv4();
            setConnectionId(newId); // Set the new UUID as the connection ID
        }
    }, [alien_name]);

    return (
        <>
            <div
                className={`p-1 fixed top-0 left-0 h-full w-80 lg:w-80 text-sm transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:static`}
            >
                <div className="flex flex-col gap-3 h-full p-1">
                    {/* Header */}
                    <div className='flex-0 p-2 rounded-md shadow shadow-cyan-500 '>
                        <div onClick={gotoPrometheus} className='flex justify-evenly cursor-pointer items-center p-2'>
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

                    {/* Body */}
                    <div className='flex-1 overflow-y-auto rounded-md shadow shadow-cyan-500'>
                        <ActiveAndRecentAliens />
                        <MessageStatus />
                    </div>

                    {/* Footer */}
                    <div className='flex-0 p-2 relative rounded-md shadow shadow-cyan-500'>
                        <div className='text-center text-cyan-400'>
                            {
                                alien_name ?
                                    <p className='text-xs text-right'>connection id : {connectionId}</p>
                                    :
                                    <p>&copy; {new Date().getFullYear()} Prometheus. All rights reserved.</p>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Meta;
