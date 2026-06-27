import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Boxes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const characterControls = useAnimation();
  const bubbleControls = useAnimation();

  useEffect(() => {
    const playAnimation = async () => {
      if (isInView) {
        // Reset everything
        characterControls.set({
          opacity: 0,
          y: 60,
        });

        bubbleControls.set({
          opacity: 0,
          scale: 0.7,
          y: 40,
        });

        // Character appears
        await characterControls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
          },
        });

        // Bubbles appear one by one
        await bubbleControls.start((i) => ({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: i * 0.3,
            duration: 0.6,
          },
        }));

        // Floating animation
        bubbleControls.start((i) => ({
          y: [-8, 8, -8],
          transition: {
            delay: i * 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }));
      } else {
        // Reset when section leaves screen
        characterControls.set({
          opacity: 0,
          y: 60,
        });

        bubbleControls.set({
          opacity: 0,
          scale: 0.7,
          y: 40,
        });
      }
    };

    playAnimation();
  }, [isInView, characterControls, bubbleControls]);

  const dialogs = [
    {
      img: "/images/box1.png",
      className: "top-28 left-220 -translate-x-1/2",
    },
    {
      img: "/images/box2.png",
      className: "top-80 left-24",
    },
    {
      img: "/images/box3.png",
      className: "top-60 right-24",
    },
    {
      img: "/images/box4.png",
      className: "top-10 left-90",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex justify-center items-end overflow-visible bg-[#f8f0cc]"
    >
      {/* Character */}
      <motion.img
        src="/images/pp3.png"
        className="w-32 relative z-20"
        animate={characterControls}
      />

      {/* Thinking Clouds */}
      {dialogs.map((item, index) => (
        <motion.img
          key={index}
          custom={index}
          animate={bubbleControls}
          src={item.img}
          className={`absolute w-80 ${item.className}`}
        />
      ))}
    </div>
  );
};

export default Boxes;