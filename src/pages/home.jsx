import { React, createContext, useState } from "react";
import Navbar from "../fragments/Navbar";
import ChatBox from "../fragments/ChatBox";
import ChatInput from "../components/ChatInput";
import PopupNav from "../fragments/PopupNav";

export const openNavbarContext = createContext([false, () => {}]);
export const openChatBoxContext = createContext([false, () => {}]);

const HomePage = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [listOfMessages, setListOfMessages] = useState(["Check", "Test"]);

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <openNavbarContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <Navbar />
          <PopupNav />
        </openNavbarContext.Provider>
        <openChatBoxContext.Provider
          value={[listOfMessages, setListOfMessages]}
        >
          <div className="flex-grow pt-20 pb-32 overflow-auto">
            {listOfMessages.map((message, index) => (
              <ChatBox key={index} message={message} />
            ))}
          </div>
          <ChatInput />
        </openChatBoxContext.Provider>
      </div>
    </>
  );
};

export default HomePage;
