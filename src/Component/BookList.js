import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
    return (
        <div className="book-list">
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
