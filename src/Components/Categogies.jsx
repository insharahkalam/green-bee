import React from 'react'

const Categogies = () => {
  return (
    <>
      <div className='w-[320px]  border shadow-xl rounded-2xl'>
        <div className="relative group flex justify-between items-start gap-3 px-4 py-4 rounded-xl hover:bg-[#e8f3ee] cursor-pointer">

          {/* LEFT ICON */}
          <img
            src="https://greenbee-2.myshopify.com/cdn/shop/files/v-1_50x.png?v=1613769214"
            alt="" className="w-8 h-8" />

          {/* TEXT */}
          <div>
            <p className="text-xl font-semibold">Fresh Fruits</p>
            <p className="text-[14px] text-gray-500">
              Apple, Orange, Watermelon, Banana, Pineapple, Grapes...
            </p>
          </div>

          {/* MEGA DROPDOWN */}
          <div className="absolute -top-1 left-full ml-3 
      w-[550px] bg-white p-6 rounded-xl shadow-xl 
      invisible opacity-0 group-hover:visible group-hover:opacity-100 
      transition-all duration-300 z-50">

            {/* TOP ROW — 2 COLUMNS */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* COLUMN 1: BY CATEGORY */}
              <div>
                <h3 className="text-green-600 font-semibold text-xl mb-2">BY CATEGORY</h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="hover:text-green-700 cursor-pointer">Berries</li>
                  <li className="hover:text-green-700 cursor-pointer">Grapes</li>
                  <li className="hover:text-green-700 cursor-pointer">Mangoes</li>
                  <li className="hover:text-green-700 cursor-pointer">Melons</li>
                  <li className="hover:text-green-700 cursor-pointer">Pears</li>
                  <li className="hover:text-green-700 cursor-pointer">Plums & Apricots</li>
                </ul>
              </div>

              {/* COLUMN 2: BY BRANDS */}
              <div>
                <h3 className="text-green-600 font-semibold text-xl mb-2">BY BRANDS</h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="hover:text-green-700 cursor-pointer">Nova Fruits</li>
                  <li className="hover:text-green-700 cursor-pointer">Nova Organic</li>
                  <li className="hover:text-green-700 cursor-pointer">Visaotoi</li>
                  <li className="hover:text-green-700 cursor-pointer">Vinova</li>
                  <li className="hover:text-green-700 cursor-pointer">Orange</li>
                  <li className="hover:text-green-700 cursor-pointer">Apple</li>
                </ul>
              </div>
            </div>

            {/* BOTTOM ROW — 2 COLUMNS */}
            <div className="grid grid-cols-2">

              {/* COLUMN 3: EXOTIC FRUITS */}
              <div>
                <h3 className="text-green-600 font-semibold text-xl mb-2">EXOTIC FRUITS</h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="hover:text-green-700 cursor-pointer">Berries</li>
                  <li className="hover:text-green-700 cursor-pointer">Tropical Fruits</li>
                  <li className="hover:text-green-700 cursor-pointer">Banana</li>
                </ul>
              </div>

              {/* COLUMN 4: IMAGE */}
              <div className="flex justify-center items-start">
                <img
                  src="https://greenbee-2.myshopify.com/cdn/shop/files/bg_fruit.png?v=1613769352"   // ← Tumhari public folder wali image
                  alt=""
                  className="w-50 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className='group relative flex justify-between items-start gap-3 px-4 py-2.5 hover:bg-sky-50'>
          <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-2_50x.png?v=1613769214" alt="" />
          <div>
            <p className='text-lg'>Vegetables</p>
            <p className='text-[14px] text-gray-500'>Cabbage, Onion, Kale, Parsley Garlic, Asparagus...</p>
          </div>

          {/* MEGA DROPDOWN */}
          <div className="absolute -top-[107px] left-full ml-3 
      w-[650px] bg-white p-6 rounded-xl shadow-xl 
      invisible opacity-0 group-hover:visible group-hover:opacity-100 
      transition-all duration-300 z-50">

            {/* TOP ROW — 2 COLUMNS */}
            <div className="grid grid-cols-3 gap-6 mb-5">

              {/* COLUMN 1: BY CATEGORY */}
              <div>
                <h2 className=" text-[#78B144] text-xl mb-2 uppercase">Daily Vegetables</h2>
                <ul className="space-y-1 text-gray-500">
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Beans & Brinjals</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Broccoli & Cauliflower</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Chilies, Garlic, Lemon & Ginger</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Cut Vegetables & Salads</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Gourd, Cucumber & Pumpkin</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Herbs & Sprouts</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Lettuce & Leafy</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Truffles & Mushrooms</li>
                </ul>
              </div>

              {/* COLUMN 2: BY BRANDS */}
              <div>
                <h2 className=" text-[#78B144] text-xl mb-2 uppercase">Exotic Vegetables</h2>
                <ul className="space-y-1 text-gray-500">
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Avocados & Peppers</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Broccoli & Zucchini</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Celery, Fennel & Leeks</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Chilies & Lime</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Edible Flowers</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Heirloom Tomatoes</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Herbs & Microgreens</li>
                  <li className="hover:text-green-700 cursor-pointer tracking-wide">Lettuce & Leafy Vegetables</li>
                </ul>
              </div>







              <div className="flex justify-center items-start">
                <img
                  src="https://greenbee-2.myshopify.com/cdn/shop/files/bg_vegetables_350x.png?v=1613769352"   // ← Tumhari public folder wali image
                  alt=""
                  className="w-50 h-auto"
                />


              </div>

            </div>
          </div>

        </div>

        <hr />

        <div className='group relative flex justify-between items-start gap-3  px-4 py-2.5 hover:bg-sky-50'>
          <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-3_50x.png?v=1613769214" alt="" />
          <div>
            <p className='text-lg'>Fresh Juices</p>
            <p className='text-[14px] text-gray-500'>Apple, Orange, Watermelon, Banana Pineapple, Grapes...</p>
          </div>

          <div className="absolute top-0 left-full
      w-[200px] bg-white p-6 shadow-xl 
      invisible opacity-0 group-hover:visible group-hover:opacity-100 
      transition-all duration-300 z-50">

            {/* TOP ROW — 2 COLUMNS */}
            <div className="grid grid-cols-1">

              {/* COLUMN 1: BY CATEGORY */}
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="hover:text-green-700 cursor-pointer">Lemonade</li>
                  <li className="hover:text-green-700 cursor-pointer">Orange Juice</li>
                  <li className="hover:text-green-700 cursor-pointer">Grape Juice</li>
                  <li className="hover:text-green-700 cursor-pointer">Pineapple Juice</li>
                  <li className="hover:text-green-700 cursor-pointer">Apple juice</li>
                  <li className="hover:text-green-700 cursor-pointer">Watermelon</li>
                  <li className="hover:text-green-700 cursor-pointer">Cranberry Juice</li>
                  <li className="hover:text-green-700 cursor-pointer">Strawberry Juice</li>
                  <li className="hover:text-green-700 cursor-pointer">White Grape Juice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className='flex justify-between items-start gap-3  px-4 py-2.5 hover:bg-sky-50'>
          <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-4_50x.png?v=1613769214" alt="" />
          <div>
            <p className='text-lg'>Tea & Coffee</p>
            <p className='text-[14px] text-gray-500'>Leamon tea, Peach tea, Milk tea Weight loss tea, Coffee ...</p>
          </div>
        </div>

        <hr />

        <div className='flex justify-between items-start gap-3  px-4 py-2.5 hover:bg-sky-50'>
          <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-5_50x.png?v=1613769214" alt="" />
          <div>
            <p className='text-lg'>Bread</p>
            <p className='text-[14px] text-gray-500'>Bread, CupCake, Croissants, Rice cake, Donus ...</p>
          </div>
        </div>

        <hr />

        <div className='flex justify-between items-start gap-3 px-4 py-3 rounded-b-2xl hover:bg-sky-50'>
          <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-6_50x.png?v=1613769214" alt="" />
          <div>
            <p className='text-lg'>Fesh Meats</p>
            <p className='text-[14px] text-gray-500'>Pork, Beef, Lamb chops, Salmon Chicken, Sausage...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categogies