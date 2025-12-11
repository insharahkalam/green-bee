import React from 'react'

const CardsSection = () => {
    return (
        <>
            <section className="px-4 md:px-10">

                {/* -------- TOP 3 IMAGES (RESPONSIVE) -------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    <img className="w-full h-auto rounded-lg object-cover transition-all duration-700 transform hover:scale-x-105 cursor-pointer hover:scale-y-105" src="https://greenbee-2.myshopify.com/cdn/shop/files/img-1_1920x1920.jpg?v=1613769357" alt="" />
                    <img className="w-full h-auto rounded-lg object-cover transition-all duration-700 transform hover:scale-x-105 cursor-pointer hover:scale-y-105" src="https://greenbee-2.myshopify.com/cdn/shop/files/img-2_1920x1920.jpg?v=1613769357" alt="" />
                    <img className="w-full h-auto rounded-lg object-cover transition-all duration-700 transform hover:scale-x-105 cursor-pointer hover:scale-y-105" src="https://greenbee-2.myshopify.com/cdn/shop/files/img-3_1920x1920.jpg?v=1613769357" alt="" />
                </div>

                {/* -------- POLICY CARDS (FULLY RESPONSIVE) -------- */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

                    {/* CARD 1 */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex justify-center items-center shrink-0">
                            <img className="absolute animate-spin inset-0 w-full h-full object-contain"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" />
                            <img className="absolute w-5 h-5"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/p-1_45x.png?v=1613769359" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Cash on Delivery</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}

                    <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex justify-center items-center shrink-0">
                            <img className="absolute animate-spin inset-0 w-full h-full object-contain"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" />
                            <img className="absolute w-5 h-5"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/p-2_45x.png?v=1613769359" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Free Shipping</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}

                    <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex justify-center items-center shrink-0">
                            <img className="absolute animate-spin inset-0 w-full h-full object-contain"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/bicon_policy_85x.png?v=1613769358" />
                            <img className="absolute w-5 h-5"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/p-3_45x.png?v=1613769359" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Money Back Guarantee</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CardsSection
