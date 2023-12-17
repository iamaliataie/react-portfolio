import "./navbar.scss"
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
      <div className="navbar">
          <div className="wrapper">
              <motion.span 
              initial={{opacity: 0, scale: 0.5}} 
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}} >
                Ali Dev
              </motion.span>
              <div className="social">
                  <a href="#"><img src="" alt="" /></a>
              </div>
          </div>
    </div>
  )
}

export default Navbar