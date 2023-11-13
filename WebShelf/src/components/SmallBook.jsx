import "./SmallBook.css";
import { format } from 'react-string-format';
import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import bookMark from '../assets/book_mark.svg'
import bookMarkTicked from '../assets/book_mark_ticked.svg'
import favorite from '../assets/favorite.svg'
import favoriteTicked from '../assets/favorite_ticked.svg'
import starFilled from '../assets/star_filled.svg'
import starOutline from '../assets/star_outline.svg'
import {useNavigate} from "react-router-dom";


const SmallBook = (props) => {
    const [favTicked, setFavTicked] = useState(false);
    const [bookmarkTicked, setBookmarkTicked] = useState(false);
    const navigate = useNavigate();
    let book = props.book;
    const toggleFavorite = (event) => {
        event.preventDefault();
        setFavTicked((favTicked) => !favTicked);
    };

    const toggleBookmark = (event) => {
        event.preventDefault();
        setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
    };

    // function get_stars() {
    //     var rating = props.rating
    //     if (rating == null) {
    //         rating = 4
    //     }
    //     var temp = "";

    //     for (let index = 0; index < rating + 1; index++) {
    //         temp += format("<img src={{1}} className=\"{0}\"></img>", "star_rating", starFilled)
    //     }

    //     for (let index = 5; index > rating; index--) { //rating = 3
    //         temp += format("<img src={{1}} className=\"{0}\"></img>", "star_rating", starOutline)
    //     }

    //     var res = <div>
    //         {temp}
    //     </div>
    //     console.log(res)
    // }

    return (
        <div className="container-smallBook">
            <Link to={"/books/"+1} className="link-no-underline">
            <div className="mobile-layout" >
                <div className="book-cover">
                    <img className="book-top" src={book.imageUrl} alt="book-top" />
                    <img className="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                </div>

                <div className="preface">
                    {!bookmarkTicked && (<img className='book_mark_ico' src={bookMark} onClick={toggleBookmark}></img>)}
                    {bookmarkTicked && (<img className='book_mark_ico' src={bookMarkTicked} onClick={toggleBookmark}></img>)}
                    {!favTicked && (<img className='favorite_ico' src={favorite} onClick={toggleFavorite}></img>)}
                    {favTicked && (<img className='favorite_ico' src={favoriteTicked} onClick={toggleFavorite}></img>)}
                    <div className="content">
                        <div className="header">
                            <div className="samll_book_title">{book.title}</div>
                            <div className="icon">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className="author">{book.author}</div>
                        <div className="body">
                            <p>
                                A placeholder synopsis for the book {book.title} written by {book.author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default SmallBook;