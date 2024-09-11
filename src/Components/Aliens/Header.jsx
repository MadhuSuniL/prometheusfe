import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import aliensData from '../../Utils/aliens'; // Import the file where the alien data is saved

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(aliensData.length);

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearchClick = () => {
        let countValue = onSearch(query);
        setCount(countValue);
    };

    return (
        <header className="p-4 text-white text-center">
            <h1 className="text-5xl text-main font-bold mb-2">Explore the Aliens</h1>
            <p className="text-lg text-cyan-300 mb-4">
                <ReactTyped
                    strings={[
                        "Discover and connect with alien civilizations from distant galaxies.",
                        "Choose an alien to learn more about their world and culture.",
                    ]}
                    typeSpeed={20}
                    backSpeed={20}
                    backDelay={3000}
                    loop
                    className="text-lg text-cyan-300 mb-4"
                />
            </p>
            <div className="flex justify-center items-center space-x-4 w-full">
                <input
                    type="text"
                    placeholder="Search aliens..."
                    value={query}
                    onChange={handleSearchChange}
                    className="p-2 w-full rounded-md border border-cyan-500 bg-transparent text-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-cyan-500 transition duration-300 ease-in-out"
                />
                <button
                    onClick={handleSearchClick}
                    className="px-8 py-2 text-cyan-500 border border-cyan-500 rounded-lg hover:bg-opacity-30 hover:text-white transition duration-300 ease-in-out text-xl bg-opacity-10 bg-cyan-500"
                >
                    Search
                </button>
            </div>
            {/* Display the number of results */}
            <p className="text-main text-lg m-2 text-right">
                {count} {count === 1 ? 'result' : 'results'} found {query ? `for query '${query}'` : ''}
            </p>
        </header>
    );
};

export default Header;
