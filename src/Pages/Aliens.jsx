// pages/Aliens.js
import React, { useState, useEffect } from 'react';
import AlienCard from '../Components/Aliens/AlienCard';
import Header from '../Components/Aliens/Header';
import aliensData from '../Utils/aliens'; // Import the file where the alien data is saved

const Aliens = () => {
    const [filteredAliens, setFilteredAliens] = useState(aliensData);

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = aliensData.filter((alien) =>
            alien.alienName.toLowerCase().includes(lowerCaseQuery) ||
            alien.planetName.toLowerCase().includes(lowerCaseQuery) ||
            alien.starName.toLowerCase().includes(lowerCaseQuery) ||
            alien.galaxyName.toLowerCase().includes(lowerCaseQuery) ||
            alien.alienType.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredAliens(filtered);
        return filtered.length;
    };

    useEffect(() => {
        setFilteredAliens(aliensData);
    }, []);

    return (
        <div className='flex flex-col h-full'>
            <div className='flex-0'>
                <Header onSearch={handleSearch} />
            </div>
            <div className="flex-1 overflow-y-auto pb-8">
                <div className="p-4 pt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredAliens.map((alien, index) => (
                            <AlienCard key={index} alien={alien} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aliens;
