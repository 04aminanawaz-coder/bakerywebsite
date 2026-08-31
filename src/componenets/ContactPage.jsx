import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import { Link } from "react-router-dom";
function ContactPage() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-pink-50">

      {/* 🟣 HEADER */}
      <Navbar/>
       <div className="bg-red-700 text-[#f8f0cc] mt-16 ">
   

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center   bg-[url('/images/RabiaBanner2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 "></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font1  font-bold text-white">
           Contact Us
          </h1>
          <p className="mt-4 text-lg font2 text-white max-w-xl tracking-wide mx-auto">
            Baking happiness every day with fresh ingredients and love.
          </p>
        </div>
      </section>

      {/* 🟡 MAIN CONTENT */}
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="text-center py-12 px-4">
          <h2 className="text-5xl font-bold font1 text-[#f8f0cc]">
            Get in Touch
          </h2>
          <p className="text-[#f8f0cc] font2 mt-2">
            We’d love to hear from you! Order, feedback, or questions — we’re here.
          </p>
        </section>

        {/* GRID SECTION */}
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          {/* 📩 CONTACT FORM */}
          <div className="bg-[#f8f0cc] p-6 rounded-2xl shadow-lg font2 text-black">
            <h3 className="text-3xl font-semibold text-red-700 font1 mb-4">
              Send Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              ></textarea>

              <button
                type="submit"
                className="flex justify-center w-full  py-3   font-semibold transition"
              >
      <Button text="Send Message"  width='w-48 font2 text-lg heigh= h-12  ' />
              </button>

            </form>
          </div>

          {/* 📞 CONTACT INFO */}
          <div className="bg-[#f8f0cc] p-6 rounded-2xl shadow-lg ">
            <h3 className="text-3xl font1 font-semibold text-red-700 mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-black font2">

              <p>
                📞 <span className="font-semibold">Phone:</span> +92 300 1234567
              </p>

              <p>
                ✉️ <span className="font-semibold">Email:</span> rabiaskitchen@gmail.com
              </p>

              <p>
                🕒 <span className="font-semibold">Hours:</span><br />
                Mon - Sat: 10:00 AM - 8:00 PM
              </p>

              <p>
                🍰 <span className="font-semibold">Speciality:</span> Cakes, Desserts, Bakery Items
              </p>

              <div className="mt-6 p-4 bg-red-700 rounded-lg">
                <p className="text-[#f8f0cc] font-medium">
                  💖 “Freshly baked happiness delivered daily!”
                </p>
              </div>

            </div>
          </div>

        </section>
      </main>

      {/* 🔵 FOOTER */}
     
       


      
 

        <section className="bg-[#f8f0cc] mt-12 text-red-700 text-center py-20 px-6">
              <h2 className="text-4xl font-bold font1">Visit Our Bakery Reviews</h2>
              <p className="mt-3 text-red-700 mb-4 font2 tracking-wide">
Help you to know us better              </p>
      
              <button>
                
      <Link to="/">
          <Button text="People Reviews" width='w-48 font2 text-lg heigh= h-12  ' /></Link>
              </button>
            </section>

      <Footer/>
    </div>
  </div></>
  );

}

export default ContactPage;