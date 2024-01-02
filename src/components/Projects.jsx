import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
const Projects = () => {
  const data = useSelector((state) => state.data)
  
  return (
    <section
      id="projects"
      className="relative w-full  mt-32 sm:mt-0 px-4 z-10 pt-8 pb-8 overflow-hidden"
    >
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
                    className='w-full  rounded-lg max-h-56 aspect-auto object-cover border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm transition duration-500'
                    src={project.image}
                    alt={project.title}
                  />
                <div className="flex w-full flex-col gap-2 justify-start items-start">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-slate-50 ">{project.title}</h1>
                  <div className="flex gap-2">
                    {
                      project.stack.map((stack, index) => (
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

                  <p className="text-gray-500 dark:text-slate-100/60 text-sm line-clamp-2">{project.description}</p>
                  <Link 
                  to={`/projects/${project.id}`}
                  >
                  <button
                    className='text-sm mt-5 hover: transition-all ease-in duration-500  p-3 rounded-lg bg-black dark:bg-sky-500 text-white'
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