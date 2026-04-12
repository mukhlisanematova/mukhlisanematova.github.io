import {Hero} from "@/sections/Hero"
import {About} from "@/sections/About"
import {News} from "@/sections/News"
import {Projects} from "@/sections/Projects"
import {CV} from "@/sections/CV"
import { Navbar } from "@/layout/Navbar"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <News />
        {/* <Projects/> */}
        {/*<CV /> */}
      </main>
    </div>
  )
}

export default App;
