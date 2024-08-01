import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Carousel } from "react-bootstrap";
function Slider (props) {
    const sliderNo = props.serialNo;
            
    return ( 
        <div>
            
          {(() => {
            if (sliderNo == 1) {
              return (
                <div><Carousel.Item>
                                                    {/* this is for background image*/}
                    <div className="carousel-image bg-img-1 d-block w-full animate-zoomin" > </div>
                                                    {/* this is for captions*/}
                <Carousel.Caption className="w-full absolute top-0 !text-left ">
                <div className="slider-content  absolute left-[-12%] top-16">
                                    <div className="dl-caption medium">
                                        <div className="inner-layer">
                                            <div><p className="  !workSans text-Rwhite one animate fadeRight text-xs   " >Resedential</p></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div ><h3 className=" !font-semibold poppins two animate fadeLeft text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl ">{props.heading1}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div><h3 className=" !font-semibold poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl three  animate fadeLeft">{props.heading2}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption small">
                                        <div className="inner-layer">
                                            <div><p className="source-sans text-xs lg:text-base four animate fadeLeft w-[90%] sm:w-full">{props.subHead1} <br/>{props.subHead2}.</p>
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
              </Carousel.Item></div>
              )
            } else if (sliderNo==2) {
              return (
                <div><Carousel.Item>
                {/* this is for background image*/}
             <div className="carousel-image bg-img-2 d-block w-full animate-zoomin" > </div>
              
                <Carousel.Caption className=" absolute top-0 text-center flex justify-center content-center ">  
                <div className="slider-content absolute  top-16">
                                    <div className="dl-caption medium">
                                        <div className="inner-layer">
                                            <div><p className=" one animate fadeUp  !workSans text-Rwhite text-xs" >Resedential</p></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div><h3 className=" !font-semibold poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl two animate fadeDown">{props.heading1}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div><h3 className=" !font-semibold  poppins text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl three animate fadeDown">{props.heading2}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption small">
                                        <div className="inner-layer">
                                            <div><p className="source-sans four animate fadeDown text-xs lg:text-base">{props.subHead1}<br/>{props.subHead2}</p>
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
              </Carousel.Item> </div>
              )
            } else {
              return (
                <div><Carousel.Item>   
                {/* this is for background image*/}
            <div className="carousel-image bg-img-3 d-block w-full animate-zoomin" > </div>
              
                <Carousel.Caption className=" absolute  top-0 !text-right w-64 sm:w-[100%]">  
                <div className="slider-content absolute left-[-20%] top-16 sm:absolute  sm:right-[20%]">
                                    <div className="dl-caption medium">
                                        <div className="inner-layer">
                                            <div><p className="  !workSans text-Rwhite  one animate fadeLeft text-xs" >Resedential</p></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div><h3 className=" !font-semibold  poppins two animate fadeRight text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl">{props.heading1}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption big">
                                        <div className="inner-layer">
                                            <div ><h3 className=" !font-semibold  poppins three animate fadeRight text-2xl sm:text-2xl md:text-2xl lg:text-4.5xl">{props.heading2}</h3></div>
                                        </div>
                                    </div>
                                    <div className="dl-caption small">
                                        <div className="inner-layer">
                                            <div><p className="source-sans four animate fadeRight text-xs lg:text-base">{props.subHead1} <br/>{props.subHead2}</p>
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
              </Carousel.Item>  </div>
              )
            }
          })()}
        </div>
             ) ; 
            }
            export default Slider;
    
    { /* <Carousel.Item>  */}
    {/* this is for background image*/}
{/* <div className={props.classOD}> </div>*/}
     {/* this is for captions*/}
   {/* <Carousel.Caption className={props.classCC}>
    <div className={props.classID} >
    <div className="dl-caption medium">
                            <div className="inner-layer">
                                <div><p className={props.ClassCommonHead} >Resedential</p></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div ><h3 className={props.ClassHeading1}>{props.heading1}</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption big">
                            <div className="inner-layer">
                                <div><h3 className={props.ClassHeading2}>{props.heading2}</h3></div>
                            </div>
                        </div>
                        <div className="dl-caption small">
                            <div className="inner-layer">
                                <div><p className={props.classSH}>{props.subHead1} <br/>{props.subHead2}</p>
                                </div>
                            </div>
                        </div>
                        <div className={props.ClassButton} >
                          <div className="inner-layer  bg-orangebrick w-28 h-10 flex justify-center content-center text-center rounded " >
                            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Let's Build</a>
                          </div>
                        </div>
                    </div>
    </Carousel.Caption>  
  </Carousel.Item> */}
