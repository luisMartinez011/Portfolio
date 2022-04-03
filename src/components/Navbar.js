import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const linkStyle = ({ isActive }) => {
    return {
      background: isActive ? "#991b1b" : "",
    }
  }

  const handleNavbarToggle = (e) => {
    setToggle(!toggle);
  }

  return (
    <nav className={'fixed  w-64 md:w-72 xl:w-80 h-full m-0 p-0 font-mono '
    + ( (toggle)? "z-20" : "") }>
      <MdMenu className={'absolute top-5 -z-10 xl:hidden bg-red-400 w-14 h-14 ' + ((toggle) ? "left-full" : "left-0")}
        onClick={handleNavbarToggle}></MdMenu>

      <div className={"flex flex-col h-screen  bg-red-400 relative xl:static divide-y-4 divide-solid text-zinc-50 text-xl" 
      + ( (toggle)? "" : " right-full ") }>

        <div className='flex h-64 md:h-72 xl:h-80 items-center 
        justify-center'>
        <NavLink to="/" className=''>
          <img src="https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg"
            alt="Profile" className=' rounded-full border-4 border-red-400 w-40 md:w-52 xl:w-60'></img>
        </NavLink>
        </div>
        

        <div className='divide-y-4 divide-solid
        flex flex-col justify-center h-full w-full '>
          <NavLink to="/" className="w-full hover:bg-red-600 active:bg-red-700 p-10" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" className="w-full hover:bg-red-600 active:bg-red-700 p-10" style={linkStyle}>About me</NavLink>
          <NavLink to="/projects" className="w-full hover:bg-red-600 active:bg-red-700 p-10" style={linkStyle}>Projects</NavLink>
          <NavLink to="contact" className="w-full hover:bg-red-600 active:bg-red-700 p-10" style={linkStyle}>Contact me</NavLink>
        </div>

      </div>

    </nav>



  )
}

export default Navbar