import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const NewArrivals = () => {
    return (
        <>
            <section className='px-10 py-10'>
                <div className='flex items-center justify-between'>
                    <div
                        className='btns flex items-center gap-3'>
                        <button className='rounded-3xl bg-[#0D7A52] px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                        <button className='rounded-3xl bg-[#78B144] hover:bg-[#0D7A52] transition duration-500 px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                        <button className='rounded-3xl bg-[#78B144] hover:bg-[#0D7A52] transition duration-500 px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                    </div>
                    <div className='icons flex items-center gap-1'>
                        <div className='w-6 h-6 p-1 rounded-full bg-gray-300 hover:bg-[#0D7A52] text-gray-700 hover:text-white transition duration-300'><MdKeyboardArrowLeft /></div>
                        <div className='w-6 h-6 p-1 rounded-full bg-gray-300 hover:bg-[#0D7A52] text-gray-700 hover:text-white transition duration-300'><MdKeyboardArrowRight /></div>

                    </div>
                </div>

                <div className='card flex items-center gap-4 mt-5'>


                    <div className='w-[220px] h-[300px] hover:shadow-2xl border rounded-xl'>

                        <div>
                            <img className='rounded-xl' src="https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734" alt="" />
                        </div>

                        <div className='text-center'>
                            <p className='text-lg tracking-wide text-gray-700'>Riamond Halo Stud Garrings</p>
                            <span className='font-extrabold text-lg'>$5.00</span> <del className='font-extrabold text-lg text-gray-300 ms-5'>$14.00</del>
                        </div>

                    </div>





                </div>





                <div className='mt-10'>
                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/img-6_1920x1920.jpg?v=1613769390" alt="" />
                </div>

            </section>
        </>
    )
}

export default NewArrivals