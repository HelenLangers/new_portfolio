import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects'
import CyclingLanding from './Pages/Cycling/CyclingLanding';
import LEJOGBlog from './Pages/Cycling/LEJOG'
import RTWBlog from './Pages/Cycling/RTW'

function App() {
  return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/cycling' element={<CyclingLanding/>}/>
        <Route path='/cycling/lejog' element={<LEJOGBlog />}/>
        <Route path='/cycling/around-the-world' element={<RTWBlog />}/>
      </Routes>
    </Router>
  );
}

export default App;
