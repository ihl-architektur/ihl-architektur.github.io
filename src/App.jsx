import Nav from "./components/sections/Nav"
import Hero from "./components/sections/Hero"
import Work from "./components/sections/Work"
import Clients from "./components/sections/Clients"
import About from "./components/sections/About"
import Blog from "./components/sections/Blog"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
import ImageSwiper from "./components/sections/Projects"

const App = () => {
  return (
    <>
      <Nav />
      <ImageSwiper/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
