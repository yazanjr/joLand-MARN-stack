import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
     initial={{ opacity: 0, x:200 }}
      whileInView={{ opacity: 1, x:0 }}
      transition = {{ duration: 1 }}
      viewport={{once: true}}
    className='flex flex-col items-center
                    justify-center container mx-auto p-14
                    md:px-20 lg:px-31 w-full overflow-hidden'
                    id ='About'>

      <h1 lang='ar' className='text-2xl text-[#d5ae49] sm:text-4xl font-bold mb-10'>نحن نرى <span> </span>
         <span className=' underline-offset-4decortion-1 under font-light'>ما لا يراه الاخرون</span></h1>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brandImg} alt="" 
        className='w-full sm:w-1/2 max-w-md'/>

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
             <p lang='ar' className='my-10 max-w-lg'>
في جولاند، نحن لا نبيع الأراضي فحسب، بل نكشف عن إمكاناتها. 
بفضل رؤيتنا السوقية وخبرتنا المحلية وتخطيطنا المستقبلي، نكتشف القيمة التي قد لا يلاحظها الآخرون. 
كل مشروع نقدّمه يتم اختياره بعناية، وتطويره بإتقان، ليكون استثماراً يضمن لك مستقبلاً آمناً. 
        </p>
         <p lang='ar' className='my-10 max-w-lg'>
        نحن نرى ما لا يراه الاخرون. نحن نؤمن بأن العقار ليس مجرد مبنى، بل هو حلم يتحقق. نحن هنا لنساعدك في تحقيق هذا الحلم من خلال توفير أفضل الفرص العقارية التي تلبي احتياجاتك وتطلعاتك.  نحن نرى ما لا يراه الاخرون. نحن نؤمن بأن العقار ليس مجرد مبنى، بل هو حلم يتحقق. نحن هنا لنساعدك في تحقيق هذا الحلم من خلال توفير أفضل الفرص العقارية التي تلبي احتياجاتك وتطلعاتك. 
        </p>
        <button className='bg-[#3b6d72] hover:bg-[#d5ae49] text-white px-8 py-2 rounded'>Learn more</button>
        </div>
       

      </div>
    </motion.div>   
  )
}

export default About
