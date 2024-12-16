import { React, useContext } from "react";
import { Context } from "../pages/home";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useContext(Context);
  return (
    <div className="flex justify-between items-center w-full min-h-20 fixed bg-[#1f1f1f]">
      <div>
        <button
          className="px-5 cursor-pointer focus:outline-none"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <i class="bi bi-list text-[#ededed] text-2xl opacity-75"></i>
        </button>
      </div>
      <div className="text-[#ededed] px-5">
        <p className="text-lg opacity-75">ChatClone</p>
      </div>
      <div className="text-[#ededed] px-5">
        <i class="bi bi-pencil-square text-xl opacity-75"></i>
      </div>
    </div>
  );
};

export default Navbar;
