import React, { useState, useEffect, useRef } from 'react';
import { addNewResponse } from '../redux/Slice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Groq from '../Utils/groq';
import { getAlienDataByName } from '../Utils/aliens';

const WithGroq = (WrappedComponent) => {
    return (props) => {
        const gq = useRef(null);
        const { alien_name } = useParams();
        const dispatch = useDispatch();
        const [isLoading, setIsLoading] = useState(false);
        const [isReceiving, setIsReceiving] = useState(false);
        const [latestResponse, setLatestResponse] = useState(null);
        const [messageLatency, setMessageLatency] = useState(0);

        const setNewResponse = (response) => dispatch(addNewResponse({ alienName: alien_name, response }));
        const currentAliensData = getAlienDataByName(alien_name);

        const sendQuery = (query) => {
            setIsLoading(true);
            setIsReceiving(true);
            setTimeout(() => {
                gq.current?.getResponse(query)
                    .then((response) => {
                        let responseObj = {
                            query,
                            success: true,
                            content: response
                        };
                        setLatestResponse(responseObj);
                        setIsLoading(false);
                    })
                // .catch((error) => {
                //     let responseObj = {
                //         query,
                //         success: false,
                //         content: error?.message || 'Something went wrong'
                //     };
                //     setLatestResponse(responseObj);
                //     setIsLoading(false);
                // })
            }, messageLatency);
        };

        // Setup WebSocket-like Groq connection
        const setupGroqConnection = () => {
            const { alienName, planetName, starName, galaxyName, civilizationLevel, distanceFromEarth, alienType, gender } = currentAliensData;

            // Only initialize Groq if it's not initialized yet
            if (!gq.current) {
                gq.current = new Groq(
                    alienName,
                    planetName,
                    starName,
                    galaxyName,
                    civilizationLevel,
                    distanceFromEarth,
                    alienType,
                    gender
                );
            }
        };

        // Cleanup effect to avoid memory leaks
        useEffect(() => {
            setupGroqConnection();

            // Cleanup logic if necessary (for WebSocket-like connection)
            return () => {
                if (gq.current) {
                    gq.current.disconnect?.(); // Call disconnect or any cleanup method if exists
                    gq.current = null; // Clear the ref on unmount
                }
            };
        }, [alien_name]); // Re-run when alien_name changes

        // Handle responses when `latestResponse` is updated
        useEffect(() => {
            if (latestResponse) {
                setTimeout(() => {
                    setNewResponse(latestResponse);
                    setIsReceiving(false)
                    setLatestResponse(null);
                }, messageLatency);
            }
        }, [latestResponse, messageLatency]);

        // Set latency when `gq.current` is initialized
        useEffect(() => {
            if (gq.current) {
                setMessageLatency(gq.current.latency || 1); // Use latency from Groq or default to 1000ms
            }
        }, [gq.current]);

        return (
            <WrappedComponent
                {...props}
                isLoading={isLoading}
                isReceiving={isReceiving}
                sendQuery={sendQuery}
                messageLatency={messageLatency || 0}
            />
        );
    };
};

export default WithGroq;
