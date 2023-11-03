import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div>
      <div onClick={onClose}></div>
      Modal
    </div>
  );
};

export default Modal;
