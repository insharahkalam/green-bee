import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const OurProducts = () => {
    return (
        <>
            <section className='px-10 pb-20'>
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

                <div className='mt-10 flex flex-wrap justify-between'>

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        <div className="relative w-[200px] h-[160px] overflow-hidden">
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/products/20_6512ebbc-8084-4fea-890a-1e13b41465bd_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-500 
                       transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0"
                            />
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative overflow-hidden">

                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $876.77
                            </p>
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
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/15_370x.jpg?v=1610525661"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/31_544eba9c-a687-4a2a-8eb8-ca9c920b4101_370x.jpg?v=1610525661"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>



                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $14.00
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>

                    </div>

                    <div className='group p-4 w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer'>
                        <div className='relative w-[200px] h-[160px] overflow-hidden'>
                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/8_370x.jpg?v=1610525727" alt="" />

                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-6 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100' src="https://greenbee-2.myshopify.com/cdn/shop/products/31_cdfcdc28-8989-4d37-a2b7-6c94d7e742c5_370x.jpg?v=1610525727" alt="" />
                        </div>
                        <div>
                            <p className='text-sm transform transition-all duration-500 translate-y-3 group-hover:-translate-y-1'>Tiamond Qalo Stud Farrings</p>
                            <p className='font-bold mt-2 transition-all transform duration-500 translate-y-3 group-hover:-translate-y-1'>$2.00</p>

                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>
                    </div>





                </div>


                <div className='mt-10 flex justify-between'>

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        <div className="relative w-[200px] h-[160px] overflow-hidden">
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/products/27_370x.jpg?v=1610525551"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-500 
                       transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0"
                            />
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/32_e566c5f1-1aa1-43bf-8b62-8b5bf18c62c9_370x.jpg?v=1610525551"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative overflow-hidden">

                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $876.77
                            </p>
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
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/21_370x.jpg?v=1610525607"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/26_370x.jpg?v=1610525607"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>



                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $14.00
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>

                    </div>

                    <div className='group p-4 w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer'>
                        <div className='relative w-[200px] h-[160px] overflow-hidden'>
                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/7_ff0cf4c5-94ed-49d2-841d-b1c8a0315abe_370x.jpg?v=1610525734" alt="" />

                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-6 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/31_cdfcdc28-8989-4d37-a2b7-6c94d7e742c5_370x.jpg?v=1610525727" alt="" />
                        </div>
                        <div>
                            <p className='text-sm transform transition-all duration-500 translate-y-3 group-hover:-translate-y-1'>Tiamond Qalo Stud Farrings</p>
                            <p className='font-bold mt-2 transition-all transform duration-500 translate-y-3 group-hover:-translate-y-1'>$2.00</p>

                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='mt-10 flex justify-between'>

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        <div className="relative w-[200px] h-[160px] overflow-hidden">
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/products/9_370x.jpg?v=1610525717"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-500 
                       transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0"
                            />
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/31_b3176b1f-f059-4fda-b675-52dad8b72b89_370x.jpg?v=1610525717"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative overflow-hidden">

                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $876.77
                            </p>
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
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/10_29d9dd65-faf5-4456-805c-291887bdec01_370x.jpg?v=1610525709"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/32_63840a54-ea24-4e87-9b19-b33baa8ac0c4_370x.jpg?v=1610525709"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>



                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $14.00
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>

                    </div>

                    <div className='group p-4 w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer'>
                        <div className='relative w-[200px] h-[160px] overflow-hidden'>
                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/28_99663f2a-4a7e-47ed-8b39-d091232b0ee1_370x.jpg?v=1610525543" alt="" />

                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-6 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/23_910e1ea0-7a20-4368-a464-354ef772f23e_370x.jpg?v=1610525543" alt="" />
                        </div>
                        <div>
                            <p className='text-sm transform transition-all duration-500 translate-y-3 group-hover:-translate-y-1'>Tiamond Qalo Stud Farrings</p>
                            <p className='font-bold mt-2 transition-all transform duration-500 translate-y-3 group-hover:-translate-y-1'>$2.00</p>

                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 flex justify-between'>

                    <div className="group w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer p-4">

                        <div className="relative w-[200px] h-[160px] overflow-hidden">
                            <img src="https://greenbee-2.myshopify.com/cdn/shop/products/23_370x.jpg?v=1610525588"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-500 
                       transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0"
                            />
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/32_20a65f1f-6e8f-4f60-b2e8-0d8895dbd896_370x.jpg?v=1610525588"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative overflow-hidden">

                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $876.77
                            </p>
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
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/25_a72d4f70-b9a8-439e-9dbb-6e6b5b09ae6f_370x.jpg?v=1610525568"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-0 opacity-100 
                       group-hover:-translate-y-6 group-hover:opacity-0"
                            />

                            {/* Hover Image (comes from bottom) */}
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/38_062bcab9-6827-494c-8b43-3a5df983860b_370x.jpg?v=1610525568"
                                className="w-full h-full object-cover absolute inset-0 
                       transition-all duration-500 
                       transform translate-y-6 opacity-0 
                       group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Text + Buttons */}
                        <div className="relative overflow-hidden">

                            {/* Default Text */}
                            <p className="text-sm transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1">
                                Xiamond Calo Stud Garrings
                            </p>



                            {/* Price */}
                            <p className="font-extrabold mt-2 transition-all duration-500 transform translate-y-3 group-hover:-translate-y-1 ">
                                $14.00
                            </p>

                            {/* Buttons */}
                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>

                    </div>

                    <div className='group p-4 w-[32%] h-[175px] flex justify-center items-center gap-10 shadow-gray-300 rounded-xl shadow-lg cursor-pointer'>
                        <div className='relative w-[200px] h-[160px] overflow-hidden'>
                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-0 opacity-100 group-hover:-translate-y-6 group-hover:opacity-0'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/5_370x.jpg?v=1610525754" alt="" />

                            <img className='absolute inset-0 transition-all duration-500 w-full h-full object-cover
                             transform translate-y-6 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100'
                                src="https://greenbee-2.myshopify.com/cdn/shop/products/10_370x.jpg?v=1610525754" alt="" />
                        </div>
                        <div>
                            <p className='text-sm transform transition-all duration-500 translate-y-3 group-hover:-translate-y-1'>Tiamond Qalo Stud Farrings</p>
                            <p className='font-bold mt-2 transition-all transform duration-500 translate-y-3 group-hover:-translate-y-1'>$2.00</p>

                            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2 mt-3">
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}

export default OurProducts