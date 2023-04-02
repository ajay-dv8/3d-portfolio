import { styles } from '../styles'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative top-[-1rem] w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[7.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='relative -top-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi i'm <span className='text-[#915eff]'>Ajay</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Dedicated to Designing and <br className='sm:block hidden'/> developing your mobile and web apps
          </p>
        </div>

      </div>

      <div className="mt-10 w-full h-full">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="rounded-3xl .w-[2.2rem] h-[4rem] border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary"
              />
          </div>

        </a>
      </div>
    </section>
  )
}
 
export default Hero
