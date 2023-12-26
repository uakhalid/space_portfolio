"use client"

import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilities/motion'
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from "next/image";

export const HeroContent = () => {
  return (
    <motion.div
    id='about-me'
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer
          </h1>
        </motion.div>

      <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          
            Providing the best
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-4">
            {" "}project experience{" "}
          </span>
        </motion.div>
      <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          As a Full Stack Software Engineer with experience in Website
          and Software development, check out my favourite projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact Me
        </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/mainIconsdark.svg"
        alt="work icon"
        height={650}
        width={650}/>
        
      </motion.div>
    </motion.div>
  );
;}