import React from 'react'
import { assets } from '../assets/assets'

const Project = () => {
  return (
    <div id='Projects' className='container mx-auto py-4 pt-20 px-6 
                    md:px-20 lg:px-32 my-20 w-full overflow-hidden' >

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' > Projects 
        <span> </span>
            <span className='underline underline-offset-4 decoration-1 under font-light' >Available </span>
      </h1>

      <p lang='ar' className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>مش كل الكنز تحت الارض
                احياناً هو الارض نفسها 
      </p>

      {/*slider button*/ }
      <div className='flex justify-end items-center mb-8'>
           <button className='p-1 bg-[#3b6d72] rounded mr-2' aria-label='Previous Projects'>
                <img src={assets.leftArrow} alt="Previous" className='w-6 h-6' />
            </button>
            <button className='p-1 bg-[#3b6d72] rounded mr-2' aria-label='Next Projects'>
                 <img src={assets.rightArrow} alt="Next" className='w-6 h-6' />
            </button>
      </div>
        {/*projects slider container*/ }
        <div>
            {}
        </div>
    </div>
  )
}

export default Project