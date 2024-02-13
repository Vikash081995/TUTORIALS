import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={item.id}>
            <div onClick={() => handleClick(index)}>{item.label}</div>
            {isExpanded && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
