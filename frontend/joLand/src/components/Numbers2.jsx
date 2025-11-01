import React from 'react'

const Numbers = () => {
  return (
    <div class="pt-12 bg-gray-50  sm:pt-20">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 lang ="ar" class="text-3xl font-bold/50  text-gray-900 sm:text-4xl sm:leading-10">
         ارقامنا تتحدث
        </h2>
        <p lang ="ar" class="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
          جو لاند مستشارك العقاري, خبرة عميقة في السوق العقاري الأردني
        </p>
      </div>
    </div>
    <div class="pb-12 mt-10 bg-gray-50  sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50 "></div>
        <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="bg-white  rounded-lg shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col p-6 text-center border-b border-gray-100  sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 " id="item-1">
                  Years of Experience
                </dt>
                <dd class="order-1 text-5xl font-bold/50 text-[#d5ae49] " aria-describedby="item-1" id="starsCount">10+</dd>
              </div>
              <div class="flex flex-col p-6 text-center border-t border-b border-gray-100  sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Projects Sold
                </dt>
                <dd class="order-1 text-5xl font-bold/50 text-[#d5ae49] " id="downloadsCount">12+</dd>
              </div>
              <div class="flex flex-col p-6 text-center border-t border-gray-100  sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                  On Going Projects
                </dt>
                <dd class="order-1 text-5xl font-bold/50 text-[#d5ae49] " id="sponsorsCount">25+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Numbers
