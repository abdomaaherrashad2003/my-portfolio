import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import "./App.css"

function App() {
  return (
  <>
   <Home/>
   <Nav />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
  </>
  )
}

export default App;
