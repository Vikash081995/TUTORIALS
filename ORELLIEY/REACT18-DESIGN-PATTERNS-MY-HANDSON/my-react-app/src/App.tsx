import React from "react";
import Counter from "./components/chapter9/concurrency";

function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <Counter />
    </React.Suspense>
  );
}

export default App;
