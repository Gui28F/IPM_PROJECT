import React, { useEffect, useState } from "react";
import { users, books } from "./Data.jsx";
import { useParams } from "react-router-dom";
import BooksList from "./BooksList.jsx";
import "./Shelf.css";
import { Link } from "react-router-dom";
import emptyShelf from "../assets/shelves/empty.svg";
import ancientSpine1 from "../assets/shelves/book spine/ancient1.svg";
import ancientSpine2 from "../assets/shelves/book spine/ancient2.svg";

const Shelf = (props) => {
    const { id } = useParams();

    function getShelf() {
        const shelves = users[0].shelves;
        return shelves.find((shelf) => shelf.id === parseInt(id));
    }
    let shelf = getShelf();

    const [booksOnShelf, setBooksOnShelf] = useState([]);

    useEffect(() => {
        let booksIDs = users[0].shelves[shelf.id - 1].booksIDs;

        let booksOnShelf = [];

        booksIDs.forEach((bookID) => {
            let book = books.find((b) => b.id === bookID);
            if (book) {
                console.log("book found: " + book.id);
                booksOnShelf.push(book);
            }
        }, []);

        setBooksOnShelf(booksOnShelf);
    }, []);

    return (
        <div>
            <h1 className="shelf__header">{shelf.name}</h1>
            <div>
                <img src={emptyShelf} className="shelf__img" />
                {booksOnShelf.map((book, index) => (
                    <Link to={`/books/${book.id}`} key={index}>
                        <div key={index} className="shelf__book-spine">
                            <img src={ancientSpine1} />
                            <p className="shelf__book-title">{book.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {
                //<BooksList data={booksOnShelf} />
            }
        </div>
    );
};

export default Shelf;
