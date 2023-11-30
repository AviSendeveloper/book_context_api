import BookShow from "./BookShow";

const BookList = ({ books }) => {
    return (
        <>
            <h2>Book List</h2>
            {books.map((book) => {
                return (
                    <BookShow title={book.title} id={book.id} key={book.id} />
                );
            })}
        </>
    );
};

export default BookList;
