import "./SmallBook.css";
import { format } from 'react-string-format';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookMark from '../assets/book_mark.svg'
import bookMarkTicked from '../assets/book_mark_ticked.svg'
import favorite from '../assets/favorite.svg'
import favoriteTicked from '../assets/favorite_ticked.svg'
import starFilled from '../assets/star_filled.svg'
import starOutline from '../assets/star_outline.svg'
import {useNavigate} from "react-router-dom";


const SmallBook = (props) => {
    const location = useLocation();
    var book_cover = format('/IPM_PROJECT/src/assets/{0}_cover.svg',props.bname)
    const [favTicked, setFavTicked] = useState(false);
    const [bookmarkTicked, setBookmarkTicked] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = () => {
        setFavTicked((favTicked) => !favTicked);
    };

    const toggleBookmark = () => {
        setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
    };
    // bname:props.bnamebookName,title:props.titlebookAuthor,img_url:props.authorimageUrl
    const handleClickOnBook = event => { 
        navigate('/books/:id', {replace:true, state:{bid:1}});
    }

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
            <div className="mobile-layout" onClick={handleClickOnBook}>
                <div className="book-cover">
                    <img className="book-top" src={book_cover} alt="book-top" />
                    <img className="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                </div>
                <div className="preface">
                    {!bookmarkTicked && (<img className='book_mark_ico' src={bookMark} onClick={toggleBookmark}></img>)}
                    {bookmarkTicked && (<img className='book_mark_ico' src={bookMarkTicked} onClick={toggleBookmark}></img>)}
                    {!favTicked && (<img className='favorite_ico' src={favorite} onClick={toggleFavorite}></img>)}
                    {favTicked && (<img className='favorite_ico' src={favoriteTicked} onClick={toggleFavorite}></img>)}
                    <div className="content">
                        <div className="header">
                            <div className="title">{props.title}</div>
                            <div className="icon">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className="author">{props.author}</div>
                        <div className="body">
                            <p>
                                A placeholder synopsis for the book {props.title} written by {props.author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallBook;