import React from "react";

const ChatBubble = (props) => {
  const { message } = props;

  return (
    <span className="bg-[#2e2d2d] px-5 py-3 rounded-3xl text-[#ededed] font-light">
      {message}
    </span>
  );
};

export default ChatBubble;
