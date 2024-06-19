import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        className={buttonColor}
        disbaled={disabled}
        onClick={() => setButtonColor(nextColor)}
      >
        Change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmnlFor="disaable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
