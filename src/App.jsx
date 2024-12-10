import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"

function App() {

    const navbarLinks = [
      { href: "#home", label: "Home" },
      { href: "#projects", label: "Projects" },
      { href: "#xp", label: "Experience" }
    ];
  return (
   <>
    <Navbar links={navbarLinks} logoHref="#home"/>
   <Hero/>
   <About/>
   <Projects />
   <Experience/>

   <Footer/>
   </>
  )
}

export default App
