import React from 'react'
import {logo} from '../assets/index'
import {navLinksdata} from '../constants/index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-24 mx-auto sticky top-0 z-50 bg-[#212428] flex justify-between items-center border-b-[1px] border-b-gray-600'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {navLinksdata.map(({_id, title, link})=>(
                    <li  
                      key={_id}
                      className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300'  
                    >
                    <NavLink to={link}>
                        {title}
                    </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar