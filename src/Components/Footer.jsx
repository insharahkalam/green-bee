import React from 'react'
import { TfiEmail } from "react-icons/tfi";

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

                <div>
                    <div className='flex'>
                        <div className='w-[300px] bg-red-300'><p>CUSTOMER SERVICE</p>
                            <p>Contact us</p>
                            <p>Help and advice</p>
                            <p>Shipping & Returns</p>
                            <p>Terms and conditions</p>
                            <p>Refund Policy</p>
                        </div>
                        <div className='w-[300px] bg-red-200'><p>INFORMATION</p></div>
                        <div className='w-[300px] bg-red-400'><p>About Us</p></div>
                        <div className='w-[300px] bg-red-600'><p>Contact us</p></div>
                    </div>
                </div>





            </section>
        </>
    )
}

export default Footer