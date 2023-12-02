import BookList from "./Component/BookList";
import BookCreate from "./Component/BookCreate";

const App = () => {
    return (
        <div className="app">
            <h1>Book List</h1>
            <BookCreate />
            <BookList />
        </div>
    );
};

export default App;
