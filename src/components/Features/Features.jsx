import React from 'react'
import Title from '../Layouts/Title'
import Card from './Card'
import { AiFillAppstore } from 'react-icons/ai'
import { FaGlobe, FaMobile } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'

const Features = () => {
  return (
    <section className='w-full py-20  border-b-[1px] border-b-black'
    >
    <Title title="Features" des="What I Do"/>
    <div className='grid grid-cols-3 gap-20'>
      <Card 
        title="Business Stratagy"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
      />
      <Card 
        title="App Development"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<AiFillAppstore/>}
      />
      <Card 
        title="SEO Optimisation"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<SiProgress/>}
      />
      <Card 
        title="Mobile Development"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<FaMobile/>}
      />
      <Card 
        title="UX Design"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<SiAntdesign/>}
      />
      <Card 
        title="Hosting Websites"
        des="Lorem ipsumdolar sit amet consecteture adipisicing elit. Atque solute hic onsequuntur eum repellendus ad."
        icon={<FaGlobe/>}
      />
    </div>
    </section>
  )
}

export default Features