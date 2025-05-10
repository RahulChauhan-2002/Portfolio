import Title from '../Layouts/Title'
import Card from './Card'
// import { AiFillAppstore } from 'react-icons/ai'
import {FaReact, FaGlobe, FaMobile } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'

const Features = () => {
  return (
    <section id='feature' className='w-full py-20  border-b-[1px] border-b-black'
    >
    <Title title="Features" des="What I Do"/>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
      {/* <Card 
        title="Business Stratagy"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
      />
      <Card 
        title="App Development"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<AiFillAppstore/>}
      /> */}
      <Card 
        title="Fullstack Developer"
        des="Creative Fullstack developer crafting sleek, dynamic UIs with modern web tech. Passionate about performance, design, and seamless UX and Backend."
        icon={<SiProgress/>}
      />
      <Card 
        title="React.js Development"
        des="Building fast, interactive UIs with React.js, focusing on components, hooks, and seamless user experiences."
        icon={<FaReact/>}
      />
      <Card 
        title="UX Design"
        des="Crafting thoughtful, user-focused designs that combine aesthetics with seamless functionality to ensure engaging digital experiences."
        icon={<SiAntdesign/>}
      />
      <Card 
        title="Hosting Websites"
        des="Delivering secure, high-performance website hosting solutions with smooth deployment, uptime monitoring, and global accessibility."
        icon={<FaGlobe/>}
      />
    </div>
    </section>
  )
}

export default Features