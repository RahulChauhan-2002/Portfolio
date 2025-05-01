
import './App.css'
import Banner from './components/Banner'
import Features from './components/Features/Features'
import Navbar from './components/Navbar'
import Project from './components/project/Project'

function App() {

  return (
    <div className='w-full h-auto bg-[#212428] text-[#c4cfde]'>
      <div className='max-w-screen-2xl mx-auto px-16'>
       <Navbar/>
       <Banner/>
       <Features/>
       <Project/>
      </div>
    </div>
  )
}

export default App
