import React from "react";
import Undraw from "../../assets/undraw_Ordinary_day.svg"
import { motion, useScroll } from 'framer-motion';
import { Link } from "react-router-dom";

function Promotional () {
    return <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 pt-[20px] ">
    <div className="promo ">
        <div className=" text-center mb-[40px] wow fadeInUp text-[22px]/[26px] md:text-[32px]/[42px] poppins   " data-wow-delay="100ms" styleRe="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <h2 className="mb-[10px]">Hire the Best<br/> Construction Service</h2>
        </div>
        <div className=" flex flex-col">
            <div className=" flex ml-[20px] xxsm:ml-[40px] xsm:ml-[50px] xsm:w-[30%] md:ml-[80px] min-[992px]:ml-[100px] min-[992px]:w-[80%] lg:ml-[280px] ">
                <div className=" ml-[7px] text-[16px] text-[#800080] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px] "><i className="fa fa-home"></i> 60+<p className=" source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Homes</p>
                </div>
                <div className=" border-r-[3px] border-solid border-r-[#3635352a] ml-[30px] mr-[10px] h-[90px] xsm:ml-[80px] xsm:h-[100px]"></div>
                <div className="ml-[7px] text-[16px] text-[#800080] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px]"><i className="fa fa-check-circle"></i> 100+<p className="source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Quality checks</p>
                </div>
                <div className="border-r-[3px] border-solid border-r-[#3635352a] ml-[30px] mr-[10px] h-[90px] xsm:ml-[80px] xsm:h-[100px]"></div>
                <div className="ml-[7px] text-[16px] text-[#800080] !font-semibold mb-[80px] xsm:ml-[5px] md:ml-[20px] md:text-[30px]"><i className="fas fa-shield-alt"></i> 100%<p className="source-sans  text-[#000] mt-[8px]  !font-medium text-[14px] md:text-[20px] ">Safe
                        Money<br/>Transaction</p>
                </div>

            </div>

            <Link to='/contact' className="bg-[#800080] promo-btn-radius source-sans px-[30px] py-[15px] text-white text-[12px] md:text-[16px] hover:no-underline no-underline !mt-[-50px] xsm:mt-[-80px] max-[580px]:mt-[0] ml-[80px] w-fit mb-[150px] md:ml-[100px] md:w-[155px] min-[992px]:ml-[300px]  min-[992px]:mb-[100px] ">Let's Build&nbsp;&nbsp;<i className="fa fa-wrench"></i></Link>
            <br/>
            <img src={Undraw} className="hire-bg ml-[-800px] w-[200px] mt-[200px] xxsm:ml-[-750px]   xsm:w-[250px] min-[580px]:ml-[-600px] min-[580px]:w-[250px] min-[580px]:mt-[150px] md:ml-[-500px] md:w-[350px] min-[992px]:ml-[-250px] min-[992px]:mt-[120px]  flex absolute left-[900px] lg:mt-[80px] lg:w-[400px] xl:ml-[-10px] xl:mt-[-10px]"/>

            


        </div>

</div>
 {/* Floating Background Circles */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 bg-purple-200 rounded-full opacity-30"
          animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        
      </div></section>;
}
export default Promotional;
