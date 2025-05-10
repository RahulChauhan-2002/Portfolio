import React from 'react'

const Card = ({title,des,icon}) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg flex items-center bg-gradient-to-r from-[#212428] to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e]'>
        <div className='h-85 py-6 overflow-y-hidden'>
            <div className='flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-750'>
            <div className='w-10 h-8 flex flex-col justify-between rounded-lg '>
                {icon ? (
                    <span className='text-5xl text-[#ff014f]'>{icon}</span>
                ) : (
                    <>
                    <span className='w-full h-[2px] rounded-lg bg-[#ff014f] inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-[#ff014f] inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-[#ff014f] inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-[#ff014f] inline-flex'></span>
                    </>
                )}
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-300">{title}</h2>
                    <p className='text-base'>{des}</p>
                    <span className='text-xl text-[#ff014f]'><button className='cursor-pointer'>Read more</button></span>
                </div>
        </div>
        </div>
      

    </div>
  )
}

export default Card