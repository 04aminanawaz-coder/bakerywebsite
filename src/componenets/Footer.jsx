import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-red-700 font1 font-bold text-lg text-[#f8f0cc] ">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <img
              src="/images/sit.png"
              alt="Bakery Logo"
              className="w-36 mb-4  "
            />

            <p className=" leading-7 text-[#f8f0cc] text-2xl ">
              Freshly baked with love every day.
              Delicious cakes, pastries and breads made
              from the finest ingredients.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full border  text-[#f8f0cc]  flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300 "
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border text-[#f8f0cc]  flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border text-[#f8f0cc]  flex items-center justify-center hover:bg-[#f8f0cc] hover:text-red-700 transition duration-300"
              >
                <FaTiktok size={20} />
              </a>

            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-bold mb-6 ">
              Bakery Hours
            </h3>

            <div className="space-y-2 text-[#f8f0cc]">
              <p>Monday - Friday</p>
              <p>8:00 AM - 8:00 PM</p>

              <br />

              <p>Saturday</p>
              <p>9:00 AM - 9:00 PM</p>

              <br />

              <p>Sunday</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Sign Button */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 ">
              Join Our Family
            </h3>

            <button
              className=" hover:scale-105 w-40  transition duration-300 font2"
            >
              <Button text="Sign in" width=" h-12" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#f8f0cc] mt-12 pt-6 text-center text-sm text-[#f8f0cc]">
          © 2026 Sweet Bakery. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}