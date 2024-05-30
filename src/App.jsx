import "./app.scss"
import { Test } from "./components/Test"
import { Navbar } from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <section>
        <Test />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </>
  )
}

export default App
