import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Animation2() {
  const sectionRef = useRef(null);

  const [image, setImage] = useState("/images/jump.png");
  const [showButton, setShowButton] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Used to force Framer Motion to restart
  const [animationKey, setAnimationKey] = useState(0);

  const bakeryImages = [
    "/images/cake.png",
    "/images/cookie.png",
    "/images/bread.png",
    "/images/bread2.png",
    "/images/bread3.png",
    "/images/pizza.png",
  ];

  useEffect(() => {
    let timers = [];

    const resetAnimation = () => {
      timers.forEach(clearTimeout);

      setAnimationKey((k) => k + 1);

      setImage("/images/jump.png");
      setShowButton(false);
      setShowItems(false);
      setShowWelcome(false);
    };

    const startAnimation = () => {
      resetAnimation();

      timers = [
        setTimeout(() => setImage("/images/air.png"), 1000),
        setTimeout(() => setImage("/images/land.png"), 3000),
        setTimeout(() => setImage("/images/walk1.png"), 4000),

        setTimeout(() => setShowButton(true), 5000),

        setTimeout(() => setImage("/images/hi1.png"), 5500),

        setTimeout(() => setImage("/images/press.png"), 7000),

        setTimeout(() => {
          setShowButton(false);
          setShowItems(true);
        }, 7500),

        setTimeout(() => setImage("/images/stand.png"), 7500),

        setTimeout(() => setShowWelcome(true), 9500),
      ];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          resetAnimation();
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#f8f0cc]"
    >
      {/* Character */}
      <motion.img
        key={`character-${animationKey}`}
        src={image}
        alt=""
        className="absolute w-32 z-20 object-contain"
        initial={{
          x: window.innerWidth,
          y: -300,
        }}
        animate={{
          x: showButton
            ? window.innerWidth * 0.3
            : window.innerWidth * 0.6,
          y: window.innerHeight * 0.55,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Button */}
      {showButton && (
        <motion.div
          key={`button-${animationKey}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 top-[55%] -translate-x-1/2 z-10"
        >
          <Button text="Press" />
        </motion.div>
      )}

      {/* Bakery Rain */}
      {showItems &&
        Array.from({ length: 100 }).map((_, i) => (
          <motion.img
            key={`item-${animationKey}-${i}`}
            src={bakeryImages[i % bakeryImages.length]}
            alt=""
            className="absolute w-14 z-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -300 - Math.random() * 500,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight - (50 + Math.random() * 120),
              rotate: 720,
            }}
            transition={{
              duration: 2,
              delay: Math.random(),
              type: "spring",
              bounce: 0.4,
            }}
          />
        ))}

      {/* Welcome Popup */}
      {showWelcome && (
        <motion.div
          key={`popup-${animationKey}`}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-700 font1 p-10 rounded-3xl shadow-2xl"
        >
          <h1 className="text-5xl font-bold text-[#f8f0cc]">
            Welcome To My Bakery
          </h1>
        </motion.div>
      )}
    </div>
  );
}