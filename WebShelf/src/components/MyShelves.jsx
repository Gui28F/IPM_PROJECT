// MyShelves.jsx

import React from 'react';
import './MyShelves.css';
import {books,users} from "./Data.jsx";
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import {Icon} from "@mui/material";


const MyShelves = () => {
  const handleBookClick = (id) => {
    // Add logic for handling book click, e.g., navigate to the book details page
    console.log(`Book ${id} clicked`);
  };

  const userShelves = users[0].shelves;
  console.log(userShelves[1]);

  return (
    <div className="my-shelves-container">
      <h2 className="shelves-heading">My Shelves</h2>
      <div className="shelves-container">
        {userShelves.map((shelf) => (
          <div key={shelf.id} className="shelf">
            <h3>{shelf.name}</h3>
            <div className="books-container">
              {books
                .filter((book) => shelf.books.includes(book.title))
                .map((book,index) => (
                  <Link
                    key={index}
                    to={`/books/${book.id}`}
                    className="book-card"
                    onClick={() => handleBookClick(book.id)}
                  >
                    <div className="book-container">
                        <div className ="image-container">
                            <img src={book.imageUrl} alt='book'></img>
                            <div className="rating">{book.rating}
                                <StarRateIcon className="star_rating" />
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                    </div>
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