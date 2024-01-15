'use client';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'flowbite-react'

function Carouselcart() {



    return (
<div className='flex items-center justify-between '>
<Carousel className='text-black'>
    {
        new Array(3).fill(0).map((item, index) => {
            return (
                <div key={index} className=' flex w-fit h-fit ease-in-out' >

                    <div className='p-[8px] rounded-[10px] flex flex-row items-stretch gap-[12px]
bg-[#D1E030] '>
                        {/* img part */}
                        <div
                            // style={{backgroundImage:`url(https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972)`}}
                            className='w-full h-full  '>
                            <img src="https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972"
                                className='w-full h-full object-cover object-center   rounded-[10px]' alt='...' />

                        </div>
                        {/* product  */}
                        <div className='w-full h-fit  gap-10 flex flex-col justify-between items-start  text-[16px] font-medium '>
                            <div className='flex flex-col w-full h-full gap-[4px] justify-between items-start text-wrap font-medium leading-tight'>
                                <p>Want to add "Drizzle"?</p>
                                <span>1 Bottle</span>

                            </div>
                            <div className='flex flex-row items-center w-full h-full  justify-between '>
                                <span>#21</span>
                                <button className='rounded-[10px] bg-white text-black font-bold '>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            );
        })}

</Carousel>

</div>


    )
}

export default Carouselcart