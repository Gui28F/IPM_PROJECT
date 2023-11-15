// MyShelves.jsx

import React from "react";
import "./MyShelves.css";
import { users } from "./Data.jsx";
import { Link } from "react-router-dom";

import emptyShelf from "../assets/shelves/empty.svg";

const MyShelves = () => {
    const handleShelfClick = (id) => {
        console.log(`Shelf ${id} clicked`);
    };

    const userShelves = users[0].shelves;
    console.log(userShelves[1]);

    return (
        <div className="my-shelves-container">
            <h2 className="shelves-heading">My Shelves</h2>
            <div className="shelves-container">
                {userShelves.map((shelf) => (
                    <Link
                        key={shelf.id}
                        className="shelf"
                        onClick={() => handleShelfClick(shelf.id)}
                        to={`/shelves/${shelf.id}`}
                    >
                        <img
                            className="shelf-image"
                            src={emptyShelf}
                            alt={shelf.name}
                        ></img>
                        <h3 className="shelf_name">{shelf.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MyShelves;
