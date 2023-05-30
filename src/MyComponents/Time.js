import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      <p style={{ color: 'green' }}>
        {currentTime.toLocaleTimeString(undefined, {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          fractionalSecondDigits: 3,
        })}
      </p>
    </div>
  );
};

export default Time;
