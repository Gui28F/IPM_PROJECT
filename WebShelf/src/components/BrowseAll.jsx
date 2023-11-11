import React, {useEffect, useState} from 'react';
import Filter from "./Filter.jsx";
import books from "./Data.jsx";
import "./BrowseAll.css";
import BooksList from "./BooksList.jsx";
const BrowseAll = (props) => {
    const [filterValues, setFilterValues] = useState({ genres: [], rating: [] });
    const [filteredBooks, setFilteredBooks] = useState([]);
    useEffect(() => {
        // Show all books initially
        setFilteredBooks(books);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const handleFilterChange = (values) => {
        setFilterValues(values);
        filterBooks(values);
    };
    const filterBooks = (values) => {
        const { genres, rating } = values;
        // Filter books based on selected genres and rating
        const filtered = books.filter(book => {
            const matchGenres = genres.length === 0 || genres.some(genre => book.genres.includes(genre));
            const matchRating = rating.length === 0 || rating.includes(book.rating);
            return matchGenres && matchRating;
        });

        setFilteredBooks(filtered);
    };

    return (
        <div className="main-container">
            <Filter data={books} onFilterChange={handleFilterChange}></Filter>
            {/* Use filterValues and filteredBooks in your application as needed */}
            <div className="book_container">
                <h3 className="browseall_title">Search Results:</h3>
                <BooksList data ={filteredBooks}></BooksList>
            </div>
        </div>
    );
}

export default BrowseAll;