import { ControlledModal } from "./components/controlled-modal";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h1>I am the body of the modal!!!</h1>
      </ControlledModal>
      <button onlick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
