import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" }
  ];

  return (
    <div>
      <DropDown options={options} onChange={handleSelect} value={selection} />
    </div>
  );
}

export default DropDownPage;
