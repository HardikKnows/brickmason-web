import React from "react";
import logo from "../../assets/logo.png";

function Footer () {
    return <section className=" py-[60px] md:py-[100px] bg-[#232427] border-b-[1px] border-solid border-[#333]">
    <div className="container px-[15px] mx-auto">
        <div className="flex flex-wrap mx-[-15px] text-left">
            <div className="col-lg-3 col-sm-6 p-[15px] ">
                <div className="widget-content">
                    <a href="#"><img className="bg-[#fff] mb-[20px] w-[290px]" src={logo} alt="brand"/></a>
                    <p className="source-sans max-[768px]:text-[12px]/[22px] text-[#fff]">Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6  p-[15px]">
                <div className="widget-content">
                    <h4 className="text-[#fff] poppins">Site Map</h4>
                    <ul className="widget-links text-[#8d9aa8] leading-[2rem] source-sans text-[12px] md:text-[16px] pl-0">
                        <li><a className="no-underline text-[#8d9aa8]"    href="/how-it-works.html">How it Works</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/projects.html">Our Projects</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/cost-estimator.html">Cost Estimator</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/material-est.html">Material Estimator</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/floor-plan.html">Floor Plans</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/about-us.html">About Us</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/contact.html">Contact Us</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/testimonial.html">Reviews</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-[15px]">
                <div className="widget-content">
                    <h4 className="text-[#fff] poppins">Information</h4>
                    <ul className="widget-links source-sans text-[12px] md:text-[16px]  pl-0">
                        <li><a className="no-underline text-[#8d9aa8]"    href="/tnc.html">Terms &amp; Conditions</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/privacy.html">Privacy Policy</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/faqs.html">FAQs</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="/cancellation.html">Cancellation Policy</a></li>
                    </ul>


                </div>
            </div>
            <div className="col-lg-4 col-sm-6 p-[15px]">
                <div className="widget-content">
                    <a className="no-underline text-[#8d9aa8]"    href="/material-est.html">
                        <h4 className="text-[#fff] poppins">BrickMason Building Materials <i className="fa fa-arrow-right" id="footer-btns"></i></h4>
                    </a>
                    <a className="no-underline text-[#8d9aa8]"    href="/referral.html">
                        <h4 className="text-[#fff] poppins">Referral Program <i className="fa fa-arrow-right" id="footer-btns"></i></h4>
                    </a>
                    <hr/>

                    <h4 className="text-[#fff] poppins">Get in Touch</h4>
                    <ul className="widget-links source-sans text-[12px] md:text-[16px]  pl-0">
                        <li><a className="no-underline text-[#8d9aa8]"    href="tel:+918874778585">+918874778585</a></li>
                        <li><a className="no-underline text-[#8d9aa8]"    href="tel:+918400400048">+918400400048</a></li>
                    </ul>

                    <ul className="widget-links source-sans text-[12px] md:text-[16px]  pl-0">
                        <li><a className="no-underline text-[#8d9aa8]"    href="mailto:brickmasonconstructions@gmail.com">brickmasonconstructions@gmail.com</a></li>
                    </ul>

                    <hr/>
                    <a className="no-underline m-[5px] mr-[10px] pb-[2px] text-[#ababc7] text-[30px]"     href="#"><i className="fa fa-facebook-f" id="btm-icn"></i></a>
                    <a className="no-underline m-[5px] mr-[10px] pb-[2px] text-[#ababc7] text-[30px]"    href="#"><i className="fa fa-twitter" id="btm-icn"></i></a>
                    <a className="no-underline m-[5px] mr-[10px] pb-[2px] text-[#ababc7] text-[30px]"    href="#"><i className="fa fa-instagram" id="btm-icn"></i></a>
                   { /*<div className="subscribe-box clearfix">
                        <div className="subscribe-form-wrap">
                            <form action="#" className="subscribe-form">
                                <input type="email" name="email" id="subs-email" className="form-input"
                                    placeholder="Enter Your Email Address..."/>
                                <button type="submit" className="submit-btn">Subscribe</button>
                                <div id="subscribe-result">
                                    <p className="subscription-success"></p>
                                    <p className="subscription-error"></p>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
    
;
}
export default Footer;
