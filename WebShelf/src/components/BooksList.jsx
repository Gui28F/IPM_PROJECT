import React from "react";
import "./BooksList.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Modal, Typography,Popover} from "@mui/material";
const BooksList = (props) => {
    const [anchorDelete, setAnchorDel] = React.useState(null);
    const openPopupDel = Boolean(anchorDelete);
    const handlePopoverOpenDel= (event) => {
        setAnchorDel(event.currentTarget);
    };

    const handlePopoverCloseDel = () => {
        setAnchorDel(null);
    };

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
                                {props.deleteBtn &&
                                <div><Typography
                                  aria-owns={openPopupDel ? 'mouse-over-popover' : undefined}
                                  aria-haspopup="true"
                                  className={"delete-icon"}
                                  onMouseEnter={handlePopoverOpenDel}
                                  onMouseLeave={handlePopoverCloseDel}
                                  onClick={(e)=>handleDeleteBook(e,book.id)}
                                >
                                  <DeleteIcon/>
                                </Typography>
                                <Popover
                                  id="mouse-over-popover"
                                  sx={{
                                    pointerEvents: 'none',
                                  }}
                                  open={openPopupDel}
                                  anchorEl={anchorDelete}
                                  anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                  transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                  }}
                                  onClose={handlePopoverCloseDel}
                                  disableRestoreFocus
                                >
                                  <Typography sx={{ p: 1 }}>Delete</Typography>
                                </Popover>
                                </div>}
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