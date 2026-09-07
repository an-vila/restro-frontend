import About from "./sections/About"
import BookingProcess from "./sections/BookingProcess"
import CTA from "./sections/CTA"
import Dishes from "./sections/Dishes"
import FAQs from "./sections/FAQs"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Navbar from  "./components/Navbar"
import Stats from "./sections/Stats"
import TestimonialSection from "./sections/TestimonialSection"
import Timing from "./sections/Timing"
import Footer from "./components/Footer"

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
      <FAQs />
      <CTA />
      <Footer />
    </>
  )
}

export default App
