import './services.scss'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="text-container">
            <p>
                  I foucs on helping your brand grow
                  <br/> and move forward
            </p>
        </motion.div>
        <motion.div className="title-container"></motion.div>
        <motion.div className="list-container"></motion.div>
    </motion.div>
  )
}

export default Services