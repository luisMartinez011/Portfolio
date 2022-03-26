import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md"
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const linkStyle = ({ isActive }) => {
    return {
      background: isActive ? "#4c1d95" : "",
    }
  }

  const handleNavbarToggle = (e) => {
    console.log(e)
    setToggle(!toggle);
  }

  return (
    <nav className='absolute md:relative z-10 '>
      <MdMenu className={' md:hidden top-5  bg-sky-400 w-12 h-12 ' + ((toggle) ? "absolute left-full" : "relative right-0")}
        onClick={handleNavbarToggle}></MdMenu>

      <div className={"flex flex-col h-screen w-64 md:w-72 xl:w-80 bg-yellow-300 relative md:static" 
      + ( (toggle)? "" : " right-full") }>

        <div className='flex h-64 md:h-72 xl:h-80 items-center 
        justify-center'>
        <NavLink to="/" className=''>
          <img src="https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg"
            alt="Profile" className=' rounded-full border-4 border-green-400 w-40 md:w-52 xl:w-60'></img>
        </NavLink>
        </div>
        

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