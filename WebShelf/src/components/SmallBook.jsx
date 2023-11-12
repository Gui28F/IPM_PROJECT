import "./SmallBook.css";
import { format } from 'react-string-format';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookCover from '../assets/hp_cover.svg';
import bookMark from '../assets/book_mark.svg'
import bookMarkTicked from '../assets/book_mark_ticked.svg'
import favorite from '../assets/favorite.svg'
import favoriteTicked from '../assets/favorite_ticked.svg'
import starFilled from '../assets/star_filled.svg'
import starOutline from '../assets/star_outline.svg'


const SmallBook = (props) => {
    const location = useLocation();

    const [favTicked, setFavTicked] = useState(false);
    const [bookmarkTicked, setBookmarkTicked] = useState(false);
    

    const toggleFavorite = () => {
        setFavTicked((favTicked) => !favTicked);
    };

    const toggleBookmark = () => {
        setBookmarkTicked((bookmarkTicked) => !bookmarkTicked);
    };

    // function get_stars() {
    //     var rating = props.rating
    //     if (rating == null) {
    //         rating = 4
    //     }
    //     var temp;

    //     for (let index = 0; index < rating + 1; index++) {
    //         temp += format("<img src={starFilled} className=\"{0}\"></img>",star_rating)
    //     }

    //     for (let index = 5; index > rating; index--) { //rating = 3
    //         temp += format("<img src={starOutline} className=\"{0}\"></img>",star_rating)
    //     }


    //     var res = <div>
    //         {temp}
    //     </div>
    //     console.log(temp)
    //     return res
    // }

return (
    <div className="container-smallBook">
        <div className="mobile-layout">
            <div className="book-cover">
                <img className="book-top" src={bookCover} alt="book-top" />
                <img className="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
            </div>
            <div className="preface">

                {!bookmarkTicked && (<img className='book_mark_ico' src={bookMark} onClick={toggleBookmark}></img>)}
                {bookmarkTicked && (<img className='book_mark_ico' src={bookMarkTicked} onClick={toggleBookmark}></img>)}
                {!favTicked && (<img className='favorite_ico' src={favorite} onClick={toggleFavorite}></img>)}
                {favTicked && (<img className='favorite_ico' src={favoriteTicked} onClick={toggleFavorite}></img>)}
                {/* {get_stars()} */}
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