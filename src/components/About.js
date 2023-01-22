import React from 'react'
import awsCloudPractitioner from "../img/awsCloudPractitioner.PNG"

const About = () => {
  return (
    <article className='xl:ml-80 h-screen
    w-full
    pt-20 p-4 sm:p-28 sm:pt-20 font-mono '>
      <h1 className='text-5xl'>About me</h1>
      <div>
        <p className='text-lg'>Hi, my name is Luis Martinez. I'm a fullstack developer with a passion for lifelong learning.

          I believe that technological advancements have improved our lives and made the world a better place. The Web has connected our whole world and enabled everyday people to think globally.

          I became a developer because I want to create, contribute and be a part of this amazing connection. </p>
      </div>

      <h1 className='text-5xl mt-7'>My skills</h1>
      <section className='flex flex-col w-full  justify-between'>

        <div className='mt-10 w-full 2xl:w-9/12'>
          <h1 className='text-2xl'>Languages:</h1>
          <div className='flex items-center w-full h-28 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='ml-5'>Ruby, JavaScript, TypeScript, C#, HTML/CSS</p>
          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-9/12'>
          <h1 className='text-2xl'>Frameworks:</h1>
          <div className='flex items-center w-full h-28 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <div className='ml-5'>
              <p><span className='font-bold text-xl'>Frontend: </span>
                ReactJS, NextJs, Angular
              </p>
              <p>
                <span className='font-bold text-xl'>Backend: </span>
                Ruby on Rails, NodeJS, ExpressJS, NestJs, .NET Entity Framework
              </p>
            </div>

          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-9/12'>
          <h1 className='text-2xl'>Databases:</h1>
          <div className='flex items-center w-full h-28 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='pl-5'>PostgreSQL, MongoDB</p>
          </div>
        </div>

        <div className='mt-10 w-full 2xl:w-9/12'>
          <h1 className='text-2xl'>Devops:</h1>
          <div className='flex items-center w-full h-28 bg-red-500/50
          text-lg mt-5'>
            <div className='w-5 h-full bg-red-600'></div>
            <p className='pl-5'>AWS, Docker, Git, Github, React Native, Linux</p>
          </div>
        </div>

        <h1 className='text-5xl mt-7'>My skills</h1>
        <h1 className='text-2xl mt-10'>AWS Cloud Practitioner:</h1>
        <img src={awsCloudPractitioner} className=" object-cover
              w-full " />


      </section>
    </article>
  )
}


export default About
