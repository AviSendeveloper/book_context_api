import { useState } from "react";
import BookList from "./Component/BookList";
import BookCreate from "./Component/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const randomId = Math.floor(Math.random(10000, 99999) * 100000);
        setBooks([...books, { id: randomId, title: title }]);
    };

    const deleteBookById = (id) => {
        const updatedBook = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBook);
    };

    const editBookById = (id, title) => {
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                book.title = title;
            }
            return book;
        });
        setBooks(updatedBook);
    };

    return (
        <div className="app">
            <h1>Book List</h1>
            <BookCreate createBook={createBook} />
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
        </div>
    );
};

export default App;
