import './hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {

  const textVariants = {
    initial: {
      x: -50,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }

  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="text-container" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and UI Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="sliding-text-container">
        Writer Content Creator Influencer
      </motion.div>
      <div className="image-container">
        <img src="./hero.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero