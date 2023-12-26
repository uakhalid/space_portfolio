
"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilities/motion'
import {SparklesIcon} from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think better with Next.JS 13
          </h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]' >
            Modern Applications For The Real World
        </motion.div>
        <motion.div variants={slideInFromRight(0.5)}
            className=' text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
                Make Your Ideas a Reality
        </motion.div>
    </div>
  )
}

export default SkillText