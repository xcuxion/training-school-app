// not-found.tsx - Place this file in your app directory
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Handle mouse movement for the parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial window size
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate parallax movement values
  const calcParallaxX = (depth = 10) => {
    if (windowSize.width === 0) return 0;
    return (mousePosition.x - windowSize.width / 2) / depth;
  };

  const calcParallaxY = (depth = 10) => {
    if (windowSize.height === 0) return 0;
    return (mousePosition.y - windowSize.height / 2) / depth;
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // 404 text characters as individual elements for animation
  const text404 = '404';

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black to-secondary text-white">
      {/* Floating elements in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-6 w-6 rounded-full bg-white opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: 0.5 + Math.random() * 2,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main 404 Text */}
      <motion.div
        style={{
          x: calcParallaxX(20),
          y: calcParallaxY(20),
        }}
        className="relative mb-8"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex text-9xl font-extrabold tracking-widest"
        >
          {text404.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{
                textShadow: '0 10px 20px rgba(0,0,0,0.5)',
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Portal/Black hole effect */}
      <motion.div
        className="absolute z-0 h-64 w-64 rounded-full bg-black"
        style={{
          boxShadow: '0 0 100px 50px rgba(0,0,0,0.8), 0 0 200px 100px rgba(76, 29, 149, 0.5)',
          x: calcParallaxX(10),
          y: calcParallaxY(10),
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      {/* Message */}
      <motion.div
        className="relative z-10 mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          x: calcParallaxX(40),
          y: calcParallaxY(40),
        }}
      >
        <h2 className="mb-2 text-3xl font-bold text-white">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-purple-200">
          Looks like you've wandered into the void. The page you're looking for seems to have been sucked into a black hole.
        </p>
        <Link href="/" className="group relative inline-block">
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary/75 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative inline-block border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors group-hover:bg-primary">
            Return Home
          </span>
        </Link>
      </motion.div>

      {/* Animated stars in the background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}