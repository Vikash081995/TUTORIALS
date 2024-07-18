import { useRef } from "react";
import TextInputWithRef from "./TextWithRef";

const FakeApp = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <TextInputWithRef />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
};

export default FakeApp;
