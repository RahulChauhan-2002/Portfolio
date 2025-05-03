import React from 'react'
import { useState } from 'react';
import Title from '../Layouts/Title'
import {contactImg} from '../../assets/index'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import validator from 'validator';


const BannerIcon = ({ children, className, ...props }) => {
    const baseClasses =
        'w-16 h-16 bg-black/30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-[#ff014f] cursor-pointer duration-300';
    return (
        <span className={`${baseClasses} ${className}`} {...props}>
            {children}
        </span>
    );
};

const Contact = () => {

    

    const [username, setusername] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, seterrMsg] = useState("");
    const [successMsg, setsuccessMsg] = useState("");

    const isValidEmail=(email)=>{
        return validator.isEmail(email);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (username === "") {
            seterrMsg("Username is required!");
            setsuccessMsg("");
        } else if (phoneNumber === "") {
            seterrMsg("Phone Number is required!");
            setsuccessMsg("");
        } else if (email === "" || !isValidEmail(email)) {
            seterrMsg("Something Error in Email!");
            setsuccessMsg("");
        } else if (subject === "") {
            seterrMsg("Subject is required!");
            setsuccessMsg("");
        } else if (message === "") {
            seterrMsg("Message is required!");
            setsuccessMsg("");
        } else {
            setsuccessMsg("Message sent!");
            seterrMsg("");
    
            // Clear form after submission
            setusername("");
            setphoneNumber("");
            setemail("");
            setsubject("");
            setMessage("");
        }
    };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
            <div className="w-full h-auto flex justify-between">

                {/* Contact left part */}
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e] flex flex-col gap-8 justify-center">
                    <img 
                    className='w-full h-64 object-cover rounded-lg mb-2'
                    src={contactImg} 
                    alt="" 
                    />
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-3xl font-bold text-white'>Rahul Chauhan</h3>
                        <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                        <p className='text-base text-gray-400 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
                        <p className='text-base text-gray-400 flex items-center gap-2 '>
                            Phone : <span className='text-[#c4cfde]'>+91 123456789</span>
                        </p>
                        <p className='text-base text-gray-400 flex items-center gap-2 '>
                            Email :{" "} <span className='text-[#c4cfde]'>rahul@gmail.com</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-base uppercase mb-4'>Find me in </h2>
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
              </div>

              {/* Contact right part */}
              <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg [box-shadow:7px_9px_18px_#1c1022,_-7px_-9px_19px_#262a2e] flex flex-col gap-8 justify-center">
                <form
                   className='w-full h-full flex flex-col gap-6 py-5'
                >
                    <div className='flex w-full gap-10'>
                        <div className='w-1/2 flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                            <input
                                onChange={(e)=>setusername(e.target.value)} 
                                value={username}
                                className='contactInput'
                                type="text" 
                            />
                        </div>
                        <div className='w-1/2 flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                            <input 
                                onChange={(e)=>setphoneNumber(e.target.value)} 
                                value={phoneNumber}
                                className='contactInput'
                                type="tel"  
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                        <input 
                            onChange={(e)=>setemail(e.target.value)} 
                            value={email}
                            className='contactInput'
                            type="email" 
                        />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                        <input 
                            onChange={(e)=>setsubject(e.target.value)} 
                            value={subject}
                            className='contactInput'
                            type="text" 
                        />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                        <textarea 
                           className='contactTextarea' 
                           cols="30" 
                           rows="15"
                           onChange={(e)=>setMessage(e.target.value)} 
                           value={message}
                        ></textarea>
                    </div>
                    <div className='w-full'>
                        <button 
                           onClick={handleClick} 
                           className='contactInput cursor-pointer'
                        >Send Message</button>
                    </div>
                    {successMsg && <p className='text-green-500 text-sm text-center tracking-wide animate-bounce py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] font-bold'>{successMsg}</p>}
                    {errMsg && <p className='text-red-500 text-sm text-center tracking-wide animate-bounce py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] font-bold'>{errMsg}</p>}

                </form>
              </div>
            </div>
          </div>
    </section>  
  )
}

export default Contact