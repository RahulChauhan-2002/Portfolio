
import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Project from './components/project/Project'
import Resume from './components/Resume/Resume'

function App() {

  return (
    <div className='w-full h-auto bg-[#212428] text-[#c4cfde] px-6'>
      <Navbar/>
      <div className='max-w-screen-xl mx-auto'>
       
       <Banner/>
       <Features/>
       <Project/>
       <Resume/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
