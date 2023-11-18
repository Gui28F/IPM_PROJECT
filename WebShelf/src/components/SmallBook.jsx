import "./SmallBook.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bookMark from "../assets/book_mark_white.svg";
import bookMarkTicked from "../assets/book_mark_ticked.svg";
import favorite from "../assets/favorite_white.svg";
import favoriteTicked from "../assets/favorite_ticked.svg";
import { Typography, Popover } from "@mui/material";
import { users } from "./Data.jsx";

const SmallBook = (props) => {

  const [anchorFav, setAnchorFav] = React.useState(null);
  const [anchorBMark, setAnchorBMark] = React.useState(null);

  const handlePopoverOpenFav = (event) => {
    setAnchorFav(event.currentTarget);
  };

  const handlePopoverCloseFav = () => {
    setAnchorFav(null);
  };

  const handlePopoverOpenBMark = (event) => {
    setAnchorBMark(event.currentTarget);
  };

  const handlePopoverCloseBMark = () => {
    setAnchorBMark(null);
  };

  const openPopupFav = Boolean(anchorFav);
  const openPopupBMark = Boolean(anchorBMark);

  let book = props.book;
  const [favTicked, setFavTicked] = useState(() => {
    // Check if the book is in "Favourites" shelf
    const isBookInFavourites = users[0].shelves.find(
      (shelf) => shelf.name === "Favourites" && shelf.books.includes(book.title)
    );

    return !!isBookInFavourites; // Set to true if the book is in "Favourites" shelf, false otherwise
  });
  const [bookmarkTicked, setBookmarkTicked] = useState(() => {
    // Check if the book is in "To Read" shelf
    const isBookInToRead = users[0].shelves.find(
      (shelf) => shelf.name === "To Read" && shelf.books.includes(book.title)
    );

    return !!isBookInToRead; // Set to true if the book is in "To Read" shelf, false otherwise
  });
  const navigate = useNavigate();
  const toggleFavorite = (event) => {
    event.preventDefault();
    const isBookInFavourites = users[0].shelves.find(
      (shelf) => shelf.name === "Favourites" && shelf.books.includes(book.title)
    );

    if (isBookInFavourites) {
      // Book is in "Favourites" shelf, remove it
      users[0].shelves = users[0].shelves.map((shelf) =>
        shelf.name === "Favourites"
          ? {
            ...shelf,
            books: shelf.books.filter(
              (bookTitle) => bookTitle !== book.title
            ),
          }
          : shelf
      );
    } else {
      // Book is not in "Favourites" shelf, add it
      users[0].shelves = users[0].shelves.map((shelf) =>
        shelf.name === "Favourites"
          ? { ...shelf, books: [...shelf.books, book.title] }
          : shelf
      );
    }
    setFavTicked((favTicked) => !favTicked);
  };

  const toggleBookmark = (event) => {
    event.preventDefault();
    // Check if the book is already in the "To Read" shelf
    const isBookInToRead = users[0].shelves.find(
      (shelf) => shelf.name === "To Read" && shelf.books.includes(book.title)
    );

    if (isBookInToRead) {
      // Book is in "To Read" shelf, remove it
      users[0].shelves = users[0].shelves.map((shelf) =>
        shelf.name === "To Read"
          ? {
            ...shelf,
            books: shelf.books.filter(
              (bookTitle) => bookTitle !== book.title
            ),
          }
          : shelf
      );
    } else {
      // Book is not in "To Read" shelf, add it
      users[0].shelves = users[0].shelves.map((shelf) =>
        shelf.name === "To Read"
          ? { ...shelf, books: [...shelf.books, book.title] }
          : shelf
      );
    }
    setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
  };

  return (
    <Link to={"/books/" + 1} className="link-no-underline">
      <div className="small-book-container">
        <div className="small-book-image">
        <img className="book-top" src={book.imageUrl} alt="book-top" />
          <div className="small-cover">
          
          {!bookmarkTicked && (
                  <div>
                    <Typography
                      aria-owns={openPopupBMark ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpenBMark}
                      onMouseLeave={handlePopoverCloseBMark}
                    >
                      <img className="small-cover-icons"
                        alt="favourites"
                        src={bookMark}
                        onClick={toggleBookmark}
                      ></img>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={openPopupBMark}
                      anchorEl={anchorBMark}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      onClose={handlePopoverCloseBMark}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>Add to Bookmarks</Typography>
                    </Popover>
                  </div>
                )}
                {bookmarkTicked && (
                  <div>
                    <Typography
                      aria-owns={openPopupBMark ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpenBMark}
                      onMouseLeave={handlePopoverCloseBMark}
                    >
                      <img className="small-cover-icons"
                        alt="favourites"
                        src={bookMarkTicked}
                        onClick={toggleBookmark}
                      ></img>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={openPopupBMark}
                      anchorEl={anchorBMark}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      onClose={handlePopoverCloseBMark}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>Remove from Bookmarks</Typography>
                    </Popover>
                  </div>
                )}
                {!favTicked && (
                  <div>
                    <Typography
                      aria-owns={openPopupFav ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpenFav}
                      onMouseLeave={handlePopoverCloseFav}
                    >
                      <img className="small-cover-icons"
                        src={favorite}
                        onClick={toggleFavorite}
                      ></img>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={openPopupFav}
                      anchorEl={anchorFav}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      onClose={handlePopoverCloseFav}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>Add to favorites</Typography>
                    </Popover>
                  </div>
                )}
                {favTicked && (
                  <div>
                    <Typography
                      aria-owns={openPopupFav ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpenFav}
                      onMouseLeave={handlePopoverCloseFav}
                    >
                      <img className="small-cover-icons"
                        src={favoriteTicked}
                        onClick={toggleFavorite}
                      ></img>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={openPopupFav}
                      anchorEl={anchorFav}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      onClose={handlePopoverCloseFav}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>Remove from favorites</Typography>
                    </Popover>
                  </div>
                )}
              
          </div>
        </div>
        <div className="small-book-preface">
            <div className="header small_book_title">
              {book.title}
            </div>
            <div>
              <div className="author">{book.author}</div>
              <div className="body">
              <p>
                
                {book.synopsis}
              </p>
                
              </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallBook;
