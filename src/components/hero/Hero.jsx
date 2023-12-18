import './hero.scss'
const Hero = () => {
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
      <div className="image-container">
        <img src="./hero.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero