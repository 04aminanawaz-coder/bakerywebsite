import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function AboutUs() {
  return (
    <>
     <Navbar/>
    <div className="bg-red-700 text-[#f8f0cc] mt-16 ">
   

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center  bg-[url('/images/RabiaBanner2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 "></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font1  font-bold text-white">
            About Our Bakery
          </h1>
          <p className="mt-4 text-lg font2 text-white max-w-xl tracking-wide mx-auto">
            Baking happiness every day with fresh ingredients and love.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/Rabia3.png"
          alt="Our Story"
          className="w-50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 rounded-lg"
        />

        <div>
          <h2 className="text-4xl font-bold font1 mb-4">Our Story</h2>
          <p className="text-[#f8f0cc] font2 tracking-wide leading-relaxed">
            Our bakery started with a simple dream—to bring fresh, delicious,
            and handcrafted baked goods to every home. Every bread, cake, and
            pastry is made daily using high-quality ingredients and traditional
            recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f8f0cc] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 font1 text-red-700">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-6 font2">
            {[
              { title: "Fresh Daily", desc: "Baked every single day." },
              { title: "Premium Ingredients", desc: "Only the best quality." },
              { title: "Expert Bakers", desc: "Skilled and passionate." },
              { title: "Made with Love", desc: "Every item matters." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl  bg-red-700 shadow hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-[#f8f0cc] mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center  text-red-700 ">
        <h2 className="text-3xl font-bold mb-10 text-[#f8f0cc] font1">Our Baking Process</h2>

        <div className="grid md:grid-cols-4 gap-6 text-lg font2">
          {[
            "Choose Ingredients",
            "Prepare Dough",
            "Bake Fresh",
            "Serve Warm",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-[#f8f0cc] rounded-xl shadow">
              <div className="text-xl font-bold mb-2">0{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#f8f0cc] py-20 text-red-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 font1">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-6 font2 tracking-wide">
            {[
              "Head Baker",
              "Pastry Chef",
              "Cake Designer",
            ].map((role, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#f8f0cc]shadow hover:shadow-lg transition"
              >
                <div className="w-40 h-40 mx-auto  rounded-full mb-4">
                    <img className="w-full object-contain" src="/images/chef.png" alt="" />
                </div>
                <h3 className="font-semibold">{role}</h3>
                <p className="text-sm text-red-700 mt-2">
                  Passionate about baking perfection.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-[#f8f0cc]">
        <h2 className="text-4xl font1  font-bold text-center mb-10">Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ">
        
          {[
            "/images/bread.png",
            "/images/pizza.png",
            "/images/cake.png",
            "/images/bread2.png",
            "/images/bread3.png",
            "/images/cookie.png",
             "/images/bread2.png",
            "/images/bread3.png",
       
            
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-32 aspect-square object-contain rounded-xl hover:scale-105 transition"
              alt="gallery"
            />
          ))}
         
        </div>
      </section>

      {/* REVIEWS */}
      {/* <section className="bg-[#fff8ee] py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          {[
            "Best bakery in town! Everything is fresh and delicious.",
            "Their cakes are amazing and beautifully designed!",
          ].map((review, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <p className="text-gray-700">"{review}"</p>
              <div className="mt-3 text-yellow-500">★★★★★</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#f8f0cc] text-red-700 text-center py-20 px-6">
        <h2 className="text-4xl font-bold font1">Visit Our Bakery Today</h2>
        <p className="mt-3 text-red-700 mb-4 font2 tracking-wide">
          Fresh bread, cakes, and pastries waiting for you.
        </p>

        <Button text="Contact Us" href="/contactpage" width="w-40 h-12"/>
      </section>
    </div>
    <Footer/>
    </>
  );
}