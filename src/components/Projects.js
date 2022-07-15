import { useEffect, useState } from 'react';
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Projects = () => {

  return (
    <div className=' xl:ml-80 h-screen  w-full'>

      <div className='flex flex-col w-full pt-20 p-4 sm:p-28 sm:pt-20'>
        <h1 className='text-5xl '>Projects</h1>

        <div className='flex flex-row flex-wrap justify-between'>

          <section key="1" className=" w-full  my-4 p-4 ">
            <div>
              <img /* src={image} alt={name} */ className="w-full h-52 object-cover " />
            </div>
            <div>
              <h1 className='text-3xl font-semibold '>Sales System </h1>
              <p>
                Sales sytem for a mini market. Backend made in <b>C# .NET</b> using <b>JWT </b>
                and Frontend made in <b>Angular</b>. This webpage is deployed in <b>Azure.</b>
              </p>
            </div>
          </section>

          <section key="2" className=" w-full  my-4 p-4 ">
            <div>
              <img /* src={image} alt={name} */ className="w-full h-52 object-cover " />
            </div>
            <div>
              <h1 className='text-3xl font-semibold '>SuperMarket</h1>
              <p>
                SuperMarket web papge. A <b>Typescript NodeJS</b> project using the
                backend framework <b>NestJS</b>  based in <b>ExpressJS</b> with MongoDB
                as database. The frontend was made using <b>NextJS</b> framework.
                This webpage is deployed in <b>Azure.</b>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>

  )
}

export default Projects