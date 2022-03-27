import { useEffect, useState } from 'react';
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";


const Projects = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const res = await data.json();
    setData(res.results)
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='absolute ml-80 w-full'>

      <div className='flex flex-col px-5  w-full'>
        <h1 className='text-4xl text-emerald-400'>Projects</h1>
        <div className=''>
          <FaReact></FaReact>
        </div>
        <div className='flex flex-row flex-wrap'>
          {data.map((item) => {
            return (
              <section key={item.id} className="w-full md:w-5/12 h-24 m-5 bg-green-500">
                ni hao
              </section>
            )
          })}
        </div>


      </div>
    </div>

  )
}

export default Projects