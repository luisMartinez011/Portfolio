import React from 'react'

const About = () => {
  return (
    <article className='xl:ml-80 h-screen  
    w-full pt-20 p-4 sm:p-28 sm:pt-20 font-mono '>
      <h1 className='text-5xl'>My skills</h1>
      <section className='flex flex-wrap w-full mt-5 justify-between'>

        <div className='mt-10 w-full 2xl:w-5/12'>
          <h1 className='text-2xl'>Languages:</h1>
          <div className='flex items-center w-full h-24 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='ml-5'>JavaScript, TypeScript, C#, HTML/CSS</p>
          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-5/12'>
          <h1 className='text-2xl'>Frameworks:</h1>
          <div className='flex items-center w-full h-24 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <div className='ml-5'>
              <p><span className='font-bold text-xl'>Frontend: </span>
                ReactJS, NextJs, Angular
              </p>
              <p>
                <span className='font-bold text-xl'>Backend: </span>
                NodeJS, ExpressJS, NestJs, Apollo Server
              </p>
            </div>

          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-5/12'>
          <h1 className='text-2xl'>Databses:</h1>
          <div className='flex items-center w-full h-24 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='pl-5'>PostgreSQL, MongoDB</p>
          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-5/12'>
          <h1 className='text-2xl'>Devops:</h1>
          <div className='flex items-center w-full h-24 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='pl-5'>Azure, Docker</p>
          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-5/12'>
          <h1 className='text-2xl'>Other:</h1>
          <div className='flex items-center w-full h-24 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='pl-5'>Git, Github, Docker, Heroku</p>
          </div>
        </div>


      </section>
    </article>
  )
}


export default About