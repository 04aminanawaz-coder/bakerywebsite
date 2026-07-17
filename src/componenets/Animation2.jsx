import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Animation2() {
  const sectionRef = useRef(null);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [image, setImage] = useState("/images/jump.png");
  const [showButton, setShowButton] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const [animationKey, setAnimationKey] = useState(0);

  const bakeryImages = [
    "/images/cake.png",
    "/images/cookie.png",
    "/images/bread.png",
    "/images/bread2.png",
    "/images/bread3.png",
    "/images/pizza.png",
  ];

    const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
useEffect(() => {
  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  const itemCount = screenSize.width < 640 ? 40 : screenSize.width < 1024 ? 70 : 100;
  
  // FIX 1: Lowered from 0.5 to 0.38 so feet don't get cut off
const characterY =
  screenSize.width < 640
    ? screenSize.height * 0.26
    : screenSize.height * 0.42;

  // FIX 2: Moved to 0.35 so character stands closer to the center button
const characterX = showButton 
? screenSize.width * 0.35
 : screenSize.width * 0.6;
 

  const bakeryItems = useMemo(() => {
    return Array.from({ length: itemCount }, () => ({
      x: Math.random(),
      startY: -300 - Math.random() * 500,
      endOffset: 40 + Math.random() * 100,
      rotate: Math.random() * 360,
      delay: Math.random(),
      image: bakeryImages[Math.floor(Math.random() * bakeryImages.length)],
    }));
  }, [itemCount, screenSize.width]);

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
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[75vh] sm:min-h-[85vh] md:min-h-screen overflow-hidden bg-[#f8f0cc]"
    >
      {/* Character */}
      <motion.img
        key={`character-${animationKey}`}
        src={image}
        alt="Bakery mascot"
        className="
          absolute
        top-6
          w-28
          sm:w-24
          md:w-28
          lg:w-32
          xl:w-36
          object-contain
          z-20
        "
        initial={{
          x: screenSize.width + 100,
          y: -250,
        }}
        animate={{
          x: characterX,
          y: characterY,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Press Button */}
      {showButton && (
        <motion.div
          key={`button-${animationKey}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[40%]
            sm:top-[45%]
            md:top-[45%]
            z-10
          "
        >
          <Button text="Press" />
        </motion.div>
      )}

      {/* Bakery Rain */}
      {showItems &&
        bakeryItems.map((item, i) => (
          <motion.img
            key={`item-${animationKey}-${i}`}
            src={item.image}
            alt=""
            className="absolute w-8 sm:w-10 md:w-12 lg:w-14 z-30"
            initial={{
              x: item.x * screenSize.width,
              y: item.startY,
              rotate: item.rotate,
            }}
         animate={{

  y: sectionHeight - item.endOffset,

  rotate: item.rotate + 720,

}}
            transition={{
              duration: 2,
              delay: item.delay,
              type: "spring",
              bounce: 0.4,
            }}
          />
        ))}

      {/* Welcome Popup */}
      {showWelcome && (
        <motion.div
          key={`popup-${animationKey}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
         className="
  absolute
  top-[30%]
  sm:top-[30%]
  md:top-[35%]
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  bg-red-700
  rounded-3xl
  shadow-2xl
  w-[60%]
  max-w-3xl
  max-h-[80vh]
  overflow-auto
  px-5 py-6
  sm:px-8 sm:py-8
  md:px-10 md:py-10
  text-center
  font1
  z-40
"
          
        >
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-[#f8f0cc]
              leading-tight
            "
          >
            Welcome To My Bakery
          </h1>
        </motion.div>
      )}
    </div>
  );
}