import React from 'react'
import { LiaComments } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

const LatestPost = () => {
    const posts = [
        {
            img: "https://greenbee-2.myshopify.com/cdn/shop/articles/blog_5_350x.jpg?v=1610526895",
            title: "Lorem ipsum dolor sit amet consectetuer",
            comments: 0,
            author: "VOINOVA THEME",
            date: "13 JAN 2021",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
        {
            img: "https://greenbee-2.myshopify.com/cdn/shop/articles/blog_4_350x.jpg?v=1610526873",
            title: "Lorem ipsum dolor sit amet consectetuer",
            comments: 0,
            author: "VOINOVA THEME",
            date: "13 JAN 2021",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
        {
            img: "https://greenbee-2.myshopify.com/cdn/shop/articles/blog_3_350x.jpg?v=1610526846",
            title: "Lorem ipsum dolor sit amet consectetuer",
            comments: 0,
            author: "VOINOVA THEME",
            date: "13 JAN 2021",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
    ];

    return (
        <>
            <section className='px-5 sm:px-10 pb-20 pt-10'>
                <h1 className='text-center text-3xl '>
                    Latest Post
                </h1>

                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                    {posts.map((post, index) => (
                        <div key={index} className='w-full max-w-[700px]'>
                            <div className="overflow-hidden group rounded-2xl">
                                <img
                                    src={post.img}
                                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-x-110 group-hover:scale-y-110 group-hover:opacity-90"
                                    alt=""
                                />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-gray-800'>{post.title}</p>
                                <div className='flex justify-center gap-5 my-3'>
                                    <p className='text-xs flex items-center gap-2 text-gray-400'><LiaComments className='size-4' /> {post.comments} COMMENTS</p>
                                    <p className='text-xs flex items-center gap-2 text-gray-400'><CiUser className='size-4' /> BY {post.author}</p>
                                    <p className='text-xs flex items-center gap-2 text-gray-400'><IoCalendarClearOutline className='size-4' /> {post.date}</p>
                                </div>
                                <p className='text-gray-500'>{post.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <hr />
        </>
    )
}

export default LatestPost;
