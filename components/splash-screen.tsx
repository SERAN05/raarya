'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasShownSplash = sessionStorage.getItem('raarya-splash-shown');
    
    if (hasShownSplash) {
      // Skip splash if already shown in this session
      setIsVisible(false);
      onComplete();
      return;
    }

    // Mark splash as shown for this session
    sessionStorage.setItem('raarya-splash-shown', 'true');

    // Orchestrate the animation sequence
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    const textTimer = setTimeout(() => setShowText(true), 800);
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1200);
    
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation
    }, 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(subtextTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
        >
          {/* Royal Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, gold 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, gold 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Animated Royal Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-full shadow-lg shadow-yellow-400/60"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  scale: [0, 1.5, 0],
                  rotate: [0, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}

            {/* Luxury Golden Orbs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i + 100}
                className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full opacity-30 shadow-2xl shadow-yellow-300/80"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  filter: 'drop-shadow(0 0 20px #fbbf24)',
                }}
              />
            ))}

            {/* Royal Crown Sparkles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i + 200}
                className="absolute text-yellow-400 text-lg opacity-40"
                animate={{
                  scale: [0, 1.2, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                ✦
              </motion.div>
            ))}
          </div>

          {/* Radial Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

          {/* Main Content Container */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotateY: 180 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.23, 1, 0.32, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  className="mb-8"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    {/* Outer Royal Ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
                      style={{
                        background: 'conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #fbbf24)',
                        padding: '4px',
                        borderRadius: '50%'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
                    </motion.div>

                    {/* Middle Golden Halo */}
                    <motion.div 
                      className="absolute inset-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-full opacity-30 blur-md"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Logo Container */}
                    <motion.div 
                      className="absolute inset-4 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-full flex items-center justify-center border-2 border-yellow-400/60 shadow-2xl shadow-yellow-400/40 overflow-hidden"
                      animate={{ 
                        boxShadow: [
                          "0 0 30px rgba(251, 191, 36, 0.4)",
                          "0 0 60px rgba(251, 191, 36, 0.8)",
                          "0 0 30px rgba(251, 191, 36, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Image
                        src="/WhatsApp Image 2025-06-20 at 17.08.26_46316f18.jpg"
                        alt="RAARYA Logo"
                        width={64}
                        height={64}
                        className="rounded-full border border-yellow-300/50"
                        unoptimized
                      />
                      
                      {/* Logo Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ x: '-100%' }}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
                        }}
                      />
                    </motion.div>

                    {/* Floating Crown */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 text-5xl drop-shadow-2xl"
                      initial={{ y: -50, opacity: 0, scale: 0 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5, 
                        type: "spring", 
                        stiffness: 200,
                        damping: 10
                      }}
                    >
                      <motion.span 
                        className="text-yellow-400"
                        animate={{ 
                          textShadow: [
                            "0 0 20px #fbbf24",
                            "0 0 40px #fbbf24, 0 0 60px #f59e0b",
                            "0 0 20px #fbbf24"
                          ],
                          filter: [
                            "drop-shadow(0 0 10px #fbbf24)",
                            "drop-shadow(0 0 20px #fbbf24) drop-shadow(0 0 30px #f59e0b)",
                            "drop-shadow(0 0 10px #fbbf24)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        👑
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Brand Text */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.23, 1, 0.32, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.h1 
                    className="text-6xl md:text-7xl font-black mb-2 tracking-wider"
                    style={{
                      background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706, #fbbf24, #f59e0b)',
                      backgroundSize: '300% 300%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      textShadow: [
                        "0 0 30px rgba(251, 191, 36, 0.5)",
                        "0 0 60px rgba(251, 191, 36, 0.8), 0 0 90px rgba(245, 158, 11, 0.6)",
                        "0 0 30px rgba(251, 191, 36, 0.5)"
                      ]
                    }}
                    transition={{ 
                      backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                      textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    RAARYA
                  </motion.h1>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence>
              {showSubtext && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.2
                  }}
                >
                  <motion.p 
                    className="text-2xl md:text-3xl text-white font-light tracking-[0.3em] mb-4"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(255, 255, 255, 0.5)",
                        "0 0 40px rgba(255, 255, 255, 0.8)",
                        "0 0 20px rgba(255, 255, 255, 0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    PROPERTIES
                  </motion.p>
                  
                  {/* Elegant Tagline */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center space-x-4"
                  >
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                    <motion.span 
                      className="text-yellow-400 text-sm font-medium tracking-widest uppercase"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Luxury Redefined
                    </motion.span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Royal Border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />

          {/* Corner Ornaments */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-yellow-400/60 opacity-60"></div>
          <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-yellow-400/60 opacity-60"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-yellow-400/60 opacity-60"></div>
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-yellow-400/60 opacity-60"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}