
import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/contact/Contact'
import Features from './components/Features/Features'
import Navbar from './components/Navbar/Navbar'
import Project from './components/project/Project'
import Resume from './components/Resume/Resume'

function App() {

  return (
    <div className='w-full h-auto bg-[#212428] text-[#c4cfde]'>
      <div className='max-w-screen-2xl mx-auto px-16'>
       <Navbar/>
       <Banner/>
       <Features/>
       <Project/>
       <Resume/>
       <Contact/>
      </div>
    </div>
  )
}

export default App
