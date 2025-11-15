import React from 'react'
import { PiPhoneOutgoingFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
const Navbar = () => {
    return (
        <>

<section className='px-10'>
            <div className=' grid grid-cols-12 gap-[35px] mt-10'>
                <div className='col-span-3'>
                    <a href="/"> <img src="https://greenbee-2.myshopify.com/cdn/shop/files/logo_200x.png?v=1613769207" alt="" /></a>
                </div>

                
                <ul className='col-span-7 flex gap-10 mt-3'>
                    <li className='text-[16px] cursor-pointer'>HOME  <i className="fa-solid fa-angle-down fa-2xs" style={{ color: "gray" }}></i></li>
                    <li className='text-[16px] cursor-pointer'>PRODUCT  <i className="fa-solid fa-angle-down fa-2xs" style={{ color: "gray" }}></i></li>
                    <li className='text-[16px] cursor-pointer'>CATEGORIES  <i className="fa-solid fa-angle-down fa-2xs" style={{ color: "gray" }}></i></li>
                    <li className='text-[16px] cursor-pointer'>PAGES  <i className="fa-solid fa-angle-down fa-2xs" style={{ color: "gray" }}></i></li>
                    <li className='text-[16px] cursor-pointer'>BLOG  <i className="fa-solid fa-angle-down fa-2xs" style={{ color: "gray" }}></i></li>
                </ul>


                <div className="flex gap-2">
                    <div className="bg-[#0D7A52] hover:bg-green-500 p-3 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                    </div>
                    <div className="bg-[#0D7A52] hover:bg-green-500 p-3 rounded-full flex items-center justify-center relative">
                        <FaShoppingBasket className='text-white size-5' />
                        {/* Badge for number */}
                        <span className="absolute top-4 -right-2  bg-green-400 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </div>
<div className='mt-3 mx-4 whitespace-nowrap text-[16px] cursor-pointer text-[#0D7A52]'>
  My Cart
</div>
                </div>
            </div>

<div className='w-100 flex justify-between h-[70px] mt-5 pt-1'>
    <button className='rounded-full text-white bg-[#0D7A52] h-[60px] tracking-wide w-[280px] text-2xl flex justify-start px-4 items-center gap-8 text-center'><i className="fa-solid fa-xmark fa-2xs text-[#e6b400]"></i> Categories</button>
<div className='rounded-full text-white bg-[#0D7A52] h-[65px] tracking-wide w-[890px] text-2xl flex justify-between px-2 items-center'> 
<div className="relative w-[580px]">
  <input
    className="rounded-full text-[#0D7A52] outline-none text-[16px] bg-[#ffffff] h-[50px] w-full uppercase px-4 pr-12 tracking-wider"
    type="text"
    placeholder="Enter Your Keyword...."
  />
  <button
    className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-[#F09300] absolute right-[3px] top-1/2 -translate-y-1/2"
  >
    <FiSearch className="text-white text-[20px]" />
  </button>
</div>



<button className='rounded-full text-black bg-[#ffffff] h-[50px] tracking-wide w-[270px] ps-2 flex gap-5 items-center'><PiPhoneOutgoingFill className='text-[#0D7A52]' size={40} />
<div className='flex justify-between items-center w-full pe-2'>
<div className='leading-tight'>
    <p className='text-[16px] tracking-wider text-gray-400 text-start'>Call us now:</p>
    <p className='text-[16px] text-[#0D7A52] font-extrabold '>031-5338-5735</p>
</div>
<i class="fa-solid text-[#0D7A52] fa-caret-down fa-xs text-end"></i>
</div>
</button>
</div>
</div>

</section>
        </>
    )
}

export default Navbar
