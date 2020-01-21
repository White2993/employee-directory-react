import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} {...props} />
  );
}

export default CardBtn;