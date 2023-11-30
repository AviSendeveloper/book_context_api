import BookEdit from "./BookEdit";

const style = {
    border: "border: 5px solid red"
};

const BookShow = ({ title, id }) => {
    return (
        <div style={style}>
            <h2>{title}</h2>
            <BookEdit />
        </div>
    );
};

export default BookShow;
