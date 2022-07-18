import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./components/Home"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Thanks from "./components/Thanks"

function App() {
  return (
    <div className='flex '>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes path="/">
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<ContactMe />} />
          <Route path='thanks' element={<Thanks />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
