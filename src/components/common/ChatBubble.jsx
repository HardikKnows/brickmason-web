import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatBubbleMinimized() {
  return (
    <div className=" flex justify-end  m-3 mr-6 lg:mr-10">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <a>
        <div className="rounded-full bg-[#f15a29] h-10 w-10  z-20">
          <FontAwesomeIcon
            icon={faMessage}
            className=" text-white text-xl pt-3"
          />
        </div>
      </a>
    </div>
  );
}

function ChatBubbleMaximized() {}

export { ChatBubbleMinimized, ChatBubbleMaximized };
