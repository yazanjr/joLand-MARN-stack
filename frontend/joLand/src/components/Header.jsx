import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
   <div
  id="Header"
  className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
  style={{ backgroundImage: `url(${assets.Background})` }}
>
      
      <Navbar/>
      <motion.div 
      initial={{ opacity: 0, y:100 }}
      whileInView={{ opacity: 1, y:0 }}
      transition = {{ duration: 1.5 }}
      viewport={{once: true}}
   className='container text-center mx-auto py-4 px-6 md:px-20 lg:px32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-82[px] inline-block max-w-3xl font-semibold pt-20' lang='ar'>حدد ارضك و ارسم مستقبلك</h2>
        
        <div className='space-x-6 mt-16'>

            <a href="#Projects" lang='ar' className='border border-white px-8 py-3 rounded ml-5'>فرص الاستثمار </a>
            <a href="#Contact" lang='ar' className='bg-[#d5ae49] px-8 py-3 rounded'>تواصل معنا </a>

        </div>
      </motion.div>
    </div>
  )
}

export default Header
