import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes path="/">
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<ContactMe/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='*' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
