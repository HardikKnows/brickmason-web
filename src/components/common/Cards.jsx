import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    // <div className="shadow-lg border ml-2 col-lg-3 col-sm-6 shadow-[#000] hover:shadow-[#e3a773c6]">

    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-orange-100 p-6 transition-transform hover:scale-105 hover:shadow-xl duration-300 mx-4 z-10">
      <a>
        <div>
          <FontAwesomeIcon
            icon={props.icon}
            color="#D2042D"
            className="text-5xl"
          ></FontAwesomeIcon>
        </div>
        <div className="text-lg font-semibold mt-2">{props.title}</div>
        <div className="text-xs mt-3">{props.description}</div>
      </a>
    </div>
  );
}
export default Card;
