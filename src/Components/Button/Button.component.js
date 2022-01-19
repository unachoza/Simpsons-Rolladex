//@ts-nocheck
import React from "react";
import "./Button.styles.css";


const Button = ({ text, onClick })=> {
  return <div className="button" role="button" onClick={onClick}>{text}</div>;
};
export default Button;
