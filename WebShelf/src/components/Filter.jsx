import React, {useState} from 'react';
import "./Filter.css";
import {Rating} from "@mui/material";

const Filter = (props) => {
    const { data, onFilterChange, genre } = props;
    const sortedGenres = [...new Set(data.flatMap(book => book.genres))].sort();
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState(genre == null? []:[genre]);
    const handleGenreChange = (genre) => {
        // Check if the genre is already selected, if yes, remove it, else add it
        let new_genres =[]
        if (selectedGenres.includes(genre)) {
            new_genres =  selectedGenres.filter((g) => g !== genre);
        } else {
            new_genres =  [...selectedGenres, genre];
        }
        setSelectedGenres(new_genres);
        onFilterChange({ genres: new_genres, rating: selectedRating });
    };

    const isGenreSelected = (genre) => {
        return selectedGenres.includes(genre);
    };
    const handleRatingChange = (rating) => {
        // Check if the genre is already selected, if yes, remove it, else add it
        let new_ratings =[]
        if (selectedRating.includes(rating)) {
            new_ratings =  selectedRating.filter((g) => g !== rating);
        } else {
            new_ratings =  [...selectedRating, rating];
        }
        setSelectedRating(new_ratings);
        onFilterChange({ genres: selectedGenres, rating: new_ratings });
    };
    const isRatingSelectes = (rating) => {
        return selectedRating.includes(rating);
    };
    return (
        <div className="container">
            <hr/>
                <div className="card">
                    <header className="card-header">
                        <h6 className="title"> </h6>
                    </header>
                    <article className="card-group-item">
                        <h6 className="title">Genre </h6>

                        <div className="filter-content">
                            <div className="card-body">
                                <form>
                                    {sortedGenres.map((genre, index) => (
                                        <label  key={index} className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   checked={isGenreSelected(genre)}
                                                   onChange={() => {handleGenreChange(genre)}}/>
                                            <span className="form-check-label">
                                                            {genre}
                                            </span>
                                        </label>
                                    ))}
                                </form>

                            </div>
                        </div>
                    </article>
                    <article className="card-group-item">
                        <h6 className="title">Rating</h6>
                        <div className="filter-content">
                            <div className="card-body">
                                {[5, 4, 3, 2, 1].map((rating, index) => (
                                    <label  key={index} className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               checked={isRatingSelectes(rating)}
                                               onChange={() => {handleRatingChange(rating)}}/>
                                        <span className="form-check-label">
                                        <Rating
                                            name="half-rating-read"
                                            value={rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>

        </div>

    );
}
export default Filter;