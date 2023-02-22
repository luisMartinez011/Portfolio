
import image from "../img/SalesSystem.jpg"
import nest from "../img/supermarketNest.jpg"
import prayers from "../img/prayersMX.PNG"
import prayersFrontend from "../img/prayersWebpage.PNG"
import dollartracking from "../img/dollartracking.PNG"

const Projects = () => {

  return (
    <div className=' xl:ml-80 h-screen  w-full '>

      <div className='flex flex-col w-full pt-20 p-4 sm:p-28 sm:pt-20
      '>
        <h1 className='text-5xl '>Projects</h1>

        <div className='flex flex-row flex-wrap justify-between relative z-10'>

          <section key="1" className="w-full xl:w-3/6 my-4 p-4 ">
            <div>
              <img src={prayers} className=" object-cover
              w-full " />
              <h1 className='text-3xl font-semibold mt-2'>Prayers MX api</h1>
              <p>
                API for a local enterprise to manage sales, the API is developed in <b>Ruby on Rails</b> with <b>TDD architecture.</b>
              </p>
              <ul className="list-disc">
                <li>Implemented automated testing with RSpec to ensure code quality, prevent regressions, and increase application confidence.</li>
                <li>Implemented user authentication and authorization using Devise, a flexible and secure authentication solution for Ruby on Rails applications.</li>
                <li>Utilized AWS RDS for database management, taking advantage of its automatic backups, high availability, and scalability.</li>
              </ul>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5'>
                <a href='https://github.com/luisMartinez011/prayersMX_rds'
                  target={"_blank"}>Source code</a>
              </button>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5 ml-5'>
                <a href='https://secure-lowlands-54066.herokuapp.com/api-docs/index.html'
                  target={"_blank"}>Web Page</a>
              </button>
            </div>
          </section>

          <section key="5" className=" w-full xl:w-3/6 my-4 p-4">
            <div>
              <img src={dollartracking}
                className="object-cover
                w-full h-3/5" />
            </div>
            <div>
              <h1 className='text-3xl font-semibold mt-2'>Dollar currency tracking</h1>
              <p>
                Developed a solution to track the dollar currency exchange
                rate using Python, a versatile programming language known for its
                simplicity and ease of use.
              </p>
              <ul className="list-disc">
                <li>
                  Leveraged AWS Lambda to create serverless functions that execute code in response to events, reducing infrastructure complexity and costs.
                </li>
                <li>
                  Utilized AWS SNS to send me notifications via email
                </li>
                <li>
                  Utilized AWS Step Functions to coordinate the execution of serverless functions and AWS Lambda, creating a workflow that automated the currency tracking process and provided greater reliability and scalability.
                </li>
                <li>
                  Used AWS CloudFormation to manage infrastructure as code, defining the resources and configurations needed for the application in a single, declarative template.

                </li>
              </ul>
            </div>
            <button
              className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5'>
              <a href='https://github.com/luisMartinez011/bot-dollar-currency'
                target={"_blank"}>Source code</a>
            </button>
          </section>

          <section key="2" className="w-full xl:w-3/6 my-4 p-4 ">
            <div>
              <img src={prayersFrontend} className=" object-cover
              w-full " />
              <h1 className='text-3xl font-semibold mt-2'>Prayers MX Webpage</h1>
              <p>
                Webpage for a local enterprise to manage sales, it uses the api from the previous project
              </p>
              <ul className="list-disc">
                <li><b>Bootstrap React & Tailwind CSS</b> framework were used to style the webpage</li>
                <li>
                  <b>Typescript</b> is used to have a better clean code
                </li>
                <li>
                  Webpage deployed in Github pages
                </li>
              </ul>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5'>
                <a href='https://github.com/luisMartinez011/PrayersWebpage'
                  target={"_blank"}>Source code</a>
              </button>
              <button
                className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5 ml-5'>
                <a href='https://luismartinez011.github.io/PrayersWebpage/#/home'
                  target={"_blank"}>Web Page</a>
              </button>
            </div>
          </section>

          <section key="3" className="w-full xl:w-3/6 my-4 p-4 ">
            <div>
              <img src={image} className=" object-cover
              w-full " />
              <h1 className='text-3xl font-semibold mt-2'>C# .NET project </h1>
              <p>
                Web app built with <b>Angular</b> and Typescript.
                <b> C# .NET Entity Framework</b> and <b>PostgreSQL</b> were used for backend
                following <b>MVC</b> architecture.
                <b> Swagger Api</b> is used for documentation.
                This webpage is deployed in <b>Heroku.</b>
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
                <a href='https://csharp-backend.herokuapp.com/swagger/index.html'
                  target={"_blank"}>Web Page</a>
              </button>
            </div>
          </section>

          <section key="4" className=" w-full xl:w-3/6 my-4 p-4">
            <div>
              <img src={nest}
                className="object-cover
                w-full h-3/5" />
            </div>
            <div>
              <h1 className='text-3xl font-semibold mt-2'>NestJS e-commerce Api</h1>
              <p>
                E-commerce Api built with <b>NestJS</b>, a backend <b>JavaScript </b>
                framework based in <b>ExpressJS</b> and <b>NodeJS</b> using MongoDB
                as database.
                <b> Swagger</b> is used for documentation and it
                was deployed using Heroku
              </p>
            </div>
            <button
              className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5'>
              <a href='https://github.com/luisMartinez011/nestjs-api'
                target={"_blank"}>Source code</a>
            </button>
            {/* <button
              className='bg-transparent hover:bg-indigo-500 text-white-700
            font-semibold hover:text-white py-2 px-4 border border-indigo-500
            hover:border-transparent rounded w-36 h-16 mt-5 ml-5'>
              <a href='https://luismartinez011-nestjs.herokuapp.com/docs/'
                target={"_blank"}>Documentation</a>
            </button> */}
          </section>

        </div>
      </div>
    </div>

  )
}

export default Projects
