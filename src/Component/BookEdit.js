import { useState } from "react";

const BookEdit = ({ oldTitle, onEdit }) => {
    const [editedTitle, setEditedTitle] = useState(oldTitle);

    const handelInput = (event) => {
        setEditedTitle(event.target.value);
    };

    const handelEditSave = () => {
        onEdit(editedTitle);
        setEditedTitle("");
    };

    return (
        <div className="book-edit">
            <input
                className="book-edit"
                name="title"
                value={editedTitle}
                onChange={handelInput}
            ></input>
            <button className="button" onClick={handelEditSave}>
                Save
            </button>
        </div>
    );
};

export default BookEdit;
