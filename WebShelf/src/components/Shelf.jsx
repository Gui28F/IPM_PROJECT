import React, { useEffect, useState } from "react";
import { users } from "./Data.jsx";
import { useParams } from "react-router-dom";
import { books } from "./Data.jsx";

import Filter from "./Filter.jsx";
import BooksList from "./BooksList.jsx";

const Shelf = (props) => {
    const { id } = useParams();

    function getShelf() {
        const shelves = users[0].shelves;
        return shelves.find((shelf) => shelf.id === parseInt(id));
    }

    // const [filterValues, setFilterValues] = useState({
    //     genres: [],
    //     rating: [],
    // });
    const [filteredBooks, setFilteredBooks] = useState([]);

    // useEffect(() => {
    //     const shelf = getShelf();
    //     // Show all books in the shelf initially
    //     setFilteredBooks(shelf.books);
    // }, []); // Empty dependency array ensures this effect runs only once on mount

    // const handleFilterChange = (values) => {
    //     setFilterValues(values);
    //     filterBooks(values);
    // };

    let shelf = getShelf();

    //Get books on shelf and start the filtered books with them
    useEffect(() => {
        let booksIDs = users[0].shelves[shelf.id - 1].booksIDs;

        let booksOnShelf = [];

        booksIDs.forEach((bookID) => {
            let book = books.find((b) => b.id === bookID);
            if (book) {
                console.log("book found: " + book.id);
                booksOnShelf.push(book);
            }
        }, []);

        setFilteredBooks(booksOnShelf);
    }, []);

    /*const filterBooks = (values) => {
        const { genres, rating } = values;
        // Filter books based on selected genres and rating
        const filtered = filteredBooks.filter((book) => {
            const matchGenres =
                genres.length === 0 ||
                genres.some((genre) => book.genres.includes(genre));
            const matchRating =
                rating.length === 0 || rating.includes(book.rating);
            return matchGenres && matchRating;
        });

        setFilteredBooks(filtered);
    };*/

    return (
        <div>
            <h1 className="shelf-header">{shelf.name}</h1>
            {/*<Filter
                data={filteredBooks}
                onFilterChange={handleFilterChange}
    ></Filter>*/}
            <BooksList data={filteredBooks} />
        </div>
    );
};

export default Shelf;
