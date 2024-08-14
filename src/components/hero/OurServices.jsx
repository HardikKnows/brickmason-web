import React from "react";
import folderIcon from "../../assets/folder.png"
import spinnerIcon from "../../assets/spinner.png"
import mapIcon from "../../assets/map.png"
import shareIcon from "../../assets/share.png"
import cityIcon from "../../assets/city.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function OurServices() {
    return (

        <section class="py-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center poppins text-[22px]">Our Services</h2>
        <p class="text-secondary mb-5 text-center workSans text-xs md:text-base">Flawless construction powered by deep expertise.</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
          <div className="flex justify-center content-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
            <g fill="#ff7607" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(9.84615,9.84615)"><path d="M20,2.03125c-0.55078,0 -1,0.44922 -1,1v4.78125l-5.28125,-5.28125c-0.39062,-0.39062 -1.04687,-0.39062 -1.4375,0l-11.71875,11.75c-0.39062,0.39063 -0.39062,1.01563 0,1.40625c0.39063,0.39063 1.01563,0.39063 1.40625,0l11.03125,-11.03125l11.0625,11.0625c0.19531,0.19531 0.46094,0.3125 0.71875,0.3125c0.25781,0 0.49219,-0.11719 0.6875,-0.3125c0.39063,-0.39062 0.39063,-1.01562 0,-1.40625l-3.46875,-3.46875v-7.8125c0,-0.55078 -0.44922,-1 -1,-1zM13,6.5l-11,11v5.5c0,1.65625 1.34375,3 3,3h16c1.65625,0 3,-1.34375 3,-3v-5.5zM11,16h4c0.55078,0 1,0.44922 1,1v6c0,0.55078 -0.44922,1 -1,1h-4c-0.55078,0 -1,-0.44922 -1,-1v-6c0,-0.55078 0.44922,-1 1,-1z"></path></g></g>
            </svg>
        </div>
          
          <h5 class="my-2">New Build Homes</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal"> We can provide a turnkey package to construct a new build home. We are happy working closely with clients and architects to form a robust, well-informed team to move the project forwards with no surprises.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
        <div className="flex justify-center content-center">      
       <img src={folderIcon}/>
        </div>

          <h5 class="my-2">House Extensions</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal"> Extending your home can often be a less costly and stressful option than moving to a new property. You can take the opportunity to change the layout and make the building to work better for you. We will guide you every step of the way with your house extension. If required we know some great Architects who can help design the space, apply for planning permission and produce detailed plans.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
        <div className="flex justify-center content-center">      
       <img src={spinnerIcon}/>
        </div>
          <h5 class="my-2">House Renovation</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal">House renovation projects breath new life into tired homes. We have significant experience working with listed buildings and ones within Heritage and Conservation areas. We use building techniques that are sympathetic to the building. You can update the layout to create better spaces. Make structural changes or perhaps just modernise what already exists. There are endless possibilities for completely changing the look, function and feel of your house renovation project.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
        <div className="flex justify-center content-center">      
       <img src={mapIcon}/>
        </div>
          <h5 class="my-2">Property Development</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal">We are actively seeking properties with development potential. Also, land which may pose the opportunity for new build projects. Particularly we are looking for projects in the Holmfirth and Huddersfield areas. We will also consider opportunities which are further afield. Our aim is to produce unique and interesting properties built with care. If you have a property or land you would like to discuss then please get in touch.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
        <div className="flex justify-center content-center">      
       <img src={shareIcon}/>
        </div>
          <h5 class="my-2">Landscaping & External Works</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal">Hard landscaping projects create an interesting outside area to your property and will add to its value. You can include Paved Areas, Bound Aggregate Paths with Timber, Concrete or Brick Edging, Rock & Stone Features, Pergolas & Shelters, Ponds & Water Features. Additionally driveways and paths in a multitude of finishes, all carefully built to a high standard.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center px-xl-2">
        <div className="flex justify-center content-center">      
       <img src={cityIcon}/>
        </div>
          <h5 class="my-2">Commercial Construction</h5>
          <p class="m-0 text-secondary source-sans text-[14px] !font-normal">Building services to the commercial sector are within our scope. We are capable of delivering small to medium-sized projects which may include office or restaurant refurbishments, extensions to commercial premises, complete construction of small industrial units, change of use on commercial premises and hard landscaping to external areas.</p>
        </div>
      </div>
    </div>
  </div>
        </section>
    );
    
}
export default OurServices;