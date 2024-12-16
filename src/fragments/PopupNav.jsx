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
      <div className="flex justify-center items-center w-2/3 h-full absolute left-0 bg-[#1f1f1f] border-r border-r-slate-500">
        <ul>
          {Array(15)
            .fill("")
            .map((_, i) => (
              <PopupNavItem
                key={i}
                arrayOfList={Array(15)
                  .fill("")
                  .map((x, z) => (x = `Percakapan ${z + 1}`))}
                index={i}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PopupNav;
