import React, { useState } from "react";
import HIWImg1 from "../../assets/how-it-works-1.png";
import HIWImg2 from "../../assets/how-it-works-2.png";
import HIWImg3 from "../../assets/how-it-works-3.png";
import HIWImg4 from "../../assets/how-it-works-4.png";
import HIWImg5 from "../../assets/how-it-works-5.png";
import HIWImg6 from "../../assets/how-it-works-6.png";


function HowItWorks(){
    const [effect, setEffect] = useState(false)
    return <section className=" bg-lightbrownc py-[100px]">
    <div className="container !w-full px-4 text-left">
    
        <div className=" mb-[40px] ">
            <h2 className="poppins text-2xl/[26px]  md:text-3xl/[42px] text-blackHW ">How it works</h2>
            <span className=" mb-3 workSans text-xs uppercase  text-blackHW">
                Our steps are simple and easy to understand: Plan - Build - Track - Settle in.
            </span>
        </div>
    </div>
     
    <div className="container p-0 !w-full md:px-4 md:mx-auto ml-  " >
 

        <div className=" container grid grid-cols-12 pr-3 relative right-4">
            
                <div className=" text-center  max-[767px]:px-[30px]">
                    <button
                        className={`${
                            effect && " turnOn animate delay-0"
                        } poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-20 border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate    delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
                        onClick={() => {
                        setEffect(true);
                        }}
                        onAnimationEnd={() => setEffect(false)}
                        >
                        1
                    </button>
                </div>

          
            <div className="  border-t-[2px] border-dashed h-[1px] w-[130%] border-blackHW  mt-[55%]  xxsm:-mr-[55px] xsm:mt-[15px] md:border-t-[3px] relative  left-[27px]  min-[576px]:left-[15px] md:-left-5  md:w-[160%] min-[992px]:w-[170%] min-[1200px]:w-[177%]   min-[992px]:-left-7 min-[1200px]:-left-10"></div>
           
                <div className=" text-center max-[767px]:px-[30px]">
                <button
          className={`${
            effect && "turnOn animate delayInAnimation4s delay-0"
          }  poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-[1] border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate delayInAnimation4s delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
        2
        </button>                    
                </div>
            
            <div className="  border-t-[2px] border-dashed h-[1px]  w-[130%] border-blackHW  mt-[55%]  xxsm:-mr-[55px] xsm:mt-[15px] md:border-t-[3px] relative left-[27px]  min-[576px]:left-[15px] md:-left-5     md:w-[160%] min-[992px]:w-[170%] min-[1200px]:w-[177%]  min-[992px]:-left-7 min-[1200px]:-left-10 "></div>
       
                <div className=" text-center max-[767px]:px-[30px]">
                <button
          className={`${
            effect && "turnOn animate"
          }  poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-[1] border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate delayInAnimation8s delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
        3
        </button>                    

                </div>
            
            <div className="  border-t-[2px] border-dashed h-[1px]  w-[130%] border-blackHW  mt-[55%]  xxsm:-mr-[55px] xsm:mt-[15px] md:border-t-[3px] relative  left-[27px]  min-[576px]:left-[15px] md:-left-5  md:w-[160%] min-[992px]:w-[170%] min-[1200px]:w-[177%]  min-[992px]:-left-7 min-[1200px]:-left-10"></div>
            
                <div className=" text-center max-[767px]:px-[30px]">
                <button
          className={`${
            effect && "turnOn animate"
          }  poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-[1] border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate delayInAnimation12s delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
        4
        </button>                    

                </div>
          
            <div className=" border-t-[2px] border-dashed h-[1px]  w-[130%] border-blackHW  mt-[55%]  xxsm:-mr-[55px] xsm:mt-[15px] md:border-t-[3px] relative  left-[27px]  min-[576px]:left-[15px] md:-left-5  md:w-[160%] min-[992px]:w-[170%] min-[1200px]:w-[177%]  min-[992px]:-left-7 min-[1200px]:-left-10 "></div>
         
                <div className=" text-center max-[767px]:px-[30px]">
                <button
          className={`${
            effect && "turnOn animate"
          } poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-[1] border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate delayInAnimation16s delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
        5
        </button>              

                </div>
  
            <div className="  border-t-[2px] border-dashed h-[1px]  w-[130%] border-blackHW  mt-[55%]  xxsm:-mr-[55px] xsm:mt-[15px] md:border-t-[3px] relative  left-[27px]  min-[576px]:left-[15px] md:-left-5  md:w-[160%] min-[992px]:w-[170%] min-[1200px]:w-[177%]  min-[992px]:-left-7 min-[1200px]:-left-10  "></div>
         
                <div className=" text-center  max-[767px]:px-[30px]">
<button
          className={`${
            effect && "turnOn animate"
          }  poppins font-light w-[25px] h-[25px] text-center inline-block text-[10px]/[20px] rounded-full  mb-3 relative z-[1] border-[2px] border-solid border-black outline-borderHW2  outline-[1px] turnOn animate delayInAnimation20s delay-0 overflow-visible xsm:w-[30px] xms:h-[30px] xsm:text-[10px]/[25px] lg:text-[15px]/[25px] hiwButton`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
        6
        </button>
        </div>
        </div>
    </div>
    <div className=" container !w-full md:px-4 md:mx-auto grid grid-cols-6 relative min-[576px]:right-3 md:right-10 min-[992px]:right-14  ">
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] ">Raise a Request</h5>
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] ">Meet Our Experts</h5>
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] ">Book with us</h5>
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] ">Receive Designs</h5>
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] "> Track &amp; Transact</h5>
        <h5 className=" poppins mx-2 mb-4 text-[9px] text-[#263a4f] xxsm:mx-3 xsm:text-[10px]  min-[580px]:mx-[15px] min-[580px]:text-[12px] md:mx-[30px] md:text-[13px] min-[992px]:mx-[15px] min-[992px]:text-[15px] lg:text-[0.83rem] ">Settle In</h5>



    </div>
   
        <div className=" px-[15px] w-full  mx-auto overflow-hidden h-[320px] text-center  ">
            
            <div className="animate noneToBlock  blockToNone4s pb-20 mx-auto w-fit ">
                <img src={HIWImg1}/>
            </div>
            <div className="animate  noneToBlock4s  blockToNone8s pb-20 mx-auto w-fit">
                <img src={HIWImg2}/>           
            </div>
            <div className="animate   noneToBlock8s  blockToNone12s pb-20 mx-auto w-fit">
                <img src={HIWImg3}/>
            </div>
            <div className="animate noneToBlock12s  blockToNone16s pb-20 mx-auto w-fit">
                <img src={HIWImg4}/>
            </div>
            <div className="animate  noneToBlock16s  blockToNone20s pb-20 mx-auto w-fit">
                <img src={HIWImg5}/>
            </div>
            <div className="animate  noneToBlock20s  blockToNone24s pb-20 mx-auto w-fit">
                <img src={HIWImg6}/>
            </div>
     
        <div></div>
    </div>
<div className="h-[162px] overflow-hidden">
    <div className="p-[1.25rem] mb-20 w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock  blockToNone4s">
        <div className="wow fadeInUp" data-wow-delay="0ms" styleRe="visibility: visible; animation-delay: 0ms; animation-name: fadeInUp;">
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate  ">
                <h3 className="poppins text-base md:text-[20px]/[]">01 Raise a Request</h3>
                <p className="source-sans text-xs"> Raise a service request or call us at +91-9161003434. Our technical expert will get in touch
                    with you.<br/>
                    <a className="widget-links" href="/lets-build.html">Let's build</a>
            </p></div>
            <p></p>
        </div>
    </div>
    <div className="p-[1.25rem]  mb-20 w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock4s  blockToNone8s">
        <div>
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate delayInAnimation5s">
                <h3 className="poppins text-base md:text-[20px]/[]">02 Meet our Expert</h3>
                <p  className="source-sans text-xs">
                    Our experts visit you to take all the requirements and submit exhaustive specifications.
                </p>
            </div>
        </div>
    </div>
    <div className="p-[1.25rem]  mb-20 w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock8s  blockToNone12s">
        <div>
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate delayInAnimation9s">
                <h3  className="poppins text-base md:text-[20px]/[]">03 Book with Us</h3>
                <p className="source-sans text-xs"> Good to go. You pay 5% of the estimated project cost as Booking Amount.</p>
            </div>
        </div>
        
    </div>
    <div className="p-[1.25rem]  mb-20 w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock12s  blockToNone16s">
        <div>
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate delayInAnimation13s">
                <h3  className="poppins text-base md:text-[20px]/[]">04 Receive designs</h3>
                <p className="source-sans text-xs"> Our Professional will provide exhaustive drawings and designs till the customer is fully
                    satisfied.
                    Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.
                </p>
            </div>
        </div>
    </div>
    <div className="p-[1.25rem]  mb-20 w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock16s  blockToNone20s">
        <div>
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate delayInAnimation17s">
                <h3  className="poppins text-base md:text-[20px]/[]">05 Track &amp; Transact</h3>
                <p className="source-sans text-xs"> To ensure absolute trust, BrickMason provides an escrow model where you transfer the amount for
                    stage of the project. You can track the project through our customer application.
                </p>
            </div>
        </div>
    </div>
    <div className="p-[1.25rem]  w-[] bg-white mx-[1.25rem] xsm:mx-[50px] xsm:mt-10 min-[580px]:mx-[100px] min-[992px]:mx-20  lg:mx-[300px]  xl:mx-[400px] lg:mt-[50px] animate noneToBlock20s  blockToNone24s">
        <div>
            <div className=" border-l-[#636262da] border-solid border-l-[1px] pl-[10px] text-left fadeUp animate delayInAnimation21s">
                <h3  className="poppins text-base md:text-[20px]/[]">06 Settle In</h3>
                <p className="source-sans text-xs">We make sure you are well settled in your new home. Our journey together doesn't end here. We
                    provide
                    5 years of warranty.
                </p>
            </div>
        </div>
    </div>
</div>
    <div className="flex justify-center content-center">        
        <div className="inner-layer  bg-orangebrick w-28 h-10 flex justify-center content-center text-center rounded mt-[30px] " >          
            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Let's Build</a>
        </div>
    </div>
    
</section>;
}


export default HowItWorks;