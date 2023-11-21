// MyShelves.jsx

import React from "react";
import "./MyShelves.css";
import { users } from "./Data.jsx";
import { Link } from "react-router-dom";


const MyShelves = () => {
    const handleShelfClick = (id) => {
        console.log(`Shelf ${id} clicked`);
    };

    const userShelves = users[0].shelves;

    return (
        <div className="my-shelves-container">
            <h1 className="shelves-heading">My Shelves</h1>
            <div className="shelves-container">
                {userShelves.map((shelf) => (
                    <div className="shelf-indv-container">
                    <Link
                        key={shelf.id}
                        className="shelf"
                        onClick={() => handleShelfClick(shelf.id)}
                        to={`/shelves/${shelf.id}`}
                    >
                        <h3 className="shelf-name">{shelf.name}</h3>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyShelves;