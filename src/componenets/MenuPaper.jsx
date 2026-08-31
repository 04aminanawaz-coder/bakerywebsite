import { useState } from "react";
import menuSections from "./menuData";

export default function MenuPaper() {
  const playChefAnimation = () => {
    document.getElementById("chefAnimationButton")?.click();
  };
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  return (
    <div
      className="relative mx-auto lg:mx-0 w-[80vw] sm:w-[85vw] lg:w-[480px] xl:w-[600px] h-[70vh] lg:h-[70vh] xl:h-[650px] bg-no-repeat bg-center shrink-0 right-0 lg:right-10 xl:right-40"
      style={{
        backgroundImage: "url('/images/page.png')",
        backgroundSize: "100% 100%",
      }}
    >
      {showScrollHint && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30 pointer-events-none">
          <div className="bg-[#fff8dd]/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
            <p className="text-[#5a3d2b] font-bold text-xs sm:text-sm">
              ↓ Scroll to explore ↓
            </p>
          </div>
        </div>
      )}

      <div
        className="absolute left-0 right-0 overflow-y-auto menu-scroll px-6 sm:px-10 lg:px-12 xl:px-16"
        style={{
          top: "10px",   // CHANGED: Pushed way up to remove that huge empty gap
          bottom: "30px", // CHANGED: Brought up slightly from the bottom too
        }}
        onScroll={() => setShowScrollHint(false)}
      >
        {menuSections.map((section) => (
          <div key={section.title} className="mb-10 sm:mb-14">
            <h2 className="sticky top-0 z-20 bg-[#f8f0cc] py-3 sm:py-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-center text-[#5a3d2b] mb-6 sm:mb-8">
              {section.title}
            </h2>

            {section.items.map((item) => (
              <div
                key={item.name}
                onClick={playChefAnimation}
                className="group flex items-center justify-between mb-4 sm:mb-7 rounded-xl p-2 sm:p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#5a3d2b]">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base xl:text-lg text-[#7c5c49]">
                      Freshly Baked
                    </p>
                  </div>
                </div>
                
                <span className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#5a3d2b] ml-2">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}