import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiFigma, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { bannerImg } from '../assets/index';

// Reusable component for the icon spans
const BannerIcon = ({ children, className, ...props }) => {
    const baseClasses =
        'w-16 h-16 bg-black/30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-[#ff014f] cursor-pointer duration-300';
    return (
        <span className={`${baseClasses} ${className}`} {...props}>
            {children}
        </span>
    );
};

const Banner = () => {
    const [text] = useTypewriter({
        words: ['React Developer', 'Professional Coder', 'Full Stack Developer', 'UI Designer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section className='w-full pb-20 pt-10 flex items-center border-b-[1px] border-b-black'>

            {/* Left Side of Hero section */}
            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm <span className='text-[#ff014f] capitalize'>Rahul Chauhan</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'
                        />
                    </h2>
                    <p className='text-base leading-6 tracking-wide'>
                    I use animation to enhance user experience by making interfaces more intuitive and engaging. My focus is not just on adding motion for decoration, but on using it purposefully to guide users through each interaction smoothly.
                    </p>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase mb-4'>Find me in</h2>
                        <div className='flex gap-4'>
                            <BannerIcon>
                                <FaFacebookF />
                            </BannerIcon>
                            <BannerIcon>
                                <FaTwitter />
                            </BannerIcon>
                            <BannerIcon>
                                <FaLinkedinIn />
                            </BannerIcon>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-base uppercase mb-4'>BEST SKILL ON</h2>
                        <div className='flex gap-4'>
                            <BannerIcon>
                                <FaReact />
                            </BannerIcon>
                            <BannerIcon>
                                <SiNextdotjs />
                            </BannerIcon>
                            <BannerIcon>
                            <SiTailwindcss/>
                            </BannerIcon>
                            <BannerIcon>
                                <SiFigma />
                            </BannerIcon>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side of Hero section */}
            <div className='w-1/2 flex justify-center items-center relative'>
                <img 
                    className='w-[500px] h-[680px] z-10'
                    src={bannerImg} 
                    alt="" 
                />
                <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>

                </div>
            </div>
        </section>
    );
};

export default Banner;
