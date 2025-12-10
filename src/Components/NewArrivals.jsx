import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { PiHeartStraightThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const NewArrivals = () => {

    const products = [
        {
            title: "Riamond Halo Stud Garrings",
            price: "$5.00",
            oldPrice: "$14.00",
            img1: "https://greenbee-2.myshopify.com/cdn/shop/products/7_ff0cf4c5-94ed-49d2-841d-b1c8a0315abe_270x.jpg?v=1610525734",
            img2: "https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734",
        },
        {
            title: "Riamond Halo Stud Garrings",
            price: "$5.00",
            oldPrice: "$14.00",
            img1: "https://greenbee-2.myshopify.com/cdn/shop/products/9_270x.jpg?v=1610525717",
            img2: "https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734",
        },
        {
            title: "Riamond Halo Stud Garrings",
            price: "$5.00",
            oldPrice: "$14.00",
            img1: "https://greenbee-2.myshopify.com/cdn/shop/products/11_270x.jpg?v=1610525694",
            img2: "https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734",
        },
        {
            title: "Riamond Halo Stud Garrings",
            price: "$5.00",
            oldPrice: "$14.00",
            img1: "https://greenbee-2.myshopify.com/cdn/shop/products/13_270x.jpg?v=1610525678",
            img2: "https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734",
        },
        {
            title: "Riamond Halo Stud Garrings",
            price: "$5.00",
            oldPrice: "$14.00",
            img1: "https://greenbee-2.myshopify.com/cdn/shop/products/15_270x.jpg?v=1610525661",
            img2: "https://greenbee-2.myshopify.com/cdn/shop/products/31_8c763282-1c0d-4fd7-a1b0-98628974d696_270x.jpg?v=1610525734",
        },

    ];

    return (
        <>
            <section className='px-10 py-10'>
                <div className='flex flex-wrap items-center justify-between'>
                    <div
                        className='btns flex flex-wrap items-center gap-3'>
                        <button className='rounded-3xl bg-[#0D7A52] px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                        <button className='rounded-3xl bg-[#78B144] hover:bg-[#0D7A52] transition duration-500 px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                        <button className='rounded-3xl bg-[#78B144] hover:bg-[#0D7A52] transition duration-500 px-8 py-2.5 text-white text-md uppercase'>New Arrivals</button>
                    </div>
                </div>

                <div className='grid gap-4 my-5 justify-center
                grid-cols-2     /* default: mobile */
                sm:grid-cols-2   /* small screens: 2 cards */
                md:grid-cols-3   /* medium screens: 3 cards */
                lg:grid-cols-5   /* large screens: 4 cards */'>
                    {products.map((product, index) => (
                        <div key={index} className='hover:shadow-2xl border rounded-xl mt-5'>
                            <div className='group w-full relative'>
                                <img className='rounded-xl w-full h-auto group-hover:opacity-0 transition-all group-hover:-translate-y-3 duration-500' src={product.img1} alt="" />
                                <img className='rounded-xl w-full h-auto group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all group-hover:-translate-y-5 duration-500' src={product.img2} alt="" />
                                <div className="opacity-0 absolute bottom-2 left-1/2 -translate-x-1/2 justify-center translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex gap-2">
                                    <button className="w-10 h-10 hover:bg-green-700 transform duration-300 text-gray-700 hover:text-white bg-white shadow-xl rounded-full flex justify-center items-center"><CiSearch size={20} /></button>
                                    <button className="w-10 h-10 hover:bg-green-700 transform duration-300 text-gray-700 hover:text-white bg-white shadow-xl rounded-full flex justify-center items-center"><PiHeartStraightThin size={20} /></button>
                                </div>
                            </div>
                            <div className='text-center mt-2'>
                                <p className='text-lg tracking-wide text-gray-700'>{product.title}</p>
                                <span className='font-extrabold text-lg'>{product.price}</span>
                                <del className='font-extrabold text-lg text-gray-300 ms-2'>{product.oldPrice}</del>
                                <button className='flex items-center gap-2 text-sm uppercase px-4 py-2 -mb-3 mt-3 mx-auto rounded-3xl bg-[#F0F0F0] hover:bg-[#0D7A52] hover:text-white transition duration-300 text-black'><FaCheck /> Select options</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-10'>
                    <img className='w-full h-auto' src="https://greenbee-2.myshopify.com/cdn/shop/files/img-6_1920x1920.jpg?v=1613769390" alt="" />
                </div>

            </section>
        </>
    )
}

export default NewArrivals