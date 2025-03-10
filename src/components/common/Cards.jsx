import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    // <div className="shadow-lg border ml-2 col-lg-3 col-sm-6 shadow-[#000] hover:shadow-[#e3a773c6]">

    <div className="max-w-sm p-6 m-2 mx-4 bg-[#EDEDED] border border-gray-200 md:mx-2 lg:mx-4  shadow-[0px_0px_10px_0px_#6c757d57]  dark:border-[#fff] hover:shadow-[0px_0px_4px_0px_#d98e7d] ">
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
