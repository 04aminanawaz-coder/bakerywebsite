import Footer from "./Footer";
import Button from "./Button";
import Chef from "./Chef";
import MenuPaper from "./MenuPaper";
import MenuPaperMobile from "./MenuPaperMobile";
import menuSections from "./menuData";

export default function Menu() {
  return (
    <>
      {/* Desktop / large screens (1024px+): original layout */}
      <section className="hidden lg:flex min-h-screen bg-red-700 items-center justify-center px-10 overflow-hidden">
        <div className="flex items-end justify-between w-full max-w-[1700px] mx-auto h-screen ">
          {/* Chef */}
          <Chef />
          {/* Paper */}
          <MenuPaper />
        </div>
      </section>

      {/* Small screens (phones / tablets): menu paper only, no animation */}
      <section className="lg:hidden min-h-screen bg-red-700 flex items-center justify-center px-4 py-8">
        <MenuPaperMobile />
      </section>

      {/* Back Button */}
      <section className="bg-[#f8f0cc]  text-red-700 text-center py-20 px-6">
        <h2 className="text-4xl font-bold font1">Thanks For Visiting </h2>
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
