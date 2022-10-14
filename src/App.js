import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route} from 'react-router-dom';
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Cycling from "./Components/Cycling";
import Media from "./Components/Media";
import RTWBlog from "./Components/RTWBlog";
import LEJOGBlog from "./Components/LEJOGBlog";
import Hamburger from "./Components/NavBar/Hamburger/Hamburger";
import Footer from "./Components/Footer";
import './Styling/index.css'
import Contact from "./Components/Contact";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
    <Hamburger toggle={toggle} isOpen={isOpen} />
    <NavBar toggle = {toggle}/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/cycling' element={<Cycling/>}/>
        <Route path='/cycling/round-the-world' element={<RTWBlog/>}/>
        <Route path='/cycling/LEJOG' element={<LEJOGBlog/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
