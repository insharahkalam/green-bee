import React from 'react'

const CardsSection = () => {
    return (
        <>
            <section className='px-10'>

                <div className='flex flex-wrap justify-between mb-10'>
                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/img-1_1920x1920.jpg?v=1613769357" alt="" />
                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/img-2_1920x1920.jpg?v=1613769357" alt="" />
                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/img-3_1920x1920.jpg?v=1613769357" alt="" />
                </div>

              <div className='flex flex-wrap justify-between'>
                  <div className='flex items-start gap-3'>

                    <div>
                        <img className='relative top-1' src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" alt="" />
                        <img className='relative bottom-14 left-6' src="https://greenbee-2.myshopify.com/cdn/shop/files/p-1_45x.png?v=1613769359" alt="" />
                    </div>

                    <div className='mt-2'>
                        <p className='text-2xl'>cash on delivery</p>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Aliquam sit amet tellus mauris</p>
                    </div>
                </div>
                  <div className='flex items-start gap-3 mb-8'>

                    <div>
                        <img className='relative top-1' src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" alt="" />
                        <img className='relative bottom-14 left-5' src="https://greenbee-2.myshopify.com/cdn/shop/files/p-2_45x.png?v=1613769359" alt="" />
                    </div>

                    <div className='mt-2'>
                        <p className='text-2xl'>FREE SHIPPING</p>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Aliquam sit amet tellus mauris</p>
                    </div>
                </div>
                  <div className='flex items-start gap-3'>

                    <div>
                        <img className='relative top-1' src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" alt="" />
                        <img className='relative bottom-14 left-6' src="https://greenbee-2.myshopify.com/cdn/shop/files/p-3_45x.png?v=1613769359" alt="" />
                    </div>

                    <div className='mt-2'>
                        <p className='text-2xl'>money back guarantee</p>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Aliquam sit amet tellus mauris</p>
                    </div>
                </div>
              </div>


            </section>
        </>
    )
}

export default CardsSection