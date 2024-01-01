import { useRef } from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

const works = [
    {
        id: 1,
        title: 'React Commerce',
        img: 'https://images.unsplash.com/photo-1703934810573-a24c0db7d7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate, veniam similique ipsa dicta aut aliquid esse animi porro laboriosam. Beatae cumque nisi, aliquid ducimus impedit sunt temporibus sequi itaque?'
    },
    {
        id: 2,
        title: 'Next.js Blog',
        img: 'https://images.unsplash.com/photo-1703994643629-6d0d56ee7a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate, veniam similique ipsa dicta aut aliquid esse animi porro laboriosam. Beatae cumque nisi, aliquid ducimus impedit sunt temporibus sequi itaque?'
    },
    {
        id: 3,
        title: 'Vanilla js app',
        img: 'https://images.unsplash.com/photo-1703994643972-22956416b857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate, veniam similique ipsa dicta aut aliquid esse animi porro laboriosam. Beatae cumque nisi, aliquid ducimus impedit sunt temporibus sequi itaque?'
    },
    {
        id: 4,
        title: 'Music app',
        img: 'https://images.unsplash.com/photo-1703880258785-45bc4492a912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate, veniam similique ipsa dicta aut aliquid esse animi porro laboriosam. Beatae cumque nisi, aliquid ducimus impedit sunt temporibus sequi itaque?'
    },
]

const Single = ({item}) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({target: ref, offset: ["end end", "start start"]})
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section ref={ref}>
            <div className="container">
                <img src={item.img} alt="" />
                <div className="text-container" style={{y:y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
        </div>
        {works.map(item =>  <Single item={item} key={item.id} />)}
    </div>
  )
}

export default Portfolio