import React from 'react'

const BestFood = () => {
    return (
        <>
            <section className='px-10'>
                <div className=' text-center mt-10'>
                    <h1 className='text-4xl'>We Grow Best Food</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor incididunt</p>
                </div>


                <div className='mt-10 flex flex-wrap justify-between '>

                    <div className='w-1/4 flex flex-col justify-between'>
                        <div>
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-1_55x.png?v=1613769361" alt="" />
                            <p className='text-2xl mt-1 mb-3 text-[#78B144]'>Always Fresh</p>
                            <p className='text-gray-500'>Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et tortor phasellus a magna lobortis</p>
                        </div>

                        <div>
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-2_55x.png?v=1613769361" alt="" />
                            <p className='text-2xl mt-1 mb-3 text-[#78B144]'>Super Healthy</p>
                            <p className='text-gray-500'>Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et tortor phasellus a magna lobortis</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/img-4_570x.jpg?v=1613769360" alt="" />
                    </div>

                    <div className='w-1/4 flex flex-col justify-between'>
                        <div className='flex justify-end items-end flex-col'>
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-3_55x.png?v=1613769361" alt="" />
                            <p className='text-2xl mt-1 mb-3 text-[#78B144]'>Premium Quality</p>
                            <p className='text-gray-500 text-right'>Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et tortor phasellus a magna lobortis</p>
                        </div>

                        <div className='flex justify-end items-end flex-col'>
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-4_55x.png?v=1613769361" alt="" />
                            <p className='text-2xl mt-1 mb-3 text-[#78B144]'>100% Natural</p>
                            <p className='text-gray-500 text-right'>Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et tortor phasellus a magna lobortis</p>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}

export default BestFood