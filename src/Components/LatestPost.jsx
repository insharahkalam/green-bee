import React from 'react'

const LatestPost = () => {
    return (
        <>
            <section className='px-10'>
                <h1 className='text-center text-3xl '>
                    Latest Post
                </h1>

                <div className='mt-5 flex justify-between gap-5 items-center'>
                    {/* <div>
                        <img className='rounded-2xl w-[700px] hover:transition-all' src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_5_350x.jpg?v=1610526895" alt="" />
                    </div> */}


                    <div class="overflow-hidden group w-[700px]">
                        <img
                            src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_5_350x.jpg?v=1610526895"
                            class="w-full h-full object-cover rounded-2xl transition-all duration-700 transform group-hover:scale-125 group-hover:opacity-90"
                        />
                    </div>


                    <div>
                        <img className='rounded-2xl w-[700px] hover:transition-all' src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_4_350x.jpg?v=1610526873" alt="" />
                    </div>
                    <div>
                        <img className='rounded-2xl w-[700px] hover:transition-all' src="https://greenbee-2.myshopify.com/cdn/shop/articles/blog_3_350x.jpg?v=1610526846" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestPost