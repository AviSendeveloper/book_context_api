import { useContext } from "react";
import BookContext from "../Context/books";
import BookShow from "./BookShow";

const BookList = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <BookShow title={book.title} id={book.id} key={book.id} />
                );
            })}
        </div>
    );
};

export default BookList;
