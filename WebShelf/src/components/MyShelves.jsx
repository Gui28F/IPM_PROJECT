// MyShelves.jsx

import React from 'react';
import './MyShelves.css';
import books from './Data';
import { Link } from 'react-router-dom';

const shelvesData = [
  { id: 1, title: 'Horror', genre: 'Horror' },
  { id: 2, title: 'Action', genre: 'Action' },
  { id: 3, title: 'Sci-Fi', genre: 'Sci-Fi' },
  { id: 4, title: 'Drama', genre: 'Drama' },
  { id: 5, title: 'Comedy', genre: 'Comedy' },
];

const MyShelves = () => {
  const handleBookClick = (id) => {
    // Add logic for handling book click, e.g., navigate to the book details page
    console.log(`Book ${id} clicked`);
  };

  return (
    <div className="my-shelves-container">
      <h2 className="shelves-heading">My Shelves</h2>
      <div className="shelves-container">
        {shelvesData.map((shelf) => (
          <div key={shelf.id} className="shelf">
            <h3>{shelf.title}</h3>
            <div className="books-container">
              {books
                .filter((book) => book.genres.includes(shelf.genre))
                .map((book) => (
                  <Link
                    key={book.id}
                    to={`/books/${book.id}`}
                    className="book-card"
                    onClick={() => handleBookClick(book.id)}
                  >
                    <img src={book.imageUrl} alt={book.title} />
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    {/* Add more book details as needed */}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShelves;
