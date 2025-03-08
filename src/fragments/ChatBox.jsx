import React from "react";
import ChatBubble from "../components/ChatBubble";
import BotChat from "../components/BotChat";
import { useContext } from "react";
import { openChatBoxContext } from "../pages/home";

const ChatBox = () => {
  const [listOfMessages] = useContext(openChatBoxContext);
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-end py-5">
        {listOfMessages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
      <div className="py-5">
        <BotChat />
      </div>
    </div>
  );
};

export default ChatBox;
