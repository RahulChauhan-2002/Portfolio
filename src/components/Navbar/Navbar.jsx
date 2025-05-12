import {logo} from '../../assets/index'
import {navLinksdata} from '../../constants/index'
import {Link} from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react'

const BannerIcon = ({ children, className, ...props }) => {
    const baseClasses =
        'w-16 h-16 bg-black/30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-[#ff014f] cursor-pointer duration-300';
    return (
        <span className={`${baseClasses} ${className}`} {...props}>
            {children}
        </span>
    );
};

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className='w-full h-24 mx-auto sticky top-0 z-50 bg-[#212428] flex justify-between items-center border-b-[1px] border-b-gray-600'>
        <div className="h-[80px] w-[139px] flex items-center justify-center pl-3">
          <span className="text-2xl text-[#ff014f] font-extrabold uppercase tracking-wider">Portfolio</span>
        </div>
        <div>
            <ul className='hidden md:inline-flex items-center gap-6 md:gap-10 pr-10'>
                {navLinksdata.map(({_id, title, link})=>(
                    <li  
                      key={_id}
                      className='text-base font-bold text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300'  
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
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ff014f] cursor-pointer"
            >
              <FiMenu />
            </span>
            {showMenu && (
              <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                <div className="flex flex-col gap-8 py-2 relative">
                  <div>
                    <div className="h-[80px] w-[139px] flex items-center justify-center pl-3">
                      <span className="text-2xl text-[#ff014f] font-extrabold uppercase tracking-wider">Portfolio</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      I am a curious learner who loves coding, solving challenges, and building things from scratch. With strong DSA skills and a passion for full-stack development, I'm excited to grow fast, collaborate well, and build impactful digital products.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300"
                      >
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base uppercase font-titleFont mb-4">
                      Connect with me on
                    </h2>
                    <div className='flex gap-4'>
                      <BannerIcon>
                        <a 
                          href="https://github.com/RahulChauhan-2002" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </BannerIcon>
                      <BannerIcon>
                        <a 
                          href="https://www.linkedin.com/in/rahul2025/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      </BannerIcon>
                      <BannerIcon>
                        <a 
                          href="https://x.com/ChauhanRahul47" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </BannerIcon>
                    </div>
                  </div>
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#ff014f] duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar