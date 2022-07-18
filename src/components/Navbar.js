import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md"
import profilePicture from "../img/profile picture.jpg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const linkStyle = ({ isActive }) => {
    return {
      background: isActive ? "rgb(30 58 138)" : "",
    }
  }

  const handleNavbarToggle = (e) => {
    setToggle(!toggle);
  }

  return (
    <nav className={'fixed  w-64 md:w-72 xl:w-80 h-full m-0 p-0 font-mono '
      + ((toggle) ? "z-20" : "")}>
      <MdMenu className={'absolute top-5 -z-10 xl:hidden bg-blue-400 w-14 h-14 ' + ((toggle) ? "left-full" : "left-0")}
        onClick={handleNavbarToggle}></MdMenu>

      <div className={"flex flex-col h-screen  bg-blue-400 relative xl:static divide-y-4 divide-solid text-zinc-50 text-xl"
        + ((toggle) ? "" : " right-full ")}>

        <div className='flex h-64 md:h-72 xl:h-80 items-center 
        justify-center'>
          <NavLink to="/" className=''>
            <img src={profilePicture}
              alt="Profile" className=' rounded-full border-4 border-blue-400 w-40 md:w-52 xl:w-60'></img>
          </NavLink>
        </div>


        <div className='divide-y-4 divide-solid
        flex flex-col justify-center h-full w-full '>
          <NavLink to="/" className="w-full hover:bg-blue-600 active:bg-blue-700 p-10" style={linkStyle} onClick={handleNavbarToggle}>Home</NavLink>
          <NavLink to="/about" className="w-full hover:bg-blue-600 active:bg-blue-700 p-10" style={linkStyle} onClick={handleNavbarToggle}>About me</NavLink>
          <NavLink to="/projects" className="w-full hover:bg-blue-600 active:bg-blue-700 p-10" style={linkStyle} onClick={handleNavbarToggle}>Projects</NavLink>
          <NavLink to="contact" className="w-full hover:bg-blue-600 active:bg-blue-700 p-10" style={linkStyle} onClick={handleNavbarToggle}>Contact me</NavLink>
        </div>

      </div>

    </nav>
  )
}

export default Navbar