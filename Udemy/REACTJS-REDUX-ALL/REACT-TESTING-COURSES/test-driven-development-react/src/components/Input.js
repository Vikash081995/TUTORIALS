import React from "react";

const Input = (props) => {
  const { id, label, onChange, help, type } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type || "text"} id={id} onChange={onChange} />
      <span>{help}</span>
    </div>
  );
};

export default Input;
