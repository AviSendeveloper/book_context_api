import { useState } from "react";

const BookCreate = ({ createBook }) => {
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
        <>
            <h2>BookCreate</h2>
            <form onSubmit={handelSubmit}>
                <div>
                    <span>Title: </span>
                    <input name="title" value={title} onChange={handelInput}></input>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>
    );
};

export default BookCreate;
