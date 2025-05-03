import React from 'react'
import { useState } from 'react'
import Title from '../Layouts/Title'
import Education from './Education'
import Skill from './Skill'
import Achievement from './Achievement'


const Resume = () => {

    const [educationData, seteducationData] = useState(true)
    const [skillData, setskillData] = useState(false)
    const [achievementData, setachievementData] = useState(false)
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title
            title="Fresher "
            des="My Resume"
            />
        </div>
        <div>
            <ul className='w-full grid grid-cols-3'>
                <li 
                   className={`${educationData ? "border-[#ff014f] rounded-lg":"border-transparent"} resumeLi `}

                   onClick=
                   {()=>
                     seteducationData(true) &
                     setskillData(false) &
                     setachievementData(false)
                   } 
                >Education</li>
                <li 
                   className={`${skillData ? "border-[#ff014f] rounded-lg":"border-transparent"} resumeLi `}
                   onClick=
                   {()=>
                     seteducationData(false) &
                     setskillData(true) &
                     setachievementData(false)
                   }
                >Professional Skills</li>
                <li 
                   className={`${achievementData ? "border-[#ff014f] rounded-lg":"border-transparent"} resumeLi `}
                   onClick=
                   {()=>
                     seteducationData(false) &
                     setskillData(false) &
                     setachievementData(true)
                   }
                >Achievements</li>
            </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skill />}
        {achievementData && <Achievement />}
    </section>
  )
}

export default Resume 