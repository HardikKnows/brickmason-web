function HowItWorks(){
    
    return <section class=" bg-lightbrownc py-[100px]">
    <div class="container">
        <div class="section-heading mb-40">
            <h2>How it works</h2>
            <span>
                Our steps are simple and easy to understand: Plan - Build - Track - Settle in.
            </span>
        </div>
    </div>

    <div class="container">

        <div class="slider-how-it-works">
            <div>
                <div class="work-pro-item text-center active">
                    <button class="number" id="how-it-works1" onclick="buttonclicked1(); howitworks(1);" style="color: white; background-color: black;">1</button>
                   <div class="number-line"></div>

                    <h5 class="howitworkssub">Raise a Request</h5>

                </div>
            </div>
            <div class="hrhowitworks1"></div>
            <div>
                <div class="work-pro-item text-center">
                    <button class="number" id="how-it-works2" onclick="buttonclicked2(); howitworks(2)" style="color: white; background-color: black;">2 </button>
                    <h5 class="howitworkssub">Meet Our Experts</h5>

                </div>
            </div>
            <div class="hrhowitworks2"></div>
            <div>
                <div class="work-pro-item text-center">
                    <button class="number" id="how-it-works3" onclick="buttonclicked3(); howitworks(3)" style="color: white; background-color: black;">3</button>
                    <h5 class="howitworkssub">Book with us</h5>

                </div>
            </div>
            <div class="hrhowitworks3"></div>
            <div>
                <div class="work-pro-item text-center">
                    <button class="number" id="how-it-works4" onclick="buttonclicked4(); howitworks(4)" style="color: rgb(58, 58, 58); background-color: rgba(255, 255, 255, 0);">4</button>
                    <h5 class="howitworkssub">Receive Designs</h5>

                </div>
            </div>
            <div class="hrhowitworks4"></div>
            <div>
                <div class="work-pro-item text-center">
                    <button class="number" id="how-it-works5" onclick="buttonclicked5(); howitworks(5)" style="color: rgb(58, 58, 58); background-color: rgba(255, 255, 255, 0);">5</button>
                    <h5 class="howitworkssub"> Track &amp; Transact</h5>

                </div>
            </div>
            <div class="hrhowitworks5"></div>
            <div>
                <div class="work-pro-item text-center">
                    <button class="number" id="how-it-works6" onclick="buttonclicked6(); howitworks(6)" style="color: rgb(58, 58, 58); background-color: rgba(255, 255, 255, 0);">6</button>
                    <h5 class="howitworkssub">Settle In</h5>

                </div>
            </div>
        </div>
    </div>
    <div class="text-center wow fadeInUp" data-wow-delay="400ms" style="visibility: visible; animation-delay: 400ms; animation-name: fadeInUp;">
        <div class="container">
            <div id="how_it_works_1" style="display: none;">
                <img src="/img/how-it-works-2.png"/>
            </div>
            <div id="how_it_works_2" style="display: none;">
                <img src="/img/how-it-works-3.png"/>
            </div>
            <div id="how_it_works_3" style="display: block;">
                <img src="/img/how-it-works-4.png"/>
            </div>
            <div id="how_it_works_4" style="display: none;">
                <img src="/img/how-it-works-6.png"/>
            </div>
            <div id="how_it_works_5" style="display: none;">
                <img src="/img/how-it-works-5.png"/>
            </div>
            <div id="how_it_works_6" style="display: none;">
                <img src="/img/how-it-works-1.png"/>
            </div>
        </div>
        <div></div>
    </div>
    <div class="how-it-works-info" id="how-it-works-info1" style="display: none;">
        <div class="wow fadeInUp" data-wow-delay="0ms" style="visibility: visible; animation-delay: 0ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>01 Raise a Request</h3>
                <p> Raise a service request or call us at +91-9161003434. Our technical expert will get in touch
                    with you.<br/>
                    <a class="widget-links" href="/lets-build.html">Let's build</a>
            </p></div>
            <p></p>
        </div>
    </div>
    <div class="how-it-works-info" id="how-it-works-info2" style="display: none;">
        <div class="wow fadeInUp" data-wow-delay="100ms" style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>02 Meet our Expert</h3>
                <p>
                    Our experts visit you to take all the requirements and submit exhaustive specifications.
                </p>
            </div>
        </div>
    </div>
    <div id="how-it-works-info3" class="how-it-works-info" style="display: block;">
        <div class="wow fadeInUp" data-wow-delay="100ms" style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>03 Book with Us</h3>
                <p> Good to go. You pay 5% of the estimated project cost as Booking Amount.</p>
            </div>
        </div>
    </div>
    <div id="how-it-works-info4" class="how-it-works-info" style="display: none;">
        <div class="wow fadeInUp" data-wow-delay="100ms" style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>04 Receive designs</h3>
                <p> Our Professional will provide exhaustive drawings and designs till the customer is fully
                    satisfied.
                    Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.
                </p>
            </div>
        </div>
    </div>
    <div id="how-it-works-info5" class="how-it-works-info" style="display: none;">
        <div class="wow fadeInUp" data-wow-delay="100ms" style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>05 Track &amp; Transact</h3>
                <p> To ensure absolute trust, BrickMason provides an escrow model where you transfer the amount for
                    stage of the project. You can track the project through our customer application.
                </p>
            </div>
        </div>
    </div>
    <div id="how-it-works-info6" class="how-it-works-info" style="display: none;">
        <div class="wow fadeInUp" data-wow-delay="100ms" style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="lets_vr">
                <h3>06 Settle In</h3>
                <p>We make sure you are well settled in your new home. Our journey together doesn't end here. We
                    provide
                    5 years of warranty.
                </p>
            </div>
        </div>
    </div>
    
    <div class="learn_how_it_works">
        <a href="/how-it-works.html" class="default-btn">Learn More&nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
    </div>
    
</section>;
}



export default HowItWorks;