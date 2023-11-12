// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from "react-router-dom";
import Data from "./Data.jsx";
import "./BookDetails.css"
import bookMark from "../assets/book_mark_white.svg";
import bookMarkTicked from "../assets/book_mark_ticked.svg";
import favorite from "../assets/favorite_white.svg";
import favoriteTicked from "../assets/favorite_ticked.svg";
import {Box, Modal, Rating, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const BookDetails = (props) => {
    const location = useLocation();

    const [favTicked, setFavTicked] = useState(false);
    const [bookmarkTicked, setBookmarkTicked] = useState(false);
    const [rating, setRating] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleFavorite = () => {
        setFavTicked((favTicked) => !favTicked);
    };

    const toggleBookmark = () => {
        setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
    };

    const params = useParams();
    const bookId = parseInt(params.id, 10); // Convert id to integer
    const book = Data.find(book => book.id === bookId);
    return (
        <div className="indv_out-container">
            <h1 className="indv_book-title">{book.title}</h1>
            <div className="indv_details-container">
                <div className='indv_image-container'>
                    <img id="book-img" src={book.imageUrl} alt='book'></img>
                    <div className="indv_icons">
                        {!bookmarkTicked && (<img className='indv_book_mark_ico' alt="favourites" src={bookMark} onClick={toggleBookmark}></img>)}
                        {bookmarkTicked && (<img className='indv_book_mark_ico' alt="favourites" src={bookMarkTicked} onClick={toggleBookmark}></img>)}
                        {!favTicked && (<img className='indv_favorite_ico' src={favorite} onClick={toggleFavorite}></img>)}
                        {favTicked && (<img className='indv_favorite_ico' src={favoriteTicked} onClick={toggleFavorite}></img>)}
                        <Rating
                            className="indv_rating_stars"
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            emptyIcon={<StarBorderIcon style={{ color: "white" }} fontSize="inherit"  />}
                        />
                    </div>
                </div>
                <div className="indv_synopsis">
                <div className="indv_synopsis_text">
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
                <button className="indv_add_to_shelf" onClick={handleOpen}>
                    Add to Shelf
                </button>
                <Modal
                    open={open}
                    onClose={()=>handleClose()}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={"modal-box"}>
                        <Typography className="modal-modal-title" variant="h6" component="h2">
                            Shelves
                        </Typography>
                        <Typography className="modal-modal-description" sx={{ mt: 2 }}>

                        </Typography>
                    </Box>
                </Modal>
            </div>
            {/* Display other book details here */}
        </div>
    );
};

export default BookDetails;
