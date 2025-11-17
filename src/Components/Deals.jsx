import React from 'react'

const Deals = () => {
    return (
        <>
            <section className='px-10 py-20 bg-[#F7F6F2]'>

                <div className='text-center'>
                    <h1 className='text-4xl'>Flash Deals</h1>
                    <p className='text-sm text-gray-500'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                </div>


                <div className='flex justify-between mt-5 items-center'>
                    <div className='w-[575px] flex p-3 bg-white h-[260px] rounded-3xl shadow-lg'>

                        <div className='w-50'>
                            <img className='w-1/2' src="./images/stawberry.png" alt="" />
                        </div>

                        <div className='w-50'>
                            <p>Aiamond Qalo Stud Farrings</p>

                        </div>

                    </div>
                    <div className='w-[575px] flex p-3 bg-white h-[260px] rounded-3xl shadow-lg'>

                        <div className='w-50'>
                            <img className='w-1/2' src="./images/stawberry.png" alt="" />
                        </div>

                        <div className='w-50'>
                            <p>Aiamond Qalo Stud Farrings</p>

                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}

export default Deals