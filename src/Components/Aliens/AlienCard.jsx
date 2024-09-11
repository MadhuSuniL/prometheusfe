import React from 'react';
import { PiAlienBold, PiAlienDuotone, PiAlienFill } from 'react-icons/pi'; // Replace with actual import paths if different
import { useNavigate } from 'react-router-dom';

const iconForGender = (gender) => {
    switch (gender) {
        case 'male':
            return <PiAlienBold className="text-cyan-500 text-4xl" />;
        case 'female':
            return <PiAlienFill className="text-cyan-500 text-4xl" />;
        default:
            return <PiAlienDuotone className="text-cyan-500 text-4xl" />;
    }
};

const AlienCard = ({ alien }) => {

    const nav = useNavigate()

    const handleClick = () => {
        if (alien.alienName) {
            nav(`/aliens/${alien.alienName}`);
        }
    };



    return (
        <div onClick={handleClick} className="p-4 border border-cyan-500 rounded-lg shadow-md bg-opacity-10 bg-cyan-500 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-opacity-20 cursor-pointer">
            {/* Alien Icon */}
            <div className="flex justify-center mb-4">
                {iconForGender(alien.gender)}
            </div>

            {/* Alien Name */}
            <h3 className="text-2xl text-center font-semibold text-cyan-500 truncate">{alien.alienName}</h3>

            {/* Alien Details */}
            <div className="mt-4 grid grid-cols-1 gap-2 text-cyan-400">
                <div className="flex justify-between">
                    <strong>Planet:</strong>
                    <span>{alien.planetName}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Star:</strong>
                    <span>{alien.starName}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Galaxy:</strong>
                    <span>{alien.galaxyName}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Civilization Level:</strong>
                    <span>{alien.civilizationLevel}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Distance from Earth:</strong>
                    <span>{alien.distanceFromEarth}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Type:</strong>
                    <span>{alien.alienType}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Gender:</strong>
                    <span>{alien.gender === 'unknown' ? '-' : alien.gender}</span>
                </div>
            </div>
        </div>
    );
};

export default AlienCard;