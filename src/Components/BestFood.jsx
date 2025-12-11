import React from "react";

const BestFood = () => {
    return (
        <>
            <section className="px-6 md:px-10">
                {/* CONTAINER WITH MAX WIDTH */}
                <div className="text-center mt-10">
                    <h1 className="text-3xl md:text-4xl font-semibold">We Grow Best Food</h1>
                    <p className="text-gray-500 mt-1">
                        Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor incididunt
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-10 text-left">
                        <div>
                            <img className="animate-pulse" src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-1_55x.png?v=1613769361" />
                            <p className="text-2xl mt-1 mb-2 text-[#78B144]">Always Fresh</p>
                            <p className="text-gray-500">
                                Maximus, purus quis tincidunt semper, felis tellus mole stie nulla,
                                in finibus erat magna et tortor phasellus a magna lobortis
                            </p>
                        </div>

                        <div>
                            <img className="animate-pulse" src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-2_55x.png?v=1613769361" />
                            <p className="text-2xl mt-1 mb-2 text-[#78B144]">Super Healthy</p>
                            <p className="text-gray-500">
                                Maximus, purus quis tincidunt semper, felis tellus mole stie nulla,
                                in finibus erat magna et tortor phasellus a magna lobortis
                            </p>
                        </div>
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="flex justify-center">
                        <img
                            className="w-full animate-zoom-slow max-w-[500px] mx-auto"
                            src="https://greenbee-2.myshopify.com/cdn/shop/files/img-4_570x.jpg?v=1613769360"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-10 text-right">
                        <div>
                            <img className="ml-auto animate-pulse"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-3_55x.png?v=1613769361"
                            />
                            <p className="text-2xl mt-1 mb-2 text-[#78B144]">Premium Quality</p>
                            <p className="text-gray-500">
                                Maximus, purus quis tincidunt semper, felis tellus mole stie nulla,
                                in finibus erat magna et tortor phasellus a magna lobortis
                            </p>
                        </div>

                        <div>
                            <img
                                className="ml-auto animate-pulse"
                                src="https://greenbee-2.myshopify.com/cdn/shop/files/icon-4_55x.png?v=1613769361"
                            />
                            <p className="text-2xl mt-1 mb-2 text-[#78B144]">100% Natural</p>
                            <p className="text-gray-500">
                                Maximus, purus quis tincidunt semper, felis tellus mole stie nulla,
                                in finibus erat magna et tortor phasellus a magna lobortis
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BestFood;