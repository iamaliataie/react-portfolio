import './sidebar.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

const Sidebar = () => {

  const [open, setOpen] =  useState(false)

  const variants = {
    open,
    closed
  }

  return (
    <motion.div className="sidebar" animate={open ? "open": "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar