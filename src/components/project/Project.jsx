import React from 'react'
import Title from '../Layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne, projectTwo, projectThree} from '../../assets/index'

const Project = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title
            title="VISIT MY PORTFOLIO AND YOUR FEEDBACK"
            des="My Project"
            />
        </div>

        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectTwo}
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectThree}
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
        </div>

    </section>
  )
}

export default Project