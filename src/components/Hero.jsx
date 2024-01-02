import { AnimatePresence, motion } from "framer-motion";
import { StarIcon } from "./Icons";

const AboveTheFoldAnimations = {
  
  show:{
    opacity:1,
    y:0
  },
  hidden:{
    opacity:0,
    y:100
  }
}



function AboveTheFold() {

  return (
    <>
      <section id="top" className="relative z-30 px-0 text-center" style={{WebkitMaskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)'}}>
        <div className={`absolute -z-[1]  inset-0 bg-cover bg-[url('./assets/abovethefold/AboveTheFoldBackground.png')]`}>
          <div className="w-full h-full bg-repeat bg-[url('./assets/decorationBlockLight.svg')] dark:bg-[url('./assets/decorationBlockDark.svg')]" style={{WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)'}}></div>
        </div>
        <motion.div
          transition={{
            delay:0.5,
            duration:0.8,
            type:'Tween'
          }}
          variants={AboveTheFoldAnimations}
          initial={'hidden'}
          animate={'show'}
          className="pt-40 r sm:pt-60 mx-auto inline-block font-Inter font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-700 dark:from-slate-50 dark:to-slate-200 leading-tight text-4xl sm:leading-tight sm:text-5xl lg:leading-tight lg:text-6xl">
          Reda.<br/>
          Ezziani.
        </motion.div>
        <motion.div
          transition={{
            delay:0.8,
            duration:0.8,
            type:'Tween'
          }}
          variants={AboveTheFoldAnimations}
          initial={'hidden'}
          animate={'show'}
          className="px-4 text-center mt-6 max-w-[30rem] mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
          <div className="text-primary-500 dark:text-primary-400 inline-block"></div>🚀 Full Stack Dev | React, Node.js, PHP | 2+ years exp | Crafting digital experiences that shine! 💡
        </motion.div>
        <motion.div
          transition={{
            delay:1,
            duration:0.8,
            type:'Tween'
          }}
          variants={AboveTheFoldAnimations}
          initial={'hidden'}
          animate={'show'}
          className="mt-10 flex z-50 pb-16 justify-center mx-4">
          <motion.a
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="klausdev@gmail.com" className="flex w-fit px-5   py-2 text-base justify-center items-center drop-shadow-sm bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary-400 text-slate-50 rounded transition duration-500">
              <StarIcon className="w-4 h-auto text-yellow-300"/>
            <div className="ml-3 sm:ml-2 dark:text-white white space-nowrap">send message</div>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default AboveTheFold;