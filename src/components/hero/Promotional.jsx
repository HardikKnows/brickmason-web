import React from "react";
import Undraw from "../../assets/undraw.png"

function Promotional () {
    return <section className="pt-[20px]">
    <div className="promo ">
        <div className=" text-center mb-[40px] wow fadeInUp text-[22px]/[26px] md:text-[32px]/[42px] poppins   " data-wow-delay="100ms" styleRe="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <h2 className="mb-[10px]">Hire the Best<br/> Construction Service</h2>
        </div>
        <div className=" flex flex-col">
            <div className=" flex ml-[20px] xxsm:ml-[40px] xsm:ml-[50px] xsm:w-[30%] md:ml-[80px] min-[992px]:ml-[100px] min-[992px]:w-[80%] lg:ml-[280px] ">
                <div className=" ml-[7px] text-[16px] text-[#ff7607] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px] "><i className="fa fa-home"></i> 1200+<p className=" source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Homes</p>
                </div>
                <div className=" border-r-[3px] border-solid border-r-[#3635352a] ml-[30px] mr-[10px] h-[90px] xsm:ml-[80px] xsm:h-[100px]"></div>
                <div className="ml-[7px] text-[16px] text-[#ff7607] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px]"><i className="fa fa-check-circle"></i> 100+<p className="source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Quality checks</p>
                </div>
                <div className="border-r-[3px] border-solid border-r-[#3635352a] ml-[30px] mr-[10px] h-[90px] xsm:ml-[80px] xsm:h-[100px]"></div>
                <div className="ml-[7px] text-[16px] text-[#ff7607] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px]"><i className="fas fa-shield-alt"></i> 100%<p className="source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Safe
                        Money<br/>Transaction</p>
                </div>

            </div>

            <a className="bg-[#ff7607] promo-btn-radius source-sans px-[30px] py-[15px] text-white text-[12px] md:text-[16px] no-underline !mt-[-50px] xsm:mt-[-80px] max-[580px]:mt-[0] ml-[80px] w-fit mb-[150px] md:ml-[100px] md:w-[155px] min-[992px]:ml-[300px]  min-[992px]:mb-[100px] " href="/lets-build.html">Let's Build&nbsp;&nbsp;<i className="fa fa-wrench"></i></a>
            <br/>
            <img src={Undraw} className="hire-bg ml-[-800px] w-[200px] mt-[200px] xxsm:ml-[-750px]   xsm:w-[250px] min-[580px]:ml-[-600px] min-[580px]:w-[250px] min-[580px]:mt-[150px] md:ml-[-500px] md:w-[350px] min-[992px]:ml-[-250px] min-[992px]:mt-[120px]  flex absolute left-[900px] lg:mt-[80px] lg:w-[400px] xl:ml-[-10px] xl:mt-[-10px]"/>

            


        </div>

</div></section>;
}
export default Promotional;