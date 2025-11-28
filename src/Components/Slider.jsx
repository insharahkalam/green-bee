import React from 'react'
import Categogies from './Categogies'

const Slider = () => {
  return (
    <>
      <section className='px-5 sm:px-10 my-8'>
        <div className='flex gap-8 justify-center'>

          {/* LEFT CATEGORIES */}
          <div className='hidden min-[1200px]:block'>
            <Categogies />
          </div>

          <div className='w-full min-[1200px]:w-auto min-[1200px]:flex-1'>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              <div
                className="relative 
                  h-72 
                  sm:h-72
                  md:h-96
                  lg:h-[450px]
                  min-[1200px]:h-[550px]
                  2xl:h-[550px]
                  overflow-hidden rounded-2xl">

                {/* SLIDE 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/images/slider1.Webp"
                    className="absolute w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                </div>

                {/* SLIDE 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/images/slider2.Webp"
                    className="absolute w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                </div>

                {/* SLIDE 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/images/slider3.Webp"
                    className="absolute w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                </div>

              </div>

              {/* INDICATORS */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
                <button className="w-4 h-4 rounded-full" data-carousel-slide-to="0"></button>
                <button className="w-4 h-4 rounded-full" data-carousel-slide-to="1"></button>
                <button className="w-4 h-4 rounded-full" data-carousel-slide-to="2"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
