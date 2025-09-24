import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiFigma, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { bannerImg, bannerPersonImg } from '../../assets/index';

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
        <section id='home' className='w-full pb-20 pt-10 gap-10 xl:gap-0 flex flex-col lg:flex-row  items-center border-b-[1px] border-b-black'>

            {/* Left Side of Hero section */}
            <div className='w-full lg:w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal uppercase'></h4>
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
                    I am a curious learner who loves coding, solving challenges, and building things from scratch. With strong DSA skills and a passion for full-stack development, I’m excited to grow fast, collaborate well, and build impactful digital products.
                    </p>
                </div>

                <div className='flex flex-col gap-6 xl:flex-row lg:gap-0 justify-between'>
                    <div>
                        <h2 className='text-base mb-4 uppercase'>Connect with me on</h2>
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
                    <div>
                        <h2 className='text-base uppercase mb-4'>Best skills I have</h2>
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
            <div className='w-full lg:w-1/2 flex justify-center items-center relative'>
                <img 
                    className='w-[300px] h-[400px] lg:w-[500px] lg:h-[680px] z-10 object-cover'
                    src={bannerPersonImg} 
                    alt="Rahul Chauhan" 
                    style={{
                        backgroundColor: '#212428'
                    }}
                />
                <div className='absolute bottom-0 w-[350px] h-[300px] lg:w-[500px] lg:h-[500px] shadow-shadowOne flex justify-center items-center'
                     style={{
                        backgroundColor: '#212428'
                     }}>

                </div>
            </div>
        </section>
    );
};

export default Banner;
