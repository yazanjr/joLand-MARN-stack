import React from 'react'

const Numbers = () => {
  return (
    <div className=' text-center grid grid-cols-3 gap-6 md:gap-10 
    w-full 2xl:pr-28 mb-10 mt-10 border-y-[1px]  border-[#3b6d72]
     hover:shadow-xl shadow-md shadow-[#3b6d72]/40 w-full' >
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Sold</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>On Going Projects</p>
                    </div>
    </div>
  )
}

export default Numbers
