import { useContext } from "react";
import BookContext from "../Context/books";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
    let { count, incrementCount } = useContext(BookContext);

    return (
        <div className="book-list">
            {count}

            <button onClick={incrementCount}>Increment</button>

            {books.map((book) => {
                return (
                    <BookShow
                        title={book.title}
                        id={book.id}
                        key={book.id}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                );
            })}
        </div>
    );
};

export default BookList;
