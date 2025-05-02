import React from 'react'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div className='w-full flex gap-20'>
            <div>
                <div className='py-12'>
                    <p className='text-sm text-[#ff014f] tracking-[4px]'>2016 - 2025</p>
                    <h2 className='text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[rgba(0,0,0,0.3)] flex flex-col gap-10'>
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>

            <div>
                <div className='py-12'>
                    <p className='text-sm text-[#ff014f] tracking-[4px]'>2016 - 2025</p>
                    <h2 className='text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[rgba(0,0,0,0.3)] flex flex-col gap-10'>
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>
        </div>
  )
}

export default Education