import React from "react";
import Modal from "./components/Modal";
import { LargeBookListItem } from "./reusable-lists/books/LargeListItems";
import { books } from "./reusable-lists/data/books";
const App = () => {
  return (
    <Modal>
      <LargeBookListItem book={books[0]} />
    </Modal>
  );
};

export default App;
