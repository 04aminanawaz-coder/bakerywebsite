import React, { useState, useEffect } from "react";
import "animate.css";
import Button from "./Button";
import Order from "./Order";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // FIX 1: Added useEffect to lock background scrolling on mobile when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const animateText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full cursor-pointer"
        style={{
          transitionDelay: `${i * 20}ms`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full h-[72px]
        bg-[#f8f0cc]/95 backdrop-blur-md
        flex items-center justify-between
        border-b transition-all duration-500
        ${
          scrolled
            ? "border-red-700 shadow-[0_10px_35px_rgba(0,0,0,.08)]"
            : "border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center h-full gap-2 px-4 shrink-0">
          <img
            className="w-12 h-12 object-contain"
            src="./images/Rabia3.png"
            alt="Rabia's Kitchen Logo"
          />
          <p className="font1 text-lg md:text-xl font-bold whitespace-nowrap">
            Rabia's Kitchen
          </p>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link to="/" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 text-[17px] font-medium tracking-wide">
              {animateText("Home")}
            </span>
            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Home")}
            </span>
          </Link>

          <Link to="/menu" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 text-[17px] font-medium tracking-wide">
              {animateText("Menu")}
            </span>
            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Menu")}
            </span>
          </Link>

          <Link to="/aboutus" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 text-[17px] font-medium tracking-wide">
              {animateText("About Us")}
            </span>
            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("About Us")}
            </span>
          </Link>

          <Link to="/contactpage" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 text-[17px] font-medium tracking-wide">
              {animateText("Contact Us")}
            </span>
            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Contact Us")}
            </span>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 pr-6 scale-[0.82] origin-right">
          <Order />
          <Button />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          // FIX 2: Increased z-index so it's always clickable above the overlay
          className="md:hidden flex flex-col justify-center items-center w-12 h-full mr-4 z-[80]"
        >
          <span
            className={`block w-7 h-[2px] bg-red-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[2px] bg-red-700 my-[6px] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[2px] bg-red-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* ===================== MOBILE OVERLAY ===================== */}
      <div
        onClick={() => setMenuOpen(false)}
        // FIX 3: Bumped z-index to ensure it covers the main fixed navbar properly
        className={`fixed inset-0 bg-black/55 backdrop-blur-sm z-[60] transition-all duration-700 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ===================== MOBILE DRAWER ===================== */}
      <div
        className={`fixed top-0 right-0 h-screen
        w-[85%] max-w-[380px]
        bg-[#fff8e8]
        rounded-l-[40px]
        shadow-[0_0_60px_rgba(0,0,0,.25)]
        // FIX 4: Bumped z-index above overlay
        z-[70]
        transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 h-24 border-b border-[#e5c99c]">
          <div>
            <h2 className="font1 text-2xl text-red-700">Rabia's Kitchen</h2>
            <p className="text-xs tracking-[4px] font2 uppercase mt-1">
              Freshly Baked
            </p>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-red-700 text-[#f8f0cc] text-xl hover:bg-red-800 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-8 py-10 gap-8">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between border-b border-[#ead8b5] pb-4"
          >
            <span className="font1 text-3xl hover:text-red-700 group-hover:translate-x-2 transition duration-300">
              Home
            </span>
            <span className="opacity-0 text-red-700 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">
              →
            </span>
          </Link>

          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between border-b border-[#ead8b5] pb-4"
          >
            <span className="font1 text-3xl hover:text-red-700 group-hover:translate-x-2 transition duration-300">
              Menu
            </span>
            <span className="opacity-0 text-red-700 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">
              →
            </span>
          </Link>

          <Link
            to="/aboutus"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between border-b border-[#ead8b5] pb-4"
          >
            <span className="font1 text-3xl hover:text-red-700 group-hover:translate-x-2 transition duration-300">
              About Us
            </span>
            <span className="opacity-0 text-red-700 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">
              →
            </span>
          </Link>

          <Link
            to="/contactpage"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between border-b border-[#ead8b5] pb-4"
          >
            <span className="font1 text-3xl hover:text-red-700 group-hover:translate-x-2 transition duration-300">
              Contact Us
            </span>
            <span className="opacity-0 text-red-700 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Buttons */}
        {/* FIX 5: Changed invalid 'bottom-34' to 'bottom-36' (9rem) to fix layout breaking */}
        <div className="absolute bottom-36 left-0 w-full flex justify-center gap-5 px-8">
          <div className="scale-[0.82] origin-left">
            <Order />
          </div>
          <div className="w-28 scale-90 origin-left">
            <Button />
          </div>
        </div>
        
        {/* FIX 6: Adjusted bottom text spacing so it doesn't overlap the buttons */}
        <div className="absolute bottom-12 left-8">
          <p className="text-sm font2 tracking-[3px] uppercase">
            Fresh • Homemade • Delicious
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;