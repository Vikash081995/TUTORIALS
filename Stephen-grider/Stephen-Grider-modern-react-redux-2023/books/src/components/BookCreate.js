import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
  };

  return (
    <div>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create !</button>
      </form>
    </div>
  );
}

export default BookCreate;
