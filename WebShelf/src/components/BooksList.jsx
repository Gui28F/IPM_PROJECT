import React from "react";
import "./BooksList.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
const BooksList = (props) => {
    console.log(props)
    const handleDeleteBook = (e, bookId) =>{
        e.preventDefault();
        console.log(props)
        if (props.onDelete) {
            props.onDelete(bookId);
        }
    }
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
                            <div className={"delete_book_shelf_container"}>
                                {props.deleteBtn && <DeleteIcon onClick={(e)=>handleDeleteBook(e,book.id)}/>}
                            </div>
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