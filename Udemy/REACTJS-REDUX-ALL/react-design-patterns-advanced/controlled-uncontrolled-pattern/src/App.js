import { UncontrolledFlow } from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};

function App() {
  return (
    <UncontrolledFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>
  );
}

export default App;
