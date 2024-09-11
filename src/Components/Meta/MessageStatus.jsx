import React, { useState, useEffect } from 'react';

const MessageStatus = ({ isLoading, messageLatency }) => {
    const [stage, setStage] = useState(0); // Track the current stage (0: Idle, 1: Sending, 2: Reading, 3: Receiving, 4: Done)
    const [progress, setProgress] = useState(0); // Track progress for sending and receiving stages
    const [sendTime] = useState(messageLatency); // Time for sending and receiving in milliseconds (2 seconds)


    // Simulate message sending when isLoading is true
    useEffect(() => {
        if (isLoading) {
            setStage(1); // Start sending stage
            setProgress(0);
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStage(2); // Move to reading stage after sending is done
                    }
                    return prev + 10; // Increment progress
                });
            }, sendTime / 10); // Increment over sendTime duration
        }
    }, [isLoading, sendTime]);

    // Check when isLoading becomes false and start receiving
    useEffect(() => {
        if (!isLoading && stage === 2) {
            // Begin receiving message once isLoading turns false
            setStage(3); // Move to receiving stage
            setProgress(0); // Reset progress for receiving
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStage(4); // Mark as complete
                    }
                    return prev + 10; // Increment progress
                });
            }, sendTime / 10); // Same time for receiving as sending
        }
    }, [isLoading, stage, sendTime]);

    // Sending Stage (Component)
    const SendingMessage = () => (
        <div className='w-full'>
            <div className='text-main'>Sending message...</div>
            <div className='w-full border border-cyan-300 rounded-full h-2'>
                <div
                    className='bg-main h-2 rounded-full'
                    style={{ width: `${progress}%` }} // Progress bar
                ></div>
            </div>
        </div>
    );

    // Alien Reading Message Stage (Component)
    const ReadingMessage = () => (
        <div className='text-main'>
            <div>Alien is reading the message...</div>
        </div>
    );

    // Receiving Message Stage (Component)
    const ReceivingMessage = () => (
        <div>
            <div className='text-main'>Receiving message...</div>
            <div className='w-full border border-cyan-300 rounded-full h-2'>
                <div
                    className='bg-main h-2 rounded-full'
                    style={{ width: `${progress}%` }} // Progress bar
                ></div>
            </div>
        </div>
    );

    // useEffect(() => {
    //     console.log({ messageLatency });
    // }, [messageLatency])

    return (
        <div className='text-main max-w-[200px] mx-auto text-center'>
            {stage === 1 && <SendingMessage />} {/* Show sending stage */}
            {stage === 2 && <ReadingMessage />} {/* Show reading stage */}
            {stage === 3 && <ReceivingMessage />} {/* Show receiving stage */}
            {stage === 4 && <div>✔ Message delivered successfully!</div>} {/* Final stage */}
        </div>
    );
};

export default MessageStatus;
