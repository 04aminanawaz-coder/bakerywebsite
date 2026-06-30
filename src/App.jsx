import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./componenets/Navbar";
import Animation2 from "./componenets/Animation2";
import ChooseUs from "./componenets/ChooseUs";
import Animation from "./componenets/Animation";
import Boxes from "./componenets/Boxes";
import Footer from "./componenets/Footer";
import Menu from "./componenets/Menu";


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
</Routes>
  );
}

export default App;