import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-red-700 font1 font-bold text-[#f8f0cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/sit.png"
              alt="Bakery Logo"
              className="w-28 sm:w-32 lg:w-36 mb-4"
            />

            <p className="leading-7 text-base sm:text-lg lg:text-xl">
              Freshly baked with love every day.
              Delicious cakes, pastries and breads made
              from the finest ingredients.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Follow Us
            </h3>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border text-[#f8f0cc] flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300"
              >
                <FaInstagram size={18} className="sm:hidden" />
                <FaInstagram size={22} className="hidden sm:block" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border text-[#f8f0cc] flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300"
              >
                <FaFacebookF size={16} className="sm:hidden" />
                <FaFacebookF size={20} className="hidden sm:block" />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border text-[#f8f0cc] flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300"
              >
                <FaTiktok size={16} className="sm:hidden" />
                <FaTiktok size={20} className="hidden sm:block" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Bakery Hours
            </h3>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p>8:00 AM - 8:00 PM</p>
              </div>

              <div>
                <p className="font-semibold">Saturday</p>
                <p>9:00 AM - 9:00 PM</p>
              </div>

              <div>
                <p className="font-semibold">Sunday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Join Our Family */}
          <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Join Our Family
            </h3>

            <button
              className="hover:scale-105 w-36 sm:w-40 transition duration-300 font2 self-start sm:self-auto"
            >
              <Button text="Sign in" width="h-12" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#f8f0cc] mt-8 sm:mt-12 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-[#f8f0cc]">
          © 2026 Sweet Bakery. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}