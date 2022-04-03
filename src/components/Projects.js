import { useEffect, useState } from 'react';
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";


const Projects = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const res = await data.json();
    console.log(res.results)
    setData(res.results)
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=' xl:ml-80 h-screen  w-full'>

      <div className='flex flex-col w-full pt-20 p-4 sm:p-28 sm:pt-20'>
        <h1 className='text-5xl '>Projects</h1>
        <div className=''>
          <FaReact></FaReact>
        </div>
        <div className='flex flex-row flex-wrap justify-between'>
          {data.map(({ id, image, name, description }) => {
            return (
              <section key={id} className=" w-full md:w-6/12 lg:w-4/12   my-4 p-4 ">
                <div>
                  <img src={image} alt={name} className="w-full h-52 object-cover " />
                </div>
                <div>
                  <h1 className='text-3xl font-semibold '>{name}</h1>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </p>
                </div>



              </section>
            )
          })}
        </div>


      </div>
    </div>

  )
}

export default Projects