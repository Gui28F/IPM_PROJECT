import React from 'react';
import "./BooksList.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import {Icon} from "@mui/material";
const BooksList = (props) => {
    return (
        <div className="books_container">
            {props.data.map((book, index) => (
                <div key={index} className="book-container">
                <div  className='image-container'>
                    <img src={book.imageUrl} alt='book'></img>
                    <div className="rating">{book.rating}
                        <StarRateIcon className="star_rating"/>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>

                </div>
            ))}
        </div>
    );
};

export default BooksList;
