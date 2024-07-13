import { ChatBubbleMinimized } from "../common/ChatBubble";
import CallerButton from "../common/CallerButton";
function FooterUtils() {
  return <div className="sticky bottom-24 lg:bottom-10">
    <CallerButton />
    <ChatBubbleMinimized />
  </div>;
}

export default FooterUtils;
