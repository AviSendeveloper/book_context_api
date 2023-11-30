import { useState } from "react";
import BookList from "./Component/BookList";
import BookCreate from "./Component/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const randomId = Math.floor(Math.random(10000, 99999) * 100000);
        setBooks([...books, { id: randomId, title: title }]);
    };

    return (
        <div>
            <BookList books={books} />
            <BookCreate createBook={createBook} />
        </div>
    );
};

export default App;
