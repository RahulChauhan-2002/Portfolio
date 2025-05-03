import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className='w-full h-1/3 group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center  bg-[rgba(0,0,0,0.6)]'>
                <span className='w-3 h-3 rounded-full  bg-[#212428] inline-flex group-hover:bg-[#ff014f] duration-300'></span>
            </span>
        </div>
        <div className='w-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.3)] duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
                    <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
                </div>
                <div>
                    <p className='w-35 h-10 text-[#ff014f] bg-[rgba(0,0,0,0.25)] rounded-lg flex justify-center items-center [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e] text-sm font-medium '>{result}</p>
                </div>
            </div>
            <p className='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>{des}</p>
        </div>
    </div>
  )
}

export default ResumeCard