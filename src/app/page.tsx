'use client';
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { fadeIn } from '../app/variants'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'
import Cart from './components/cart'
// import { Carousel, Progress } from 'flowbite-react'
// import { Button } from 'flowbite-react';
// import TestCarousel from './components/testcarousel';
import { CgMenuHotdog } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";

interface IcartItem {
  quantity:number,
  price:number,
  name:string,
  // available:string,
  totalPrice:number
}

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [paymentMode, setPaymentMode] = useState<number>(1);
  const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, tansition: { staggerChildren: 0.15 } },
    exit: {
      x: "-12rem",
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
        when: "afterChildren",
      },
    }

  }
  const [cartItems,setCartItems] =useState<IcartItem[]>([

  ])
  const [carouselItems, setCarouselItems]=useState([
    {
        price:21,
        name:`"Drizzle"`,
        quantity:"1 bottle"

    },
    {
        price:16,
        name:` "Sizzle"`,
        quantity:"1 bottle"

    }
])
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const Frequency=[
    "Every 1 Month",
    "Every 2 Months",
    "Every 6 Months"
  ]
  const productImage = [
    {
      url: "https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972"
    },
    {
      url: "https://www.graza.co/cdn/shop/products/graza-pdp-sizzle-header-3_2x_98f6ef49-281f-4095-b8bb-3045391401fe_1440x.jpg?v=1698551972"
    },
    {
      url: "https://www.graza.co/cdn/shop/products/graza-pdp-drizzle-header-3_2x_569477b7-acf0-4950-93a4-c263d6893aa4_1440x.jpg?v=1698551972",

    },
    {
      url: "https://www.graza.co/cdn/shop/products/graza-home-drizzle-in-use_2x_91b89a03-a404-434d-ae48-fb97e37406ab_1440x.jpg?v=1698551972"
    },
    {
      url: "https://www.graza.co/cdn/shop/products/graza-pdp-duo-header-2_2x_7673c33b-ecf4-43d9-b053-4261454c4f3c_1440x.jpg?v=1698551972"
    },
    {
      url: "https://www.graza.co/cdn/shop/products/graza-home-sizzle-in-usecopy_2x_47ab5af6-0732-4835-96ba-9853798e5b9d_1440x.jpg?v=1698551972"
    }
  ]
  const quantities = [
    {
      no: 1,
      freeShipping: false,
      offerPercent: 10,
      price: {
        real: 37,
        offer: 32.45

      },
      sub: {
        real: 20,
        offer: 10.4,
      }
    },
    {
      no: 2,
      freeShipping: true,
      offerPercent: 14,
      price: {
        real: 47,
        offer: 30

      },
      sub: {
        real: 43,
        offer: 20,
      }
    },
    {
      no: 3,
      freeShipping: true,
      offerPercent: 15,
      price: {
        real: 37,
        offer: 32

      },
      sub: {
        real: 27,
        offer: 11,
      }
    },
    {
      no: 6,
      freeShipping: false,
      offerPercent: 17,
      price: {
        real: 40,
        offer: 22

      },
      sub: {
        real: 20,
        offer: 15,
      }
    },
  ]
  const [tabContent, setTabContent] = useState("D");
  const [frequency, setFrequency] = useState(Frequency[0]);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [modal,setModal]=useState(false);
  const[openH,setH]=useState(false);
  const [shop,setShop]=useState(false);
  // const [image,setImage]=useState(productImage[0].url);
  return (
    <main className="flex min-h-screen h-fit  w-full flex-col items-center justify-between bg-[#F6E6D9] font-alpina ">
      <div className='text-center items-center  object-center w-full uppercase tracking-tighter text-black leading-6 text-[12px]  font-alpina font-bold'>
       { `Hi we <3 you for visiting our site` }
      </div>
      {/* navbar  */}
      <div className=' border-t-[2px] border-black border-solid z-30 lg:z-0 flex flex-row w-full text-black justify-evenly bg-transparent items-center py-1 px-8'>
        {/* Graza */}
        {/* hamburger menu */}
        <div className='lg:hidden flex w-fit z-30  '>
          {/* open */}
          <CgMenuHotdog 
          onClick={()=>setH(!openH)}
          className={!openH?'w-[50px] hover:cursor-pointer h-[50px]':"hidden"}/>
          {/* close */}
          <MdOutlineRestaurantMenu 
          onClick={()=>setH(!openH)}
          className={openH?'w-[50px] hover:cursor-pointer h-[50px]':'hidden'} />
        </div>
        <div className='lg:w-fit text-[50px] font-extrabold'>Graza</div>
        {/* nav section */}
        <div>
          <ul className={`lg:flex ${!openH?'hidden':''} lg:flex-row justify-between items-center font-bold  w-full  lg:space-x-[40px]  text-[16px] text-black `}>
            <li 
            onMouseOver={()=>setShop(true)}
             className=' relative  flex items-center justify-center p-2'>
              <span>shop</span>
              {/* hoverdiv */}
              <div 
              onMouseEnter={()=>setShop(true)}
              onMouseLeave={()=>setShop(false)}
              className={shop?'absolute -bottom-[450px] left-[5px] flex flex-col justify-between w-[330px] rounded-[20px] bg-black   ':'hidden'}>
                <ul className='flex flex-col border-black border-[1px] bg-[#D1E030] rounded-[20px] -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-100 justify-between items-center gap-[10px]'>
                { productImage.filter((item,index)=>index<4).map((item,index)=>{
                 return ( <li
                  key={index} className='group flex flex-row justify-between py-[16px] text-black space-x-[20px] border-dashed border-black border-b-[1px]'>
                    {/* <div className='p-[8px] rounded-[10px] flex flex-row items-stretch gap-[12px] '> */}
                    {/* img part */}
                    <div
                      // style={{ backgroundImage: `url(https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_1440x.jpg?v=1698551972)` }}
                      className='flex w-fit h-fit bg-cover bg-center    '>
                      <img src={item.url}
                        className='flex  h-[70px] w-[88px] object-cover object-center   rounded-[10px]' alt='...' />

                    </div>
                    {/* product  */}
                    <div className='w-full h-full  flex flex-col justify-between items-start   text-[16px] font-medium '>
                      <div className='flex flex-col w-full h-full items-start text-wrap font-medium leading-tight'>
                        <p className='tracking-widest leading-6 '>"Drizzle" & "Sizzle"</p>
                        {/* <span className='font-light tracking-widest leading-6'> 1 bottle </span> */}

                      </div>
                      <div className='text-bold text-[20px]'>Variety Pack</div>
                    </div>
                    {/* <div className='hidden group-hover:block  mr-[10px] group-hover:translate-x-2 ease-in transition-all duration-100 object-center w-[20px] h-[20px] rounded-[10px] bg-transparent pr-4 '>{`>`}</div> */}

                    {/* </div> */}
                  </li>)

                })}
                  

                </ul>

              </div>
              </li>
            <li className='flex items-center justify-center p-2'>About Us</li>
            <li className='flex items-center justify-center p-2'>Glog</li>
            <li className='flex items-center justify-center p-2'>FAQs</li>
            <li className='flex items-center justify-center p-2'>Account</li>
            <li className='flex items-center justify-center p-2'>Very Cool Subscriptions</li>

          </ul>
        </div>
        {/* cart button */}
        <div
        className='flex w-fit font-bold'
        onClick={()=>setModal(true)}
        >cart[{cartItems.length}]</div>
        {modal && (
          <Cart
          deleteItem={(idx:number)=>{
           const updatedItems= cartItems.filter((item,index)=> index!==idx )
           setCartItems(updatedItems);
          }}
          updateItem={
            (idx:number,q:number)=>{
              setCartItems((prev)=>{
                const updatedItems=[...prev];
                updatedItems[idx].totalPrice=cartItems[idx].price*q;
                updatedItems[idx].quantity=q;
                return updatedItems;

              })
            }
          }
            handleExit={() => setModal(false)} 
            cartItems={cartItems} 
            setItems={(item:IcartItem)=>{
              setCartItems((prev)=>{
                const updatedItem=prev?[...prev,item]:[item];
                return updatedItem;
              })
            }} />
        )}
      </div>
      {/* first section */}
      <div className='flex lg:flex-row flex-col w-full min-h-screen h-fit items-center rounded-[20px] bg-[#F6E6D9]  '>
        {/* carousel part  */}

        <div 
        // variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
          id="default-carousel" className="relative min-h-screen h-[1168px]  bg-[#F6E6D9]  w-[100%] lg:w-[50%]" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative min-h-screen h-full w-full overflow-hidden">
            {productImage.map((item, index) => {

              return (
                <div key={index} className='w-full min-h-screen h-full   hidden duration-700 ease-in-out' data-carousel-item>
                  <img src={item.url} className='w-full min-h-screen h-full object-cover object-center ' alt='...' />
                </div>
              );
            })}

          </div>
          {/* <!-- Slider indicators --> */}
          {screenWidth >= 1024 ? (
            <div className=' absolute  z-30 flex flex-col w-fit h-fit gap-[10px] bg-transparent left-[40px] 
      bottom-[40px]   '>
              {/* selection list  */}
              {
                productImage.map((item, index) => {

                  return (
                    <button
                      // key={index}
                      type='button'
                      className='tansition-all transform duration-100 hover:cursor-pointer
                    hover:ring-white hover:ring-2 hover:scale-110 hover:border-white bg-center bg-cover
                     bg-no-repeat border-black border-2 w-[60px] h-[60px] bg-white rounded-full'
                      aria-current={(index + 1) == 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                      data-carousel-slide-to={`${index}`}
                      style={{ backgroundImage: `url(${item.url})` }}
                    ></button>
                  )
                })
              }
            </div>
          ) : (
            <div className=" absolute  flex -translate-x-1/2 -bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" className="w-3 h-3 rounded-full ring-2 ring-black" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>


            </div>
          )}
        </div>

        {/* product part  */}
        <div className='flex flex-col items-center w-[100%] lg:w-[50%] min-h-screen h-full bg-[#F6E6D9] p-20px'>
          <div className='flex flex-col items-center justify-between w-full h-fit py-[40px]  '>
            {/* product name  */}
            <motion.div
              initial={{ opacity: 0, y: "40px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center h-fit w-full
            text-[#23271b] sm:text-[60px] text-[30px] tracking-tighter font-normal font-garamond '>"Drizzle" & "Sizzle" <br />
              <span className=' underline underline-[#3C422E] underline-offset-8 decoration-1 -mt-5'>
                Extra Virgin Olive Oil
              </span>
              <div className=' font-alpina text-[16px] font-bold tracking-tight'> <span>★★★★★</span> 967  Reviews</div>
            </motion.div>
            {/* quantity selector */}
            <div 
            // variants={fadeIn("down", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
              className=' flex flex-col items-center justify-start  border-black border-solid  bg-blend-lighten 
      border-[1px] h-fit  lg:w-[85%] xl:w-[65%] md:w-[65%] w-[95%]  bg-[#FFF4EC] rounded-[20px] my-[20px] py-[20px] px-[20px] text-[#3C422E] font-alpina'>
              {/* quantity */}
              <div className=' flex flex-col w-full h-fit justify-between border-dotted border-b-2 pb-[10px] border-black '>
                {/* quantity */}
                <div className='text-[16px] text-[#3C422E] font-alpina
                 tracking-wider font-bold self-start text-start mb-3'>Quantity</div>
                {/* list of quantities */}
                <motion.div
                  // variants={transitionVariants}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"
                  className='grid   md:grid-cols-4 grid-cols-2 justify-between gap-[10px] items-center w-full h-fit 
                '>
                  {quantities.map((item, index) => {
                    return (
                      <motion.div key={index}
                        variants={transitionVariants}
                        exit={{ x: "-12rem", opacity: 0 }}
                        transition={{ exit: { duration: 0.1 } }}
                        layout
                        onClick={() => setQuantity(index)}

                        className={`flex flex-col hover:cursor-pointer active:hover:bg-[#9EEF80] hover:bg-[#F6E6D9] border-black border-[2px] rounded-[20px]
                      items-center text-[#3C422E] font-alpina tracking-widest  leading-[19px]
                        py-[10px] text-wrap min-w-[60px] h-[89px] w-full ${quantity == index ? 'bg-[#9EEF80]' : ``} `}>
                        <span className='  font-bold  text-[24px] mb-2'>{item.no}</span>
                        <span className=' font-extrabold text-[16px]'>{item.no > 1 ? "Sets" : "Set"}</span>
                        <span className='font-light text-[10px] leading-4'>{!!item.freeShipping ? "Free Shipping!" : null}<br />+{item.offerPercent}% off</span>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
              {/* purchase */}
              <div onClick={() => setPaymentMode(0)}
                className='flex flex-row justify-between w-full hover:cursor-pointer  font-bold items-center border-dotted border-b-2 py-[16px] border-black '>
                <span className='flex flex-row items-center gap-2 text-[16px]'><div className={`w-[20px] h-[20px] hover:bg-inherit
                 rounded-full border-black border-[2px] ${paymentMode == 0 ? "bg-[#9EEF80]" : "bg-[#FFF4EC]"}`}></div>
                  One Time Purchase</span>
                <span className='text-[14px]'><span className='text-[#525b3d]  line-through mr-2'>${quantities[quantity].price.offer}</span>${quantities[quantity].price.real}</span>
              </div>
              {/* subscribe and save */}
              <div
                className=' flex flex-col justify-between w-full gap-[16px] hover:cursor-pointer  items-start border-dotted border-b-2 py-[16px] border-black '>
                <div onClick={() => setPaymentMode(1)}
                  className='flex flex-row items-center justify-between w-full font-bold '>
                  <span className='flex flex-row  items-center gap-2'><div className={`w-[20px] h-[20px] rounded-full border-black border-[2px] hover:bg-inherit text-[16px] ${paymentMode == 1 ? `bg-[#9EEF80] ` : `bg-[#FFF4EC]`}`}></div>Subscribe & Save</span>
                  <span className='font-bold text-[14px]'><span className='text-[#525b3d]  line-through mr-2'>${quantities[quantity].sub.offer}</span>${quantities[quantity].sub.real}</span>
                </div>
                {/* frequency */}
                <div className={`${paymentMode == 0 ? `hidden` : `flex flex-row`} items-center justify-between w-full h-fit px-[20px] border-black border-[1px] rounded-[20px]`}>
                  <div
                    onClick={() => setOpen(!open)}
                    className={`flex flex-row items-start font-medium justify-between min-h-[32px] w-full `}>
                    <div className='group flex flex-row items-start font-bold text-[16px]'>
                      Frequency:
                      <div 
                      className='transition-all transform duration-200 flex flex-col items-start '>
                      {frequency}
                      {open && <ul className='flex w-full flex-col'>
                        <AnimatePresence>
                        {
                          Frequency.filter((freq,index)=> freq!=frequency).map((item,index)=>{
                            return (
                              <motion.li 
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ x: "-12rem", opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              layout
                              className='hover:cursor-pointer hover:bg-[#F6E6D9]'
                          onClick={() => setFrequency(item)}>{item}</motion.li>
                            )
                          })
                        }

                        </AnimatePresence>

                      </ul>}
                      </div>
                    </div>
                    {/* down arrow */}
                    <div className='flex mt-1 items-center '>{!!open?(<IoIosArrowDown/>):(<IoIosArrowUp />)}</div>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* subscribe   & skip and cancel anytime*/}
              <div className='w-full flex flex-col items-center justify-between py-[20px] px-[10px]'>
                {/* subscribe button */}
                <div 
                style={{ backgroundImage: `url(https://media.istockphoto.com/id/183813092/photo/photo-of-fabric-as-black-and-white-plaid-background.webp?b=1&s=170667a&w=0&k=20&c=w0-TN80w1FaUsFmmlRwIqm4oXXSCm9nSxmBVzfvAaAo=)` }}
                  className='flex flex-row justify-center  items-center bg-white border-[1px] border-black rounded-[10px] w-full h-[40px] '>
                  <button 
                  onClick={()=>{
                    if(paymentMode==0){
                      const newItem:IcartItem={
                        name:`"Drizzle" & "Sizzle"`,
                        price:quantities[quantity].price.real,
                        quantity:quantities[quantity].no,
                        totalPrice:Number(quantities[quantity].price.offer)
                      }
                      setCartItems((prev)=>[...prev,newItem]);
                      setModal(true );

                    }
                  }}
                  className='flex flex-col items-center justify-center  w-full text-bold border-black border-[2px] bg-[#D1E030] h-[40px]
                           rounded-[10px] -translate-x-2 -translate-y-1 hover:translate-x-0 hover:translate-y-0
                            transition-all transform duration-150'>
                    <span className='text-[#3C422E] text-[20px] font-alpina  font-extrabold  tracking-widest '>
                      {paymentMode == 1 ? `Subscribe - $${quantities[quantity].sub.offer}` : `Add to Cart - $${quantities[quantity].price.offer}`}
                    </span>

                  </button>
                </div>
                {/* skip and cancel any time || headup message */}
                {paymentMode == 1 ? (
                  <span className=' mt-5 text-[14px]'>Skip & Cancel Anytime</span>
                ) : (
                  <span className=' mt-5 font-bold tracking-tighter text-center text-[14px]'>
                    *HEADS UP! MULTIPLE SETS OF DRIZZLE & SIZZLE SHIP IN THE SAME BOX! TO ORDER INDIVIDUALLY PACKAGED GIFT SETS, CLICK HERE! 🎁
                  </span>

                )}
                
              </div>

            </div>
            {/* description */}
            
            <div
            //  variants={fadeIn("down", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col items-center   bg-blend-lighten 
       h-fit lg:w-[85%] xl:w-[65%] md:w-[65%] w-[100%]  sm:w-[90%] rounded-[20px] my-[25px] p-[10px] tracking-widest'>
              {/* headers ie description harvest usecase */}
              <div className='w-full flex flex-row  items-center font-alpina uppercase font-bold tracking-tighter '>
                {/* description */}
                <div onClick={() => setTabContent("D")}
                  className={`transition-all transform duration-150 hover:cursor-pointer w-1/3 flex items-center justify-center  text-[16px] h-[32px] text-center p-[10px] border-[1px]
                   border-black rounded-tl-[10px] rounded-tr-[10px] ${tabContent == "D" ? " bg-[#3C422E]  text-inherit" : "text-[#3C422E]"}`}>Description</div>
                <div onClick={() => setTabContent("H")}
                  className={` hover:cursor-pointer w-1/3 flex items-center  justify-center text-[16px] h-[32px] text-center p-[10px] border-[1px]
                   border-black rounded-tl-[10px] rounded-tr-[10px] ${tabContent == "H" ? " bg-[#3C422E] text-inherit" : "text-[#3C422E] "}`}>Harvest</div>
                <div onClick={() => setTabContent("U")}
                  className={` hover:cursor-pointer w-1/3 flex items-center justify-center text-[16px] h-[32px] text-center p-[10px] border-[1px]
                   border-black rounded-tl-[10px] rounded-tr-[10px] ${tabContent == "U" ? " bg-[#3C422E] text-inherit" : "text-[#3C422E]"}`}>UseCases</div>
              </div>
              {/* tab contenct for each ie description harvest usecase */}
              <div className=' tracking-widest flex flex-col items-start rounded-b-[20px] px-[10px] py-[20px] border-[1px] border-black w-full font-alpina text-[#3C422E] '>
                {tabContent == "D" && (
                  <div>
                    <p className=' text-wrap  text-[16px] mt-[20px]'>
                      <span className='  text-[16px] font-bold  uppercase tracking-normal'>Drizzle: 500 ml</span>
                      <br />
                      Extra Virgin finishing oil made from olives that are picked early,
                      when flavor is bold and antioxidants are highest. Made for eating, never heating.
                    </p>
                    <p className=' text-wrap  text-[16px] mt-[20px]'>
                      <span className='  text-[16px] font-bold  uppercase tracking-normal'>Sizzle: 750 ml</span>
                      <br />
                      Extra Virgin cooking oil made from mature,
                      mid-season olives that yield a more mellow flavor. Use it every day, in every way.
                    </p>
                  </div>
                )}
                {tabContent == "H" && (
                  <div>
                    <p className=' text-wrap text-black text-[16px] mt-[20px]'>
                      <span className=' text-black text-[16px] font-bold  uppercase'>Drizzle: 500 ml</span>
                      <br />
                      Harvested in October, before the olives have ripened fully.
                      Picked by hand because young olives need a firm yank to loosen up.
                    </p>
                    <p className=' text-wrap text-black text-[16px] mt-[20px]'>
                      <span className=' text-black text-[16px] font-bold  uppercase'>Sizzle: 750 ml</span>
                      <br />
                      Harvested in November and December, when the olives are more mature.
                      They’re pretty laid back by this point, so it only takes a few shakes to get them off the branch.
                    </p>
                  </div>
                )}
                {tabContent == "U" && (
                  <div>
                    <p className=' text-wrap text-black text-[16px] mt-[20px]'>
                      <span className=' text-black text-[16px] font-bold  uppercase'>Drizzle: 500 ml</span>
                      <br />
                      A little Drizzle goes a long way! Use it on and around things like ice cream,
                      pesto, popcorn, salads, sandwiches or even directly on your tongue (we won’t tell).
                    </p>
                    <p className=' text-wrap text-black text-[16px] mt-[20px]'>
                      <span className=' text-black text-[16px] font-bold  uppercase'>Sizzle: 750 ml</span>
                      <br />
                      If you would put it in or on top of an oven, use sizzle.
                      Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even Chocolate Chip Cookies! You name it, Sizzle sizzles it.
                    </p>
                  </div>
                )

                }

              </div>

            </div>


          </div>


        </div>

      </div>
      {/* extra */}

        {/* <div className='flex flex-col justify-between items-center w-fit h-fit'>
          <TestCarousel/>
        </div> */}
        {/* extra */}

    </main>
  )
}
