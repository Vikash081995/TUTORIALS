import React from "react";

import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Sidebar from "./components/sIDEBAR.JS";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
