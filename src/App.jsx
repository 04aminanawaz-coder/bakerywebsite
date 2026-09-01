import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Animation2 from "./components/Animation2";
import ChooseUs from "./components/ChooseUs";
import Animation from "./components/Animation";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/ContactPage";



function Home() {
  return (
    <>
      <Navbar />
      <Animation2 />
      <ChooseUs />
      <Animation />
      <Boxes />
      <Footer />
  

     
    </>
  );
}

function App() {
  return (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/contactpage" element={<ContactPage/>} />
</Routes>
  );
}

export default App;