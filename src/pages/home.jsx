import { React, createContext, useState } from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";
import ChatInput from "../components/ChatInput";
import PopupNav from "../fragments/PopupNav";

export const Context = createContext([false, () => {}]);

const HomePage = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-screen">
        <Context.Provider value={[navIsOpen, setNavIsOpen]}>
          <Navbar />
          <PopupNav />
        </Context.Provider>
        <div className="h-screen pt-20 pb-32">
          <ChatBox />
        </div>
        <ChatInput />
      </div>
    </>
  );
};

export default HomePage;
