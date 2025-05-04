import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {logo} from "../../assets/index"
import FooterBottom from './FooterBottom';

const BannerIcon = ({ children, className, ...props }) => {
    const baseClasses =
        'w-16 h-16 bg-black/30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-[#ff014f] cursor-pointer duration-300';
    return (
        <span className={`${baseClasses} ${className}`} {...props}>
            {children}
        </span>
    );
};

const Footer = () => {
  return (
    <div>
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
            <div className="w-full h-full flex flex-col gap-8">
                <img className="w-32" src={logo} alt="logo" />
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
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
                Quick Link
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    About
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Portfolio
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Services
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Blog
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Contact
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
                RESOURCES
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Authentication
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    System Status
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Terms of Service
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Pricing
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Over Right
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
                DEVELOPERS
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Documentation
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Authentication
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    API Reference
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    Support
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
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