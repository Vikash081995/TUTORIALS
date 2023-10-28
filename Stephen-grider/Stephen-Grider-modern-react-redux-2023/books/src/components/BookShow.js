import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById, editBookById } = useBooksContext();

  const handleClick = () => {
    deleteBookById(book.id);
  };

  const EditClickHandler = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    editBookById(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div>
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <div className="book-show">{book.title}</div>
      )}
      <button className="edit" onClick={EditClickHandler}>
        Edit
      </button>
      <button onClick={handleClick}> delete </button>
    </div>
  );
}

export default BookShow;
