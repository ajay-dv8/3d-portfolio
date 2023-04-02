import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from '../constants/index'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, icon, title}) => {
  return (
    <Tilt className='xs:w-[15.625rem] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[1.25rem] shadow-card'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[1.25rem] py-5 px-12 min-h-[17.5rem] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-[1.1rem] text-white font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[1rem] text-secondary max-w-3xl leading-[1.875rem]'>
      I am a web developer with a passion for creating your innovative and user-friendly webs and mobile apps. With years of experience in the field, I specialize in crafting responsive, accessible, and secure web solutions that meet the needs of your businesses and individuals alike.
      </motion.p> 

      <div className="flex gap-10 flex-wrap mt-20">
        {services.map((service, index) => ( 
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")