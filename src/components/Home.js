import React from 'react'
import { ImGithub, ImStackoverflow } from "react-icons/im"
import { AiFillLinkedin } from "react-icons/ai"

const Home = () => {
  const backgroundURL = "https://64.media.tumblr.com/a3bb214f4ab01b1e8d18458591592484/tumblr_p5n752fxZd1x5p4g9o1_640.gifv"

  return (
    <div className='flex flex-col justify-center w-full 
    xl:ml-80  h-screen  px-12
    text-center font-mono text-zinc-50 m-0 ' style={{
      backgroundImage: `url(${backgroundURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
      }}>
      <h1 className='text-6xl my-4'>Hi, I am Luis Martinez</h1>
      <p className='text-xl'>I am a full stack web developer. I enjoy building everything from small business sites to rich interactive web apps.</p>

      <div className='flex flex-row justify-center my-4'>
        <a href='https://github.com/luisMartinez011' target="_blank" rel="noreferrer" className='mx-5'>
          <ImGithub className='w-12 h-12 '></ImGithub>
        </a>
        <a href='https://www.linkedin.com/in/luismartinez011/' target="_blank" rel="noreferrer" className='mx-5'>
          <AiFillLinkedin className='w-12 h-12' ></AiFillLinkedin>
        </a>
        <a href='https://stackoverflow.com/users/16147833/luis-martinez' target="_blank" rel="noreferrer" className='mx-5'>
          <ImStackoverflow className='w-12 h-12'></ImStackoverflow>
        </a>


      </div>


    </div>
  )
}

export default Home