import About from "./components/About"
import Dishes from "./components/Dishes"
import Hero from "./components/Hero"
import Navbar from  "./components/Navbar"
import Stats from "./components/Stats"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Dishes />
    </>
  )
}

export default App
