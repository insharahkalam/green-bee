import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const OurProducts = () => {

    const productImages = [
        "https://greenbee-2.myshopify.com/cdn/shop/products/20_6512ebbc-8084-4fea-890a-1e13b41465bd_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/8_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/26_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/13_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/6_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/3_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/5_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/7_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/9_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/12_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/10_370x.jpg?v=1610525619"
    ];

    const hoverImages = [
        "https://greenbee-2.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/20_6512ebbc-8084-4fea-890a-1e13b41465bd_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/6_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/8_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/5_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/7_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/9_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/13_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/10_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/3_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/26_370x.jpg?v=1610525619",
        "https://greenbee-2.myshopify.com/cdn/shop/products/12_370x.jpg?v=1610525619"
    ];

    return (
        <>
            <section className='px-4 sm:px-10 pb-20'>
                <div className='text-center mt-20'>
                    <p className='text-3xl sm:text-4xl'>Discover Our Products</p>
                    <p className='text-gray-500 text-sm sm:text-base'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                    </p>
                </div>

                {/* Categories */}

                <div className="mt-9">
                    <div className="flex flex-wrap justify-center gap-5 mx-auto">

                        {["All Product", "Vegetables", "Fruits", "Bread", "Juices", "Tea"].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center cursor-pointer relative group"
                            >
                                {/* ICON */}
                                <img
                                    src={`https://greenbee-2.myshopify.com/cdn/shop/files/icon-${5 + index}_150x.png`}
                                    className="w-8 h-8 2xl:w-20 2xl:h-20"
                                />

                                {/* TEXT */}
                                <p className="mt-2 font-semibold">{item}</p>

                                {/* UNDERLINE EXACT BELOW TEXT */}
                                <span
                                    className="absolute rounded-xl bottom-[-9px] h-[3px] bg-green-600 w-0 transition-all duration-300 group-hover:w-full"
                                ></span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="border-gray-300 mt-2" />

                {/* Products Section */}

                <div
                    className="
                               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                               gap-6 mt-10">

                    {productImages.map((img, index) => (
                        <div key={index} className="group w-full h-[200px] sm:h-[220px] 
                             flex justify-center items-center gap-4 
                             shadow-gray-300 rounded-xl shadow-lg 
                             cursor-pointer p-4">

                            <div className="relative w-[150px] sm:w-[180px] md:w-[200px] 
                    h-[120px] sm:h-[140px] md:h-[160px] overflow-hidden">

                                <img
                                    src={img}
                                    className="w-full h-full object-cover absolute inset-0 
                   transition-all duration-500 transform 
                   translate-y-0 opacity-100 
                   group-hover:-translate-y-6 group-hover:opacity-0"
                                />

                                <img
                                    src={hoverImages[index]}
                                    className="w-full h-full object-cover absolute inset-0 
                   transition-all duration-500 transform 
                   translate-y-6 opacity-0 
                   group-hover:translate-y-0 group-hover:opacity-100"
                                />
                            </div>

                            {/* Right Side Content */}
                            <div className="relative overflow-hidden">
                                <p className="text-sm sm:text-base transition-all duration-500 
                    transform translate-y-3 group-hover:-translate-y-1">
                                    Xiamond Calo Stud Garrings
                                </p>
                                <p className="font-extrabold mt-2 transition-all duration-500 
                    transform translate-y-3 group-hover:-translate-y-1 ">
                                    $876.77
                                </p>

                                <div className="opacity-0 translate-y-6 group-hover:opacity-100 
                      group-hover:translate-y-0 transition-all duration-500 
                      flex gap-2 mt-3">
                                    <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center">
                                        <HiOutlineShoppingBag className='text-gray-700 hover:text-white' size={20} />
                                    </button>
                                    <button className="w-8 h-8 hover:bg-green-700 bg-gray-200 text-white rounded-full flex justify-center items-center">
                                        <IoMdHeartEmpty className='text-gray-700 hover:text-white' size={20} />
                                    </button>
                                    <button className="w-8 h-8 hover:bg-green-700 bg-gray-100 text-white rounded-full flex justify-center items-center">
                                        <CiSearch className='text-gray-700 hover:text-white' size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurProducts;
