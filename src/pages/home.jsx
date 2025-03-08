import { React, createContext, useState } from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";
import ChatInput from "../components/ChatInput";
import PopupNav from "../fragments/PopupNav";

export const openNavbarContext = createContext([false, () => {}]);
export const openChatBoxContext = createContext([false, () => {}]);

const HomePage = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [listOfMessages, setListOfMessages] = useState([]);

  return (
    <>
      <div className="w-screen h-screen">
        <openNavbarContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <Navbar />
          <PopupNav />
        </openNavbarContext.Provider>
        <div className="h-screen pt-20 pb-32">
          <openChatBoxContext.Provider
            value={[listOfMessages, setListOfMessages]}
          >
            <ChatBox />
          </openChatBoxContext.Provider>
        </div>
        <ChatInput />
      </div>
    </>
  );
};

export default HomePage;
