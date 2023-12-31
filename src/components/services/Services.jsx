import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1
        }
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="text-container" variants={variants}>
                <p>
                    I foucs on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="title-container" variants={variants}>
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="list-container" variants={variants}>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h1>Branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid dolorum soluta porro amet. Facilis incidunt maxime nam sint quibusdam.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h1>Branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid dolorum soluta porro amet. Facilis incidunt maxime nam sint quibusdam.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h1>Branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid dolorum soluta porro amet. Facilis incidunt maxime nam sint quibusdam.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h1>Branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid dolorum soluta porro amet. Facilis incidunt maxime nam sint quibusdam.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services