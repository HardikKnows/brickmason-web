import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Cards";
import { faClock, faCreditCard, faFileLines } from "@fortawesome/free-regular-svg-icons";

function WhyUs() {
  return (
    <div className="bg-[#ffff]">

    <div className="p-3 pt-5 xl:mx-36 bg-[#ffff]">
      <div className="text-2xl font-medium  text-[#2b2b2b]">Why BICKMASON?</div>
      <div className="mt-2">We ensure peace of mind, trust, and trasnparent construction.</div>
      <div className="grid md:grid-cols-4 m-1 grid-cols-1 sm:grid-cols-2 ">
        <Card
          icon={faFileLines}
          title="Absolute Transparency"
          description="Clear and Detailed Quotation. live tracking of projects."
        ></Card>
        <Card
          icon={faCreditCard}
          title="Safe Money Transaction"
          description="Pay as You Go, Safe and Secure Money Transaction."
        ></Card>
        <Card
          icon={faCogs}
          title="Assured Quality Control"
          description="100+ Quality Checks performed by team of experts."
        ></Card>
        <Card
          icon={faClock}
          title="Zero Delays"
          description=" We avoid any delays in construcing your dream home.."
        ></Card>
      </div>
    </div>
    </div>
  );
}

export default WhyUs;
