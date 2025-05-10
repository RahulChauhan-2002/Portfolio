import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({title,des,src}) => {
  return (
    <div className='w-full xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col bg-gradient-to-r from-[#212428] to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000  [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e]'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img 
              src={src} 
              alt=""
              className='group-hover:scale-110 duration-300 cursor-p' 

            />
        </div>
        <div className='w-full mt-5 flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-base uppercase text-[#ff014f]'>{title}</h3>
              <div className='flex gap-2'>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ff014f] duration-300 cursor-pointer'>
                    <BsGithub/>
                </span>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ff014f] duration-300 cursor-pointer'>
                    <FaGlobe/>
                </span>
              </div>
            </div>
            <div>
                <p className='text-base tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectCard