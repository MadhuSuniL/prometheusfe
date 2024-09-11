import React, { useState, useEffect, useRef } from 'react';
import { BiDownArrow } from "react-icons/bi";
import Ping from './Ping';
import { useNavigate } from 'react-router-dom';

const Header = ({
    alienName,
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
        // Add logic for exporting the chat
        console.log("Chat exported");
        setIsMenuOpen(false);
    };

    const handleClearChat = () => {
        onMessageClear();
        setIsMenuOpen(false);
    };

    const handleDisconnectChat = () => {
        setIsMenuOpen(false);
        nav('/aliens');
    };

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
