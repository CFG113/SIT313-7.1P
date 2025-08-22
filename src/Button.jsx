import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} className="bg-white p-1">
      {props.text}
    </button>
  );
};

export default Button;
