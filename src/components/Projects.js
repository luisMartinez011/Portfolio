
import image from "../img/SalesSystem.jpg"
import nest from "../img/supermarketNest.jpg"

const Projects = () => {

  return (
    <div className=' xl:ml-80 h-screen  w-full '>

      <div className='flex flex-col w-full pt-20 p-4 sm:p-28 sm:pt-20
      '>
        <h1 className='text-5xl '>Projects</h1>

        <div className='flex flex-row flex-wrap justify-between relative z-10'>

          <section key="1" className="w-full xl:w-3/6 my-4 p-4 ">
            <div>
              <img src={image} className=" object-cover 
              w-full " />
              <h1 className='text-3xl font-semibold'>Sales System </h1>
              <p>
                Web app built with <b>Angular</b> and Typescript.
                <b> C# .NET Entity Framework</b> and <b>PostgreSQL</b> were used for backend
                following <b>MVC</b> architecture.
                <b> Swagger Api</b> is used for documentation.
                This webpage is deployed in <b>Azure.</b>
              </p>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700 
            font-semibold hover:text-white py-2 px-4 border border-indigo-500 
            hover:border-transparent rounded w-36 h-16 mt-5'>
                <a href='https://github.com/luisMartinez011/Sales-System-Api-.NET'
                  target={"_blank"}>Source code</a>
              </button>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700 
            font-semibold hover:text-white py-2 px-4 border border-indigo-500 
            hover:border-transparent rounded w-36 h-16 mt-5 ml-5'>
                <a href='https://dotnetventas.azurewebsites.net/products'
                  target={"_blank"}>Web Page</a>
              </button>
            </div>
          </section>

          <section key="2" className=" w-full xl:w-3/6 my-4 p-4">
            <div>
              <img src={nest}
                className="object-cover 
                w-full h-3/5" />
            </div>
            <div>
              <h1 className='text-3xl font-semibold '>SuperMarket</h1>
              <p>
                SuperMarket Api. A <b>Typescript NodeJS</b> project using the
                backend framework <b>NestJS</b>  based in <b>ExpressJS</b> with MongoDB
                as database.
              </p>
            </div>
            <button
              className='bg-transparent hover:bg-indigo-500 text-white-700 
            font-semibold hover:text-white py-2 px-4 border border-indigo-500 
            hover:border-transparent rounded w-36 h-16 mt-5'>
              <a href='https://github.com/luisMartinez011/nestjs-api'
                target={"_blank"}>Source code</a>
            </button>
          </section>

        </div>
      </div>
    </div>

  )
}

export default Projects