import React, { useState, useEffect } from "react";
import "animate.css";
import Button from "./Button";
import Order from "./Order";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Shows after scrolling 20px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`w-full h-20 bg-[#f8f0cc] flex justify-between fixed top-0 left-0 z-50
        border-b-2 transition-all duration-700 ease-[cubic-bezier(.76,0,.24,1)]
        ${
          scrolled
            ? "border-red-700 shadow-md"
            : "border-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <div className="box1 w-50 h-full flex justify-center items-center gap-2">
          <img className="w-12 h-12" src="./images/Rabia3.png" alt="" />
          <p className="font1 text-xl font-bold">Rabia's Kitchen</p>
        </div>

        {/* Navbar */}
        <nav className="box1 w-1/3 h-full flex justify-between items-center p-2">
          <Link to="/home" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 font-medium text-lg">
              {animateText("Home")}
            </span>

            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Home")}
            </span>
          </Link>

          <Link to="/menu" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 font-medium text-lg">
              {animateText("Menu")}
            </span>

            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Menu")}
            </span>
          </Link>

          <a href="/" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 font-medium text-lg">
              {animateText("About Us")}
            </span>

            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("About Us")}
            </span>
          </a>

          <a href="/" className="group relative overflow-hidden h-8 inline-flex">
            <span className="flex font2 font-medium text-lg">
              {animateText("Contact Us")}
            </span>

            <span className="absolute left-0 top-full flex font1 text-xl font-extrabold">
              {animateText("Contact Us")}
            </span>
          </a>
        </nav>

        {/* Buttons */}
        <div className="w-60 h-full gap-5 flex justify-center items-center">
          <Order />
          <Button />
        </div>
      </div>
    </>
  );
}

export default Navbar