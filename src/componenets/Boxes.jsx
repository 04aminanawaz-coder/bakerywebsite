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
        characterControls.set({
          opacity: 0,
          y: 60,
        });

        bubbleControls.set({
          opacity: 0,
          scale: 0.7,
          y: 40,
        });

        await characterControls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
          },
        });

        await bubbleControls.start((i) => ({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: i * 0.3,
            duration: 0.6,
          },
        }));

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
      className: "top-[5%] left-[40%] -translate-x-1/2 sm:top-[8%] sm:left-[55%] md:top-[10%] md:left-[60%] -rotate-2",
    },
    {
      img: "/images/box2.png",
      className: "top-[45%] left-[2%] sm:top-[40%] sm:left-[3%] md:top-[42%] md:left-[5%] rotate-3 ",
    },
    {
      img: "/images/box3.png",
      className: "top-[55%] right-[2%] sm:top-[50%] sm:right-[3%] md:top-[48%] md:right-[6%] -rotate-1 ",
    },
    {
      img: "/images/box4.png",
      className: "top-[15%] left-[2%] sm:top-[12%] sm:left-[5%] md:top-[0%] md:left-[10%] rotate-2 ",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[100dvh] flex justify-center items-end overflow-visible bg-[#f8f0cc] px-2"
    >
      {/* Character */}
      <motion.img
        src="/images/pp3.png"
        className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 relative z-20 pb-[3%]"
        animate={characterControls}
      />

      {/* Thinking Clouds */}
      {dialogs.map((item, index) => (
        <motion.img
          key={index}
          custom={index}
          animate={bubbleControls}
          src={item.img}
          className={`absolute w-[100px] sm:w-[150px] md:w-[220px] lg:w-[280px] xl:w-[320px] object-contain ${item.className}`}
        />
      ))}
    </div>
  );
};

export default Boxes;