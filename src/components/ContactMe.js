import React from 'react'

const ContactMe = () => {
  const url = "http://localhost:3000/thanks"
  return (

    <div className='
    xl:ml-80 h-screen  w-full pt-20 p-4 sm:p-28 
    sm:pt-20 font-mono '>
      <div className='relative z-10 w-full h-full'>
        <h1 className='mb-5'>Contact me</h1>
        <form action="https://formsubmit.co/98f78f4a2dcb5ca694eedbd7f496dc07 " method="POST" >
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value={url}></input>
          
          <label className=' mt-7 block'>
            <span className='text-2xl'>
              Name:
            </span>
            <input type="name" name="name" className='
            border-red-600 border-solid border-2 
            w-full h-24 focus:outline-none text-xl mt-3 ' required />
          </label>
          <label className=' mt-7 block'>
            <span className='text-2xl'>
              Email:
            </span>
            <input type="email" name="email" className='
            border-red-600 border-solid border-2 
            w-full h-24 focus:outline-none text-xl mt-3' required />
          </label>
          <label className=' mt-7 block'>
            <span className='text-2xl'>
              Message:
            </span>

            <textarea name='message' className=' border-red-600 border-solid border-2
            w-full h-60 focus:outline-none text-xl mt-3' required></textarea>
          </label>

          <button type="submit"
            className='bg-transparent hover:bg-indigo-500 text-white-700 
            font-semibold hover:text-white py-2 px-4 border border-indigo-500 
            hover:border-transparent rounded w-36 h-16 mt-5'>Send Email</button>
        </form>
      </div>

    </div>

  )
}

export default ContactMe