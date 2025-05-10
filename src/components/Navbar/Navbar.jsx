import {logo} from '../../assets/index'
import {navLinksdata} from '../../constants/index'
import {Link} from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import React, { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
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
                    <Link 
                      activeClass='active'
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar