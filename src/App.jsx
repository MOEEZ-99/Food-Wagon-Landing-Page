import { useState } from 'react'
import logo from "./assets/logo.svg"
import location from "./assets/location.svg"
import search from "./assets/search.svg"
import delivery from "./assets/deliveryIcon.png"
import pickup from "./assets/pickupIcon.svg"
import adressIcon from "./assets/address.png"
import findFood from "./assets/findFood.svg"
import bgImage from "./assets/bg-img.png"
import food1 from "./assets/food1.png"
import food2 from "./assets/food2.png"
import food3 from "./assets/foode3.png"
import food4 from "./assets/food4.png"
import work1 from "./assets/work1.png"
import work2 from "./assets/work2.png"
import work3 from "./assets/work3.png"
import work4 from "./assets/work4.png"
import p1 from "./assets/popular1.png"
import p2 from "./assets/popular2.png"
import p3 from "./assets/popular3.png"
import p4 from "./assets/popular4.png"
import p5 from "./assets/popular4.png"
import moveLeft from "./assets/moveLeft.svg"
import moveRight from "./assets/moveRight.svg"
import res1 from "./assets/res1.png"
import res2 from "./assets/res2.png"
import res3 from "./assets/res3.png"
import res4 from "./assets/res4.png"
import res5 from "./assets/res5.png"
import res6 from "./assets/res6.png"
import res7 from "./assets/res7.png"
import res8 from "./assets/res8.png"
import star from "./assets/star.svg"
import resLogo1 from "./assets/resLogo1.svg"
import resLogo2 from "./assets/resLogo2.png"
import resLogo3 from "./assets/resLogo3.png"
import resLogo4 from "./assets/resLogo4.png"
import resLogo5 from "./assets/resLogo5.png"
import resLogo6 from "./assets/resLogo6.png"
import resLogo7 from "./assets/resLogo7.png"
import resLogo8 from "./assets/resLogo8.png"
import pizza from "./assets/pizza.png"
import sandwich from "./assets/sandwich.png"
import noodels from "./assets/noodles.png"
import buregr from "./assets/burger.png"
import chowmein from "./assets/chowmein.png"
import steak from "./assets/steak.png"
import discount from "./assets/dicount.png"
import liveTracking from "./assets/liveTracking.png"
import quickDelivery from "./assets/quickDelivery.png"
import background from "./assets/Background.png"
import phoneImg from "./assets/phoneImg.png"
import googlePlay from "./assets/googlePlay.png"
import apple from "./assets/apple.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import mail from "./assets/mail.svg"

function App() {
  const [method, setMethod] = useState("pickup")

  return (
    <>
      <nav className='min-[1940px]:px-[11.14vw] px-[30px] flex items-center justify-between h-[78px]'>

          <div>
            <img src={logo} alt="" />
          </div>

          <div className='delivery xl:flex items-center gap-[12px] hidden'>
            <span className='font-bold'>Deliver to:</span>
              <img src={location} alt="" />
              <span>Current Location</span>
             <span className='font-bold'>Muhammad Pur Bus Stand Dhaka</span>
          </div>

          <div className="btns flex items-center gap-[30px]">
            <button className='font-bold md:flex hidden items-center gap-[6px] cursor-pointer'><img src={search} alt="" />Search Food</button>
            <button className='text-yellow font-bold px-[24px] py-[14px] cursor-pointer shadow-[0_20px_40px_0_rgba(255,255,0,0.26),_0_5px_10px_0_rgba(255,255,0,0.29)] rounded-[8px]'>Login</button>
          </div>
      </nav>

          {/* Navbar ends here */}

      <section className='bg-main -[calc(100vh-78px)] h-[620px] w-full'>
        <div className='wrapper relative'>

            <div className='flex flex-col gap-5 2xl:w-[856px] md:w-[700px] w-full md:pt-[132px] py-10'>
                <h1 className='text-6xl font-bold text-white'>Are you starving?</h1>
                <p>Within a few clicks, find meals that are accesible to you</p>
                <div className='bg-white p-4 w-full flex flex-col gap-[24px] rounded-[16px]'>
                    <div className="btnw flex items-center gap-[8px]">
                      <button className={`flex items-center gap-3 font-semibold px-[24px] py-[10px] cursor-pointer rounded-[8px] ${method==="pickup"? "bg-[rgba(241,114,40,0.1)]": ""}`} onClick={()=>{setMethod("pickup")}}><img src={delivery} alt=""/>Delivery</button>
                      <button className={`flex items-center gap-3 font-semibold px-[24px] py-[10px] cursor-pointer rounded-[8px] ${method==="delivery"? "bg-[rgba(241,114,40,0.1)]": ""}`} onClick={()=>{setMethod("delivery")}}><img src={pickup} alt="" />Pickup</button>
                    </div>

                    <div className="flex items-center md:flex-row flex-col gap-2 w-full">
                          <div className="flex items-center gap-[16px] bg-[#F5F5F5] px-4 py-2 rounded-[6px] w-full"><img src={adressIcon} alt="" /><input type="text" placeholder="Enter your Address" className='outline-0 w-full'/></div>
                          <button className='z-20 flex items-center gap-2 py-2 bg-gradient-to-r from-[#FF7A7A] to-[#F65900] rounded-[8px] cursor-pointer hover:to-red-600 md:w-[199px] w-full justify-center text-white font-semibold'><img src={findFood} alt="" />Find Food</button>
                          
                    </div>
                </div>

            </div>

          <div className='absolute bottom-0 right-0 xl:block hidden'>
            <img src={bgImage} className="w-full" />
          </div>

        </div>
      </section>

      {/* Hero section end------------------------------------------------ */}



      <section className='md:py-[80px] py-[40px]'>

        <div className="wrapper flex md:gap-[16px] gap-10 justify-center flex-wrap md:flex-nowrap">
            <div className='food1 flex flex-col gap-8'>
                <img src={food1} alt="" className='w-fit'/>
               <div className='flex gap-3 flex-col'>
                 <h4 className='font-semibold'>Gresy Vage</h4>
                <button className='w-fit py-[8px] px-[8px] bg-[rgba(241,114,40,0.1)] rounded-[6px] text-[#F17228] font-semibold'>6 days remaing</button>
               </div>
            </div> 
            <div className='food2 flex flex-col gap-8'>
                <img src={food2} alt="" className='w-fit'/>
               <div className='flex gap-3 flex-col'>
                 <h4 className='font-semibold'>Gresy Vage</h4>
                <button className='w-fit py-[8px] px-[8px] bg-[rgba(241,114,40,0.1)] rounded-[6px] text-[#F17228] font-semibold'>6 days remaing</button>
               </div>
            </div> 
            <div className='food3 flex flex-col gap-8'>
                <img src={food3} alt="" className='w-fit'/>
               <div className='flex gap-3 flex-col'>
                 <h4 className='font-semibold'>Gresy Vage</h4>
                <button className='w-fit py-[8px] px-[8px] bg-[rgba(241,114,40,0.1)] rounded-[6px] text-[#F17228] font-semibold'>6 days remaing</button>
               </div>
            </div> 
            <div className='food4 flex flex-col gap-8 pb-4'>
                <img src={food4} alt="" className='w-fit'/>
               <div className='flex gap-3 flex-col'>
                 <h4 className='font-semibold'>Gresy Vage</h4>
                <button className='w-fit py-[8px] px-[8px] bg-[rgba(241,114,40,0.1)] rounded-[6px] text-[#F17228] font-semibold'>6 days remaing</button>
               </div>
            </div> 
        
        </div>
      </section>

      {/* Food Section ends here ------------------------------------------------------ */}

      <section className='w-full bg-gradient-to-b from-[#FFCE67] to-[#ffffff] py-[80px]'>
        <div className="wrapper">
          <h1 className='text-[#F17228] flex justify-center text-3xl font-bold'>How does it works</h1>
          <div className="mt-[71px] flex items-center gap-[32px] md:flex-nowrap flex-wrap">

            <div className="first flex items-center flex-col gap-2">
                <img src={work1} alt="" />  
                <h4 className='font-bold'>Select Location</h4>
                <p className='text-[#9E9E9E] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at ipsa officia deserunt magnam porro minima enim laudantium vero exercitationem.</p>
            </div>
            <div className="first flex items-center flex-col gap-2">
                <img src={work2} alt="" />  
                <h4 className='font-bold'>Choose Order</h4>
                <p className='text-[#9E9E9E] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at ipsa officia deserunt magnam porro minima enim laudantium vero exercitationem.</p>
            </div>
            <div className="first flex items-center flex-col gap-2">
                <img src={work3} alt="" />  
                <h4 className='font-bold'>Pay Advance</h4>
                <p className='text-[#9E9E9E] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at ipsa officia deserunt magnam porro minima enim laudantium vero exercitationem.</p>
            </div>
            <div className="first flex items-center flex-col gap-2">
                <img src={work4} alt="" />  
                <h4 className='font-bold'>Enjoy Meal</h4>
                <p className='text-[#9E9E9E] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at ipsa officia deserunt magnam porro minima enim laudantium vero exercitationem.</p>
            </div>

          </div>
        </div>
      </section>

      {/* work section ends here--------------------------------------- */}
      <section className=''>
      <h1 className='flex justify-center text-3xl font-bold'>Popular Items</h1>
        <div className="wrapper relative py-[80px] flex md:flex-nowrap flex-wrap items-center gap-[16px] justify-center">

            <div className="flex flex-col gap-[16px]">
              <img src={p1} alt="" className='w-full rounded-[8px]'/>
              <h3 className='font-bold'>Cheese Burger</h3>
              <div className='flex items-center gap-2 text-[#FFB30E]'><img src={location} alt="" />Burger Arena</div>
              <h4 className='font-bold'>$ 3.88</h4>
              <button className='bg-[#F17228] rounded-[8px] font-semibold text-center w-full text-white py-2'>Order Now</button>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={p2} alt="" className='w-full'/>
              <h3 className='font-bold'>Cheese Burger</h3>
              <div className='flex items-center gap-2 text-[#FFB30E]'><img src={location} alt="" />Burger Arena</div>
              <h4 className='font-bold'>$ 3.88</h4>
              <button className='bg-[#F17228] rounded-[8px] font-semibold text-center w-full text-white py-2'>Order Now</button>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={p3} alt="" className='w-full'/>
              <h3 className='font-bold'>Cheese Burger</h3>
              <div className='flex items-center gap-2 text-[#FFB30E]'><img src={location} alt="" />Burger Arena</div>
              <h4 className='font-bold'>$ 3.88</h4>
              <button className='bg-[#F17228] rounded-[8px] font-semibold text-center w-full text-white py-2'>Order Now</button>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={p4} alt="" className='w-full'/>
              <h3 className='font-bold'>Cheese Burger</h3>
              <div className='flex items-center gap-2 text-[#FFB30E]'><img src={location} alt="" />Burger Arena</div>
              <h4 className='font-bold'>$ 3.88</h4>
              <button className='bg-[#F17228] rounded-[8px] font-semibold text-center w-full text-white py-2'>Order Now</button>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={p5} alt="" className='w-full'/>
              <h3 className='font-bold'>Cheese Burger</h3>
              <div className='flex items-center gap-2 text-[#FFB30E]'><img src={location} alt="" />Burger Arena</div>
              <h4 className='font-bold'>$ 3.88</h4>
              <button className='bg-[#F17228] rounded-[8px] font-semibold text-center w-full text-white py-2'>Order Now</button>
            </div>

            <div className='absolute cursor-pointer max-[1920px]:hidden -left-18 bg-[#FFB20E] pt-[11px] px-[15px] flex items-center py-[9px] rounded-[92px]'><img src={moveLeft} alt="" /></div>
            <div className='absolute cursor-pointer max-[1920px]:hidden -right-18 bg-[#FFB20E] pt-[11px] px-[15px] flex items-center py-[9px] rounded-[92px]'><img src={moveRight} alt="" /></div>
        </div>

        <div className="moveButtonsResponsive flex justify-end gap-5 min-[1920px]:hidden px-7">
            <div className=' bg-[#FFB20E] cursor-pointer pt-[11px] px-[15px] flex items-center py-[9px] rounded-[92px]'><img src={moveLeft} alt="" /></div>
            <div className=' bg-[#FFB20E] cursor-pointer pt-[11px] px-[15px] flex items-center py-[9px] rounded-[92px]'><img src={moveRight} alt="" /></div>
            </div>
      </section>

      {/* popular section end shere----------- */}

      <section className='md:pb-[80px] pb-[40px]'>
        <h1 className='flex justify-center text-3xl font-bold'>Featured Restraunts</h1>
          <div className="wrapper md:py-[80px] py-[40px] grid xl:grid-cols-4 gap-[8px] gap-y-[60px]">

              <div className="first flex flex-col gap-5">
                <img src={res1} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo1} alt="" className=''/>
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#79B93C] font-bold bg-[rgba(121,185,60,0.2)] px-4 py-1 rounded-[16px]'>Open Now</button>
              </div>
              
              <div className="first flex flex-col gap-5">
                <img src={res2} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo2} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#F17228] font-bold bg-[rgba(241,114,40,0.2)] px-4 py-1 rounded-[16px]'>Open Tommorow</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res3} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo3} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#F17228] font-bold bg-[rgba(241,114,40,0.2)] px-4 py-1 rounded-[16px]'>Open Tommorow</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res4} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo4} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#79B93C] font-bold bg-[rgba(121,185,60,0.2)] px-4 py-1 rounded-[16px]'>Open Now</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res5} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo5} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#79B93C] font-bold bg-[rgba(121,185,60,0.2)] px-4 py-1 rounded-[16px]'>Open Now</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res6} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo1} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#79B93C] font-bold bg-[rgba(121,185,60,0.2)] px-4 py-1 rounded-[16px]'>Open Now</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res7} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo7} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#F17228] font-bold bg-[rgba(241,114,40,0.2)] px-4 py-1 rounded-[16px]'>Open Tommorow</button>
              </div>

              <div className="first flex flex-col gap-5">
                <img src={res8} alt=""/>
                <div className='flex gap-2'>
                    <img src={resLogo1} alt="" />
                    <div className=''>
                      <h4>Foodworld</h4>
                      <div className='flex items-center gap-2'>
                        <img src={star} alt="" /> 46
                      </div>
                    </div>
                </div>
                      <button className='self-start text-[#F17228] font-bold bg-[rgba(241,114,40,0.2)] px-4 py-1 rounded-[16px]'>Open Tommorow</button>
              </div>

          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-yellow text-center px-[48px] py-[21px] font-bold text-white cursor-pointer hover:bg-white border-2 border-yellow rounded-[14px] hover:text-yellow'>View All {">"} </button>
          </div>
      </section>

      <section className='bg-[#FEFAF1] border-t-1'>
        <div className="wrapper pt-[82px] pb-[52px]">
          <div className="title flex justify-between">
            <h1 className='font-bold text-3xl'>Search By Food</h1>
            <div className='flex items-center gap-3'>
              <span className='text-yellow'>View All {">"}</span>
               <div className=' bg-[#FFB20E] cursor-pointer px-[19px] flex items-center py-[12px] rounded-[92px]'><img src={moveLeft} alt="" /></div>
            <div className=' bg-[#FFB20E] cursor-pointer px-[19px] flex items-center py-[12px] rounded-[92px]'><img src={moveRight} alt="" /></div>
            </div>
          </div>

          <div className='images grid md:grid-cols-6 gap-[8px] grid-cols-2 gap-y-[12px] md:mt-[88px] mt-[42px]'>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={pizza} alt="" className='rounded-full'/>Pizza</div>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={buregr} alt="" className='rounded-full'/>Buregr</div>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={noodels} alt="" className='rounded-full'/>Noodles</div>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={sandwich} alt="" className='rounded-full'/>Sub - Sandwich</div>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={chowmein} alt="" className='rounded-full'/>Chowmein</div>
                <div className='flex flex-col gap-3 items-center font-bold'><img src={steak} alt="" className='rounded-full'/>Steak</div>
          </div>
        </div>
      </section>

      <section className='md:pt-[120px] pt-[60px] pb-[80px] bg-[#FEEFD0]'>
        <div className="wrapper">
          <div className='bg-white rounded-[46px] xl:p-[55px] p-[27px] xl:w-[1230px] xl:mx-auto flex items-center xl:justify-between justify-center gap-20 xl:gap-0 xl:flex-row flex-col'>
              <div className='flex flex-wrap justify-center items-center text-3xl font-bold gap-5 xl:border-r-[1px] border-[#CFCFCF] xl:pr-12'><img src={discount} alt="" />Daily <br /> Discounts</div>
              <div className='flex flex-wrap justify-center items-center text-3xl font-bold gap-5 xl:border-r-[1px] border-[#CFCFCF] xl:pr-12'><img src={liveTracking} alt="" />Live <br /> Tracking</div>
              <div className='flex flex-wrap justify-center items-center text-3xl font-bold gap-5 xl:pr-4'><img src={quickDelivery} alt="" />Quick <br /> Delivery</div>
              {/* <div className='line w-[1px] h-[100%] bg-black'>ss</div> */}
          </div>
        </div>
      </section>

      <section className='bg-yellow w-full h-[100%]'>
        <div className="container-div w-full">
          <div className='xl:w-[1230px] xl:px-0 px-[20px] w-full mx-auto flex xl:flex-row flex-col-reverse gap-10 justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%]'>
            <div>
              <img src={phoneImg} alt="" className='self-end'/>
            </div>
            <div className='right flex flex-col gap-5 xl:w-[479px] w-full xl:px-0 px-[20px]'>
              <h3 className='text-4xl text-yellow font-bold'>Install the app</h3>
              <p className='text-[#827E7E]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur reprehenderit, sunt tempora labore praesentium iste illo provident aspernatur odio quos natus distinctio? Necessitatibus, deserunt.</p>
              <div className="btns flex items-center gap-5 xl:flex-row flex-col">
                <button className='flex items-center gap-2 bg-white rounded-[4px] px-2 py-2 h-fit'><img src={googlePlay} alt="" /><span className='flex flex-col items-start'><span className='text-[#827E7E] text-xs'>Get it on</span>Google Play</span></button>
                <button className='flex items-center gap-3 bg-white rounded-[4px] px-2 py-2 h-fit'><img src={apple} alt="" /><span className='flex flex-col items-start'><span className='text-[#827E7E] text-xs'>Download on the</span>Apple Store</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='md:mt-[80px] mt-[40px]'>
        <div className='wrapper flex flex-col md:gap-[80px] gap-[40px]'>

            <div className="1 shadow flex flex-wrap md:flex-nowrap rounded-[8px] h-full">
                  <div className="left flex flex-col gap-25 bg-white justify-center p-[56px] rounded-[8px]">
                    <div className='flex flex-col items-center gap-6'><h1 className='text-3xl  font-bold'>Best deals <span className='text-yellow'>Crispy Sandwiches</span></h1>
                    <p className='text-[#616161]'>Enjoy the lrage size of sandwiches. Complete perfect slice of sandwiches</p></div>
                    <button className='bg-yellow rounded-[8px] px-6 py-2 text-center font-semibold border-2 border-yellow cursor-pointer hover:bg-white hover:text-yellow text-white'>PROCEED TO ORDER {">"}</button>
                  </div>

                  <div className="right w-full">
                  <img src={img1} alt="" className='w-full rounded-r-[8px] md:h-[512px] h-full'/>
                  </div>


            </div>

            <div className="2 shadow flex flex-row-reverse flex-wrap md:flex-nowrap rounded-[8px] h-full">
                  <div className="left flex flex-col gap-25 bg-white justify-center p-[56px] rounded-[8px]">
                    <div className='flex flex-col items-center gap-6'><h1 className='text-3xl  font-bold'>Best deals <span className='text-yellow'>Crispy Sandwiches</span></h1>
                    <p className='text-[#616161]'>Enjoy the lrage size of sandwiches. Complete perfect slice of sandwiches</p></div>
                    <button className='bg-yellow rounded-[8px] px-6 py-2 text-center font-semibold border-2 border-yellow cursor-pointer hover:bg-white hover:text-yellow text-white'>PROCEED TO ORDER {">"}</button>
                  </div>

                  <div className="right w-full">
                  <img src={img2} alt="" className='w-full rounded-r-[8px] md:h-[512px] h-full'/>
                  </div>


            </div>

            <div className="3 shadow flex flex-wrap md:flex-nowrap rounded-[8px] h-full">
                  <div className="left flex flex-col gap-25 bg-white justify-center p-[56px] rounded-[8px]">
                    <div className='flex flex-col items-center gap-6'><h1 className='text-3xl  font-bold'>Best deals <span className='text-yellow'>Crispy Sandwiches</span></h1>
                    <p className='text-[#616161]'>Enjoy the lrage size of sandwiches. Complete perfect slice of sandwiches</p></div>
                    <button className='bg-yellow rounded-[8px] px-6 py-2 text-center font-semibold border-2 border-yellow cursor-pointer hover:bg-white hover:text-yellow text-white'>PROCEED TO ORDER {">"}</button>
                  </div>

                  <div className="right w-full">
                  <img src={img3} alt="" className='w-full rounded-r-[8px] md:h-[512px] h-full'/>
                  </div>


            </div>
        </div>
      </section>

      <footer className='md:mt-[100px] mt-[50px]'>

          <section className='footer-img px-[71px] py-[91px] flex justify-center items-center'>
              <div className='flex flex-col items-center justify-center gap-[62px] md:w-[55%]'>
                <h1 className='text-4xl font-bold text-center text-white'>Are you ready for the order with the best deals?</h1>
                <button className='bg-gradient-to-r from-[#FF7A7A] to-[#F65900] py-2 px-4 text-white font-semibold rounded-[8px] cursor-pointer hover:to-[#f52727]'>PROCEED TO ORDER {">"}</button>
              </div>
          </section>

          <section className='bg-[#212121] py-[99px] px-4'>
              <div className="wrapper">
                <h1 className='font-bold text-white'>Out top cities</h1>
                <div className="lists pt-[40px] grid md:grid-cols-5 grid-cols-2 gap-y-20 pb-[99px]">
                  <ul className='flex flex-col gap-2 text-[#F5F5F5]'>
                    <li className=''>Multan</li>
                    <li>Quetta</li>
                    <li>Peshwar</li>
                    <li>Karachi</li>
                    <li>Islamabad</li>
                  </ul>
                  <ul className='flex flex-col gap-2 text-[#F5F5F5]'>
                    <li className=''>Multan</li>
                    <li>Quetta</li>
                    <li>Peshwar</li>
                    <li>Karachi</li>
                    <li>Islamabad</li>
                  </ul>
                  <ul className='flex flex-col gap-2 text-[#F5F5F5]'>
                    <li className=''>Multan</li>
                    <li>Quetta</li>
                    <li>Peshwar</li>
                    <li>Karachi</li>
                    <li>Islamabad</li>
                  </ul>
                  <ul className='flex flex-col gap-2 text-[#F5F5F5]'>
                    <li className=''>Multan</li>
                    <li>Quetta</li>
                    <li>Peshwar</li>
                    <li>Karachi</li>
                    <li>Islamabad</li>
                  </ul>
                  <ul className='flex flex-col gap-2 text-[#F5F5F5]'>
                    <li className=''>Multan</li>
                    <li>Quetta</li>
                    <li>Peshwar</li>
                    <li>Karachi</li>
                    <li>Islamabad</li>
                  </ul>
                </div>
              <hr className='w-full text-[#F5F5F5]'/>

                <div className="bottom pt-[99px] grid md:grid-cols-6 gap-y-30 lists">

                    <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-white'>Company</h1>
                    <ul className='text-[#F5F5F5]'>
                      <li>About Us</li>
                      <li>Carrer</li>
                      <li>Team</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                  
                    <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-white'>Contact</h1>
                    <ul className='text-[#F5F5F5]'>
                      <li>About Us</li>
                      <li>Carrer</li>
                      <li>Team</li>
                      <li>Blog</li>
                    </ul>
                  </div>

                    <div className='flex flex-col gap-5 col-span-2'>
                    <h1 className='font-bold text-white'>Legal</h1>
                    <ul className='text-[#F5F5F5]'>
                      <li>About Us</li>
                      <li>Carrer</li>
                      <li>Team</li>
                      <li>Blog</li>
                    </ul>
                  </div>

                  <div className="follow-us text-[#F5F5F5] col-span-2 flex flex-col gap-8">
                    <div className="1 text-[#F5F5F5]">FOLLOW US</div>
                    <div className="2 flex items-center gap-3"><img src={instagram} alt="" /><img src={twitter} alt="" /><img src={facebook} alt="" /></div>
                      <label htmlFor="" className='text-[#424242] font-bold'>Receive Exclusive offers in your mailbox</label>
                    <div className="3 flex items-center gap-3">
                      <div className='flex items-center gap-2 px-3 py-3 rounded-[8px] w-full bg-[#424242]'>
                        <img src={mail} alt="" />
                        <input type="text" placeholder='Enter your email' className='w-full px-2 outline-0'/>
                      </div>
                        <button className='bg-yellow rounded-[8px] h-fit text-white font-semibold px-4 py-3 text-center'>Subscribe</button>
                    </div>
                  </div>

                </div>
              
              </div>

          </section>

      </footer>
    </>
  )
}

export default App
