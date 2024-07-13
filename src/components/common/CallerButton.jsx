import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CallerButton() {
  return (
    <div className="flex justify-end m-3 mr-6 lg:mr-10">
  <a href="#">
    <div className=" rounded-full bg-[#3c7fdd] h-10 w-10 z-30">
      <FontAwesomeIcon
        icon={faPhone}
        className=" text-white text-lg pt-3"
      /> 
    </div>
  </a>
</div>
  );
}

export default CallerButton;
