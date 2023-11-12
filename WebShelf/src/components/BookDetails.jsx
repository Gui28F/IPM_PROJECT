// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from "react-router-dom";
import "./BookDetails.css"
import { format } from 'react-string-format';
import bookMark from "../assets/book_mark_white.svg";
import bookMarkTicked from "../assets/book_mark_ticked.svg";
import favorite from "../assets/favorite_white.svg";
import favoriteTicked from "../assets/favorite_ticked.svg";
import {Box, Checkbox, Modal, Rating, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {users, books} from "./Data.jsx";

const BookDetails = (props) => {
    const location = useLocation();

    const [favTicked, setFavTicked] = useState(false);
    const [bookmarkTicked, setBookmarkTicked] = useState(false);
    const [rating, setRating] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [selectedShelves, setSelectedShelves] = useState([]);
    const [newShelfName, setNewShelfName] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleFavorite = () => {
        setFavTicked((favTicked) => !favTicked);
    };

    const toggleBookmark = () => {
        setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
    };

    const handleShelfToggle = (shelf) => {
        setSelectedShelves((prevSelected) => {
            if (prevSelected.includes(shelf)) {
                return prevSelected.filter((selected) => selected !== shelf);
            } else {
                return [...prevSelected, shelf];
            }
        });
    };

    if (newShelfName.trim() !== '') {
        setSelectedShelves((prevShelves) => [...prevShelves, { name: newShelfName, books: [] }]);
        setNewShelfName(''); // Clear the input field
    }


    const handleSubmit = () => {
        // Handle the submission logic here
        handleClose(); // Close the modal after submission (you can adjust this based on your needs)
    };

    function getBook() {
        var bookId = parseInt(params.id, 10); // Convert id to integer
        if(isNaN(bookId) ) {
            bookId = location.state.bid
        }
        var book = books.find(book => book.id === bookId)
        return book;
    }
    const params = useParams();
    
    const book = getBook()
    const currentUser = users[0];
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
                        {currentUser.shelves.map((shelf) => (
                            <div key={shelf.name} className="indv_shelf_row">
                                <Checkbox
                                    checked={selectedShelves.includes(shelf.name)}
                                    onChange={() => handleShelfToggle(shelf.name)}
                                    color="primary"
                                />
                                <span className="indv_shelf_name">{shelf.name}</span>
                            </div>
                        ))}
                        <div className="indv_add_shelf_container">
                            <Checkbox
                                checked={selectedShelves.includes(newShelfName)}
                                onChange={() => {
                                    setSelectedShelves((prevSelected) =>
                                        prevSelected.includes(newShelfName)
                                            ? prevSelected.filter((selected) => selected !== newShelfName)
                                            : [...prevSelected, newShelfName]
                                    );
                                }}
                                color="primary"
                            />
                            <input className="indv_new_shelf_input"
                                type="text"
                                placeholder="New Shelf"
                                onChange={(e) =>{ setNewShelfName(e.target.value)}}
                            />
                        </div>
                        <button className="indv_submit_button">
                            Save
                        </button>
                    </Box>
                </Modal>
            </div>
            {/* Display other book details here */}
        </div>
    );
};

export default BookDetails;
