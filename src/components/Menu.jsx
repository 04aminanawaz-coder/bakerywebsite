import Footer from "./Footer";
import Button from "./Button";
import Chef from "./Chef";
import MenuPaper from "./MenuPaper";
import menuSections from "./menuData";

export default function Menu() {
  return (
    <>
      <section className="min-h-screen bg-red-700 flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between w-full max-w-[1700px] mx-auto min-h-screen py-8 lg:py-0 gap-6 lg:gap-0">
          {/* Chef */}
          <Chef />
          {/* Paper */}
          <MenuPaper />
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-[#f8f0cc]  text-red-700 text-center py-14 sm:py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold font1">Thanks For Visiting </h2>
        <p className="mt-3 text-red-700 mb-4 font2 tracking-wide">
          Hope so you like our tasty and delicious menu
        </p>
        <Button
          text="Back To Home"
          href="/"
          width="w-44 h-12 font2 text-lg"
        />
      </section>

      <Footer />
    </>
  );
}