import React from 'react'
import { motion } from 'framer-motion'

const Skill = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
            <div className="w-full lgl:w-1/2">
                <div className='py-12 flex flex-col gap-4'>
                    <p className='text-sm text-[#ff014f] tracking-[4px] uppercase'>Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Photoshot</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                              initial={{x:"-100%", opacity:0}} 
                              animate={{x:0, opacity:1}} 
                              transition={{duration:0.5, delay:0.5}}
                              className='w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>0%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Figma</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>60%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Adobe XD.</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>0%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Adobe Illustrator</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>0%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Design</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>20%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>



            <div className="w-full lgl:w-1/2">
                <div className='py-12 flex flex-col gap-4'>
                    <p className='text-sm text-[#ff014f] tracking-[4px] uppercase'>Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                              initial={{x:"-100%", opacity:0}} 
                              animate={{x:0, opacity:1}} 
                              transition={{duration:0.5, delay:0.5}}
                              className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>HTML 5</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>82%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>CSS3</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>60%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>70%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>SOFTWARE</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span 
                             initial={{x:"-100%", opacity:0}} 
                             animate={{x:0, opacity:1}} 
                             transition={{duration:0.5, delay:0.5}}
                             className='w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                <span className='absolute -top-7 right-0'>78%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Skill