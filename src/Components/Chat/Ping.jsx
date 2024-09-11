import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlienDataByName } from '../../Utils/aliens';

const Ping = () => {
    const { alien_name } = useParams();
    const data = getAlienDataByName(alien_name);

    // Convert distance from Earth to a number and calculate the ping value
    const basePing = parseFloat(data.distanceFromEarth.replace(',', '').split(' ')[0]) + 1000;

    // State for fluctuating ping value
    const [ping, setPing] = useState(basePing);

    useEffect(() => {
        // Function to generate a fluctuating ping value
        const fluctuatePing = () => {
            const fluctuation = Math.random() * 20 + 10; // Generate fluctuation between 10 and 30
            setPing(basePing + fluctuation - 15); // Adjust basePing with fluctuation
        };

        // Set an interval to update the ping value every 500 milliseconds
        const interval = setInterval(fluctuatePing, 1500);

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [basePing]);

    return (
        <div className="flex items-center space-x-2">
            <div className="w-3 h-3 animate-pulse rounded-full bg-cyan-600"></div>
            <div className="w-2 h-2 rounded-full animate-ping bg-main"></div>
            <div className="w-3 h-3 rounded-full animate-pulse bg-cyan-600"></div>
            <div className='text-main p-0 m-0 fluctuating'>{ping.toFixed(0)}ms</div> {/* Apply fluctuating effect */}
        </div>
    );
};

export default Ping;
