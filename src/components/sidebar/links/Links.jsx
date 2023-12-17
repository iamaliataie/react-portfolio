import {motion} from 'framer-motion'
motion
const Links = () => {

  const variants = {
    open: {
      transition:{
        staggerChildren: 0.1
      }
    },
    closed: {
      transition:{
        staggerChildren: 0.05,
        staggerDirection:-1
      }
    },
  }

  const ItemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  }

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ]

  return (
    <motion.div className="links" variants={variants}>{items.map(item=>(
      <motion.a variants={ItemVariants} href={`#${item}`} key={item} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
    ))}</motion.div>
  )
}

export default Links