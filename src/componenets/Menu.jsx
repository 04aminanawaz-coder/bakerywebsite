import Footer from "./Footer";
import Button from "./Button";
import Chef from "./Chef";
import MenuPaper from "./MenuPaper";
import { Link } from "react-router-dom";
import menuSections from "./menuData";

export default function Menu() {
  return (
    <>
      {/* p-8/sm:p-10/lg:p-12 creates the 2-3 inch red border on mobile/tablet. 
          xl:px-10 xl:py-0 restores your original laptop layout exactly. */}
      <section className="min-h-screen bg-red-700 flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:px-10 xl:py-0 overflow-hidden">
        <div className="flex items-end justify-between w-full max-w-[1700px] mx-auto h-screen">
          
          <div className="hidden lg:flex">
            <Chef />
          </div>

          <MenuPaper />
          
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-[#f8f0cc] text-red-700 text-center py-12 sm:py-16 md:py-20 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font1">Thanks For Visiting</h2>
        <p className="mt-3 text-red-700 mb-4 sm:mb-6 font2 tracking-wide text-sm sm:text-base md:text-lg">
          Hope so you like our tasty and delicious menu
        </p>
        <Link to="/" className="inline-block">
          <Button
            text="Back To Home"
            width="w-36 h-10 sm:w-40 sm:h-11 md:w-44 md:h-12 font2 text-sm sm:text-base md:text-lg"
          />
        </Link>
      </section>

      <Footer />
    </>
  );
}