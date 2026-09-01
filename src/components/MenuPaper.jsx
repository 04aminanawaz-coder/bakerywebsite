import { useState } from "react";
import menuSections from "./menuData";

export default function MenuPaper() {
  const playChefAnimation = () => {
    document.getElementById("chefAnimationButton")?.click();
  };
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  return (
    <div
      className="relative w-full max-w-[600px] h-[75vh] min-h-[480px] max-h-[650px] bg-no-repeat bg-center shrink-0"
      style={{
        backgroundImage: "url('/images/page.png')",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Scroll Indicator */}
      {showScrollHint && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30 pointer-events-none">
          <div className="bg-[#fff8dd]/90 px-4 py-2 rounded-full shadow-lg">
            <p className="text-[#5a3d2b] font-bold">
              ↓ Scroll to explore ↓
            </p>
          </div>
        </div>
      )}
      
      <div
        className="absolute left-0 right-0 overflow-y-auto menu-scroll px-5 sm:px-10 md:px-16"
        style={{
          top: "50px",
          bottom: "45px",
        }}
        onScroll={() => setShowScrollHint(false)}
      >
        {menuSections.map((section) => (
          <div key={section.title} className="mb-10 sm:mb-14">
            {/* Category */}
            <h2 className="sticky top-0 z-20 bg-[#f8f0cc] py-3 sm:py-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#5a3d2b] mb-5 sm:mb-8">
              {section.title}
            </h2>

            {/* Items */}
            {section.items.map((item) => (
              <div
                key={item.name}
                onClick={playChefAnimation}
                className="group flex items-center justify-between mb-5 sm:mb-7 rounded-xl p-2 sm:p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  {/* Fixed image size */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#5a3d2b] truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-lg text-[#7c5c49]">
                      Freshly Baked
                    </p>
                  </div>
                </div>
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-[#5a3d2b] shrink-0 ml-2 sm:ml-3">
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