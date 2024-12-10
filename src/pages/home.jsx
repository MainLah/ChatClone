import React from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen">
        <div>
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default HomePage;
