import React from 'react'
import { LiaComments } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

const LatestPost = () => {
    return (
        <>
            <section className='px-10 pb-20 pt-10'>
                <h1 className='text-center text-3xl '>
                    Latest Post
                </h1>

                <div className='mt-5 flex justify-between gap-5 items-center'>

                    <div className='w-[700px]'>
                        <div class="overflow-hidden group rounded-2xl">
                            <img
                                src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_5_350x.jpg?v=1610526895"
                                class="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-x-110 group-hover:scale-y-110 group-hover:opacity-90"
                            />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetuer</p>
                            <div className='flex justify-center gap-5 my-3'>
                                <p className='text-xs flex items-center  gap-2 text-gray-400'><LiaComments className='size-4' /> 0 COMMENTS</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><CiUser className='size-4' /> BY VOINOVA THEME</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><IoCalendarClearOutline className='size-4' /> 13 JAN 2021</p>
                            </div>
                            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the industry's standard dummy ndustry's standard...</p>
                        </div>
                    </div>

                    <div className='w-[700px]'>
                        <div class="overflow-hidden group rounded-2xl">
                            <img class="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-x-110 group-hover:scale-y-110 group-hover:opacity-90"
                                src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_4_350x.jpg?v=1610526873" alt="" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetuer</p>
                            <div className='flex justify-center gap-5 my-3'>
                                <p className='text-xs flex items-center  gap-2 text-gray-400'><LiaComments className='size-4' /> 0 COMMENTS</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><CiUser className='size-4' /> BY VOINOVA THEME</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><IoCalendarClearOutline className='size-4' /> 13 JAN 2021</p>
                            </div>
                            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the industry's standard dummy ndustry's standard...</p>
                        </div>
                    </div>

                    <div className='w-[700px]'>
                        <div class="overflow-hidden group rounded-2xl">
                            <img class="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-x-110 group-hover:scale-y-110 group-hover:opacity-90"
                                src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_3_350x.jpg?v=1610526846" alt="" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetuer</p>
                            <div className='flex justify-center gap-5 my-3'>
                                <p className='text-xs flex items-center  gap-2 text-gray-400'><LiaComments className='size-4' /> 0 COMMENTS</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><CiUser className='size-4' /> BY VOINOVA THEME</p>
                                <p className='text-xs flex items-center gap-2 text-gray-400'><IoCalendarClearOutline className='size-4' /> 13 JAN 2021</p>
                            </div>
                            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the industry's standard dummy ndustry's standard...</p>
                        </div>
                    </div>


                </div>
            </section>
            <hr />

        </>
    )
}

export default LatestPost