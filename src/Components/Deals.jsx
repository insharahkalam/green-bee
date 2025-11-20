import React from 'react'
// import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBasketFill } from "react-icons/ri";

const Deals = () => {
    return (
        <>
            <section className='px-10 pt-20 pb-10 bg-[#F7F6F2]'>

                <div className='text-center'>
                    <h1 className='text-4xl'>Flash Deals</h1>
                    <p className='text-sm text-gray-500 mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                </div>



                <div id="indicators-carousel" className="relative w-full mt-3" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-56 overflow-hidden rounded-base md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <div className='flex justify-between mt-5 items-center'>
                                <div className='w-[575px] group relative flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%] '>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/30_75d6a4cf-c3da-405c-a80d-75abe42a795c_480x.jpg?v=1610525773" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/3_480x.jpg?v=1610525793" alt="" />
                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center"><span className='text-sm'>ADD TO CART</span><RiShoppingBasketFill className='pb-1' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>
                                <div className='w-[575px]  group relative  flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%]'>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/3_480x.jpg?v=1610525793" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/30_75d6a4cf-c3da-405c-a80d-75abe42a795c_480x.jpg?v=1610525773" alt="" />

                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center text-sm">Select Options</button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className='flex justify-between mt-5 items-center'>
                                <div className='w-[575px] group relative flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%] '>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/35_78968d09-c9df-4488-ad67-590510ef8e81_480x.jpg?v=1610525627" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/3_480x.jpg?v=1610525793" alt="" />

                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center text-sm">Select Options</button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>
                                <div className='w-[575px]  group relative  flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%]'>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/21_7bfcc787-8987-4b73-b0b9-a138750b1f3f_480x.jpg?v=1610525448" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/30_75d6a4cf-c3da-405c-a80d-75abe42a795c_480x.jpg?v=1610525773" alt="" />

                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center text-sm">Select Options</button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className='flex justify-between mt-5 items-center'>
                                <div className='w-[575px] group relative flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%] '>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/30_75d6a4cf-c3da-405c-a80d-75abe42a795c_480x.jpg?v=1610525773" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/3_480x.jpg?v=1610525793" alt="" />
                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center text-sm">Select Options</button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>
                                <div className='w-[575px]  group relative  flex p-3 bg-white h-[260px] rounded-3xl shadow-xl'>

                                    <div className='w-[50%]'>
                                        <img className='w-[250px] h-[240px] opacity-100 absolute group-hover:opacity-0 transform duration-500 group-hover:translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/3_480x.jpg?v=1610525793" alt="" />
                                        <img className='w-[250px] h-[240px] opacity-0 absolute group-hover:opacity-100 transform duration-500 group-hover:-translate-y-3' src="https://greenbee-2.myshopify.com/cdn/shop/products/30_75d6a4cf-c3da-405c-a80d-75abe42a795c_480x.jpg?v=1610525773" alt="" />
                                        <div className='flex flex-col'>
                                            <div className=' opacity-100 absolute border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-extrabold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Days</p>
                                            </div>

                                            <div className=' opacity-100 absolute top-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-sm text-gray-400'>Hours</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[75px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Mins</p>
                                            </div>

                                            <div className=' opacity-100 absolute bottom-[15px] border-b-[3px] bg-white border-r-[3px] border-[#93CF5D] p-1 w-[50px] text-center rounded-lg '>
                                                <p className='font-bold'>00</p>
                                                <hr />
                                                <p className='text-xs text-gray-400'>Secs</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-[50%] text-start ps-2 pt-10'>
                                        <p className='text-lg mb-2 text-gray-700'>Aiamond Qalo Stud Farrings</p>
                                        <span className='font-extrabold text-[#FFA415] text-2xl'>$15.00</span> <del className='font-extrabold text-[#E2E2E2] text-2xl ps-7'>$19.00</del>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  Aenean commodo ligula eget dolor Aenean massa...</p>

                                        <div className=" flex items-center gap-2 mt-3">
                                            <button className="w-[160px] py-3 hover:bg-green-700 transition-all duration-500 bg-gray-200 text-black hover:text-white rounded-full flex justify-center gap-2 items-center text-sm">Select Options</button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center"><IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} /></button>
                                            <button className="w-10 h-10 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center"><CiSearch className='text-gray-700 hover:text-white' size={20} /></button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-10 left-1/2">
                        <button type="button" className="w-4 h-4 bg-gray-300 hover:bg-green-700 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-4 h-4 bg-gray-300 hover:bg-green-700 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-4 h-4 bg-gray-300 hover:bg-green-700 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Deals