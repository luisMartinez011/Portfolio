import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md"

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const linkStyle = ({ isActive }) => {
    return {
      background: isActive ? "#4c1d95" : "",
    }
  }

  const handleNavbarToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className='relative'>
      <MdMenu className='  absolute top-5 left-full bg-sky-400 w-12 h-12' 
        onClick={handleNavbarToggle}></MdMenu>

      <div className={"flex flex-col h-screen w-64 md:w-72 xl:w-80 bg-yellow-300" + ((toggle) ? "" : " hidden")}>
        <NavLink to="/" className='h-64 md:h-72 xl:h-80'>
          
          <img src="" alt="" />
        </NavLink>

        <div className='divide-y-4 divide-slate-400/25 flex flex-col justify-center h-full w-full bg-purple-500'>
          <NavLink to="/" className="w-full hover:bg-violet-600 active:bg-violet-700 p-10" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" className="w-full hover:bg-violet-600 active:bg-violet-700 p-10" style={linkStyle}>About me</NavLink>
          <NavLink to="/projects" className="w-full hover:bg-violet-600 active:bg-violet-700 p-10" style={linkStyle}>Projects</NavLink>
          <NavLink to="contact" className="w-full hover:bg-violet-900 active:bg-violet-700 p-10" style={linkStyle}>Contact me</NavLink>
        </div>

      </div>

    </nav>



  )
}

export default Navbar