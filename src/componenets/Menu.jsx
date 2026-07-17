
import Footer from "./Footer";
import Button from "./Button";
import Chef from "./Chef";
import MenuPaper from "./MenuPaper";
import { Link } from "react-router-dom";
import menuSections from "./menuData";
export default function Menu() {
  return (
    <>
     

      <section className="min-h-screen bg-red-700 flex items-center justify-center px-10 overflow-hidden">

        <div className="flex items-end justify-between w-full max-w-[1700px] mx-auto h-screen ">

          {/* Chef */}

          <Chef />

          {/* Paper */}

          <MenuPaper />

        </div>

      </section>

      {/* Back Button */}
          <section className="bg-[#f8f0cc]  text-red-700 text-center py-20 px-6">
                    <h2 className="text-4xl font-bold font1">Thanks For Visiting </h2>
                    <p className="mt-3 text-red-700 mb-4 font2 tracking-wide">
      Hope so you like our tasty and delicious menu              </p>
            
                    <button>
                      
           <Link to="/">
          <Button
            text="Back To Home"
            width="w-44 h-12 font2 text-lg"
          />
        </Link>
                    </button>
                  </section>


       



      <Footer />
    </>
  );
}