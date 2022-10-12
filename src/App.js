import NavBar from "./Components/NavBar";
import { Routes, Route} from 'react-router-dom';
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Cycling from "./Components/Cycling";
import Media from "./Components/Media";
import RTWBlog from "./Components/RTWBlog";
import LEJOGBlog from "./Components/LEJOGBlog";

function App() {
  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/cycling' element={<Cycling/>}/>
        <Route path='/cycling/round-the-world' element={<RTWBlog/>}/>
        <Route path='/cycling/LEJOG' element={<LEJOGBlog/>}/>
        <Route path='/media' element={<Media/>}/>
      </Routes>

    

    </div>
  );
}

export default App;
