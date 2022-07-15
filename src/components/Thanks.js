import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div className='
    xl:ml-80 h-screen  w-full pt-20 p-4 sm:p-28 
    sm:pt-20 font-mono '>
      <div className='relative z-10 w-full h-full'>
        <h1>Thanks!</h1>
        <p>The form was submitted successfully</p>
        <p>I am going to contact you later!</p>
        <button onClick={() => {
          navigate("/")
        }} className="bg-transparent hover:bg-indigo-500 text-white-700 
        font-semibold hover:text-white py-2 px-4 border border-indigo-500 
        hover:border-transparent rounded w-36 h-16 mt-5">Return</button>
      </div>



    </div>
  )
}

export default Thanks