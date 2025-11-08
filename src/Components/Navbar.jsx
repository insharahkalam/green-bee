import React from 'react'

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
                    <div className="bg-[#0D7A52] p-3 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                    </div>
                    <div className="bg-[#0D7A52] p-3 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
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

<div className='w-100 flex justify-between bg-red-100 h-[70px] mt-7 pt-1'>
    <button className='rounded-full text-white bg-[#0D7A52] h-[60px] tracking-wide w-[280px] text-2xl flex justify-start px-4 items-center gap-8 text-center'><i className="fa-solid fa-xmark fa-2xs text-[#e6b400]"></i> Categories</button>
<div className='rounded-full text-white bg-[#0D7A52] h-[65px] tracking-wide w-[890px] text-2xl flex justify-between px-2 items-center'> 
<input className='rounded-full text-white text-[16px] bg-[#ffffff] h-[50px] w-[580px]  px-4 tracking-wider items-center ' type="text" placeholder='Enter Your Keyword' id="" />
<button className='rounded-full text-black bg-[#ffffff] h-[50px] tracking-wide w-[270px] px-2 text-2xl flex justify-start items-center'>Contact</button>
</div>
</div>

</section>
        </>
    )
}

export default Navbar




// import React from 'react'

// const Navbar = () => {
//     return (
//         <>
//             <div className='mx-10 grid grid-cols-12 gap-[35px] mt-10'>
//                 {/* Logo */}
//                 <div className='col-span-3'>
//                     <a href="/"> 
//                       <img src="https://greenbee-2.myshopify.com/cdn/shop/files/logo_200x.png?v=1613769207" alt="" />
//                     </a>
//                 </div>

//                 {/* Menu */}
//              <ul className="flex gap-10 mt-3 text-black">
//   <li className="relative group cursor-pointer">
//     <span className="hover:text-green-600">CATEGORIES ▾</span>
//     {/* Dropdown */}
//     <ul className="absolute left-0 mt-2 hidden w-48 rounded-md bg-white shadow-lg group-hover:block">
//       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Without Sidebar Layout</li>
//       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Left Sidebar Layout</li>
//       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Right Sidebar Layout</li>
//       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Full Width Layout</li>
//     </ul>
//   </li>
  
//   <li className="cursor-pointer hover:text-green-600">PRODUCT</li>
//   <li className="cursor-pointer hover:text-green-600">PAGES</li>
//   <li className="cursor-pointer hover:text-green-600">BLOG</li>
// </ul>


//                 {/* Icons + Cart */}
//                 <div className="flex items-center gap-2">
//                     <div className="bg-[#0D7A52] p-3 rounded-full flex items-center justify-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
//                     </div>

//                     <div className="bg-[#0D7A52] p-3 rounded-full flex items-center justify-center relative">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
//                         <span className="absolute top-4 -right-2 bg-green-400 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
//                             0
//                         </span>
//                     </div>

//                     <div className='mx-4 whitespace-nowrap text-[#0D7A52] text-sm font-medium'>
//                       My Cart
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar
