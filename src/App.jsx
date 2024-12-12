import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"

{/*let cursor= document.querySelector('.cursor')
let cursor2= document.querySelector('.cursor2')

document.addEventListener("mousemove", function(e){
    cursor.style.cssText =  cursor2.style.cssText = "left: "+ e.clientX + "px; top: "+ e.clientY + "px;";
})*/}



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
   <div className="cursor"></div>
   <div className="cursor2"></div>
   
   </>
  )
}

export default App
