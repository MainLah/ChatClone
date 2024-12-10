import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center min-h-20">
      <div>
        <button className="px-5">
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
