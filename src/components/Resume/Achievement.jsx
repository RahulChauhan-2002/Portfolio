import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}
      className='w-full flex gap-20'
    >
      <div>
        <div className="py-12 flex flex-col gap-4">
          <p className="text-sm text-[#ff014f] tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold"> Achievements </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-[rgba(0,0,0,0.3)] flex flex-col gap-10">

        <ResumeCard
            title="LeetCode Problem Solving "
            subTitle="300+ Problems Solved | 1600+ Contest Rating"
            result={
              <a
                href="https://leetcode.com/u/Rahul__Chauhan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LeetCode
              </a>
            }
            des="Actively practiced data structures and algorithms by solving over 300 coding problems on LeetCode. Topics covered include arrays, strings, linked lists, trees, graphs, dynamic programming, and more. Maintained a consistent contest rating of 1600+, demonstrating strong problem-solving skills, time-bound optimization, and a competitive programming mindset."
          />
          <ResumeCard
            title=" Programming Using C++  "
            subTitle="Infosys Springboard   (1 July 2023)"
            result={
              <a
                href="https://drive.google.com/file/d/1KziLLQHKBKuJkFWoAJRajYoW21gDEEtp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            }
            des="Successfully completed a comprehensive course focused on core C++ programming concepts including variables, loops, functions, object-oriented programming (OOP), and the Standard Template Library (STL). Gained hands-on experience through practical coding tasks, enhancing my problem-solving skills and building a strong foundation for competitive programming."
          />
          <ResumeCard
            title="Python (Basic)"
            subTitle="Certificate of Achievement - HackerRank"
            result={
              <a
                href="https://drive.google.com/file/d/16_CQTv2nY1ZYDAELZ50B1zH30Jv8BMJv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            }
            des="Successfully earned the Python (Basic) certification from HackerRank, demonstrating a clear understanding of Python fundamentals including data types, conditionals, loops, functions, and basic data structures. This certification validates my ability to write clean, logical, and efficient Python code for solving real-world problems."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 flex flex-col gap-4">
          <p className="text-sm text-[#ff014f] tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-[rgba(0,0,0,0.3)] flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;