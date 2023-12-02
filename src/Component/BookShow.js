import { useState, useContext } from "react";
import BookContext from "../Context/books";
import BookEdit from "./BookEdit";

const BookShow = ({ title, id }) => {
    const { editBookById, deleteBookById } = useContext(BookContext);
    const [isEditable, setIsEditable] = useState(false);

    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handelDelete = () => {
        deleteBookById(id);
    };

    const handelEdit = (title) => {
        editBookById(id, title);
        setIsEditable(false);
    };

    return (
        <div className="book-show">
            <img src="https://picsum.photos/300/200" alt={title} />
            <div>{title}</div>
            <div className="actions">
                <button type="button" className="edit" onClick={toggleEdit}>
                    Edit
                </button>
                <button type="button" className="delete" onClick={handelDelete}>
                    Delete
                </button>
            </div>
            {isEditable && <BookEdit oldTitle={title} onEdit={handelEdit} />}
        </div>
    );
};

export default BookShow;
