import React from "react";

const PopupNavItem = (props) => {
  const { arrayOfList, index } = props;
  return <li className="text-[#ededed] p-2">{arrayOfList[index]}</li>;
};

export default PopupNavItem;
