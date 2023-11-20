import React from "react";
import "./BooksList.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
const BooksList = (props) => {
    return (
        <div className="books_container">
            {props.data.map((book, index) => (
                <Link
                    className="book_redirect"
                    to={`/books/${book.id}`}
                    key={index}
                >
                    <div className="book-container">
                        <div className="image-container">
                            <img className="browse-all-image" src={book.imageUrl} alt="book"></img>
                            <div className="rating">
                                {book.rating}
                                <StarRateIcon className="star_rating" />
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BooksList;