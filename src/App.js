import { useState, useEffect } from "react";
import BookList from "./Component/BookList";
import BookCreate from "./Component/BookCreate";
import axios from "axios";

const App = () => {
    const [books, setBooks] = useState([]);

    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks([...response.data]);
    };

    useEffect(() => {
        fetchBook();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: title,
        });
        setBooks([...books, { ...response.data }]);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBook = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBook);
    };

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title,
        });
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
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
