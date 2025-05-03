import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className='w-full flex gap-20'>
            <div>
                <div className='py-12 flex flex-col gap-4'>
                    <p className='text-sm text-[#ff014f] tracking-[4px]'>2016 - 2025</p>
                    <h2 className='text-4xl font-bold'>Education</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[rgba(0,0,0,0.3)] flex flex-col gap-10'>
                    <ResumeCard
                    title="Bachelor of Technology (B.Tech) in Computer Science"
                    subTitle="ABES Engineering College ( AKTU ) (2021 - 2025)"
                    result="CGPA: 7.5"
                    des="Pursuing a four-year undergraduate degree in Computer Science and Engineering, aligned with ISCED Level 6. The program covers core subjects like programming, data structures, algorithms, and databases, with hands-on exposure to technologies such as AI, Machine Learning, Cloud Computing, and Web Development, preparing for roles in software development and emerging tech domains. "
                    />
                    <ResumeCard
                    title="Higher Secondary Education (Science - Mathematics Stream)"
                    subTitle="B.R.D Inter College (2018 - 2019)"
                    result="Percentage: 71"
                    des="Completed higher secondary education with a focus on the Science stream, specializing in Physics, Chemistry, and Mathematics. This phase, aligned with Level 3 of the International Standard Classification of Education (ISCED), provided a strong academic foundation for pursuing higher education in engineering and technology."
                    />
                    <ResumeCard
                    title="High School Education (General Secondary Education)"
                    subTitle="DR. R.M.L High School (2016 - 2017)"
                    result="Percentage: 70.33"
                    des="Completed secondary education with a well-rounded curriculum aligned with Level 2 of the International Standard Classification of Education (ISCED). This phase laid the academic groundwork essential for advanced studies in the science and technology stream."
                    />
                </div>
            </div>
    </motion.div>
  )
}

export default Education