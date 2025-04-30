import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Cards";
import { faClock, faCreditCard, faFileLines } from "@fortawesome/free-regular-svg-icons";

function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-rose-50 py-20 min-h-screen">
      <div className="mx-auto px-4 xl:px-36">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Why Brickmason?</h2>
          <p className="text-amber-800 uppercase tracking-wider">Trust - Transparency - Timely Delivery</p>
        </div>

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
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700">
  "If we chase{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B3A29] via-[#8E5D4D] to-[#B77A56]">perfection</span>, we can catch{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A2C1D] via-[#7B4C38] to-[#9C6A4F]">excellence</span>."
</blockquote>
<p className="mt-4 text-gray-500 text-lg">– Vince Lombardi</p>

          </div>
        </div>
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />


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
      {/* Decorative Background Elements (Optional for flair) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 bg-orange-200 rounded-full opacity-30 top-10 left-10 animate-pulse" />
        <div className="absolute w-32 h-32 bg-yellow-200 rounded-full opacity-20 bottom-0 right-0 animate-[bounce_6s_ease-in-out_infinite] " />
      </div>
    </section>
  );
}

export default WhyUs;