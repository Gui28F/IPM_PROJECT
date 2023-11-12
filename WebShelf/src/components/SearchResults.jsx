import {useLocation} from 'react-router-dom';
import "./SearchResults.css";
import SmallBook from "./SmallBook.jsx";

const SearchResults = ({route,navigate}) => {
    const location = useLocation();

    return(
    <div className='main-container-search-results'>
        <div>
            <h2 className=''>
                Search results for:&nbsp;
                <u>{location.state.bookName}</u>
            </h2>
        </div>
        <div className='main-book-container grid-container'>
            <SmallBook title={"Test title"} author={"J.K. Rowling"} className='grid-item'></SmallBook>
            <SmallBook className='grid-item'></SmallBook>
            <SmallBook className='grid-item'></SmallBook>
            <SmallBook className='grid-item'></SmallBook>
            <SmallBook className='grid-item'></SmallBook>
        </div>
    </div>
    
    )
}

export default SearchResults;