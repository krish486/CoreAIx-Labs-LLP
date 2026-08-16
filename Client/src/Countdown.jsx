import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundDecor from './Features/Dashboard/UI/Components/BackgroundDecor';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const current = targetDate - new Date().getTime();
      setTimeLeft(current);
      
      // If time runs out, clear the interval
      if (current <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Calculate time components
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft <= 0) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0d0c0b] text-white overflow-hidden font-sans selection:bg-[#E8735A] selection:text-white">
      {/* Reusing your aesthetic background decor to match the brand */}
      <BackgroundDecor />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <p className="text-[#E8735A] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-medium">
          DeckedOut
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#f5f5f5]">
          The hot seat awaits.
        </h1>
        
        <p className="text-[#a0a0a0] max-w-md text-lg mb-16 font-light">
          We are engineering the narrative. <br className="hidden md:block"/>
          The curtains lift at midnight.
        </p>

        <div className="flex gap-6 md:gap-12 text-5xl md:text-7xl font-light tabular-nums">
          <div className="flex flex-col items-center">
            <span>{hours.toString().padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Hours</span>
          </div>
          <span className="text-[#333] animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span>{minutes.toString().padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Minutes</span>
          </div>
          <span className="text-[#333] animate-pulse">:</span>
          <div className="flex flex-col items-center">
            <span>{seconds.toString().padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
