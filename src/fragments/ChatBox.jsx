import React from "react";
import ChatBubble from "../components/ChatBubble";
import BotChat from "../components/BotChat";

const ChatBox = (props) => {
  const { message } = props;
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-end py-5">
        <ChatBubble message={message} />
      </div>
      <div className="py-5">
        <BotChat />
      </div>
    </div>
  );
};

export default ChatBox;
