import { createContext, useState } from "react";

const BookContext = createContext();

const Provider = ({ children }) => {
    const [count, setCount] = useState(5);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const valueToShare = {
        count: count,
        incrementCount: incrementCount,
    };

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
};

export { Provider };
export default BookContext;
