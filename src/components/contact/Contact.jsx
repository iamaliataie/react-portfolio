import './contact.scss'

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
      <div className='contact'>
          <div className="text-container">
              <h1>Let's work together</h1>
              <div className="item">
                  <h2>Mail</h2>
                  <span>hello@react.com</span>
              </div>
              <div className="item">
                  <h2>Address</h2>
                  <span>Hello Street, Kabul</span>
              </div>
              <div className="item">
                  <h2>Phone</h2>
                  <span>+93 777 101010</span>
              </div>
          </div>
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