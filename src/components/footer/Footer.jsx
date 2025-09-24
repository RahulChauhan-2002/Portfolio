import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {logo} from "../../assets/index"
import FooterBottom from './FooterBottom';

const BannerIcon = ({ children, className, ...props }) => {
    const baseClasses =
        'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/30 text-gray-200 text-lg sm:text-xl inline-flex items-center justify-center rounded-md hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-[#ff014f] cursor-pointer duration-300';
    return (
        <span className={`${baseClasses} ${className}`} {...props}>
            {children}
        </span>
    );
};

const Footer = () => {
  return (
    <div>
        <div className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 h-auto border-b-[1px] border-b-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="w-full h-full flex flex-col gap-6 sm:gap-8">
                <div className="h-[60px] sm:h-[70px] md:h-[80px] w-auto flex items-center justify-center sm:justify-start">
                    <span className="text-xl sm:text-2xl text-[#ff014f] font-extrabold uppercase tracking-wider">Portfolio</span>
                </div>
                <div className='flex gap-3 sm:gap-4 justify-center sm:justify-start'>
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
            <div className="w-full h-full">
                <h3 className="text-lg sm:text-xl uppercase text-[#ff014f] tracking-wider text-center sm:text-left">
                Quick Link
                </h3>
                <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium py-4 sm:py-6 overflow-hidden items-center sm:items-start">
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    About
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Portfolio
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Services
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Blog
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Contact
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-lg sm:text-xl uppercase text-[#ff014f] tracking-wider text-center sm:text-left">
                RESOURCES
                </h3>
                <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium py-4 sm:py-6 overflow-hidden items-center sm:items-start">
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Authentication
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    System Status
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Terms of Service
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Pricing
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Over Right
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-lg sm:text-xl uppercase text-[#ff014f] tracking-wider text-center sm:text-left">
                DEVELOPERS
                </h3>
                <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium overflow-hidden py-4 sm:py-6 items-center sm:items-start">
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Documentation
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Authentication
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    API Reference
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Support
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="text-base sm:text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer block">
                    Open Source
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                </ul>
            </div>
        </div>
        <FooterBottom/>
    </div>    
  );
}

export default Footer