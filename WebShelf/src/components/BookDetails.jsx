// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Data from "./Data.jsx";
import "./BookDetails.css"
const BookDetails = (props) => {
    const params = useParams();
    const bookId = parseInt(params.id, 10); // Convert id to integer
    const book = Data.find(book => book.id === bookId);
    return (
        <div className="indv_out-container">
            <h1 className="indv_book-title">{book.title}</h1>
            <div className="indv_details-container">
                <img className="indv_image-container" src={book.imageUrl} alt='book'></img>
                <div className="indv_synopsis">
                <div >
                    {book.synopsis}
                </div>
                    <div className="indv_genres-list">
                        {book.genres.map((genre, index) => (
                            <span key={index} className="indv_genre">
                                {genre}
                             </span>
                        ))}
                </div>
                </div>
            </div>
            {/* Display other book details here */}
        </div>
    );
};

export default BookDetails;
