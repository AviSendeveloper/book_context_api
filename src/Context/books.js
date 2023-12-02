import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: title,
        });
        setBooks([...books, response.data]);
    };

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return response.data;
            }
            return books;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const shareContext = {
        books,
        createBook,
        editBookById,
        deleteBookById,
    };

    return (
        <BookContext.Provider value={shareContext}>
            {children}
        </BookContext.Provider>
    );
};

export { Provider };
export default BookContext;
