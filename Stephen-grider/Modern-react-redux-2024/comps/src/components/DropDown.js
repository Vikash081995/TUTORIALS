import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div ref={divEl}>
      <Panel onClick={handleClick}>{value?.label || "Select..."}</Panel>
      {isOpen && (
        <div>
          {options.map((option) => {
            return (
              <Panel
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </Panel>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
