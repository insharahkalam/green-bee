import React from 'react'

const Categogies = () => {
  return (
    <>
      <div className='w-[320px] border shadow-xl rounded-2xl'>
            <div className='flex justify-between items-start gap-3  px-4 py-2.5 rounded-t-2xl hover:bg-sky-50'>
              <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-1_50x.png?v=1613769214" alt="" />
              <div>
                <p className='text-lg'>Fresh Fruits</p>
                <p className='text-[14px] text-gray-500'>Apple, orange, banana, wetermelon, pineapple , grapes...</p>
              </div>
            </div>

            <hr />

            <div className='flex justify-between items-start gap-3 px-4 py-2.5 hover:bg-sky-50'>
              <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-2_50x.png?v=1613769214" alt="" />
              <div>
                <p className='text-lg'>Vegetables</p>
                <p className='text-[14px] text-gray-500'>Cabbage, Onion, Kale, Parsley Garlic, Asparagus...</p>
              </div>
            </div>

            <hr />

            <div className='flex justify-between items-start gap-3  px-4 py-2.5 hover:bg-sky-50'>
              <img src="https://greenbee-2.myshopify.com/cdn/shop/files/v-3_50x.png?v=1613769214" alt="" />
              <div>
                <p className='text-lg'>Fresh Juices</p>
                <p className='text-[14px] text-gray-500'>Apple, Orange, Watermelon, Banana Pineapple, Grapes...</p>
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