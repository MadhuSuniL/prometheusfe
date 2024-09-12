import React, { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import loadedSound from '../../assets/loaded.mp3';

const Intro = ({ currentAliensData, loaded }) => {
    const { alienName, planetName, starName, galaxyName, civilizationLevel, distanceFromEarth, alienType, gender } = currentAliensData;


    useEffect(() => {
        if (loaded) {
            const sound = new Audio(loadedSound);
            sound.play().catch((error) => {
                console.error('Error playing loaded sound:', error);
            });
        }
    }, [loaded]);


    return (
        <div className='h-full flex justify-center items-center max-w-[580px] mx-auto'>
            <div>
                {loaded && (
                    <>
                        {/* Alien Name with ReactTyped Animation */}
                        <h1 className="text-3xl text-center font-bold mb-4">
                            <ReactTyped
                                strings={[alienName]}
                                typeSpeed={50}
                                showCursor={false}
                            />
                        </h1>

                        {/* Alien Information with ReactTyped Animation */}
                        {/* <p className="text-lg mb-4 text-center">
                            <ReactTyped
                                strings={[
                                    `A <span class="font-bold">${gender}</span> alien from the planet <span class="font-bold">${planetName}</span> in the <span class="font-bold">${galaxyName}</span> galaxy. They orbit the star <span class="font-bold">${starName}</span>, which is <span class="font-bold">${distanceFromEarth}</span> away from Earth. With a civilization level of <span class="font-bold">${civilizationLevel}</span>, they represent a <span class="font-bold">${alienType}</span> type of alien.`,
                                ]}
                                typeSpeed={10}
                                startDelay={1500}
                                showCursor={false}
                                smartBackspace={true}
                            />
                        </p> */}

                        {/* Encouraging message with ReactTyped Animation */}
                        <p className="text-lg mb-8 text-center">
                            <ReactTyped
                                strings={[`Ready to start your interstellar chat? Send your first message to ${alienName}, an alien from the distant planet ${planetName}, and discover the mysteries they hold!`]}
                                typeSpeed={1}
                                startDelay={1500}
                                showCursor={false}
                            />
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Intro;
