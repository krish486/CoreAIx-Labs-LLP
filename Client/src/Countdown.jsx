// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import BackgroundDecor from './Features/Dashboard/UI/Components/BackgroundDecor';

// const Countdown = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const current = targetDate - new Date().getTime();
//       setTimeLeft(current);
      
//       // If time runs out, clear the interval
//       if (current <= 0) {
//         clearInterval(interval);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [targetDate]);

//   // Calculate time components
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   if (timeLeft <= 0) return null;

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0d0c0b] text-white overflow-hidden font-sans selection:bg-[#E8735A] selection:text-white">
//       {/* Reusing your aesthetic background decor to match the brand */}
//       <BackgroundDecor />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//         className="z-10 flex flex-col items-center text-center px-4"
//       >
//         <p className="text-[#E8735A] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-medium">
//           DeckedOut
//         </p>
        
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#f5f5f5]">
//           The hot seat awaits.
//         </h1>
        
//         <p className="text-[#a0a0a0] max-w-md text-lg mb-16 font-light">
//           We are engineering the narrative. <br className="hidden md:block"/>
//           The curtains lift at midnight.
//         </p>

//         <div className="flex gap-6 md:gap-12 text-5xl md:text-7xl font-light tabular-nums">
//           <div className="flex flex-col items-center">
//             <span>{hours.toString().padStart(2, '0')}</span>
//             <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Hours</span>
//           </div>
//           <span className="text-[#333] animate-pulse">:</span>
//           <div className="flex flex-col items-center">
//             <span>{minutes.toString().padStart(2, '0')}</span>
//             <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Minutes</span>
//           </div>
//           <span className="text-[#333] animate-pulse">:</span>
//           <div className="flex flex-col items-center">
//             <span>{seconds.toString().padStart(2, '0')}</span>
//             <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#666] mt-4 uppercase">Seconds</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Countdown;

// updated doomsday clock design 

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const current = targetDate - new Date().getTime();
      setTimeLeft(current);
      
      if (current <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft <= 0) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden selection:bg-[#E8735A] selection:text-white">
      
      {/* --- DOOMSDAY CLOCK BACKGROUND EFFECTS --- */}
      
      {/* Deep Red/Orange Core Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,115,90,0.08)_0%,_transparent_60%)]" />

      {/* Sweeping Radar / Clock Hand */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full opacity-30"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0 340deg, #E8735A 360deg)'
        }}
      />

      {/* Outer Rotating Ring (Dashed) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full border-[1px] border-[#E8735A]/20 border-dashed"
      />

      {/* Inner Rotating Ring (Solid) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-full border-[1px] border-[#E8735A]/10"
      />

      {/* Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-full h-[1px] bg-white absolute" />
        <div className="h-full w-[1px] bg-white absolute" />
      </div>


      {/* --- MAIN CONTENT (Z-INDEX 10) --- */}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl"
      >
        {/* Typographic "Logo" / System Status */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <motion.div 
            animate={{ opacity: [1, 0.2, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
            className="w-2 h-2 md:w-3 md:h-3 bg-[#E8735A] rounded-full shadow-[0_0_12px_#E8735A]" 
          />
          <span className="tracking-[0.4em] text-[#E8735A] text-xs md:text-sm font-mono font-semibold uppercase">
            DeckedOut // System Initiating
          </span>
        </div>

        {/* The Doomsday Countdown */}
        <div className="flex items-center justify-center gap-4 md:gap-10 font-mono tabular-nums mb-16 w-full">
          {/* Hours */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              {hours.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Hours</span>
          </div>
          
          <span className="text-4xl md:text-8xl text-[#333] font-light mb-8 md:mb-12 animate-pulse">:</span>
          
          {/* Minutes */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              {minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Minutes</span>
          </div>
          
          <span className="text-4xl md:text-8xl text-[#333] font-light mb-8 md:mb-12 animate-pulse">:</span>
          
          {/* Seconds */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              {seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Seconds</span>
          </div>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f5f5]">
            The hot seat awaits.
          </h1>
          <p className="text-[#888] font-mono text-xs md:text-sm tracking-widest uppercase">
            Critical narrative payload deploying at midnight.
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default Countdown;
