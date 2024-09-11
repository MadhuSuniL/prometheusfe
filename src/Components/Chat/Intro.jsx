import React from 'react';

const Intro = ({ currentAliensData }) => {
    const { alienName, planetName, starName, galaxyName, civilizationLevel, distanceFromEarth, alienType, gender } = currentAliensData;

    return (
        <div className='h-full flex justify-center items-center max-w-[580px] mx-auto'>
            <div>
                {/* Alien Name as Heading */}
                <h1 className="text-3xl text-center font-bold mb-4">{alienName}</h1>

                {/* Alien Information */}
                <p className="text-lg mb-4 text-center">
                    A <span className="font-bold">{gender}</span> alien from the planet <span className="font-bold">{planetName}</span> in the <span className="font-bold">{galaxyName}</span> galaxy.
                    They orbit the star <span className="font-bold">{starName}</span>, which is <span className="font-bold">{distanceFromEarth}</span> away from Earth. With a civilization level of <span className="font-bold">{civilizationLevel}</span>,
                    they represent a <span className="font-bold">{alienType}</span> type of alien.
                </p>

                {/* Encouraging message */}
                <p className="text-lg mb-8 text-center">
                    Ready to start the conversation? Send your first message to {alienName}!
                </p>
            </div>
        </div>
    );
};

export default Intro;
