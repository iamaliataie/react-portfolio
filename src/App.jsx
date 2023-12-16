import "./app.scss"
import Navbar from "./components/navbar/navbar"

const App = () => {
  return (
    <div>
      <section>
         <Navbar/>
      </section>
      <section className="section">Parallax</section>
      <section className="section">Services</section>
      <section className="section">Parallax</section>
      <section className="section">Portfolio</section>
      <section className="section">Portfolio1</section>
      <section className="section">Portfolio2</section>
      <section className="section">Portfolio3</section>
      <section className="section">Contact</section>
    </div>
  )
}

export default App
