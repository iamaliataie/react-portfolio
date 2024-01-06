import './contact.scss'
import { motion } from 'framer-motion'


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .1
        }
    }
 }

const Contact = () => {
  return (
      <motion.div className='contact'>
          <motion.div className="text-container">
              <motion.h1>Let's work together</motion.h1>
              <motion.div className="item">
                  <h2>Mail</h2>
                  <span>hello@react.com</span>
              </motion.div>
              <motion.div className="item">
                  <h2>Address</h2>
                  <span>Hello Street, Kabul</span>
              </motion.div>
              <motion.div className="item">
                  <h2>Phone</h2>
                  <span>+93 777 101010</span>
              </motion.div>
          </motion.div>
          <div className="form-container">
              <form>
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                  <textarea rows={8} placeholder='Message' />
                  <button type="submit">Submit</button>
              </form>
          </div>
    </div>
  )
}

export default Contact