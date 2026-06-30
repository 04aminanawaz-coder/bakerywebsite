
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

      <div className="bg-[#f8f0cc] h-40 flex items-center justify-center">

        <Link to="/">
          <Button
            text="Back To Home"
            width="w-44 h-12 font2 text-lg"
          />
        </Link>

      </div>

      <Footer />
    </>
  );
}