import React from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="pt-20">
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default HomePage;
