import React from 'react';
import "./BooksList.css"
const BooksList = (props) => {
    return (
        <div className="books_container">
            {props.data.map((book, index) => (
                <div key={index} className='image-container d-flex justify-content-start m-3'>
                    <img src={book.imageUrl} alt='book'></img>
                </div>
            ))}
        </div>
    );
};

export default BooksList;
