import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer() {
    const initialTime = new Date().getTime() + 300000;
  const {
    seconds,
    minutes,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart: false,
    expiryTimestamp: initialTime, // Set the initial time for the countdown
    onExpire: () => {
      console.log('Countdown timer has expired!');
    },
  });

  const handleStart = () => {
    start();
  };

  const handlePause = () => {
    pause();
  };

  const handleResume = () => {
    resume();
  };

  const handleRestart = () => {
    restart(initialTime); // Reset the timer to the initial time
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <span>{String(minutes).padStart(2, '0')}:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default Timer;
