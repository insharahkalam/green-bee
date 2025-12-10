import React from 'react';
import { PiPhoneOutgoingFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {

    const [isRightOpen, setIsRightOpen] = useState(false);
    const [openHome, setOpenHome] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [openBlog, setOpenBlog] = useState(false);
    const [openFruits, setOpenFruits] = useState(false);
    const [openVegetables, setOpenVegetables] = useState(false);
    const [openFreshJuice, setOpenFreshJuice] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);


    return (
        <>
            {/* Full Navbar - Large Screens */}
            <section className="px-10 hidden md:block">
                <div className="grid grid-cols-12 gap-[35px] mt-10">
                    <div className="col-span-3">
                        <img
                            src="https://greenbee-2.myshopify.com/cdn/shop/files/logo_200x.png?v=1613769207"
                            alt="" />
                    </div>

                    <ul className="col-span-7 flex gap-10 mt-3">
                        <li className="text-[16px] cursor-pointer group relative">
                            HOME <i className="fa-solid fa-angle-down fa-2xs text-gray-400"></i>
                            <div className="absolute left-0 top-full bg-white invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 w-60 py-2 px-1">
                                <ul>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Homepage 1</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Homepage 2</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Homepage 3</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Homepage 4</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-[16px] cursor-pointer group relative">PRODUCT <i className="fa-solid fa-angle-down fa-2xs text-gray-400"></i>
                            <div className="absolute left-0 top-full bg-white invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 w-60 py-2 px-1">
                                <ul>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Product Detail Page</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Color Variant Style</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-[16px] cursor-pointer group relative">CATEGORIES <i className="fa-solid fa-angle-down fa-2xs text-gray-400"></i>
                            <div className="absolute left-0 top-full bg-white invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 w-60 py-2 px-1">
                                <ul>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Without Sidebar Layout</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Left Sidebar Layout</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Right Sidebar Layout</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Full Width Layout</li>

                                </ul>
                            </div>
                        </li>
                        <li className="text-[16px] cursor-pointer group relative">PAGES <i className="fa-solid fa-angle-down fa-2xs text-gray-400"></i>
                            <div className="absolute left-0 top-full bg-white invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 w-60 py-2 px-1">
                                <ul>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">About Us</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Contact Us</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">FAQs Page</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Team and Services</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Privacy Policy</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Testimonial Page</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">Our Team</li>
                                    <li className="hover:text-green-700 px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200">404 Error Page</li>

                                </ul>
                            </div>
                        </li>
                        <li className="text-[16px] cursor-pointer group relative">BLOG <i className="fa-solid fa-angle-down fa-2xs text-gray-400"></i>
                            <div className="absolute left-0 top-full bg-white invisible opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 w-60 py-2 px-1">
                                <ul>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Blog Grid</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Blog List</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Blog Details</li>
                                    <li className="px-4 py-2 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-green-700">Blog Categories</li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className="flex gap-2">
                        <div className="bg-[#0D7A52] hover:bg-green-500 p-3 rounded-full flex items-center justify-center">
                            <IoSettingsOutline className='text-white size-5' />
                        </div>
                        <div className="bg-[#0D7A52] hover:bg-green-500 p-3 rounded-full flex items-center justify-center">
                            <FaShoppingBasket className='text-white size-5' />

                        </div>

                        <div className='mt-3 whitespace-nowrap text-[16px] cursor-pointer text-[#0D7A52]'>
                            My Cart
                        </div>


                    </div>
                </div>

                <div className='w-100 flex justify-between h-[70px] mt-5 pt-1'>
                    <button className='rounded-full text-white bg-[#0D7A52] h-[60px] tracking-wide w-[280px] text-2xl flex justify-start px-4 items-center gap-8 text-center'>
                        <i className="fa-solid fa-xmark fa-2xs text-[#e6b400]"></i> Categories
                    </button>
                    <div className='rounded-full text-white bg-[#0D7A52] h-[65px] tracking-wide w-[890px] text-2xl flex justify-between px-2 items-center'>
                        <div className="relative w-[580px]">
                            <input
                                className="rounded-full text-[#0D7A52] outline-none text-[16px] bg-[#ffffff] h-[50px] w-full uppercase px-4 pr-12 tracking-wider"
                                type="text"
                                placeholder="Enter Your Keyword...."
                            />
                            <button className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-[#F09300] absolute right-[3px] top-1/2 -translate-y-1/2">
                                <FiSearch className="text-white text-[20px]" />
                            </button>
                        </div>

                        <button className='rounded-full text-black bg-[#ffffff] h-[50px] tracking-wide w-[270px] ps-2 flex gap-5 items-center'>
                            <PiPhoneOutgoingFill className='text-[#0D7A52]' size={40} />
                            <div className='flex justify-between items-center w-full pe-2'>
                                <div className='leading-tight'>
                                    <p className='text-[16px] tracking-wider text-gray-400 text-start'>Call us now:</p>
                                    <p className='text-[16px] text-[#0D7A52] font-extrabold'>031-5338-5735</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Small Navbar - Mobile Screens */}
            <div className='px-6 flex items-center justify-between bg-white shadow-lg p-2 md:hidden'>

                {/* <!-- drawer init and show --> */}
                <div>
                    <button onClick={() => setOpenDrawer(true)}>
                        <BiMenuAltLeft className="mt-2 text-2xl" />
                    </button>

                </div>

                {openDrawer && (
                    <div
                        onClick={() => setOpenDrawer(false)}
                        className="fixed inset-0 bg-black/40 z-40"
                    ></div>
                )}




                {/* <!-- drawer component --> */}
                <div
                    className={`fixed top-0 left-0 z-50 w-[300px] h-screen overflow-y-auto bg-gray-100 border-e border-default transition-transform duration-300
  ${openDrawer ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <button
                        className="p-3 text-xl"
                        onClick={() => setOpenDrawer(false)}
                    >
                        ✖
                    </button>


                    <div className="py-5 overflow-y-auto">
                        <ul className="space-y-2 font-medium">

                            <li className="flex flex-col w-full">
                                {/* MAIN ROW */}
                                <div
                                    className="flex justify-between items-start gap-3 px-4 rounded-t-2xl hover:bg-[#EAF2EF] cursor-pointer"
                                    onClick={() => setOpenFruits(!openFruits)}
                                >
                                    <img
                                        src="https://greenbee-2.myshopify.com/cdn/shop/files/v-1_50x.png?v=1613769214"
                                        alt=""
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg flex justify-between items-center">
                                            Fresh Fruits
                                            <IoMdArrowDropright
                                                className={`text-gray-500 transform transition-transform duration-300 ${openFruits ? "rotate-90 text-green-700" : ""
                                                    }`}
                                            />
                                        </p>
                                        <p className="text-[14px] text-gray-500">
                                            Apple, orange, banana, watermelon, pineapple, grapes...
                                        </p>
                                    </div>
                                </div>

                                {/* DROPDOWN CONTENT */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 pl-5 mt-1 ${openFruits ? "max-h-[700px]" : "max-h-0"
                                        }`}
                                >
                                    <h2 className=' text-2xl text-[#78B144] my-2 uppercase'>By category</h2>
                                    <ul className="space-y-1 text-gray-500">
                                        <li className="hover:text-green-700 text-sm tracking-wide">Berries</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Grapes</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Mongoes</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Melons</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Pears</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Plums & Apricots</li>
                                    </ul>
                                    <h2 className=' text-2xl text-[#78B144] my-2 uppercase'>By Brands</h2>
                                    <ul className="space-y-1 text-gray-500">
                                        <li className="hover:text-green-700 text-sm tracking-wide">Nova Fruits</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Nova Organic</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Visaotoi</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Vinova</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Orange</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Apple</li>
                                    </ul>
                                    <h2 className=' text-2xl text-[#78B144] my-2 uppercase'>Exotic Fruits</h2>
                                    <ul className="space-y-1 text-gray-500">
                                        <li className="hover:text-green-700 text-sm tracking-wide">Berries</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Tropical Fruits</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Banana</li>
                                    </ul>
                                    <img className='ms-0' src="https://greenbee-2.myshopify.com/cdn/shop/files/bg_fruit.png?v=1613769352" alt="" />
                                </div>
                            </li>
                            <hr />

                            <li className="flex flex-col w-full">
                                {/* MAIN ROW */}
                                <div
                                    className="flex justify-between items-start gap-3 px-4 hover:bg-sky-50 cursor-pointer"
                                    onClick={() => setOpenVegetables(!openVegetables)}
                                >
                                    <img
                                        src="https://greenbee-2.myshopify.com/cdn/shop/files/v-2_50x.png?v=1613769214"
                                        alt=""
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg flex justify-between items-center w-full">
                                            Vegetables
                                            <IoMdArrowDropright
                                                className={`text-gray-500 transform transition-transform duration-300 ${openVegetables ? "rotate-90 text-green-700" : ""
                                                    }`}
                                            />
                                        </p>
                                        <p className="text-[14px] text-gray-500">
                                            Cabbage, Onion, Kale, Parsley, Garlic, Asparagus...
                                        </p>
                                    </div>
                                </div>

                                {/* DROPDOWN CONTENT */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 pl-5 mt-1 ${openVegetables ? "max-h-[750px]" : "max-h-0"
                                        }`}
                                >
                                    <h2 className="text-2xl text-[#78B144] my-2 uppercase">Daily Vegetables</h2>
                                    <ul className="space-y-1 text-gray-500">
                                        <li className="hover:text-green-700 text-sm tracking-wide">Beans & Brinjals</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Broccoli & Cauliflower</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Chilies, Garlic, Lemon & Ginger</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Cut Vegetables & Salads</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Gourd, Cucumber & Pumpkin</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Herbs & Sprouts</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Lettuce & Leafy</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Truffles & Mushrooms</li>
                                    </ul>

                                    <h2 className="text-2xl text-[#78B144] my-2 uppercase">Exotic Vegetables</h2>
                                    <ul className="space-y-1 text-gray-500">
                                        <li className="hover:text-green-700 text-sm tracking-wide">Avocados & Peppers</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Broccoli & Zucchini</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Celery, Fennel & Leeks</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Chilies & Lime</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Edible Flowers</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Heirloom Tomatoes</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Herbs & Microgreens</li>
                                        <li className="hover:text-green-700 text-sm tracking-wide">Lettuce & Leafy Vegetables</li>
                                    </ul>
                                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/bg_vegetables_350x.png?v=1613769352" alt="" />
                                </div>
                            </li>
                            <hr />

                            <li className="flex flex-col w-full">
                                {/* MAIN ROW */}
                                <div
                                    className="flex justify-between items-start gap-3 px-4 hover:bg-sky-50 cursor-pointer"
                                    onClick={() => setOpenFreshJuice(!openFreshJuice)}
                                >
                                    <img
                                        src="https://greenbee-2.myshopify.com/cdn/shop/files/v-3_50x.png?v=1613769214"
                                        alt=""
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg flex justify-between items-center w-full">
                                            Fresh Juices
                                            <IoMdArrowDropright
                                                className={`text-gray-500 transform transition-transform duration-300 ${openFreshJuice ? "rotate-90 text-green-700" : ""
                                                    }`}
                                            />
                                        </p>
                                        <p className="text-[14px] text-gray-500">
                                            Apple, Orange, Watermelon, Banana Pineapple, Grapes...
                                        </p>
                                    </div>
                                </div>

                                {/* DROPDOWN CONTENT */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 flex justify-center mt-1 ${openFreshJuice ? "max-h-[600px]" : "max-h-0"
                                        }`}
                                >

                                    <ul className="space-y-1 mt-3 text-gray-500">
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Lemonade</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Orange Juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Grape Juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Pineapple Juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Apple juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Watermelon</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Cranberry Juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">Strawberry Juice</li>
                                        <li className="hover:text-green-700 text-sm text-start tracking-wide">White Grape Juice</li>
                                    </ul>


                                </div>
                            </li>
                            <hr />

                            <li>
                                <div className='flex justify-between items-start gap-3  px-4 hover:bg-sky-50'>
                                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-4_50x.png?v=1613769214" alt="" />
                                    <div>
                                        <p className='text-lg'>Tea & Coffee</p>
                                        <p className='text-[14px] text-gray-500'>Leamon tea, Peach tea, Milk tea Weight loss tea, Coffee ...</p>
                                    </div>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className='flex justify-between items-start gap-3  px-4 hover:bg-sky-50'>
                                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-5_50x.png?v=1613769214" alt="" />
                                    <div>
                                        <p className='text-lg'>Bread</p>
                                        <p className='text-[14px] text-gray-500'>Bread, CupCake, Croissants, Rice cake, Donus ...</p>
                                    </div>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className='flex justify-between items-start gap-3 px-4  rounded-b-2xl hover:bg-sky-50'>
                                    <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-6_50x.png?v=1613769214" alt="" />
                                    <div>
                                        <p className='text-lg'>Fesh Meats</p>
                                        <p className='text-[14px] text-gray-500'>Pork, Beef, Lamb chops, Salmon Chicken, Sausage...</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div>
                    <a href="/">
                        <img
                            width={80}
                            className="sm:w-20 w-16"
                            src="https://greenbee-2.myshopify.com/cdn/shop/files/logo_200x.png?v=1613769207"
                            alt=""
                        />
                    </a>
                </div>
                <div className="relative flex-1 mx-2">
                    <input
                        className="rounded-full text-[#0D7A52] border-none outline-none text-[16px] bg-gray-100 h-[40px] w-full px-4 pr-12 tracking-wider"
                        type="text"
                        placeholder="Enter Your Keyword...."
                    />
                    <FiSearch className="text-green-700 absolute right-3 top-1/2 -translate-y-1/2 text-[20px]" />
                </div>


                {/* RIGHT MENU BUTTON */}
                <button onClick={() => setIsRightOpen(true)}>
                    <HiOutlineMenu size={20} />
                </button>

                <div
                    className={`fixed top-0 right-0 z-50 w-[300px] h-screen bg-white shadow-xl transition-transform duration-300
                ${isRightOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="p-4 border-b">

                        <button className='flex justify-center w-full' onClick={() => setIsRightOpen(false)}><IoIosClose size={30} /></button>
                    </div>

                    <div className="px-6 py-10 flex justify-between items-center flex-col gap-5">

                        <div className="flex flex-col w-full">

                            {/* HOME Row */}
                            <div className='flex justify-between items-center w-full group cursor-pointer'
                                onClick={() => setOpenHome(!openHome)}>

                                <div className="relative">
                                    <p className="hover:text-green-700">HOME</p>

                                    {/* Hover underline */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </div>

                                <IoMdArrowDropright
                                    size={20}
                                    className={`text-gray-400 transform transition-transform duration-300
                       ${openHome ? "rotate-90 text-green-700" : ""}`}
                                />
                            </div>

                            {/* Dropdown (only when open) */}
                            <div className={`overflow-hidden transition-all duration-300 
                    ${openHome ? "max-h-40 mt-2" : "max-h-0"}`}>

                                <ul className="pl-5 space-y-2 text-gray-600">
                                    <li className="hover:text-green-700 text-sm">Homepage 1</li>
                                    <li className="hover:text-green-700 text-sm">Homepage 2</li>
                                    <li className="hover:text-green-700 text-sm">Homepage 3</li>
                                    <li className="hover:text-green-700 text-sm">Homepage 4</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col w-full">

                            {/* PRODUCT Row */}
                            <div
                                className="flex justify-between items-center w-full group cursor-pointer"
                                onClick={() => setOpenProduct(!openProduct)}
                            >
                                <p className="hover:text-green-700 relative">
                                    PRODUCT
                                    {/* Hover underline */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </p>

                                <IoMdArrowDropright
                                    size={20}
                                    className={`text-gray-400 transform transition-transform duration-300
                       ${openProduct ? "rotate-90 text-green-700" : ""}`}
                                />
                            </div>

                            {/* Dropdown Items */}
                            <div
                                className={`overflow-hidden transition-all duration-300
                    ${openProduct ? "max-h-40 mt-2" : "max-h-0"}`}
                            >
                                <ul className="pl-5 space-y-2 text-gray-600">
                                    <li className=" text-sm hover:text-green-700">Product Detail Page</li>
                                    <li className="text-sm hover:text-green-700">Color Variant Style</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col w-full">

                            {/* CATEGORIES Row */}
                            <div
                                className="flex justify-between items-center w-full group cursor-pointer"
                                onClick={() => setOpenCategories(!openCategories)}
                            >
                                <p className="hover:text-green-700 relative">
                                    CATEGORIES
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </p>

                                <IoMdArrowDropright
                                    size={20}
                                    className={`text-gray-400 transform transition-transform duration-300
                       ${openCategories ? "rotate-90 text-green-700" : ""}`}
                                />
                            </div>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300
                    ${openCategories ? "max-h-40 mt-2" : "max-h-0"}`}
                            >
                                <ul className="pl-5 space-y-2 text-gray-600">
                                    <li className="hover:text-green-700 text-sm">Without Sidebar Layout</li>
                                    <li className="hover:text-green-700 text-sm">Left Sidebar Layout</li>
                                    <li className="hover:text-green-700 text-sm">Right Sidebar Layout</li>
                                    <li className="hover:text-green-700 text-sm">Full Width Layout</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col w-full">

                            {/* PAGES Row */}
                            <div
                                className="flex justify-between items-center w-full group cursor-pointer"
                                onClick={() => setOpenPages(!openPages)}
                            >
                                <p className="hover:text-green-700 relative">
                                    PAGES
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </p>

                                <IoMdArrowDropright
                                    size={20}
                                    className={`text-gray-400 transform transition-transform duration-300
                ${openPages ? "rotate-90 text-green-700" : ""}`}
                                />
                            </div>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300
            ${openPages ? "max-h-96 mt-2" : "max-h-0"}`}
                            >
                                <ul className="pl-5 space-y-2 text-gray-600">
                                    <li className="hover:text-green-700 text-sm">About Us</li>
                                    <li className="hover:text-green-700 text-sm">Contact Us</li>
                                    <li className="hover:text-green-700 text-sm">FAQs Page</li>
                                    <li className="hover:text-green-700 text-sm">Team and Services</li>
                                    <li className="hover:text-green-700 text-sm">Privacy Policy</li>
                                    <li className="hover:text-green-700 text-sm">Testimonial Page</li>
                                    <li className="hover:text-green-700 text-sm">Our Team</li>
                                    <li className="hover:text-green-700 text-sm">404 Error Page</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col w-full">

                            {/* BLOG Row */}
                            <div
                                className="flex justify-between items-center w-full group cursor-pointer"
                                onClick={() => setOpenBlog(!openBlog)}
                            >
                                <p className="hover:text-green-700 relative">
                                    BLOG
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </p>

                                <IoMdArrowDropright
                                    size={20}
                                    className={`text-gray-400 transform transition-transform duration-300
                ${openBlog ? "rotate-90 text-green-700" : ""}`}
                                />
                            </div>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300
            ${openBlog ? "max-h-40 mt-2" : "max-h-0"}`}
                            >
                                <ul className="pl-5 space-y-2 text-gray-600">
                                    <li className="hover:text-green-700 text-sm">Blog Grid</li>
                                    <li className="hover:text-green-700 text-sm">Blog List</li>
                                    <li className="hover:text-green-700 text-sm">Blog Details</li>
                                    <li className="hover:text-green-700 text-sm">Blog Categories</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                {isRightOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-40"
                        onClick={() => setIsRightOpen(false)}
                    ></div>
                )}

            </div>
        </>
    )
}

export default Navbar;
