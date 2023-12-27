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
          <motion.div className="title-container">
              <div className="title">
                  <img src="/people.webp" alt="" />
                  <h1>
                      <b>Unique</b> Ideas
                  </h1>
              </div>
              <div className="title">
                  <h1>
                      <b>For Your</b> Business.
                  </h1>
                  <button>WHAT WE DO?</button>
              </div>
        </motion.div>
          <motion.div className="list-container">
              <div className="box">
                  <h1>Branding</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid dolorum soluta porro amet. Facilis incidunt maxime nam sint quibusdam.</p>
                  <button>Go</button>
              </div>
        </motion.div>
    </motion.div>
  )
}

export default Services