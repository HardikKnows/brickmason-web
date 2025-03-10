import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Cards";
import { faClock, faCreditCard, faFileLines } from "@fortawesome/free-regular-svg-icons";

function WhyUs() {
  return (
    <div className="bg-[#FFFF]">
      <div className="p-3 pt-5 xl:mx-36 bg-[#FFFF]">
        <div className="text-2xl mb-5 font-bold text-[#2b2b2b]  ">Why Brickmason?</div>
      

        {/* Video and Quote Container */}
        <div className="my-6 flex flex-col md:flex-row items-center gap-6">
          {/* Video (Left Side) */}
          <div className="w-full md:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Rfik7YtfDLc?si=g3i8f2pylgeAbIS0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Quote (Right Side) */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
            <blockquote className="text-2xl font-serif italic text-gray-700">
              "If we chase{" "}
              <span className="text-3xl font-bold text-blue-600">perfection</span>, we can catch{" "}
              <span className="text-3xl font-bold text-green-600">excellence</span>."
            </blockquote>
            <p className="mt-4 text-gray-500 text-lg">– Vince Lombardi</p>
          </div>
        </div>
        <hr/>

        <div className="mt-5 mb-3 text-xl">We ensure peace of mind, trust, and transparent construction.</div>
        {/* Card Grid */}
        
        <div className="grid md:grid-cols-4 m-1 grid-cols-1 sm:grid-cols-2">
          <Card
            icon={faFileLines}
            title="Absolute Transparency"
            description="Clear and Detailed Quotation. Live tracking of projects."
          />
          <Card
            icon={faCreditCard}
            title="Safe Money Transaction"
            description="Pay as You Go, Safe and Secure Money Transaction."
          />
          <Card
            icon={faCogs}
            title="Assured Quality Control"
            description="100+ Quality Checks performed by team of experts."
          />
          <Card
            icon={faClock}
            title="Zero Delays"
            description="We avoid any delays in constructing your dream home."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;