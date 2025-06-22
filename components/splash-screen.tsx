'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        >
          {/* Animated Royal Sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-full shadow-lg shadow-yellow-400/40 border border-yellow-400/60 opacity-20"
                animate={{
                  x: [0, Math.random() * 120 - 60],
                  y: [0, Math.random() * 120 - 60],
                  scale: [0, 1.1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.12,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
            {/* Subtle Gold Sparkles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i + 100}
                className="absolute w-1.5 h-1.5 bg-yellow-100 rounded-full opacity-40 shadow-2xl shadow-yellow-100/80"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'drop-shadow(0 0 12px #fbbf24)',
                }}
              />
            ))}
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'0 0 200px 80px #000 inset'}} />
          </div>

          {/* Main Content */}
          <div className="text-center z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.6, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              className="mb-8"
            >
              <div className="relative w-36 h-36 mx-auto mb-6">
                {/* Royal Gold Halo */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-full animate-pulse opacity-20 blur-xl border-2 border-yellow-400/40"></div>
                {/* Main Logo Circle with shimmer */}
                <div className="absolute inset-3 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center border-2 border-yellow-400/60 shadow-2xl shadow-yellow-400/20 overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2025-06-20 at 17.08.26_46316f18.jpg"
                    alt="RAARYA Logo"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-yellow-300 shadow-lg"
                    unoptimized
                  />
                  {/* Gold shimmer */}
                  <motion.div
                    className="absolute left-0 top-0 w-full h-full pointer-events-none"
                    initial={{ x: '-100%' }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                    style={{
                      background: 'linear-gradient(120deg, rgba(255,255,255,0) 60%, rgba(255,255,200,0.25) 80%, rgba(255,255,255,0) 100%)',
                      mixBlendMode: 'lighten',
                    }}
                  />
                </div>
                {/* Animated Gold Crown */}
                <motion.div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl drop-shadow-lg"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60 }}
                >
                  <span role="img" aria-label="crown">👑</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2, type: "spring", stiffness: 60 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_gold] tracking-widest"
                animate={{ 
                  textShadow: [
                    "0 0 40px #fbbf24, 0 0 80px #fff7ae",
                    "0 0 80px #fbbf24, 0 0 40px #fff7ae",
                    "0 0 40px #fbbf24, 0 0 80px #fff7ae"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                RAARYA
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-white font-light tracking-widest drop-shadow-[0_0_10px_white]"
                initial={{ letterSpacing: "0.1em" }}
                animate={{ letterSpacing: "0.3em" }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                PROPERTIES
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}