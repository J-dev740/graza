'use client';
import { Carousel } from 'flowbite-react'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestCarousel() {
    const settings={
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,

    
    }
  return (
    // <div className="flex w-fit h-fit p-2">
    <Slider className='flex  max-w-[340px] object-contain object-center max-h-[200px] p-1 rounded-xl items-start justify-center  w-fit h-fit '
{...settings}

     >
        {/* <div className='flex bg-white w-[200px] h-[200px] rounded-2xl '>hello world</div>
        <div className='flex bg-white w-[200px] h-[200px] rounded-2xl '>hello world</div>
        <div className='flex bg-white w-[200px] h-[200px] rounded-2xl '>hello world</div>
        <div className='flex bg-white w-[200px] h-[200px] rounded-2xl '>hello world</div> */}
            {
        new Array(3).fill(0).map((item, index) => {
            return (
                <div key={index} className=' flex w-fit h-fit ease-in-out  object-center ' >

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
                                <div className='flex w-fit h-fit  items-center justify-center bg-black rounded-lg '>
                                <button className='transition-all transform duration-100 ring-black ring-[1px] hover:cursor-pointer -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 rounded-lg bg-[#FFF4EC] text-black font-bold text-center whitespace-nowrap text-[8px] px-[12px] py-[8px] h-[24px] w-[88px] '>Add to cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        })}


    </Slider>
//   </div>
  )
}

export default TestCarousel