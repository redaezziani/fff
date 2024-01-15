import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Animation from './animation/Animations.jsx'

import { StarIcon } from './Icons'
import '../App.css'
const Projects = () => {
  const data = useSelector((state) => state.data)
  
  return (
    <section
      id="projects"
      className="relative w-full  mt-32 sm:mt-0 px-4 z-10 pt-8 pb-8 overflow-hidden"
    >
      
      <div className="w-full max-w-6xl  mx-auto flex gap-2 justify-center items-center ">
        <div className="rounded-full bg-yellow-200/50 border border-yellow-400/50 text-yellow-300 px-4 text-sm flex justify-start items-center gap-2  overflow-hidden before:absolute before:z-0   before:h-24 before:w-16 before:blur-lg before:animate-anime before:bg-[#fde90b3a] before:transform before:rotate-45   relative  py-0.5  backdrop-blur-xl">
        <StarIcon className="w-4 h-auto text-yellow-300"/>
        <p
        className=' text-sm '
        >
          
          check some of my projects 
        </p>
        </div>
      </div>
      <div
        className=" max-w-6xl  mx-auto mt-0 mb-8 sm:mt-32  grid grid-cols-1 sm:grid-cols-3  gap-4 h-auto sm:h-[37.5rem]"
      >
        <AnimatePresence>
          {
            data.map((project) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className=" w-full  col-span-1 overflow-hidden flex flex-col justify-start items-center gap-4 "
              >

                  <img
                    className='w-full bg-slate-300  rounded-lg h-56 aspect-auto object-cover border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm transition duration-500'
                    src={''}
                  />
                <div className="flex w-full flex-col gap-2 justify-start items-start">
                  <h1 className="text-lg w-full truncate font-medium text-gray-700 dark:text-slate-50 ">{project.title}</h1>
                  <p className="text-gray-300 transition-all ease-in-out duration-300 hover:text-slate-400 dark:text-slate-100/60 text-sm line-clamp-2">{project.description}</p>
                  <Link 
                  to={`/projects/${project.id}`}
                  >
                  <button
                    className='text-sm w-full mt-6 hover: transition-all ease-in duration-500 px-4 py-2.5 rounded-md bg-primary dark:bg-primary text-white'
                  >
                    Learn More
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))
          }
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects