import { React, useContext } from "react";
import { Context } from "../pages/home";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useContext(Context);
  return (
    <div className="flex justify-between items-center w-full min-h-20 fixed bg-[#1f1f1f]">
      <div>
        <button
          className="px-5 focus:outline-none"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <i className="bi bi-list text-[#ededed] text-2xl opacity-75 cursor-pointer"></i>
        </button>
      </div>
      <div className="text-[#ededed] px-5">
        <p className="text-lg opacity-75">ChatClone</p>
      </div>
      <div className="text-[#ededed] px-5">
        <i className="text-xl opacity-75 bi bi-pencil-square"></i>
      </div>
    </div>
  );
};

export default Navbar;
