import React, { useState, useEffect } from "react";
import "animate.css";
import Button from "./Button";
import Order from "./Order";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===================== Scroll, Resize & Keyboard ===================== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    // PRO FIX: Allow closing via Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  /* ===================== Lock Body Scroll ===================== */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  /* ===================== Animated Text ===================== */
  const animateText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full"
        style={{ transitionDelay: `${i * 20}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  /* ===================== Navigation Links ===================== */
  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contactpage", label: "Contact Us" },
  ];

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <header
        className={`fixed top-0 left-0 z-50 w-full
        bg-[#f8f0cc]/95 backdrop-blur-md
        border-b transition-all duration-500
        ${
          scrolled
            ? "border-red-700 shadow-[0_10px_35px_rgba(0,0,0,.08)]"
            : "border-transparent"
        }`}
        // PRO FIX: Safe area for notched phones
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-[1600px] mx-auto h-16 sm:h-[70px] lg:h-[74px] flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          
          {/* ===================== Logo ===================== */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/Rabia3.png"
              alt="Rabia's Kitchen"
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain"
            />
            <span className="font1 text-base sm:text-lg lg:text-xl font-bold whitespace-nowrap">
              Rabia's Kitchen
            </span>
          </Link>

          {/* ===================== Desktop Navigation ===================== */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-12">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="group relative overflow-hidden h-8 inline-flex"
              >
                <span className="flex font2 text-[17px] font-medium tracking-wide">
                  {animateText(label)}
                </span>
                <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
                  {animateText(label)}
                </span>
              </Link>
            ))}
          </nav>

          {/* ===================== Desktop Buttons ===================== */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 scale-[0.78] xl:scale-90 2xl:scale-100 origin-right">
            <Order />
            <Button />
          </div>

          {/* ===================== Hamburger ===================== */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 z-[80]"
          >
            <span className={`block w-7 h-[2px] bg-red-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-7 h-[2px] bg-red-700 my-[6px] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-7 h-[2px] bg-red-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* ===================== Overlay ===================== */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/55 backdrop-blur-sm z-[60] transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* ===================== Mobile / Tablet Drawer ===================== */}
      <aside
        className={`fixed top-0 right-0 h-screen
        w-[85%] sm:w-[70%] md:w-[58%] max-w-[420px]
        bg-[#fff8e8] rounded-l-[32px] sm:rounded-l-[40px]
        shadow-[0_0_60px_rgba(0,0,0,.25)]
        z-[70] overflow-y-auto will-change-transform
        transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        lg:hidden flex flex-col 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        // PRO FIX: Accessibility attributes for screen readers
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        // PRO FIX: Safe area for iPads/iPhones
        style={{ 
          paddingTop: 'env(safe-area-inset-top)', 
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingRight: 'env(safe-area-inset-right)' 
        }}
      >
        {/* ===================== Drawer Header ===================== */}
        <div className="sticky top-0 bg-[#fff8e8] z-20 flex justify-between items-center px-6 sm:px-8 h-20 sm:h-24 border-b border-[#e5c99c]">
          <div>
            <h2 className="font1 text-xl sm:text-2xl text-red-700">Rabia's Kitchen</h2>
            <p className="text-[10px] sm:text-xs tracking-[4px] uppercase font2 mt-1">Freshly Baked</p>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-red-700 text-[#f8f0cc] text-xl flex justify-center items-center hover:bg-red-800 hover:rotate-90 active:scale-90 transition-all duration-300"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* ===================== Drawer Links ===================== */}
        <nav className="flex flex-col px-6 sm:px-8 py-8 gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="group flex justify-between items-center border-b border-[#ead8b5] pb-4"
            >
              <span className="font1 text-2xl sm:text-3xl group-hover:text-red-700 group-hover:translate-x-2 transition-all duration-300">
                {label}
              </span>
              <span className="text-red-700 opacity-0 text-xl group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* ===================== Drawer Footer ===================== */}
        {/* PRO FIX: mt-auto pushes this to the bottom safely */}
        <div className="mt-auto px-6 sm:px-8 pt-8 pb-10">
          <div className="flex justify-center gap-4 mb-6">
            <div className="scale-75 sm:scale-[0.82]"><Order /></div>
            <div className="scale-75 sm:scale-[0.82]"><Button /></div>
          </div>
          <p className="text-center text-[11px] sm:text-sm font2 tracking-[3px] uppercase opacity-70">
            Fresh • Homemade • Delicious
          </p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
