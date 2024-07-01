"use client";
import React, { useState, useEffect } from 'react';
import { TimerContainer } from '@/components/countdown-trakiz';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({targetDate} ) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      // @ts-ignore
      setIntervalId(id);
    }
    // @ts-ignore
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="countdown-timer">
      <TimerContainer
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
      />
    </div>
  );
};

export default CountdownTimer;
