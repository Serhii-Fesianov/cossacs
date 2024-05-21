import React from "react";
import Icons from "./sprite.svg";

const Icon = ({ id, className }) => {
  console.log(Icons);
  return (
    <svg className={className}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};

export default Icon;
