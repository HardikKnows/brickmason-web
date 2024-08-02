import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Carousel} from "react-bootstrap";
function HeroSection() {  
  
  return  (  
<div className='   '>  
    <Carousel className=" overflow-hidden relative max-h-[400px] lg:max-h-[350px]  ">  
  <Carousel.Item> 
    {/* this is for background image*/}
 <div className="bg-[length:500px_400px] sm:bg-[length:100%_400px] lg:bg-[length:100%_350px] h-screen   bg-img-1 d-block w-full animate-zoomin"></div>
    <Carousel.Caption className="w-full absolute top-0 !text-left ">
                    <div className="slider-content  absolute left-[-12%] top-16">
                        <div className="dl-caption medium">
                            <div className="inner-layer">
                                <div><p className="  !workSans text-Rwhite one animate fadeRight text-xs   " >Resedential</p></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div ><h3 className=" !font-semibold poppins two animate fadeLeft text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl ">We provide outstanding</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div><h3 className=" !font-semibold poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl three  animate fadeLeft">construction services.</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption small">
                            <div className="inner-layer">
                                <div><p className="source-sans text-xs lg:text-base four animate fadeLeft w-[90%] sm:w-full">We have provided complete remodeling
                                    and construction solutions for <br/>residential and commercial properties all across
                                    Uttar Pradesh.</p>
                                </div>
                            </div>
                        </div>
                        <div className="LetsBuild pr-9 five animate fadeLeft "  >
                          <div className="inner-layer  bg-orangebrick w-28 h-10 flex justify-center content-center text-center rounded " >
                            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Let's Build</a>
                          </div>
                        </div>
                    </div>
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    {/* this is for background image*/}
  <div className="bg-[length:500px_400px] sm:bg-[length:100%_400px] lg:bg-[length:100%_350px] h-screen  bg-img-2 d-block w-full animate-zoomin" > </div>
  
    <Carousel.Caption className=" absolute top-0 text-center flex justify-center content-center ">  
    <div className="slider-content absolute  top-16">
                        <div className="dl-caption medium">
                            <div className="inner-layer">
                                <div><p className=" one animate fadeUp  !workSans text-Rwhite text-xs" >Resedential</p></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div><h3 className=" !font-semibold poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl two animate fadeDown">We are professional</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div><h3 className=" !font-semibold  poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl three animate fadeDown">for building construction.</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption small">
                            <div className="inner-layer">
                                <div><p className="source-sans four animate fadeDown text-xs lg:text-base">We have provided complete remodeling
                                    and construction solutions for <br/>residential and commercial properties all across
                                    Uttar Pradesh.</p>
                                </div>
                            </div>
                        </div>
                        <div className="LetsBuild px-9  five animate fadeDown flex justify-center content-center"  >
                          <div className="inner-layer  bg-orangebrick w-28 h-10 flex justify-center content-center text-center rounded " >
                            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Let's Build</a>
                          </div>
                        </div>
                    </div>
    </Carousel.Caption>  
  </Carousel.Item>  
<Carousel.Item>
    {/* this is for background image*/}
<div className="bg-[length:500px_400px] sm:bg-[length:100%_400px] lg:bg-[length:100%_350px] h-screen   bg-img-3 d-block w-full animate-zoomin" > </div>
  
    <Carousel.Caption className=" absolute  top-0 !text-right w-64 sm:w-[100%]">  
    <div className="slider-content absolute left-[-20%] top-16 sm:absolute  sm:right-[20%]">
                        <div className="dl-caption medium">
                            <div className="inner-layer">
                                <div><p className="  !workSans text-Rwhite  one animate fadeLeft text-xs" >Resedential</p></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div><h3 className=" !font-semibold  poppins two animate fadeRight text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl">We will be happy to take care</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div ><h3 className=" !font-semibold  poppins three animate fadeRight text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl">of your construction works.</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption small">
                            <div className="inner-layer">
                                <div><p className="source-sans four animate fadeRight text-xs lg:text-base">We have provided complete remodeling
                                    and construction solutions for <br/>residential and commercial properties all across
                                    Uttar Pradesh.</p>
                                </div>
                            </div>
                        </div>
                        <div className="LetsBuild pl-9 flex flex-row-reverse five animate fadeRight"  >
                          <div className="inner-layer  bg-orangebrick w-28 h-10 flex justify-center content-center text-center rounded " >
                            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Let's Build</a>
                          </div>
                        </div>
                    </div>
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  

);
}
   

export default HeroSection;