import { BrowserRouter } from "react-router-dom"
import { About, Experience, Contact, Feedbacks, Hero, Navbar, StarsCanvas, Works, Tech } from './components'
import Footer from "./components/footer"

const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-primary z-0 relative">
        <div className="bg-hero-parttern bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
