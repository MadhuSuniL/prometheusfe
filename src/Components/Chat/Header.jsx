import React, { useState, useEffect, useRef } from 'react';
import { BiDownArrow } from "react-icons/bi";
import Ping from './Ping';
import { useNavigate } from 'react-router-dom';
import disconnectSound from '../../assets/disconnect.mp3';
import clearMessages from '../../assets/clearMessages.mp3';
import menuSound from '../../assets/menu.mp3';
import { generatePDF } from '../../Utils/message';

const Header = ({
    responses,
    currentAliensData,
    onMessageClear
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const nav = useNavigate()

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleExportChat = () => {
        if (responses.length > 0) {
            generatePDF(responses, currentAliensData)
            setIsMenuOpen(false);
        }
    };

    const handleClearChat = () => {
        const sound = new Audio(clearMessages);
        sound.play().catch((error) => {
            console.error('Error playing clear messages sound:', error);
        });
        onMessageClear();
        setIsMenuOpen(false);
    };

    const handleDisconnectChat = () => {
        const sound = new Audio(disconnectSound);
        sound.play().catch((error) => {
            console.error('Error playing disconnect sound:', error);
        });
        setIsMenuOpen(false);
        nav('/aliens');
    };


    useEffect(() => {
        const sound = new Audio(menuSound)
        sound.play().catch((error) => {
            console.error('Error playing menu sound:', error);
        })
    }, [isMenuOpen])



    return (
        <div className="flex items-center justify-between px-4 py-2 w-full z-10 rounded-b-md shadow shadow-cyan-500 relative">
            <Ping />

            {/* Chat title */}
            <h1 className="text-xl font-bold text-center">Chat</h1>

            {/* Settings Icon for Menu */}
            <div className="relative" ref={menuRef}>
                <div
                    className="text-2xl cursor-pointer"
                    onClick={toggleMenu}
                >
                    <BiDownArrow className="text-main" title="Settings" /> {/* Settings icon with a hover title */}
                </div>

                {/* Dropdown menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 top-10 mt-2 w-48 border border-main shadow-lg rounded-md z-50">
                        <ul className="p-1">
                            <li
                                className="text-center p-2 border-cyan-500 rounded-lg bg-opacity-0 bg-cyan-500 transition-transform transform hover:shadow-lg hover:bg-opacity-20 cursor-pointer"
                                onClick={handleExportChat}
                            >
                                Export Chat
                            </li>
                            <li
                                className="text-center p-2 border-cyan-500 rounded-lg bg-opacity-0 bg-cyan-500 transition-transform transform hover:shadow-lg hover:bg-opacity-20 cursor-pointer"
                                onClick={handleClearChat}
                            >
                                Clear All Messages
                            </li>
                            <li
                                className="text-center p-2 border-cyan-500 rounded-lg bg-opacity-0 bg-cyan-500 transition-transform transform hover:shadow-lg hover:bg-opacity-20 cursor-pointer"
                                onClick={handleDisconnectChat}
                            >
                                Disconnect Chat
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
