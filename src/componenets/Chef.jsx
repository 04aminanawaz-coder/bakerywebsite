import { useState, useEffect, useRef } from "react";

export default function Chef() {
  const frames = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const [bubbleImage, setBubbleImage] = useState("/images/box5.png");
  const [showBubble, setShowBubble] = useState(true);

  const animationRef = useRef(null);
  const bubbleTimer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const playAnimation = () => {
    clearInterval(animationRef.current);
    clearTimeout(bubbleTimer.current);

    setShowBubble(false);

    let frame = 0;

    animationRef.current = setInterval(() => {
      setCurrentFrame(frame);

      frame++;

      if (frame >= frames.length) {
        clearInterval(animationRef.current);

        setCurrentFrame(frames.length - 1);

        setBubbleImage("/images/box6.png");
        setShowBubble(true);

        bubbleTimer.current = setTimeout(() => {
          setShowBubble(false);
        }, 3000);
      }
    }, 220);
  };

  return (  
    <div className="relative flex items-end object-cover left-4 sm:left-8 lg:left-10 xl:left-40">

      {showBubble && (
        /* CHANGED: Used -left-14 on large screens. This centers the wide bubble exactly over the Chef's head 
           so it doesn't stretch out and cover the menu. Made it even smaller on Nest Hubs (lg:w-44). */
        <div className="absolute left-8 sm:left-12 lg:-left-4 lg:w-44 xl:-left-14 xl:w-72 -top-10 sm:-top-12 lg:-top-16 xl:-top-28 animate-bubble z-20">
          <img
            src={bubbleImage}
            alt=""
            className="w-full"
          />
        </div>
      )}

      <img
        src={frames[currentFrame]}
        alt="Chef"
        className="w-24 sm:w-32 lg:w-36 xl:w-44 object-cover"
      />

      <button
        id="chefAnimationButton"
        onClick={playAnimation}
        className="hidden"
      />
    </div>
  );
}