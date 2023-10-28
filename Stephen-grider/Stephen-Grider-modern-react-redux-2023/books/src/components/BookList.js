
import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";


function BookList() {
  const { books } = useBooksContext()
  return (
    <div>
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
}

export default BookList;
