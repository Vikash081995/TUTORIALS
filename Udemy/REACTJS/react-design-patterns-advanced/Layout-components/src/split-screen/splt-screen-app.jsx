import React from "react";
import { SplitScreen } from "./split-screen/split-screen";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};
const SplitApp = () => {
  return (
    <div>
      <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSideComp title={"Right"} />
        <RightSideComp title={"Left"} />
      </SplitScreen>
    </div>
  );
};

export default SplitApp;
