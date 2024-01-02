import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
const Projects = () => {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const data = useSelector((state) => state.data)
  const getProjedct = async () => {
    const project = await data.find((project) => project.id == id)
    setProject(project)
    console.log(project)
  }

  useEffect(() => {
    getProjedct()
  }, [id])


  return (
    <section
      id="project"
      className="relative w-full  mt-32 sm:mt-0 px-4 z-10 pt-8 pb-8 overflow-hidden"
    >
      <div
        className=" max-w-6xl  mx-auto mt-0 mb-8   flex justify-start items-center flex-col   gap-4 h-auto sm:h-[37.5rem]"
      >
        <div className="flex w-full mt-10 justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-gray-800 dark:text-slate-50 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </div>
        <div className="w-full mt-16 flex justify-start items-start">

          <div className="flex w-1/2 flex-col gap-4 justify-start items start px-2">
              <motion.h1
                className='text-3xl font-bold text-gray-800 dark:text-slate-50'
              
              >
                {project.title}
              </motion.h1>
            <div className="flex gap-2">
              {
                project.stack && project.stack.map((stack, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-center"
                  >
                    <img
                      className="w-6 h-6"
                      src={stack} alt={project.title} />
                  </div>
                ))
              }
            </div>
            <p className="text-gray-500 dark:text-slate-100/60 text-sm  line-clamp-6">{project.full_desc}</p>
            <div className="flex gap-4">

            {
              project.hasdemo && (
                <a href={project.live} target='_blank' rel="noreferrer">
              <button
                className='text-sm mt-5 hover: transition-all ease-in duration-500  p-3 rounded-lg bg-black dark:bg-sky-500 text-white'
              >
                Live Demo
              </button>
            </a>
              )
            }
            <a href={project.github} target='_blank' rel="noreferrer">
              <button
                className='text-sm mt-5 hover: transition-all ease-in duration-500  p-3 rounded-lg bg-black dark:bg-sky-500 text-white'
              >
                Github
              </button>
            </a>
            </div>

          </div>
          <motion.img            
            className='w-1/2  rounded-lg  aspect-auto object-cover border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm '
            src={project.image}
            alt={project.title}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects