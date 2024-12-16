import { React, useContext } from "react";
import PopupNavItem from "../components/PopupNavItem";
import { Context } from "../pages/home";

const PopupNav = () => {
  const [navIsOpen, setNavIsOpen] = useContext(Context);
  return (
    <div
      className="w-full hidden h-full absolute left-0 backdrop-blur-[1px]"
      style={{ display: `${!navIsOpen ? "none" : "block"}` }}
      onClick={() => (navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true))}
    >
      <div className="w-1/3 absolute left-0 inset-y-1/2">
        <ul>
          {Array(3)
            .fill("")
            .map((_, i) => (
              <PopupNavItem key={i} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PopupNav;
