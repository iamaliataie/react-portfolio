import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/navbar"
import Parallax from "./components/parallax/Parallax"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div>
      <section id="Homepage">
         <Navbar/>
         <Hero/>
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
