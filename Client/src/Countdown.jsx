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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// updated doomsday clock design 

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Countdown = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const current = targetDate - new Date().getTime();
//       setTimeLeft(current);
      
//       if (current <= 0) {
//         clearInterval(interval);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [targetDate]);

//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   if (timeLeft <= 0) return null;

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden selection:bg-[#E8735A] selection:text-white">
      
//       {/* --- DOOMSDAY CLOCK BACKGROUND EFFECTS --- */}
      
//       {/* Deep Red/Orange Core Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,115,90,0.08)_0%,_transparent_60%)]" />

//       {/* Sweeping Radar / Clock Hand */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full opacity-30"
//         style={{
//           background: 'conic-gradient(from 0deg, transparent 0 340deg, #E8735A 360deg)'
//         }}
//       />

//       {/* Outer Rotating Ring (Dashed) */}
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//         className="absolute w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full border-[1px] border-[#E8735A]/20 border-dashed"
//       />

//       {/* Inner Rotating Ring (Solid) */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//         className="absolute w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-full border-[1px] border-[#E8735A]/10"
//       />

//       {/* Crosshairs */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
//         <div className="w-full h-[1px] bg-white absolute" />
//         <div className="h-full w-[1px] bg-white absolute" />
//       </div>


//       {/* --- MAIN CONTENT (Z-INDEX 10) --- */}
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl"
//       >
//         {/* Typographic "Logo" / System Status */}
//         <div className="flex items-center gap-3 mb-12 md:mb-20">
//           <motion.div 
//             animate={{ opacity: [1, 0.2, 1] }} 
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
//             className="w-2 h-2 md:w-3 md:h-3 bg-[#E8735A] rounded-full shadow-[0_0_12px_#E8735A]" 
//           />
//           <span className="tracking-[0.4em] text-[#E8735A] text-xs md:text-sm font-mono font-semibold uppercase">
//             DeckedOut // System Initiating
//           </span>
//         </div>

//         {/* The Doomsday Countdown */}
//         <div className="flex items-center justify-center gap-4 md:gap-10 font-mono tabular-nums mb-16 w-full">
//           {/* Hours */}
//           <div className="flex flex-col items-center flex-1">
//             <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
//               {hours.toString().padStart(2, '0')}
//             </span>
//             <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Hours</span>
//           </div>
          
//           <span className="text-4xl md:text-8xl text-[#333] font-light mb-8 md:mb-12 animate-pulse">:</span>
          
//           {/* Minutes */}
//           <div className="flex flex-col items-center flex-1">
//             <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
//               {minutes.toString().padStart(2, '0')}
//             </span>
//             <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Minutes</span>
//           </div>
          
//           <span className="text-4xl md:text-8xl text-[#333] font-light mb-8 md:mb-12 animate-pulse">:</span>
          
//           {/* Seconds */}
//           <div className="flex flex-col items-center flex-1">
//             <span className="text-6xl md:text-[10rem] font-medium tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
//               {seconds.toString().padStart(2, '0')}
//             </span>
//             <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#E8735A] mt-2 md:mt-4 uppercase font-bold">Seconds</span>
//           </div>
//         </div>

//         {/* Footer Text */}
//         <div className="flex flex-col items-center space-y-4">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f5f5]">
//             The hot seat awaits.
//           </h1>
//           <p className="text-[#888] font-mono text-xs md:text-sm tracking-widest uppercase">
//             Critical narrative payload deploying at midnight.
//           </p>
//         </div>

//       </motion.div>
//     </div>
//   );
// };

// export default Countdown;


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// glass morphisim 

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Countdown = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const current = targetDate - new Date().getTime();
//       setTimeLeft(current);
      
//       if (current <= 0) {
//         clearInterval(interval);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [targetDate]);

//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   if (timeLeft <= 0) return null;

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden selection:bg-[#E8735A] selection:text-white">
      
//       {/* --- 3D ENVIRONMENT & LIGHTING --- */}
      
//       {/* Deep Ambient Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,115,90,0.15)_0%,_transparent_50%)]" />

//       {/* Cinematic Film Grain / Noise (Subtle Texture) */}
//       <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
//            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
//       </div>

//       {/* 3D Holographic Floor (Grid + Rings) */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1200px' }}>
        
//         {/* Tilting container for the 3D effect */}
//         <motion.div 
//           initial={{ rotateX: 60, y: 100, opacity: 0 }}
//           animate={{ rotateX: 75, y: 150, opacity: 1 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//           className="relative flex items-center justify-center w-full h-full transform-style-preserve-3d"
//         >
//           {/* Glowing Center Core on the floor */}
//           <div className="absolute w-[300px] h-[300px] bg-[#E8735A]/30 rounded-full blur-[80px]" />

//           {/* Rotating Outer Holographic Ring */}
//           <motion.div
//             animate={{ rotateZ: 360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[80vw] h-[80vw] md:w-[1000px] md:h-[1000px] rounded-full border border-[#E8735A]/20 border-dashed"
//           />
          
//           {/* Rotating Inner Holographic Ring */}
//           <motion.div
//             animate={{ rotateZ: -360 }}
//             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[60vw] h-[60vw] md:w-[700px] md:h-[700px] rounded-full border-[2px] border-[#E8735A]/10"
//           />

//           {/* Moving 3D Grid Lines */}
//           <div className="absolute w-[200vw] h-[200vh] border-[#E8735A]/5 [background-image:linear-gradient(rgba(232,115,90,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(232,115,90,0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />
//         </motion.div>
//       </div>

//       {/* --- FLOATING 3D GLASS PANEL (THE CLOCK) --- */}
      
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.9 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
//         className="z-10 relative flex flex-col items-center w-[90%] max-w-5xl"
//       >
//         {/* Typographic "Logo" / System Status */}
//         <div className="flex items-center gap-3 mb-8 md:mb-12">
//           <motion.div 
//             animate={{ opacity: [1, 0.2, 1], scale: [1, 1.2, 1] }} 
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
//             className="w-2 h-2 md:w-3 md:h-3 bg-[#E8735A] rounded-full shadow-[0_0_15px_#E8735A]" 
//           />
//           <span className="tracking-[0.4em] text-[#E8735A] text-xs md:text-sm font-mono font-semibold uppercase drop-shadow-[0_0_8px_rgba(232,115,90,0.5)]">
//             DeckedOut // Engine Igniting
//           </span>
//         </div>

//         {/* 3D Glassmorphism Container */}
//         <motion.div 
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="relative w-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05] shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.02)] rounded-3xl p-10 md:p-16 flex flex-col items-center overflow-hidden"
//         >
//           {/* Internal Glass Highlight */}
//           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//           {/* The Time */}
//           <div className="flex items-center justify-center gap-4 md:gap-12 font-mono tabular-nums w-full">
//             {/* Hours */}
//             <div className="flex flex-col items-center flex-1">
//               <span className="text-7xl md:text-[9rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
//                 {hours.toString().padStart(2, '0')}
//               </span>
//               <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#E8735A] mt-4 uppercase font-bold">Hours</span>
//             </div>
            
//             <span className="text-4xl md:text-8xl text-white/10 font-light pb-8 animate-pulse">:</span>
            
//             {/* Minutes */}
//             <div className="flex flex-col items-center flex-1">
//               <span className="text-7xl md:text-[9rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
//                 {minutes.toString().padStart(2, '0')}
//               </span>
//               <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#E8735A] mt-4 uppercase font-bold">Minutes</span>
//             </div>
            
//             <span className="text-4xl md:text-8xl text-white/10 font-light pb-8 animate-pulse">:</span>
            
//             {/* Seconds */}
//             <div className="flex flex-col items-center flex-1">
//               <span className="text-7xl md:text-[9rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
//                 {seconds.toString().padStart(2, '0')}
//               </span>
//               <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#E8735A] mt-4 uppercase font-bold">Seconds</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Typography */}
//         <div className="mt-12 md:mt-16 text-center space-y-4">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f5f5f5] drop-shadow-2xl">
//             The hot seat awaits.
//           </h1>
//           <p className="text-[#888] font-mono text-xs md:text-sm tracking-widest uppercase opacity-60">
//             Critical narrative payload deploying at midnight.
//           </p>
//         </div>

//       </motion.div>
//     </div>
//   );
// };

// export default Countdown;
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// sound effects 

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [isInitiated, setIsInitiated] = useState(false);
  const audioCtxRef = useRef(null);

  // High-stakes cinematic synthesized tick
  const playCinematicTick = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    // High metallic click
    const oscClick = ctx.createOscillator();
    const gainClick = ctx.createGain();
    oscClick.connect(gainClick);
    gainClick.connect(ctx.destination);
    oscClick.type = 'square';
    oscClick.frequency.setValueAtTime(800, ctx.currentTime);
    oscClick.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.05);
    gainClick.gain.setValueAtTime(0.05, ctx.currentTime);
    gainClick.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    oscClick.start();
    oscClick.stop(ctx.currentTime + 0.05);

    // Deep heartbeat thud
    const oscThud = ctx.createOscillator();
    const gainThud = ctx.createGain();
    oscThud.connect(gainThud);
    gainThud.connect(ctx.destination);
    oscThud.type = 'sine';
    oscThud.frequency.setValueAtTime(60, ctx.currentTime);
    oscThud.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.1);
    gainThud.gain.setValueAtTime(0.2, ctx.currentTime);
    gainThud.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    oscThud.start();
    oscThud.stop(ctx.currentTime + 0.1);
  };

  useEffect(() => {
    if (!isInitiated) return;

    const interval = setInterval(() => {
      const current = targetDate - new Date().getTime();
      setTimeLeft(current);
      playCinematicTick();
      
      if (current <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate, isInitiated]);

  const handleInitiate = () => {
    // Unlock browser audio engine
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtxRef.current = new AudioContext();
    audioCtxRef.current.resume().then(() => {
      playCinematicTick();
      setIsInitiated(true);
    });
  };

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft <= 0) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden selection:bg-[#E8735A] selection:text-white">
      
      <AnimatePresence>
        {!isInitiated ? (
          <motion.div 
            key="initiate"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#030303]"
          >
            <button 
              onClick={handleInitiate}
              className="group relative px-8 py-4 bg-transparent font-mono tracking-[0.3em] text-sm uppercase text-[#E8735A] border border-[#E8735A]/30 rounded-none hover:bg-[#E8735A]/5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Initiate System</span>
              <div className="absolute inset-0 w-0 bg-[#E8735A]/20 transition-all duration-500 ease-out group-hover:w-full" />
              {/* Radar scanner line on hover */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-[#E8735A] shadow-[0_0_10px_#E8735A] hidden group-hover:block animate-[scan_2s_ease-in-out_infinite]" />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* --- 3D ENVIRONMENT: RADAR + GRID --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1000px' }}>
              <motion.div 
                initial={{ rotateX: 45, y: 50, opacity: 0 }}
                animate={{ rotateX: 65, y: 150, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative flex items-center justify-center w-full h-full transform-style-preserve-3d"
              >
                {/* 3D Floor Grid */}
                <div className="absolute w-[200vw] h-[200vh] border-[#E8735A]/10 [background-image:linear-gradient(rgba(232,115,90,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(232,115,90,0.15)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                
                {/* Sweeping Radar on the Floor */}
                <motion.div
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] rounded-full opacity-40"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0 320deg, rgba(232,115,90,0.2) 350deg, #E8735A 360deg)'
                  }}
                />
                
                {/* Target Rings */}
                <div className="absolute w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] rounded-full border border-[#E8735A]/30 border-dashed" />
                <div className="absolute w-[40vw] h-[40vw] md:w-[500px] md:h-[500px] rounded-full border border-[#E8735A]/20" />
              </motion.div>
            </div>

            {/* --- FLOATING 3D GLASS PANEL --- */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="z-10 relative flex flex-col items-center w-[95%] max-w-5xl"
            >
              {/* Status Header */}
              <div className="flex items-center gap-3 mb-10">
                <motion.div 
                  animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }} 
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }} 
                  className="w-2 h-2 bg-[#E8735A] rounded-full shadow-[0_0_15px_#E8735A]" 
                />
                <span className="tracking-[0.4em] text-[#E8735A] text-xs md:text-sm font-mono font-semibold uppercase">
                  DeckedOut // Engine Igniting
                </span>
              </div>

              {/* Glass Clock Container */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full backdrop-blur-xl bg-[#0a0a0a]/60 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-2xl md:rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center overflow-hidden"
              >
                {/* Numbers */}
                <div className="flex items-center justify-center gap-2 md:gap-10 font-mono tabular-nums w-full">
                  <TimeBlock value={hours} label="Hours" />
                  <Separator />
                  <TimeBlock value={minutes} label="Minutes" />
                  <Separator />
                  <TimeBlock value={seconds} label="Seconds" />
                </div>
              </motion.div>

              {/* Footer */}
              <div className="mt-12 text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f5f5] drop-shadow-2xl">
                  The hot seat awaits.
                </h1>
                <p className="text-[#888] font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70">
                  Critical narrative payload deploying at midnight.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global tailwind config for the button scanner animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(200px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Reusable animated number block
const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center flex-1">
    <motion.span 
      key={value}
      initial={{ opacity: 0.8, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      className="text-6xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e0e0e0] to-[#555] drop-shadow-[0_10px_20px_rgba(0,0,0,1)]"
    >
      {value.toString().padStart(2, '0')}
    </motion.span>
    <span className="text-[9px] md:text-xs tracking-[0.4em] text-[#E8735A] mt-4 uppercase font-bold">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <motion.span 
    animate={{ opacity: [1, 0.2] }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="text-4xl md:text-8xl text-white/20 font-light pb-8"
  >
    :
  </motion.span>
);

export default Countdown;
