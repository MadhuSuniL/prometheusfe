import React, { useState, useEffect } from 'react';
import { chunkMessages } from '../../Utils/message';
import ReactMarkdown from 'react-markdown';

const ChunkTypewriter = ({ text, typeSpeed, onBegin, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const chunks = chunkMessages(text);

  useEffect(() => {
    if (onBegin && currentChunkIndex === 0) onBegin();

    const intervalId = setInterval(() => {
      if (currentChunkIndex < chunks.length) {
        setDisplayText(prevText => (prevText ? prevText + ' ' + chunks[currentChunkIndex] : chunks[currentChunkIndex]));
        setCurrentChunkIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, typeSpeed);

    return () => clearInterval(intervalId);
  }, [chunks, currentChunkIndex, typeSpeed, onBegin, onComplete]);

  return (
    <div className={displayText.length !== text.length ? 'animate-pulse' : ''}>
      <ReactMarkdown>
        {displayText}
      </ReactMarkdown>
    </div>
  );
};

export default ChunkTypewriter;
