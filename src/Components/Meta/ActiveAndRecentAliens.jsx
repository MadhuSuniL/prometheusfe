import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAlienDataByName } from '../../Utils/aliens';
import { PiAlienBold, PiAlienDuotone, PiAlienFill } from 'react-icons/pi'; // Replace with actual import paths if different
import { useNavigate } from 'react-router-dom';
import { getRecentAliens } from '../../Utils/localstorage';
import connectAlienSound from '../../assets/connectAlien.mp3'


const ActiveAndRecentAliens = () => {
    const { alien_name } = useParams();
    const [alien, setAlien] = useState(null);
    const recentAliens = getRecentAliens()
    const nav = useNavigate()


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

    const handleClick = (alienName) => {
        const sound = new Audio(connectAlienSound);
        sound.play().catch((error) => {
            console.error('Error playing connect alien sound:', error);
        });
        nav(`/aliens/${alienName}`);
    };


    useEffect(() => {
        if (alien_name) {
            const fetchedAlien = getAlienDataByName(alien_name);
            setAlien(fetchedAlien);
        }
    }, [alien_name]);

    return (
        <div className='text-main p-2'>
            {
                alien_name && alien ? (
                    <div className="flex flex-col justify-center gap-2">
                        <div className="p-4 0border 0border-cyan-500 rounded-lg 0shadow-md 0bg-opacity-10 0bg-cyan-500">
                            <div className="grid gap-2 text-cyan-400">
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
                                    <span>{alien.gender}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className="text-center flex flex-col gap-1">
                        {
                            recentAliens.length > 0 ?
                                <div className="text-center grid grid-cols-2 gap-2">
                                    {
                                        recentAliens.map((alien, index) =>
                                            <div onClick={() => handleClick(alien.alienName)} className='p-2 border-cyan-500 rounded-lg shadow-md bg-opacity-10 bg-cyan-500 transition-transform transform hover:shadow-lg hover:bg-opacity-20 hover:border duration-1000 cursor-pointer' key={index}>
                                                <div className="flex justify-center mb-4">
                                                    {iconForGender(alien.gender)}
                                                </div>
                                                <h1 className='text-lg font-bold'>{alien.alienName}</h1>
                                            </div>
                                        )
                                    }
                                </div>
                                :
                                <div className='flex justify-center items-center h-96'>
                                    <h1>Start the chat by exploring the aliens ..</h1>
                                </div>
                        }
                    </div>
                )
            }
        </div>
    );
}

export default ActiveAndRecentAliens;
