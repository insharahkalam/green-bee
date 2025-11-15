import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

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

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        {/* Images */}
                        <div className="relative w-[200px] h-[160px] overflow-hidden">

                            {/* Default Image */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/20_6512ebbc-8084-4fea-890a-1e13b41465bd_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="transition-all duration-500 transform translate-y-3 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3">
                                Ziamond Ralo Stud Farrings
                            </p>

                            {/* Hover Text */}
                            <p className="absolute top-0 left-0 hover:text-green-500 w-full transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                Ziamond Ralo Stud Farrings
                            </p>

                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ">
                                876.77
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>

                    </div>




  <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        {/* Images */}
                        <div className="relative w-[200px] h-[160px] overflow-hidden">

                            {/* Default Image */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/20_6512ebbc-8084-4fea-890a-1e13b41465bd_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="transition-all duration-500 transform translate-y-3 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3">
                                Ziamond Ralo Stud Farrings
                            </p>

                            {/* Hover Text */}
                            <p className="absolute top-0 left-0 hover:text-green-500 w-full transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                Ziamond Ralo Stud Farrings
                            </p>

                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ">
                                876.77
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
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