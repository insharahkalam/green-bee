import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";


const Footer = () => {
    return (
        <>
            <section className='px-10'>

                <div className='w-100 h-[70px] mt-5 pt-1'>

                    <div className='rounded-full text-white bg-[#0D7A52] h-[65px] tracking-wide w-full text-2xl flex justify-between px-2 items-center'>
                        <div className='flex items-center gap-4 ps-4'>
                            <TfiEmail className='text-[#21bb83]' />
                            <p className='uppercase'> Sign Up For Newsletters</p>
                        </div>
                        <div className='flex justify-between gap-4'>
                            <div className="relative w-[580px]">
                                <input
                                    className="rounded-full text-[#0D7A52] outline-none text-[16px] bg-[#ffffff] h-[50px] w-full uppercase px-4 tracking-wider"
                                    type="text"
                                    placeholder="Enter Your Email"
                                />

                            </div>

                            <button className='rounded-full text-sm text-white bg-[#58c06f] hover:bg-[#084C33] h-[50px] tracking-wide w-[100px] justify-center flex gap-5 items-center'>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className='pt-6'>
                    <div className='flex'>
                        <div className='w-[300px] py-2'><p className='text-xl'>CUSTOMER SERVICE</p>
                            <p className='mt-4 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Contact us</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Help and advice</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Shipping & Returns</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Terms and conditions</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Refund Policy</p>
                        </div>

                        <div className='w-[300px] bg-white'><p className='text-xl'>INFORMATION</p>
                            <p className='mt-4 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>About Us</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Testimonials</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>My Account</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Payments & Returns</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>View Catalogues Online</p>
                        </div>
                        <div className='w-[300px]'><p className='text-xl'>About Us</p>
                            <p className='mt-4 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Who We Are ?</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Corporate Responsibility</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>California Laws</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Careers</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Privacy Policy</p>
                        </div>
                        <div className='w-[300px]'><p className='text-xl'>Contact us</p>
                            <p className='mt-4 flex items-center text-gray-500 gap-3'><FiPhoneCall /> (+612) 2531 5600</p>
                            <p className='mt-2 flex items-center gap-3 text-gray-500'><HiOutlineMail size={20} />support@domain.com</p>
                            <p className='mt-2 flex items-center gap-3 text-gray-500'><SlLocationPin /> PO Box 1622 Vissaosang Street West</p>
                            <p className='mt-2 flex items-center gap-3 text-gray-500'><CiClock2 /> Opening Hours : 8.00AM - 21.00AM</p>
                        </div>
                    </div>
                </div>

<hr className='my-2' />

<div className='flex justify-between items-center'>
<p>Copyright © 2020 Vinovathemes. All rights reserved.</p>
<div>
<img src="https://greenbee-2.myshopify.com/cdn/shop/files/payment_500x.png?v=1613769392" alt="" />

</div>
</div>



            </section>
        </>
    )
}

export default Footer