import React from 'react'

const CompanyName = () => {
    const logos = [
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-3_160x160@2x.png?v=1613769390",
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-4_160x160@2x.png?v=1613769390",
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-5_160x160@2x.png?v=1613769391",
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-6_160x160@2x.png?v=1613769391",
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-1_160x160@2x.png?v=1613769390",
        "https://greenbee-2.myshopify.com/cdn/shop/files/m-2_160x160@2x.png?v=1613769390",
    ];

    return (
        <>
            <section className='px-5 sm:px-10 py-10'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 items-center justify-items-center'>
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            className='cursor-pointer object-contain'
                            src={logo}
                            alt={`Company ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default CompanyName
