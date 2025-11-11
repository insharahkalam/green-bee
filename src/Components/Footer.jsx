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
                <div className='w-full mt-5 pt-1'>
                    <div className="rounded-full text-white bg-[#0D7A52] tracking-wide w-full text-2xl flex flex-col md:flex-row justify-between items-center px-4 py-4 transition-all duration-500 ease-in-out">

                        {/* Text Section */}
                        <div className="flex items-center gap-3 mb-3 text-center md:text-left w-full md:w-auto justify-center md:justify-start">
                            <TfiEmail className="text-[#21bb83]" />
                            <p className="uppercase text-base md:text-xl">Sign Up For Newsletters</p>
                        </div>

                        {/* Input + Button Section */}
                        <div className="flex items-center justify-center gap-3 w-full md:w-[580px]">
                            <div className="relative flex-1">
                                <input
                                    className="rounded-full text-[#0D7A52] outline-none text-[15px] bg-[#ffffff] h-[45px] w-full uppercase px-4 tracking-wider transition-all duration-700 ease-in-out"
                                    type="text"
                                    placeholder="Enter Your Email"
                                />
                            </div>

                            <button className="rounded-full text-sm md:text-base text-white bg-[#58c06f] hover:bg-[#084C33] h-[45px] w-[120px] justify-center flex items-center transition-all duration-700 ease-in-out">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className='pt-6'>
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <div className='w-[300px] py-2'><p className='text-xl text-gray-800'>CUSTOMER SERVICE</p>
                            <p className='mt-5 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Contact us</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Help and advice</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Shipping & Returns</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Terms and conditions</p>
                            <p className='my-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Refund Policy</p>
                        </div>

                        <div className='w-[300px] bg-white'><p className='text-xl text-gray-800'>INFORMATION</p>
                            <p className='mt-5 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>About Us</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Testimonials</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>My Account</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Payments & Returns</p>
                            <p className='my-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>View Catalogues Online</p>
                        </div>
                        <div className='w-[300px]'><p className='text-xl text-gray-800'>About Us</p>
                            <p className='mt-5 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Who We Are ?</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Corporate Responsibility</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>California Laws</p>
                            <p className='mt-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Careers</p>
                            <p className='my-2 text-gray-500 hover:text-[#0D7A52] cursor-pointer'>Privacy Policy</p>
                        </div>
                        <div className='w-[300px]'><p className='text-xl text-gray-800'>Contact us</p>
                            <p className='mt-5 flex items-center text-gray-500 gap-3'><FiPhoneCall /> (+612) 2531 5600</p>
                            <p className='mt-2 flex items-center gap-3 text-gray-500'><HiOutlineMail size={20} />support@domain.com</p>
                            <p className='mt-2 flex items-center gap-3 text-gray-500'><SlLocationPin /> PO Box 1622 Vissaosang Street West</p>
                            <p className='my-2 flex items-center gap-3 text-gray-500'><CiClock2 /> Opening Hours : 8.00AM - 21.00AM</p>
                        </div>
                    </div>
                </div>





            </section>
            <hr className='mt-5' />

            <div className='flex flex-wrap gap-y-2 justify-between px-10 bg-[#EBE9E2] items-center pt-5 pb-5'>
                <p className='text-gray-500'>Copyright © 2020 Vinovathemes. All rights reserved.</p>
                <div>
                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/payment_500x.png?v=1613769392" alt="" />

                </div>
            </div>
        </>
    )
}

export default Footer