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
    <div className="relative flex items-end object-cover justify-center lg:justify-start shrink-0">
      {showBubble && (
        <div className="absolute left-1/2 sm:left-24 lg:left-32 -translate-x-1/2 sm:translate-x-0 -top-24 sm:-top-28 w-52 sm:w-72 animate-bubble z-20">
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
        className="w-32 sm:w-40 lg:w-44 object-cover"
      />

      {/* Hidden button so MenuPaper can trigger the animation */}
      <button
        id="chefAnimationButton"
        onClick={playAnimation}
        className="hidden"
      />
    </div>
  );
}