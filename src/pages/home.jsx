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
      <div className="w-screen h-screen">
        <openNavbarContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <Navbar />
          <PopupNav />
        </openNavbarContext.Provider>
        <div className="h-screen pt-20 pb-32">
          <openChatBoxContext.Provider
            value={[listOfMessages, setListOfMessages]}
          >
            {listOfMessages.map((message, index) => (
              <ChatBox key={index} message={message} />
            ))}
            <ChatInput /> {/* Move ChatInput inside the provider */}
          </openChatBoxContext.Provider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
