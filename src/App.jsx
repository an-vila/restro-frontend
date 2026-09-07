import About from "./components/About"
import BookingProcess from "./components/BookingProcess"
import Dishes from "./components/Dishes"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from  "./components/Navbar"
import Stats from "./components/Stats"
import TestimonialSection from "./components/TestimonialSection"
import Timing from "./components/Timing"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSection />
    </>
  )
}

export default App
