import React from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";
import ChatInput from "../components/ChatInput";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="pt-20">
          <ChatBox />
        </div>
        <ChatInput />
      </div>
    </>
  );
};

export default HomePage;
