import React from "react";
import "../../sass/__modal.scss";
const Modal = ({ children, close }) => {
  return (
    <>
      <div onClick={() => close(false)} className="overly"></div>
      <div>
        <h1>Modal</h1>
        {children}
      </div>
    </>
  );
};

export default Modal;
