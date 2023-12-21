import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/navbar"
import Parallax from "./components/parallax/Parallax"

const App = () => {
  return (
    <div>
      <section id="Homepage">
         <Navbar/>
         <Hero/>
      </section>
      <section>Parallax</section>
      <section id="Services">
        <Parallax type="services" />
        <Parallax type="services" />
      </section>
      <section>Parallax</section>
      <section id="Portfolio">Portfolio</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
