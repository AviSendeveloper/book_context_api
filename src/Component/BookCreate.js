import { useState, useContext } from "react";
import BookContext from "../Context/books";

const BookCreate = () => {
    const { createBook } = useContext(BookContext);
    const [title, setTitle] = useState("");

    const handelInput = (event) => {
        setTitle(event.target.value);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handelSubmit}>
                <span>Title: </span>
                <input
                    className="input"
                    name="title"
                    value={title}
                    onChange={handelInput}></input>
                <button className="button" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default BookCreate;
