import './hero.scss'
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
    }
  }

  return (
    <div className='hero'>
      <div className="wrapper">
        <div className="text-container">
          <h2>HARVEY TYLER</h2>
          <h1>Web Developer and UI Designer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact Me</button>
          </div>
          <img src="./scroll.png" alt="" />
        </div>
      </div>
      <div className="sliding-text-container">
        Writer Content Creator Influencer
      </div>
      <div className="image-container">
        <img src="./hero.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero