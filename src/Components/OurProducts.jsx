import React from 'react'

const OurProducts = () => {
    return (
        <>
            <section className='px-10'>
                <div className='text-center mt-20'>
                    <p className='text-4xl'>Discover Our Products</p>
                    <p className='text-gray-500'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                </div>


                <div className='flex justify-center gap-12'>
                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-5_150x.png?v=1613769363" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>All Product</p>
                    </div>

                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-6_150x.png?v=1613769363" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>Vegetables</p>
                    </div>

                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-7_150x.png?v=1613769362" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>Fruits</p>
                    </div>

                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-8_150x.png?v=1613769363" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>Bread</p>
                    </div>

                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-9_150x.png?v=1613769363" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>Juices</p>
                    </div>

                    <div className='flex justify-center items-center mt-9 flex-col'>
                        <img src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-10_150x.png?v=1613769363" alt="" />
                        <p className='mt-2 hover:text-green-600 hover:underline'>Tea</p>
                    </div>

                </div>
                <hr className='mt-3' />

                <div className='mt-10 flex justify-between'>
                    {/* <div className='w-[32%] h-[175px] flex justify-center items-center gap-20 shadow-gray-300 rounded-xl shadow-lg'>
                        <div>
                            <img width={200} height={160} src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619" alt="" />
                        </div>
                        <div>
                            <p>Ziamond Ralo Stud Farrings</p>
                            <p className='font-bold mt-2'>876.77</p>
                        </div>
                    </div> */}

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-20 shadow-gray-300 rounded-xl shadow-lg cursor-pointer">

                        <div className="relative w-[200px] h-[160px]">
                            {/* Default Image */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Hover Image (change this URL to your hover pic) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/31_544eba9c-a687-4a2a-8eb8-ca9c920b4101_370x.jpg?v=1610525661"
                                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>

                        <div>
                            <p>Ziamond Ralo Stud Farrings</p>
                            <p className="font-bold mt-2">876.77</p>
                        </div>

                    </div>



                    <div className='w-[32%] h-[175px] flex justify-center items-center gap-20 shadow-gray-300 rounded-xl shadow-lg'>
                        <div>
                            <img width={200} height={160} src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619" alt="" />
                        </div>
                        <div>
                            <p>Ziamond Ralo Stud Farrings</p>
                            <p className='font-bold mt-2'>876.77</p>
                        </div>
                    </div>

                    <div className='w-[32%] h-[175px] flex justify-center items-center gap-20 shadow-gray-300 rounded-xl shadow-lg'>
                        <div>
                            <img width={200} height={160} src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619" alt="" />
                        </div>
                        <div>
                            <p>Ziamond Ralo Stud Farrings</p>
                            <p className='font-bold mt-2'>876.77</p>
                        </div>
                    </div>





                </div>




            </section>
        </>
    )
}

export default OurProducts