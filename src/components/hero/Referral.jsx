import React from "react";
import referrSvg from "../../assets/refer.svg"
import arrow from "../../assets/arrow.png"

function Referral () {
    return <section className=" bg-lightbrownc py-[60px] md:py-[100px]">
    <div className="container refer-main w-full px-[15px] mx-auto block md:grid grid-cols-3">
        <div className=" content-info wow fadeInRight col-start-1 col-end-3 px-[15px] text-left" data-wow-delay="300ms" styleRe="visibility: visible; animation-delay: 300ms; animation-name: fadeInRight;">
            <h2 className="text-[22px] md:text-[32px]/[42px] poppins mb-[20px] ">Referral Program</h2>
            <span className="workSans text-[12px] uppercase">Refer your friends &amp; family looking for house construction and earn exciting flipkart/amazon
                vouchers* upto 10,000
                INR today.</span>
        </div>
        <div className=" col-start-3 col-end-4">
            <img src={referrSvg} alt=""/>
        </div>
    </div>
    <div className="container absolute  ">    
        <div className="px-[15px] relative min-[992px]:top-[-100px] min-[992px]:ml-[36px] lg:ml-[72px] min-[1120px]:ml-[80px]  min-[1400px]:ml-[50px]  min-[1400px]:top-[-150px]">
        <div className="inner-layer  bg-orangebrick w-40 h-10 flex justify-center content-center text-center rounded mt-[30px]  " >          
            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10  ">learn More <img className="inline w-[25px] pb-[5px]" src={arrow}/></a>
        </div>
        </div>
    </div>
</section> 
    ;
}
export default Referral;