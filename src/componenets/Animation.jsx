import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Animation = () => {
  const [image, setImage] = useState("/images/fall.png");
  const [showBubble, setShowBubble] = useState(false);
  const [position, setPosition] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [boxOpen, setBoxOpen] = useState(false);
  const [showCharacter, setShowCharacter] = useState(true);

  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const hasPlayedRef = useRef(false);

  const startAnimation = () => {
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    setAnimKey((p) => p + 1);

    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setImage("/images/fall.png");
    setShowBubble(false);
    setPosition(0);
    setBoxOpen(false);
    setShowCharacter(true);

    const screenEnd = window.innerWidth;
    const characterWidth = 160;
    const stopPosition = screenEnd - characterWidth - 350;

    const addTimer = (fn, t) => {
      const id = setTimeout(fn, t);
      timersRef.current.push(id);
    };

    // BOX OPENS
    addTimer(() => setBoxOpen(true), 500);

    // DROP ANIMATION
    addTimer(() => setImage("/images/crash.png"), 900);
    addTimer(() => setImage("/images/getup.png"), 1600);
    addTimer(() => setImage("/images/stand.png"), 2400);

    // MOVE
    addTimer(() => {
      setImage("/images/walk.png");
      setPosition(stopPosition);
    }, 3200);

    // SHOW BUBBLE + SIT
    addTimer(() => {
      setImage("/images/stand.png");
      setPosition(stopPosition);
      setShowBubble(true);
    }, 9000);

    // HIDE CHARACTER AFTER SITTING
    addTimer(() => {
      setShowCharacter(false);
    }, 11000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          hasPlayedRef.current = false;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-125 overflow-hidden bg-red-700 "
    >
      {/* BOX */}
      <div className="absolute left-10 w-60 h-32  ">
        <motion.div
          className="relative w-40 h-32"
          style={{ perspective: "800px" }}
        >
          <div className="absolute bottom-0 top-0 w-40 h-20 bg-amber-800 border-4 border-amber-950" />

          <motion.div
            animate={{ rotateX: boxOpen ? -120 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 w-40 h-20 bg-amber-700 border-4 border-amber-950 origin-bottom"
          />
        </motion.div>
      </div>

      {/* CHARACTER */}
      {showCharacter && (
        <motion.img
          key={animKey}
          src={image}
          alt="Chef"
          className="absolute w-40 h-40 object-contain"
          style={{
            top: 40,
            left: 40,
          }}
          animate={{
            y: [0, 120, 300],
            x: position,
          }}
          transition={{
            y: { duration: 1.2, times: [0, 0.3, 1], ease: "easeIn" },
            x: { duration: 6, ease: "linear" },
          }}
        />
      )}

      {/* DUST */}
      {boxOpen && (
        <div className="absolute top-24 left-16 ">
          <div className="relative">
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-ping opacity-70"></div>
            <div className="absolute left-4 w-2 h-2 bg-gray-500 rounded-full animate-ping opacity-50"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-gray-300 rounded-full animate-ping opacity-40"></div>
          </div>
        </div>
      )}

      {/* BUBBLE (FIXED Z-INDEX) */}
      {showBubble && (
       <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="absolute right-10 bottom-40 max-w-md rounded-3xl border-2  bg-[#f8f0cc]   p-6 shadow-xl" > <h3 className="mb-3 text-2xl font-bold text-red-700"> Feeling hungry today? 🍞 </h3> <p> What are you in the mood for today? Sweet bun, chicken bun, tea cake? </p> <button > <Button text="ExploreMenu" width="w-40 font2 text-lg h-12" /> </button> </motion.div>
      )}
    </div>
  );
};

export default Animation;