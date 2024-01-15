
import React, { useEffect, useState } from 'react'
import Carouselcart from './carousel';
import Slider from 'react-slick';
import TestCarousel from './testcarousel';
import { Progress } from 'flowbite-react';
import { Router } from 'next/router';
import Link from 'next/link';
import { numberFormat } from 'highcharts';


interface IcartItem {
    quantity:number,
    price:number,
    name:string,
    // available:string,
    totalPrice:number
  }

  interface ICart {
    handleExit: () => void;
    cartItems: IcartItem[];
    setItems: (items:IcartItem) => any;
    deleteItem:(index:number)=>any;
    updateItem:(index:number,q:number)=>any;
}

function Cart({ handleExit,cartItems,setItems,deleteItem,updateItem }: ICart) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        // lazyLoad:"",


    }
    const [carouselItems, setCarouselItems] = useState([
        {
            price: 21,
            name: `"Drizzle"`,
            quantity: "1 bottle"

        },
        {
            price: 16,
            name: ` "Sizzle"`,
            quantity: "1 bottle"

        }
    ])
    const [gift, setGift] = useState(false);
    const [subtotal,setSubTotal]=useState(0);
    const [p ,setP]=useState<number>(30)
    const [start,setStart]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setStart(true)
        },1000);
        setTimeout(()=>{
            setStart(false)
        },1100);

    },[])
    useEffect(()=>{
        const prices:number[]=cartItems.map((item)=>  item.totalPrice)
        const totalPrice=prices.reduce((acc:number, current:number) => acc + current, 0);
        const progres:number=Math.floor(totalPrice/60)*100;
        setP(progres);
        setSubTotal(totalPrice);

    },[cartItems])
    return (
        <div className='fixed  z-50 inset-0 flex justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
            {/* cart drawer  */}
            <div className='absolute inset-y-0 right-0 flex flex-col justify-between  items-center w-[24rem] h-screen max-w-sm bg-white  border-l-black border-solid border-[1px]'
            >
                {/* cart header */}
                <div className='flex flex-row justify-between items-center  w-full px-[20px]
              text-[16px] font-bold h-[60px] flex-shrink-0 bg-[#D1E030] border-solid border-b-[1px] border-black'>
                    <span>Cart</span>
                    <span onClick={handleExit}>[Close]</span>
                </div>
                {/* cart */}
                    {/* shipping calculator container  */}
                {cartItems.length>0?(
                <div className='w-full h-full min-h-0 flex flex-col  justify-between items-center py-[20px] bg-[#FFF4EC] border-black'>
                    <div className='px-[30px] pb-[20px] gap-[10px] tracking-wider w-full flex flex-col text-black container items-center justify-between border-black text-16px'>
                        <p className=''>
                           {
                           subtotal<60? `You are $${Math.floor(60-Number(subtotal))} away from free shipping.`:
                           'You got free shipping!'
                        }
                            </p>
                            {subtotal < 60 ?
                                (
                                    <Progress className='w-[274px] h-[10px] '
                                    progress={subtotal}/>
                                    ):(
                                        <p className='text-wrap w-full text-center h-fit tracking-tight font-bold text-[10px] text-black'>
                                            *HEADS UP! MULTIPLE SETS OF DRIZZLE & SIZZLE SHIP IN THE SAME BOX!
                                             TO ORDER INDIVIDUALLY PACKAGED GIFT SETS, CLICK HERE! 🎁
                                        </p>
                                    )

                            }


                    </div>
                    {/* cart items */}
                    <div className='px-[20px] pb-[20px] flex flex-col w-auto h-full container  overflow-y-scroll overflow-x-auto  no-scrollbar'>
                        {/* list of cart items */}
                        <ul className='flex flex-col container mb-2 '>
                        {    
                        cartItems.map((item,index)=>{
                                return(
                            <li className='flex flex-row justify-between py-[16px] text-black space-x-[20px] border-dashed border-black border-b-[1px] border-t-[1px]'>
                                {/* <div className='p-[8px] rounded-[10px] flex flex-row items-stretch gap-[12px] '> */}
                                {/* img part */}
                                <div
                                    // style={{backgroundImage:`url(https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972)`}}
                                    className='flex w-fit h-fit   '>
                                    <img src="https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972"
                                        className='flex  h-[70px] w-[88px] object-cover object-center   rounded-[10px]' alt='...' />

                                </div>
                                {/* product  */}
                                <div className='w-full h-full  flex flex-col justify-between items-start   text-[16px] font-medium '>
                                    <div className='flex flex-col w-full h-full items-start text-wrap font-medium leading-tight'>
                                        <p className='tracking-widest leading-6 '>{item.name}</p>
                                        <span className='font-light tracking-widest leading-6'> 1 bottle </span>

                                    </div>
                                    <div className='flex flex-row items-center w-full h-full  justify-between mt-[10px] '>
                                        {/* quantity */}
                                        <div className='flex flex-row justify-between items-center font-medium space-x-[10px]  '>
                                            <span>QTY:</span>
                                            <span>{item.quantity}</span>
                                            <span className=' flex space-x-[4px]  ml-[4px]'>
                                                <div 
                                                onClick={()=>{
                                                    if((item.quantity-1)==0) {
                                                        const newItem={
                                                            name:item.name,
                                                            price:item.price,
                                                            quantity:"1"
                                                        }
                                                        setCarouselItems((prev)=>[...prev,newItem])
                                                        deleteItem(index);

                                                    }else updateItem(index,item.quantity-1)
                                                }}
                                                className='hover:cursor-pointer w-[24px] h-[24px] rounded-full ring-black ring-[1px] text-center'>-</div>
                                                <div
                                                onClick={()=>{
                                                    updateItem(index,item.quantity+1);
                                                }}
                                                 className=' w-[24px] h-[24px] rounded-full ring-black ring-[1px] text-center'>+</div>

                                            </span>
                                        </div>
                                        {/* total price  */}
                                        <span>${item.totalPrice}</span>

                                    </div>
                                </div>

                                {/* </div> */}
                            </li>
                                )
                            })}

                        </ul>

                    </div>
                    {/* cart carousel with subtotal and checkout*/}
                    <div className=' transition-all transform duration-200 px-[20px] flex flex-col container  pb-2 '>
                        {/* cart carousel */}
                        {
                            carouselItems.length>0 &&
                       ( <div className='flex  pt-[16px] pb-[24px] md:pt-[20px] md:pb-[28px] rounded-xl mb-[10px]'>
                            <Slider className='flex  w-[330px] object-contain object-center h-[160px] p-4 rounded-xl items-start justify-center   '
                                {...settings}

                            >
                                {
                                    carouselItems.map((item, index) => {
                                        return (
                                            <div key={index} className='relative flex w-fit h-fit ease-in-out  object-center ' >

                                                <div className='w-full h-full p-[8px] rounded-[10px] flex flex-row items-stretch gap-[12px]
bg-[#D1E030] '>
                                                    {/* img part */}
                                                    <div
                                                        // style={{backgroundImage:`url(https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972)`}}
                                                        className='w-full h-full  '>
                                                        <img src="https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972"
                                                            className='w-full h-full object-cover object-center   rounded-[10px]' alt='...' />

                                                    </div>
                                                    {/* product  */}
                                                    <div className=' w-full h-full  flex flex-col  items-start  text-[16px] font-medium '>
                                                        <div className='flex flex-col w-full h-full gap-[4px] justify-between items-start text-wrap font-medium leading-tight'>
                                                            <p className=' text-wrap'>Want to add {item.name}?</p>
                                                            <span>{item.quantity}</span>

                                                        </div>
                                                        <div className=' flex flex-row items-center w-full h-full  justify-between mt-10  '>
                                                            <span>${item.price}</span>
                                                            <div className='flex w-fit h-fit  items-center justify-center bg-black rounded-lg '>
                                                                <button 
                                                                onClick={()=>{
                                                                    const newItem:IcartItem={
                                                                        quantity:1,
                                                                        price:item.price,
                                                                        name:item.name,
                                                                        totalPrice:item.price,

                                                                    }
                                                                        setCarouselItems((prev)=>{
                                                                            const updatedItems=[...prev].filter((item,idx)=>index!==idx);
                                                                            return updatedItems;
                                                                        })
                                                                        setItems(newItem);
                                                                    
                                                                }}
                                                                className='transition-all transform duration-100 ring-black ring-[1px] hover:cursor-pointer -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 rounded-lg bg-[#FFF4EC] text-black font-bold text-center whitespace-nowrap text-[8px] px-[12px] py-[8px] h-[24px] w-[88px] '>Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}


                            </Slider>
                         { start &&  <TestCarousel/>}
                        </div>)
                        }

                        {/* subtotal */}
                        <div className='flex flex-row w-full justify-between items-center py-[10px] border-dashed border-t-[1px] border-black text-black'>
                            <p>SubTotal:</p>
                            <span>${subtotal}</span>
                        </div>
                        {/* send gift option */}
                        <div className='flex flex-row gap-[10px] items-center justify-start py-[10px] mb-[10px] text-black'>
                            <span
                                onClick={() => setGift(!gift)}
                                className={(gift==true?'bg-[#D1E030]':'bg-[#F6E6D9]')+' transition-all transform duration-200 w-[20px] h-[20px] rounded-full ring-black ring-[1px] hover:cursor-pointer'}></span>
                            <p>Sending Graza as a gift?</p>

                        </div>
                        {/* text area */}

                        <textarea
                            name='note'
                            aria-placeholder="Type your message here ,and don't forget to say who it's from! (255 character limit)"
                            placeholder="Type your message here ,and don't forget to say who it's from! (255 character limit) "
                            className={gift == true ?
                                '  transition-transform overflow-hidden duration-150 text-wrap ease-in flex p-[10px] w-full border-solid mb-[10px] border-black border-[1px] text-[12px] h-[92px] text-black rounded-[10px] bg-[#F6E6D9]'
                                : 'hidden'}>
                        </textarea>
                        {/* checkout */}
                        <div className='flex w-full min-h-[34px] rounded-[10px] items-center justify-center  bg-black'>
                            <button
                                className=' -translate-x-2 -translate-y-1 hover:translate-x-0 hover:translate-y-0 transition-all duration-100 ring-black ring-[1px] ease-linear rounded-[10px] h-[34px] flex w-full items-center justify-center text-center bg-[#D1E030] '>CheckOut</button>

                        </div>

                    </div>
                </div>


                ):(
                    <div className='w-full h-full min-h-0 flex flex-col text-black space-y-[20px] justify-center  items-center py-[20px] bg-[#FFF4EC] border-black'>
                       
                        <div
                        style={{backgroundImage:`url(https://www.graza.co/cdn/shop/files/cat_440x.png?v=1639580835)`}}
                         className='flex bg-cover w-[80%] h-[40%] bg-center bg-no-repeat  '></div>

                       
                        <p className='text-wrap '>Looks like your ca(r)t has some issues </p>
                     
                        <div className='flex w-[90%] min-h-[34px] rounded-[10px] items-center justify-center  bg-black'>
                            <button
                            onClick={handleExit}
                                className=' -translate-x-2 -translate-y-1 hover:translate-x-0 hover:translate-y-0 transition-all duration-100 ring-black ring-[1px] ease-linear rounded-[10px] h-[34px] flex w-full items-center justify-center text-center bg-[#D1E030] '>
                            <Link href='#'>
                                    Shop Olive Oil
                            </Link>
                                    </button>
                        </div>



                    </div>
                )}

            </div>
        </div>
    )
}

export default Cart