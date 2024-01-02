import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Animation from '../components/animation/Animations.jsx'

function NotFound() {
  const animationsButton = {
    show:{
      opacity:1,
      scale:1
    },
    hidden:{
      opacity:0,
      scale:0.5
    }
  }
  const animationsText = {
    show:{
      opacity:1,
      y:0
    },
    hidden:{
      opacity:0,
      y:100
    }
  }
  const id1 = 'spider'
  const id2 = 'spider2'

  return (
    <div className='flex flex-col overflow-x-hidden items-center justify-center h-screen'>
        <div className="absolute -z-[1] inset-0 bg-cover bg-[url('./assets/abovethefold/AboveTheFoldBackground.png')]">
          <div className="w-full h-full bg-repeat bg-[url('./assets/decorationBlockLight.svg')] dark:bg-[url('./assets/decorationBlockDark.svg')]" style={{WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)'}}></div>
        </div>
        <div 
        className='absolute  -z-[1] w-full flex justify-end  top-0 -right-24 inset-0 bg-cover '
        >
          <Animation props={id1} />
        </div>
        <div 
        className='absolute  -z-[1] w-full flex  h-screen items-end  bottom-0 -left-24 inset-0 bg-cover '
        >
          <Animation id={id2}
          className='transform rotate-180'
          />
        </div>
        <motion.h1
        variants={animationsText}
        initial={'hidden'}
        animate={'show'}
        transition={{ duration:.3, type:'spring', stiffness:100}}
        className=' text-7xl md:text-9xl text-slate-900  font-bold'>404</motion.h1>
        <motion.h2
        variants={animationsText}
        initial={'hidden'}
        animate={'show'}
        transition={{ duration:.3, type:'spring', stiffness:100}}
        className=' text-lg md:text-2xl text-slate-800 dark:text-slate-900 font-bold'>Page Not Found</motion.h2>
        <motion.p
        variants={animationsText}
        initial={'hidden'}
        animate={'show'}
        transition={{ duration:.3, type:'spring', stiffness:100}}
        className=' text-lg md:text-2xl text-slate-900 font-bold'>Sorry, this page does not exist</motion.p>
        <motion.button
        className='mt-7'
        variants={animationsButton}
        initial={'hidden'}
        animate={'show'}
        transition={{  delay:.2,duration:.3, type:'spring', stiffness:100}}
        >
        <Link className='text-sm hover: transition-all ease-in duration-500  p-3 rounded-lg bg-black text-white' to='/'>Go Back Home</Link>
        </motion.button>
    </div>
  )
}

export default NotFound