import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import dog from '../assets/profile/doge.webp'
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
      
      <a
      className='mx-auto w-fit hidden rounded-full bg-gradient-to-r from-[#31bdc6] to-[#3178c6] p-[1px] brightness-90 contrast-150 focus:outline-none focus:ring-blue-600 focus-visible:ring-2 dark:brightness-125 dark:contrast-100 sm:block'
      href="">
        <div
        className='group relative overflow-hidden rounded-full bg-white/80 px-3 py-1 duration-300 hover:pr-9 dark:bg-black/80'
        >
          <span
          className='select-none bg-gradient-to-r from-[#31bdc6] to-[#3178c6] bg-clip-text text-transparent'
          >
            <svg class="mr-1 inline-block h-4 w-4 fill-[#31bdc6]" viewBox="4 4 48 48" xmlns="http://www.w3.org/2000/svg"><path d="m19.2 36.4-4.75-10.45L4 21.2l10.45-4.75L19.2 6l4.75 10.45L34.4 21.2l-10.45 4.75ZM36.4 42l-2.35-5.25-5.25-2.35 5.25-2.4 2.35-5.2 2.4 5.2 5.2 2.4-5.2 2.35Z"></path></svg>
            see my projects
            <img
            className='absolute top-8 -right-2 w-8 h-8 rounded-full bg-white/80 duration-300  group-hover:top-2 group-hover:right-0 dark:bg-black/80'
            src={dog}
             alt="" srcset="" />
          </span>
        </div>
      </a>
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