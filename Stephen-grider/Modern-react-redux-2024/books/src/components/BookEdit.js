import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button is-Primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
