import React from 'react'
import Categogies from './Categogies'

const Slider = () => {
  return (
    <>
      <section className='px-10 my-8'>
        <div className='flex gap-8'>
        <Categogies />



          <div className='w-[1000px]'>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">

              <div className="relative h-56 overflow-hidden rounded-2xl md:h-[550px]">

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://greenbee-2.myshopify.com/cdn/shop/files/s-1_1920x.jpg?v=1613769353" className="absolute block w-full rounded-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://greenbee-2.myshopify.com/cdn/shop/files/s-2_1920x.jpg?v=1613769353" className="absolute block w-full rounded-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://greenbee-2.myshopify.com/cdn/shop/files/s-3_1920x.jpg?v=1613769353" className="absolute block w-full rounded-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>

              </div>

              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-4 h-4 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-4 h-4 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-4 h-4 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Slider