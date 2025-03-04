import React from "react";

const ChatInput = () => {
  return (
    <div className="bg-[#1f1f1f] fixed bottom-0 w-full px-5 pb-5">
      <form>
        <input
          type="text"
          className="bg-[#2e2d2d] rounded-t-3xl focus:outline-none caret-[#ededed] w-full h-14 pl-5 "
          placeholder="Message ChatClone"
        />
        <div className="bg-[#2e2d2d] rounded-b-3xl flex justify-end w-full pr-5 pb-2">
          <button className="cursor-pointer focus:outline-none">
            <i className="bi bi-send text-[#ededed]"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
