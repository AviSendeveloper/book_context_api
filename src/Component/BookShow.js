import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ title, id, onDelete, onEdit }) => {
    const [isEditable, setIsEditable] = useState(false);

    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handelDelete = () => {
        onDelete(id);
    };

    const handelEdit = (title) => {
        onEdit(id, title);
        setIsEditable(false);
    };

    return (
        <div className="book-show">
            <img src="https://picsum.photos/300/200" />
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
