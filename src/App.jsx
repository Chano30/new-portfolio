import "./app.scss"
import { Test } from "./components/Test"
import { Hero } from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </>
  )
}

export default App
