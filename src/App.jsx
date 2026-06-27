import { useState } from 'react'
import './App.css'
import Navbar from './componenets/Navbar'


import ChooseUs from './componenets/ChooseUs'
import Animation from './componenets/Animation'
import Animation2 from './componenets/Animation2'
import Boxes from './componenets/Boxes'
import Footer from './componenets/Footer'
function App() {
 
const [nextScene, setNextScene] = useState(false);
  return (
    <>
   
    <Navbar/>
     <Animation2/>
 
<ChooseUs/>
   <Animation/>
   <Boxes/>
   <Footer/> 
   
   </>
  )
}

export default App
